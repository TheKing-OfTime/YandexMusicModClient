"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _b;
var _Conf_validator, _Conf_encryptionKey, _Conf_options, _Conf_defaultValues;
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const assert = require("assert");
const events_1 = require("events");
const dotProp = require("dot-prop");
const pkgUp = require("pkg-up");
const envPaths = require("env-paths");
const atomically = require("atomically");
const ajv_1 = require("ajv");
const ajv_formats_1 = require("ajv-formats");
const debounceFn = require("debounce-fn");
const semver = require("semver");
const onetime = require("onetime");
const encryptionAlgorithm = 'aes-256-cbc';
const createPlainObject = () => {
    return Object.create(null);
};
const isExist = (data) => {
    return data !== undefined && data !== null;
};
let parentDir = '';
try {
    // Prevent caching of this module so module.parent is always accurate.
    // Note: This trick won't work with ESM or inside a webworker
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete require.cache[__filename];
    parentDir = path.dirname((_b = (_a = module.parent) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : '.');
}
catch (_c) { }
const checkValueType = (key, value) => {
    const nonJsonTypes = new Set([
        'undefined',
        'symbol',
        'function'
    ]);
    const type = typeof value;
    if (nonJsonTypes.has(type)) {
        throw new TypeError(`Setting a value of type \`${type}\` for key \`${key}\` is not allowed as it's not supported by JSON`);
    }
};
const INTERNAL_KEY = '__internal__';
const MIGRATION_KEY = `${INTERNAL_KEY}.migrations.version`;
class Conf {
    constructor(partialOptions = {}) {
        var _a;
        _Conf_validator.set(this, void 0);
        _Conf_encryptionKey.set(this, void 0);
        _Conf_options.set(this, void 0);
        _Conf_defaultValues.set(this, {});
        this._deserialize = value => JSON.parse(value);
        this._serialize = value => JSON.stringify(value, undefined, '\t');
        const options = {
            configName: 'config',
            fileExtension: 'json',
            projectSuffix: 'nodejs',
            clearInvalidConfig: false,
            accessPropertiesByDotNotation: true,
            configFileMode: 0o666,
            ...partialOptions
        };
        const getPackageData = onetime(() => {
            const packagePath = pkgUp.sync({ cwd: parentDir });
            // Can't use `require` because of Webpack being annoying:
            // https://github.com/webpack/webpack/issues/196
            const packageData = packagePath && JSON.parse(fs.readFileSync(packagePath, 'utf8'));
            return packageData !== null && packageData !== void 0 ? packageData : {};
        });
        if (!options.cwd) {
            if (!options.projectName) {
                options.projectName = getPackageData().name;
            }
            if (!options.projectName) {
                throw new Error('Project name could not be inferred. Please specify the `projectName` option.');
            }
            options.cwd = envPaths(options.projectName, { suffix: options.projectSuffix }).config;
        }
        __classPrivateFieldSet(this, _Conf_options, options, "f");
        if (options.schema) {
            if (typeof options.schema !== 'object') {
                throw new TypeError('The `schema` option must be an object.');
            }
            const ajv = new ajv_1.default({
                allErrors: true,
                useDefaults: true
            });
            (0, ajv_formats_1.default)(ajv);
            const schema = {
                type: 'object',
                properties: options.schema
            };
            __classPrivateFieldSet(this, _Conf_validator, ajv.compile(schema), "f");
            for (const [key, value] of Object.entries(options.schema)) {
                if (value === null || value === void 0 ? void 0 : value.default) {
                    __classPrivateFieldGet(this, _Conf_defaultValues, "f")[key] = value.default;
                }
            }
        }
        if (options.defaults) {
            __classPrivateFieldSet(this, _Conf_defaultValues, {
                ...__classPrivateFieldGet(this, _Conf_defaultValues, "f"),
                ...options.defaults
            }, "f");
        }
        if (options.serialize) {
            this._serialize = options.serialize;
        }
        if (options.deserialize) {
            this._deserialize = options.deserialize;
        }
        this.events = new events_1.EventEmitter();
        __classPrivateFieldSet(this, _Conf_encryptionKey, options.encryptionKey, "f");
        const fileExtension = options.fileExtension ? `.${options.fileExtension}` : '';
        this.path = path.resolve(options.cwd, `${(_a = options.configName) !== null && _a !== void 0 ? _a : 'config'}${fileExtension}`);
        const fileStore = this.store;
        const store = Object.assign(createPlainObject(), options.defaults, fileStore);
        this._validate(store);
        try {
            assert.deepEqual(fileStore, store);
        }
        catch (_b) {
            this.store = store;
        }
        if (options.watch) {
            this._watch();
        }
        if (options.migrations) {
            if (!options.projectVersion) {
                options.projectVersion = getPackageData().version;
            }
            if (!options.projectVersion) {
                throw new Error('Project version could not be inferred. Please specify the `projectVersion` option.');
            }
            this._migrate(options.migrations, options.projectVersion, options.beforeEachMigration);
        }
    }
    get(key, defaultValue) {
        if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            return this._get(key, defaultValue);
        }
        const { store } = this;
        return key in store ? store[key] : defaultValue;
    }
    set(key, value) {
        if (typeof key !== 'string' && typeof key !== 'object') {
            throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
        }
        if (typeof key !== 'object' && value === undefined) {
            throw new TypeError('Use `delete()` to clear values');
        }
        if (this._containsReservedKey(key)) {
            throw new TypeError(`Please don't use the ${INTERNAL_KEY} key, as it's used to manage this module internal operations.`);
        }
        const { store } = this;
        const set = (key, value) => {
            checkValueType(key, value);
            if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
                dotProp.set(store, key, value);
            }
            else {
                store[key] = value;
            }
        };
        if (typeof key === 'object') {
            const object = key;
            for (const [key, value] of Object.entries(object)) {
                set(key, value);
            }
        }
        else {
            set(key, value);
        }
        this.store = store;
    }
    /**
    Check if an item exists.

    @param key - The key of the item to check.
    */
    has(key) {
        if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            return dotProp.has(this.store, key);
        }
        return key in this.store;
    }
    /**
    Reset items to their default values, as defined by the `defaults` or `schema` option.

    @see `clear()` to reset all items.

    @param keys - The keys of the items to reset.
    */
    reset(...keys) {
        for (const key of keys) {
            if (isExist(__classPrivateFieldGet(this, _Conf_defaultValues, "f")[key])) {
                this.set(key, __classPrivateFieldGet(this, _Conf_defaultValues, "f")[key]);
            }
        }
    }
    /**
    Delete an item.

    @param key - The key of the item to delete.
    */
    delete(key) {
        const { store } = this;
        if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            dotProp.delete(store, key);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete store[key];
        }
        this.store = store;
    }
    /**
    Delete all items.

    This resets known items to their default values, if defined by the `defaults` or `schema` option.
    */
    clear() {
        this.store = createPlainObject();
        for (const key of Object.keys(__classPrivateFieldGet(this, _Conf_defaultValues, "f"))) {
            this.reset(key);
        }
    }
    /**
    Watches the given `key`, calling `callback` on any changes.

    @param key - The key wo watch.
    @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
    @returns A function, that when called, will unsubscribe.
    */
    onDidChange(key, callback) {
        if (typeof key !== 'string') {
            throw new TypeError(`Expected \`key\` to be of type \`string\`, got ${typeof key}`);
        }
        if (typeof callback !== 'function') {
            throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof callback}`);
        }
        return this._handleChange(() => this.get(key), callback);
    }
    /**
    Watches the whole config object, calling `callback` on any changes.

    @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
    @returns A function, that when called, will unsubscribe.
    */
    onDidAnyChange(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof callback}`);
        }
        return this._handleChange(() => this.store, callback);
    }
    get size() {
        return Object.keys(this.store).length;
    }
    get store() {
        try {
            const data = fs.readFileSync(this.path, __classPrivateFieldGet(this, _Conf_encryptionKey, "f") ? null : 'utf8');
            const dataString = this._encryptData(data);
            const deserializedData = this._deserialize(dataString);
            this._validate(deserializedData);
            return Object.assign(createPlainObject(), deserializedData);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === 'ENOENT') {
                this._ensureDirectory();
                return createPlainObject();
            }
            if (__classPrivateFieldGet(this, _Conf_options, "f").clearInvalidConfig && error.name === 'SyntaxError') {
                return createPlainObject();
            }
            throw error;
        }
    }
    set store(value) {
        this._ensureDirectory();
        this._validate(value);
        this._write(value);
        this.events.emit('change');
    }
    *[(_Conf_validator = new WeakMap(), _Conf_encryptionKey = new WeakMap(), _Conf_options = new WeakMap(), _Conf_defaultValues = new WeakMap(), Symbol.iterator)]() {
        for (const [key, value] of Object.entries(this.store)) {
            yield [key, value];
        }
    }
    _encryptData(data) {
        if (!__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
            return data.toString();
        }
        try {
            // Check if an initialization vector has been used to encrypt the data
            if (__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
                try {
                    if (data.slice(16, 17).toString() === ':') {
                        const initializationVector = data.slice(0, 16);
                        const password = crypto.pbkdf2Sync(__classPrivateFieldGet(this, _Conf_encryptionKey, "f"), initializationVector.toString(), 10000, 32, 'sha512');
                        const decipher = crypto.createDecipheriv(encryptionAlgorithm, password, initializationVector);
                        data = Buffer.concat([decipher.update(Buffer.from(data.slice(17))), decipher.final()]).toString('utf8');
                    }
                    else {
                        // TODO: Remove this in the next major version.
                        const decipher = crypto.createDecipher(encryptionAlgorithm, __classPrivateFieldGet(this, _Conf_encryptionKey, "f"));
                        data = Buffer.concat([decipher.update(Buffer.from(data)), decipher.final()]).toString('utf8');
                    }
                }
                catch (_a) { }
            }
        }
        catch (_b) { }
        return data.toString();
    }
    _handleChange(getter, callback) {
        let currentValue = getter();
        const onChange = () => {
            const oldValue = currentValue;
            const newValue = getter();
            if ((0, util_1.isDeepStrictEqual)(newValue, oldValue)) {
                return;
            }
            currentValue = newValue;
            callback.call(this, newValue, oldValue);
        };
        this.events.on('change', onChange);
        return () => this.events.removeListener('change', onChange);
    }
    _validate(data) {
        if (!__classPrivateFieldGet(this, _Conf_validator, "f")) {
            return;
        }
        const valid = __classPrivateFieldGet(this, _Conf_validator, "f").call(this, data);
        if (valid || !__classPrivateFieldGet(this, _Conf_validator, "f").errors) {
            return;
        }
        const errors = __classPrivateFieldGet(this, _Conf_validator, "f").errors
            .map(({ instancePath, message = '' }) => `\`${instancePath.slice(1)}\` ${message}`);
        throw new Error('Config schema violation: ' + errors.join('; '));
    }
    _ensureDirectory() {
        // Ensure the directory exists as it could have been deleted in the meantime.
        fs.mkdirSync(path.dirname(this.path), { recursive: true });
    }
    _write(value) {
        let data = this._serialize(value);
        if (__classPrivateFieldGet(this, _Conf_encryptionKey, "f")) {
            const initializationVector = crypto.randomBytes(16);
            const password = crypto.pbkdf2Sync(__classPrivateFieldGet(this, _Conf_encryptionKey, "f"), initializationVector.toString(), 10000, 32, 'sha512');
            const cipher = crypto.createCipheriv(encryptionAlgorithm, password, initializationVector);
            data = Buffer.concat([initializationVector, Buffer.from(':'), cipher.update(Buffer.from(data)), cipher.final()]);
        }
        // Temporary workaround for Conf being packaged in a Ubuntu Snap app.
        // See https://github.com/sindresorhus/conf/pull/82
        if (process.env.SNAP) {
            fs.writeFileSync(this.path, data, { mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode });
        }
        else {
            try {
                atomically.writeFileSync(this.path, data, { mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode });
            }
            catch (error) {
                // Fix for https://github.com/sindresorhus/electron-store/issues/106
                // Sometimes on Windows, we will get an EXDEV error when atomic writing
                // (even though to the same directory), so we fall back to non atomic write
                if ((error === null || error === void 0 ? void 0 : error.code) === 'EXDEV') {
                    fs.writeFileSync(this.path, data, { mode: __classPrivateFieldGet(this, _Conf_options, "f").configFileMode });
                    return;
                }
                throw error;
            }
        }
    }
    _watch() {
        this._ensureDirectory();
        if (!fs.existsSync(this.path)) {
            this._write(createPlainObject());
        }
        if (process.platform === 'win32') {
            fs.watch(this.path, { persistent: false }, debounceFn(() => {
                // On Linux and Windows, writing to the config file emits a `rename` event, so we skip checking the event type.
                this.events.emit('change');
            }, { wait: 100 }));
        }
        else {
            fs.watchFile(this.path, { persistent: false }, debounceFn(() => {
                this.events.emit('change');
            }, { wait: 5000 }));
        }
    }
    _migrate(migrations, versionToMigrate, beforeEachMigration) {
        let previousMigratedVersion = this._get(MIGRATION_KEY, '0.0.0');
        const newerVersions = Object.keys(migrations)
            .filter(candidateVersion => this._shouldPerformMigration(candidateVersion, previousMigratedVersion, versionToMigrate));
        let storeBackup = { ...this.store };
        for (const version of newerVersions) {
            try {
                if (beforeEachMigration) {
                    beforeEachMigration(this, {
                        fromVersion: previousMigratedVersion,
                        toVersion: version,
                        finalVersion: versionToMigrate,
                        versions: newerVersions
                    });
                }
                const migration = migrations[version];
                migration(this);
                this._set(MIGRATION_KEY, version);
                previousMigratedVersion = version;
                storeBackup = { ...this.store };
            }
            catch (error) {
                this.store = storeBackup;
                throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${error}`);
            }
        }
        if (this._isVersionInRangeFormat(previousMigratedVersion) || !semver.eq(previousMigratedVersion, versionToMigrate)) {
            this._set(MIGRATION_KEY, versionToMigrate);
        }
    }
    _containsReservedKey(key) {
        if (typeof key === 'object') {
            const firsKey = Object.keys(key)[0];
            if (firsKey === INTERNAL_KEY) {
                return true;
            }
        }
        if (typeof key !== 'string') {
            return false;
        }
        if (__classPrivateFieldGet(this, _Conf_options, "f").accessPropertiesByDotNotation) {
            if (key.startsWith(`${INTERNAL_KEY}.`)) {
                return true;
            }
            return false;
        }
        return false;
    }
    _isVersionInRangeFormat(version) {
        return semver.clean(version) === null;
    }
    _shouldPerformMigration(candidateVersion, previousMigratedVersion, versionToMigrate) {
        if (this._isVersionInRangeFormat(candidateVersion)) {
            if (previousMigratedVersion !== '0.0.0' && semver.satisfies(previousMigratedVersion, candidateVersion)) {
                return false;
            }
            return semver.satisfies(versionToMigrate, candidateVersion);
        }
        if (semver.lte(candidateVersion, previousMigratedVersion)) {
            return false;
        }
        if (semver.gt(candidateVersion, versionToMigrate)) {
            return false;
        }
        return true;
    }
    _get(key, defaultValue) {
        return dotProp.get(this.store, key, defaultValue);
    }
    _set(key, value) {
        const { store } = this;
        dotProp.set(store, key, value);
        this.store = store;
    }
}
exports.default = Conf;
// For CommonJS default export support
module.exports = Conf;
module.exports.default = Conf;

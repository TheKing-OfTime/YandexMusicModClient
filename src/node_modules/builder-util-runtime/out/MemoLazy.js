"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoLazy = void 0;
class MemoLazy {
    constructor(selector, creator) {
        this.selector = selector;
        this.creator = creator;
        this.selected = undefined;
        this._value = undefined;
    }
    get hasValue() {
        return this._value !== undefined;
    }
    get value() {
        const selected = this.selector();
        if (this._value !== undefined && equals(this.selected, selected)) {
            // value exists and selected hasn't changed, so return the cached value
            return this._value;
        }
        this.selected = selected;
        const result = this.creator(selected);
        this.value = result;
        return result;
    }
    set value(value) {
        this._value = value;
    }
}
exports.MemoLazy = MemoLazy;
function equals(firstValue, secondValue) {
    const isFirstObject = typeof firstValue === "object" && firstValue !== null;
    const isSecondObject = typeof secondValue === "object" && secondValue !== null;
    // do a shallow comparison of objects, arrays etc.
    if (isFirstObject && isSecondObject) {
        const keys1 = Object.keys(firstValue);
        const keys2 = Object.keys(secondValue);
        return keys1.length === keys2.length && keys1.every((key) => equals(firstValue[key], secondValue[key]));
    }
    // otherwise just compare the values directly
    return firstValue === secondValue;
}
//# sourceMappingURL=MemoLazy.js.map
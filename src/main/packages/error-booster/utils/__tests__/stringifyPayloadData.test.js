"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const config_js_1 = require("../../../../config.js");
const stringifyPayloadData_js_1 = require("../stringifyPayloadData.js");
const user = {
    region: 'region',
    yandexId: 'yandexId',
    loggedIn: true
};
const payload = {
    message: 'message',
    level: 'error',
    stack: 'stack',
    sourceMethod: 'sourceMethod',
    source: 'source',
    page: 'page',
    additional: {
        test: 'test'
    }
};
const service = {
    project: 'project',
    env: 'env',
    platform: 'platform',
    version: 'version'
};
(0, globals_1.describe)('stringifyPayloadData', () => {
    (0, globals_1.test)('should stringify payload', () => {
        const dateTime = Number(new Date().getTime());
        (0, globals_1.expect)((0, stringifyPayloadData_js_1.stringifyPayloadData)({ user, service, payload, dateTime })).toBe(`/path=${config_js_1.config.errorBooster.clickErrorCounter}/vars=-region=region,-yandexid=yandexId,-loggedin=true,-project=project,-env=env,-platform=platform,-version=version,-page=page,-msg=message,-level=error,-stack=stack,-sourceMethod=sourceMethod,-source=source,-additional=%7B%22test%22%3A%22test%22%7D/cts=${dateTime}/*`);
    });
});

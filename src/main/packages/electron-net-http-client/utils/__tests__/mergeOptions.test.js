"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const mergeOptions_js_1 = require("../mergeOptions.js");
(0, globals_1.describe)('mergeOptions', () => {
    (0, globals_1.test)('should merge headers', () => {
        const original = {
            headers: {
                a: 'b'
            }
        };
        const mergable = {
            headers: {
                a: 'c',
                b: 'd'
            }
        };
        const result = {
            headers: {
                a: 'c',
                b: 'd'
            }
        };
        (0, globals_1.expect)((0, mergeOptions_js_1.mergeOptions)(original, mergable)).toEqual(result);
    });
    (0, globals_1.test)('should merge retry policy', () => {
        const original = {
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [1, 2, 3]
                    },
                    2: {
                        attempts: [4, 5, 6]
                    }
                },
                totalRequestsLimit: 1
            }
        };
        const mergable = {
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [3, 2, 1]
                    },
                    3: {
                        attempts: [7, 8, 9]
                    }
                },
                totalRequestsLimit: 2
            }
        };
        const result = {
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [3, 2, 1]
                    },
                    2: {
                        attempts: [4, 5, 6]
                    },
                    3: {
                        attempts: [7, 8, 9]
                    }
                },
                totalRequestsLimit: 2
            }
        };
        (0, globals_1.expect)((0, mergeOptions_js_1.mergeOptions)(original, mergable)).toEqual(result);
    });
    (0, globals_1.test)('should merge all properties', () => {
        const original = {
            timeout: 100,
            headers: {
                a: 'b'
            },
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [1, 2, 3]
                    },
                    2: {
                        attempts: [4, 5, 6]
                    }
                },
                totalRequestsLimit: 1
            }
        };
        const mergable = {
            timeout: 200,
            headers: {
                a: 'c',
                b: 'd'
            },
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [3, 2, 1]
                    },
                    3: {
                        attempts: [7, 8, 9]
                    }
                },
                totalRequestsLimit: 2
            }
        };
        const result = {
            timeout: 200,
            headers: {
                a: 'c',
                b: 'd'
            },
            retryPolicy: {
                statusCodes: {
                    1: {
                        attempts: [3, 2, 1]
                    },
                    2: {
                        attempts: [4, 5, 6]
                    },
                    3: {
                        attempts: [7, 8, 9]
                    }
                },
                totalRequestsLimit: 2
            }
        };
        (0, globals_1.expect)((0, mergeOptions_js_1.mergeOptions)(original, mergable)).toEqual(result);
    });
});

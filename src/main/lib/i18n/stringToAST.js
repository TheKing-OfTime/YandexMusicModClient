"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToAST = stringToAST;
const icu_messageformat_parser_1 = require("@formatjs/icu-messageformat-parser");
function stringToAST(text) {
    if (!text) {
        return [];
    }
    const trimmedText = text.trim();
    try {
        return (0, icu_messageformat_parser_1.parse)(trimmedText);
    }
    catch {
        return [
            {
                type: 0,
                value: trimmedText
            }
        ];
    }
}

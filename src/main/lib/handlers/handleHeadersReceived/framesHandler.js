"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.framesHandler = framesHandler;
const FRAME_ANCESTORS = "frame-ancestors";
const ALLOWED_SOURCE = "music-application:";
const getFrameAncestorsFromCsp = (csp) => {
    const directives = csp.split(";");
    const frameAncestors = directives.find((directive) =>
        directive.trim().startsWith(FRAME_ANCESTORS),
    );
    return frameAncestors?.trim() ?? null;
};
const handleCsp = (originalCsp) => {
    const originalFrameAncestors = getFrameAncestorsFromCsp(originalCsp);
    if (!originalFrameAncestors) {
        return originalCsp;
    }
    const [, ...originalFrameAncestorsSources] =
        originalFrameAncestors.split(" ");
    if (originalFrameAncestors.includes(ALLOWED_SOURCE)) {
        return originalCsp;
    }
    const frameAncestorsSources = [
        ALLOWED_SOURCE,
        ...originalFrameAncestorsSources.filter(
            (source) => source !== "'none'",
        ),
    ];
    return originalCsp.replace(
        originalFrameAncestors,
        `${FRAME_ANCESTORS} ${frameAncestorsSources.join(" ")}`,
    );
};
function framesHandler(responseHeaders, details) {
    const newResponseHeaders = structuredClone(responseHeaders);
    if (details.resourceType !== "subFrame") {
        return newResponseHeaders;
    }
    delete newResponseHeaders["x-frame-options"];
    delete newResponseHeaders["X-Frame-Options"];
    const originalCsp =
        newResponseHeaders["content-security-policy"] ??
        newResponseHeaders["Content-Security-Policy"];
    if (!originalCsp?.length) {
        return newResponseHeaders;
    }
    newResponseHeaders["content-security-policy"] = originalCsp.map(handleCsp);
    delete newResponseHeaders["Content-Security-Policy"];
    return newResponseHeaders;
}

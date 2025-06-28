"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = generateSignature;
const crypto = require("crypto");
/**
 * Generates a signature for Last.fm API calls according to their authentication requirements
 *
 * @see https://www.last.fm/api/desktopauth#_6-sign-your-calls
 *
 * @param params The parameters to include in the signature
 * @param sharedSecret The shared secret from Last.fm
 * @returns MD5 hash signature
 */
function generateSignature(params, sharedSecret) {
  // Filter out format, callback, and api_sig parameters
  const sortedParams = Array.from(params.entries())
    .filter(([key]) => !["format", "callback", "api_sig"].includes(key))
    .sort(([a], [b]) => a.localeCompare(b));
  // Create signature string: <name><value> for each param + shared secret
  const signatureString =
    sortedParams.map(([key, value]) => `${key}${value}`).join("") +
    sharedSecret;
  // Generate MD5 hash
  return crypto.createHash("md5").update(signatureString).digest("hex");
}

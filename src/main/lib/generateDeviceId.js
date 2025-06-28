"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDeviceId = void 0;
const node_crypto_1 = require("node:crypto");
const node_os_1 = require("node:os");
const UNIVERSAL_DIGIT_REGEX = /[014589cd]/;
const ZERO_MAC_REGEX = /(?:[0]{1,2}[:-]){5}[0]{1,2}/;
const isGloballyUniqueMacAddress = (mac) => {
  const digit = mac[1];
  if (!digit) {
    return false;
  }
  return UNIVERSAL_DIGIT_REGEX.test(digit.toLowerCase());
};
const getMac = () => {
  for (const config of Object.values((0, node_os_1.networkInterfaces)())) {
    if (!config) {
      continue;
    }
    for (const iface of config) {
      if (ZERO_MAC_REGEX.test(iface.mac)) {
        continue;
      }
      if (isGloballyUniqueMacAddress(iface.mac)) {
        return iface.mac;
      }
    }
  }
  return;
};
const generateDeviceId = () => {
  const data = [
    (0, node_os_1.hostname)(),
    (0, node_os_1.platform)(),
    (0, node_os_1.machine)(),
    (0, node_os_1.totalmem)(),
    getMac(),
  ].join();
  return (0, node_crypto_1.createHash)("sha256").update(data).digest("hex");
};
exports.generateDeviceId = generateDeviceId;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceHostname = exports.getDeviceInfo =
  exports.logSystemMetrics =
  exports.logHardwareInfo =
  exports.logSoftwareInfo =
  exports.getMaxDisplayFrameRateRefresh =
  exports.updateMaxDisplayFrameRateRefresh =
  exports.devicePlatform =
    void 0;
const electron_1 = require("electron");
const node_os_1 = require("node:os");
const promises_1 = require("node:fs/promises");
const node_crypto_1 = require("node:crypto");
const node_path_1 = require("node:path");
const config_js_1 = require("../config.js");
const Logger_js_1 = require("../packages/logger/Logger.js");
const store_js_1 = require("./store.js");
const store_js_2 = require("../types/store.js");
const deviceInfoLogger = new Logger_js_1.Logger("DeviceInfo");
exports.devicePlatform = (0, node_os_1.platform)();
const toMB = (bytes) => {
  return Math.round(bytes / 1024 / 1024);
};
const getAppMetrics = () => {
  const metrics = electron_1.app.getAppMetrics();
  const { cpu, memory } = metrics[0] ?? {};
  const { workingSetSize, peakWorkingSetSize } = memory ?? {};
  return {
    cpu,
    memory: {
      workingSetSizeMB: workingSetSize ? toMB(workingSetSize) : 0,
      peakWorkingSetSizeMB: peakWorkingSetSize ? toMB(peakWorkingSetSize) : 0,
    },
  };
};
const getCpu = () => {
  const cpu = (0, node_os_1.cpus)();
  return cpu[0]?.model;
};

const updateMaxDisplayFrameRateRefresh = () => {
  deviceInfoLogger.info("Getting max refresh rate");
  const displays = electron_1.screen?.getAllDisplays() ?? [
    electron_1.screen?.getPrimaryDisplay(),
  ];
  if (!displays) return 0;
  let maxFrameRate = 0;
  displays.forEach((display) => {
    if (maxFrameRate < display.displayFrequency)
      maxFrameRate = display.displayFrequency;
  });
  store_js_1.setDisplayMaxFps(maxFrameRate);
  deviceInfoLogger.info("Max FPS:", maxFrameRate);
  return maxFrameRate;
};

exports.updateMaxDisplayFrameRateRefresh = updateMaxDisplayFrameRateRefresh;

const getLanguage = () => {
  const locale = electron_1.app.getLocale();
  const countryCode = electron_1.app.getLocaleCountryCode();
  const preferredSystemLanguages = electron_1.app.getPreferredSystemLanguages();
  return {
    locale,
    countryCode,
    preferredSystemLanguages,
  };
};
const getMemory = () => {
  return {
    freeMB: toMB((0, node_os_1.freemem)()),
    totalMB: toMB((0, node_os_1.totalmem)()),
  };
};
const getStorage = async () => {
  const [root, folder] = (0, node_path_1.normalize)(
    electron_1.app.getAppPath(),
  ).split(node_path_1.sep);
  const rootFolder = [root, folder].join(node_path_1.sep);
  const { bfree, blocks, bsize } = await (0, promises_1.statfs)(rootFolder);
  return {
    freeMB: toMB(bfree * bsize),
    totalMB: toMB(blocks * bsize),
  };
};
const getOs = () => {
  return {
    type: (0, node_os_1.type)(),
    release: (0, node_os_1.release)(),
    arch: (0, node_os_1.arch)(),
    version: (0, node_os_1.version)(),
    platform: exports.devicePlatform,
    machine: (0, node_os_1.machine)(),
  };
};
const getRevision = (info) => {
  return (0, node_crypto_1.createHash)("md5")
    .update(JSON.stringify(info))
    .digest("hex");
};
const getSoftwareInfo = () => {
  return {
    application: {
      version: electron_1.app.getVersion(),
      build: `${config_js_1.config.buildInfo.VERSION}/${config_js_1.config.buildInfo.BRANCH}`,
    },
    language: getLanguage(),
    os: getOs(),
  };
};
const getHardwareInfo = async (params) => {
  const hardwareInfo = {};
  if (params?.withCpu) {
    hardwareInfo.cpu = getCpu();
  }
  return hardwareInfo;
};
const getSystemMetrics = async (params) => {
  const systemMetrics = {
    memory: getMemory(),
    storage: await getStorage(),
  };
  if (params?.withAppMetrics) {
    systemMetrics.appMetrics = getAppMetrics();
  }
  return systemMetrics;
};
const printObject = (info) => {
  deviceInfoLogger.info(JSON.stringify(info, null, 2));
};
const logSoftwareInfo = () => {
  try {
    const softwareInfo = getSoftwareInfo();
    if (
      (0, store_js_1.isRevisionChanged)(
        store_js_2.StoreKeys.DEVICE_SOFTWARE_REVISION,
        getRevision(softwareInfo),
      )
    ) {
      printObject(softwareInfo);
    }
  } catch (error) {
    deviceInfoLogger.error("Cannot get software info", error);
  }
};
exports.logSoftwareInfo = logSoftwareInfo;
const logHardwareInfo = async () => {
  try {
    const cpuInfo = await getHardwareInfo({
      withCpu: true,
    });
    if (
      (0, store_js_1.isRevisionChanged)(
        store_js_2.StoreKeys.DEVICE_CPU_REVISION,
        getRevision(cpuInfo),
      )
    ) {
      printObject(cpuInfo);
    }
  } catch (error) {
    deviceInfoLogger.error("Cannot get hardware info", error);
  }
};
exports.logHardwareInfo = logHardwareInfo;
const logSystemMetrics = async (withAppMetrics = false) => {
  try {
    const systemMetrics = await getSystemMetrics({
      withAppMetrics,
    });
    printObject(systemMetrics);
  } catch (error) {
    deviceInfoLogger.error("Cannot get system metrics", error);
  }
};
exports.logSystemMetrics = logSystemMetrics;
const getDeviceInfo = () => {
  return {
    manufacturer: "",
    model: "",
    uuid: (0, store_js_1.getUuid)(),
    os: exports.devicePlatform,
    os_version: "",
    device_id: (0, store_js_1.getDeviceId)(),
    clid: 0,
  };
};
exports.getDeviceInfo = getDeviceInfo;
const getDeviceHostname = () => {
    return (0, node_os_1.hostname)().slice(0, 50).trim();
};
exports.getDeviceHostname = getDeviceHostname;

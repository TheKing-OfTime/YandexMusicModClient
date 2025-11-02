"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPayloadData = void 0;
const config_js_1 = require("../../../config.js");
const stringifyPayloadData = ({ user, service, payload, dateTime }) => {
  const data = {
    "-region": user?.region,
    "-yandexid": user?.yandexId,
    "-loggedin": user?.loggedIn,
    "-project": service.project,
    "-env": service.env,
    "-platform": service.platform,
    "-version": service.version,
    "-page": payload.page,
    "-msg": payload.message,
    "-level": payload.level,
    "-stack": payload.stack,
    "-sourceMethod": payload.sourceMethod,
    "-source": payload.source,
    "-additional": payload.additional,
  };
  const vars = Object.keys(data)
    .map((key) => {
      let chunk;
      if (typeof data[key] === "object") {
        try {
          chunk = JSON.stringify(data[key]);
        } catch {
          chunk = "[Value can not be stringified]";
        }
      } else {
        chunk = String(data[key]);
      }
      return key + "=" + encodeURIComponent(chunk).replace(/\*/g, "%2A");
    })
    .join(",");
  return `/path=${config_js_1.config.app.errorBooster.clickErrorCounter}/vars=${vars}/cts=${dateTime}/*`;
};
exports.stringifyPayloadData = stringifyPayloadData;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomTitleBar = void 0;
const node_url_1 = __importDefault(require("node:url"));
const hostnamePatterns_js_1 = require("../constants/hostnamePatterns.js");
const formatters_js_1 = require("./i18n/formatters.js");
const isAllowed = (hostname) => {
  return hostnamePatterns_js_1.passportYandexHostnamePattern.test(hostname);
};
const styleTemplate = () => {
  return `
        #ym-title-bar {
            display: flex;
            position: absolute;
            inset-block-start: 0;
            inset-inline-end: 0;
            inset-inline-start: 0;

            z-index: 9999;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;

            width: 100%;
            height: 32px;
            user-select: none;
            -webkit-app-region: drag;

            overflow: hidden;
        }

        #ym-close-button {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin: 0;
            outline: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
            padding: 0;

            width: 46px;
            height: 32px;
            -webkit-app-region: no-drag;

            &:hover {
                background-color: #f23f42;
            }
        }
    `;
};
const closeIconTemplate = () => {
  return `
        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 5.70801L0.854492 9.85352C0.756836 9.95117 0.639648 10 0.50293 10C0.359701 10 0.239258 9.9528 0.141602 9.8584C0.0472005 9.76074 0 9.6403 0 9.49707C0 9.36035 0.0488281 9.24316 0.146484 9.14551L4.29199 5L0.146484 0.854492C0.0488281 0.756836 0 0.638021 0 0.498047C0 0.429688 0.0130208 0.364583 0.0390625 0.302734C0.0651042 0.240885 0.100911 0.188802 0.146484 0.146484C0.192057 0.100911 0.245768 0.0651042 0.307617 0.0390625C0.369466 0.0130208 0.43457 0 0.50293 0C0.639648 0 0.756836 0.0488281 0.854492 0.146484L5 4.29199L9.14551 0.146484C9.24316 0.0488281 9.36198 0 9.50195 0C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.100911 9.85352 0.146484C9.89909 0.192057 9.9349 0.245768 9.96094 0.307617C9.98698 0.366211 10 0.429688 10 0.498047C10 0.638021 9.95117 0.756836 9.85352 0.854492L5.70801 5L9.85352 9.14551C9.95117 9.24316 10 9.36035 10 9.49707C10 9.56543 9.98698 9.63053 9.96094 9.69238C9.9349 9.75423 9.89909 9.80794 9.85352 9.85352C9.8112 9.89909 9.75911 9.9349 9.69727 9.96094C9.63542 9.98698 9.57031 10 9.50195 10C9.36198 10 9.24316 9.95117 9.14551 9.85352L5 5.70801Z"
                fill="white"
            />
        </svg>
    `;
};
const render = () => {
    const ariaLabel = (0, formatters_js_1.formatMessage)({ id: 'windows-menu.close' });
  return `
        const style = document.createElement('style');
        style.innerHTML = \`${styleTemplate()}\`;
        document.head.appendChild(style);

        const button = document.createElement('button');
        button.id = 'ym-close-button';
        button.type = 'button';
        button.ariaLabel = \`${ariaLabel}\`;
        button.innerHTML = \`${closeIconTemplate()}\`;
        button.onclick = () => {
            window.desktopEvents.send('WINDOW_CLOSE');
        };

        const container = document.createElement('div');
        container.id = 'ym-title-bar';
        container.appendChild(button);

        document.body.appendChild(container);
    `;
};
const createCustomTitleBar = (window) => {
    window.webContents.on('did-navigate', (event, targetUrl) => {
    const { hostname } = node_url_1.default.parse(targetUrl);
    if (hostname && isAllowed(hostname)) {
      window.webContents.executeJavaScript(render());
    }
  });
};
exports.createCustomTitleBar = createCustomTitleBar;

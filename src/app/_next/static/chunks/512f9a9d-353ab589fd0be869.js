(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5453],
  {
    29773: function (e) {
      e.exports = {
        name: "root",
        branches: [
          {
            name: "Mobile",
            type: void 0,
            branches: [
              {
                name: "UCBrowser",
                type: void 0,
                branches: [],
                define: [
                  { name: "BrowserEngine", value: "UCBrowser" },
                  { name: "BrowserName", value: "UCBrowser" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /UCBrowser\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /UC Browser\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "UC Browser", value: !0 },
                    { type: "string", $t: "UCWEB", value: !0 },
                  ],
                },
              },
              {
                name: "YandexSearchShort",
                type: void 0,
                branches: [
                  {
                    name: "YandexSearch_iOS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserBase", value: "Safari" },
                      {
                        name: "BrowserBaseVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /WebKit\/?([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YaApp_iOS/", value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  { name: "BrowserName", value: "YandexSearch" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /_iOS\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  { name: "inAppBrowser", value: !0 },
                ],
                match: {
                  type: "any",
                  pattern: [
                    {
                      type: "regex",
                      $t: /^YaBrowser\/[0-9][0-9\.]* YaApp_iOS\/[0-9][0-9\.]*$/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /YandexSearch\/[0-9][0-9\.]* \(Android [0-9][0-9\.]*\)/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /Yandex Search Plugin Android\/[0-9][0-9\.]*/,
                      value: !0,
                    },
                  ],
                },
              },
              {
                name: "YandexBrowserShort",
                type: void 0,
                branches: [],
                define: [
                  { name: "BrowserName", value: "YandexBrowser" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /com.yandex.browser(?:\.[a-z]+)?\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    {
                      type: "regex",
                      $t: /com.yandex.browser(?:\.[a-z]+)?\//,
                      value: !0,
                    },
                  ],
                },
              },
              {
                name: "TolokaApp",
                type: void 0,
                branches: [],
                define: [
                  { name: "BrowserName", value: "TolokaApp" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /TolokaApp\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [{ type: "string", $t: "TolokaApp/", value: !0 }],
                },
              },
              {
                name: "Edge",
                type: void 0,
                branches: [],
                define: [
                  { name: "BrowserEngine", value: "Edge" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Edge\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  { name: "BrowserName", value: "Edge" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Edge\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [{ type: "string", $t: "Edge/", value: !0 }],
                },
              },
              {
                name: "InternetExplorer",
                type: void 0,
                branches: [
                  {
                    name: "MSIETablet",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MSIE" },
                      { name: "isTablet", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MSIE ([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /rv[: ]([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "regex",
                          $t: /MSIE.*Windows NT.*ARM;/,
                          value: !0,
                        },
                        {
                          type: "regex",
                          $t: /Windows NT [0-9][0-9\.]*; ARM; Trident/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "MSIE",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "IEMobile" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MSIEMobile[ \/]([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /IE ?Mobile[ \/]([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MSIE ([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "IEMobile", value: !0 },
                        { type: "string", $t: "IE Mobile", value: !0 },
                        { type: "string", $t: "MSIE", value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Trident" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Trident\/([0-9]+(?:[\.][0-9]+)?)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MSIE ([0-9]+(?:[\.][0-9]+)?)/,
                      },
                    ],
                  },
                ],
                match: {
                  pattern: [
                    { type: "string", $t: "IEMobile", value: !0 },
                    { type: "string", $t: "IE Mobile", value: !0 },
                    { type: "string", $t: "ARM; Trident", value: !0 },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?; Windows CE/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?.*Windows Phone/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?.*PPC/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?.*WP[78]/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?.*NOKIA/,
                      value: !0,
                    },
                    { type: "regex", $t: /MSIE 1[01].*ARM;/, value: !0 },
                  ],
                },
              },
              {
                name: "WebkitFamily",
                type: void 0,
                branches: [
                  {
                    name: "OperaMobile",
                    type: void 0,
                    branches: [],
                    define: [
                      {
                        name: "BrowserName",
                        pattern: [
                          {
                            type: "regex",
                            value: "OperaMini",
                            $t: /; wv\).*Chrome\/[0-9][0-9\.]* Mobile/,
                          },
                          { type: "string", value: "OperaMobile", $t: "OPR/" },
                          { type: "string", value: "OperaMini", $t: "OPiOS/" },
                        ],
                      },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /OPR\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /OPiOS\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "OPR/", value: !0 },
                        { type: "string", $t: "OPiOS/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Coast",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", $t: "Coast" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Coast\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Coast/", value: !0 }],
                    },
                  },
                  {
                    name: "Puffin",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", $t: "Puffin" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Puffin\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          {
                            type: "regex",
                            value: !0,
                            $t: /Puffin\/[0-9][0-9\.]*[IAW]T/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Puffin/", value: !0 }],
                    },
                  },
                  {
                    name: "CocCoc",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "CocCoc" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /coc_coc_browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "coc_coc_browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "TansoDL",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "TansoDownloader" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "/TansoDL", value: !0 }],
                    },
                  },
                  {
                    name: "Dolfin",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Dolfin" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Dolfin\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Dolfin/", value: !0 }],
                    },
                  },
                  {
                    name: "CM",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "CM Browser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1.$2.$3",
                            $t: /ACHEETAHI\/[0-9]+([0-9])([0-9]{2})([0-9]{2})$/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "ACHEETAHI/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Maxthon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Maxthon" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MxBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MxBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Baidu",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Baidu" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /bdbrowser\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /bdbrowser_i18n\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "bdbrowser_i18n/", value: !0 },
                        { type: "string", $t: "bdbrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Amigo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Amigo" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /APP_VERSION_([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "AMIGOAPP", value: !0 }],
                    },
                  },
                  {
                    name: "SamsungBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Samsung Internet" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SamsungBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "SamsungBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Tizen",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Tizen" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Tizen Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Tizen", value: !0 }],
                    },
                  },
                  {
                    name: "Dolphin",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Dolphin" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Dolphin HD ([0-9][0-9\.]*).*iPhone/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Dolphin ([0-9][0-9\.]*).*iPhone/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /^Dolphin/, value: !0 }],
                    },
                  },
                  {
                    name: "UCBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "UCBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /UCBrowser\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "regex",
                          $t: /UCBrowser\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "Mercury",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Mercury" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Mercury ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /^Mercury/, value: !0 }],
                    },
                  },
                  {
                    name: "BlackBerry",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "BlackBerry" },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "PlayBook" },
                        ],
                      },
                      {
                        name: "PreferMobile",
                        pattern: [
                          {
                            type: "regex",
                            value: !1,
                            $t: /Version\/[0-9][0-9\.]* Safari\/[0-9][0-9\.]*/,
                          },
                          {
                            type: "regex",
                            value: !0,
                            $t: /Version\/[0-9][0-9\.]* Mobile Safari\/[0-9][0-9\.]*/,
                          },
                        ],
                      },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "PlayBook", value: !0 },
                        { type: "string", $t: "BlackBerry", value: !0 },
                        {
                          type: "regex",
                          $t: /BB[0-9]+; (?:Touch|Kbd)/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "YandexSearch",
                    type: void 0,
                    branches: [
                      {
                        name: "YandexSearch_iOS",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "BrowserBase", value: "Safari" },
                          {
                            name: "BrowserBaseVersion",
                            pattern: [
                              {
                                type: "regex",
                                value: "$1",
                                $t: /WebKit\/?([0-9][0-9\.]*)/,
                              },
                            ],
                          },
                        ],
                        match: {
                          type: "any",
                          pattern: [
                            { type: "string", $t: "YaApp_iOS/", value: !0 },
                          ],
                        },
                      },
                    ],
                    define: [
                      { name: "BrowserName", value: "YandexSearch" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YandexSearch\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /_iOS\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [{ type: "string", value: !0, $t: "/apad" }],
                      },
                      { name: "inAppBrowser", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YandexSearch/", value: !0 },
                        { type: "string", $t: "YaApp", value: !0 },
                        {
                          type: "regex",
                          $t: /YaBrowser\/[0-9][0-9\.]* YaApp_iOS\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "GoogleSearch",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "GoogleSearch" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /GSA\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      { name: "inAppBrowser", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "GSA/", value: !0 }],
                    },
                  },
                  {
                    name: "YandexBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "YandexBrowser" },
                      {
                        name: "BrowserName",
                        pattern: [
                          {
                            type: "regex",
                            value: "YandexBrowserLite",
                            $t: /YaBrowser\/(?:[0-9][0-9\.]*) \(lite\)/,
                          },
                        ],
                      },
                      {
                        name: "inAppBrowser",
                        pattern: [
                          {
                            type: "regex",
                            value: !0,
                            $t: /YaBrowser\/(?:[0-9][0-9\.]*) \(lite\)/,
                          },
                        ],
                      },
                      { name: "isTouch", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YaBrowser\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YaMobile\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "YaBuildName",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YaBrowser\/(?:[0-9][0-9\.]*) \(([a-z0-9_]+)\)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YaMobile/", value: !0 },
                        { type: "string", $t: "YaBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MQQBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MQQBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MQQBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MQQBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "WeChat",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "WeChat" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MicroMessenger\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MicroMessenger/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "SputnikBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Sputnik" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SputnikBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "SputnikBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MiuiBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MIUI" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MiuiBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MiuiBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "EuiBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "EUI" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /EUI Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "EUI Browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MZBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MZBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MZBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MZBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "YaaniBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Yaani" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YaaniBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YaaniBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "AndroidWebView",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "AndroidBrowser" },
                      { name: "isTouch", value: !0 },
                      { name: "inAppBrowser", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Android ([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "regex",
                          $t: /Android.*Version\/[0-9][0-9\.]* Chrome\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                        {
                          type: "regex",
                          $t: /Android.*Version\/[0-9][0-9\.]* (?:Mobile )?Safari\/[0-9][0-9\.]* Chrome\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                        {
                          type: "regex",
                          $t: /; wv\).*Chrome\/[0-9][0-9\.]* Mobile/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "ChromeMobile",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "ChromeMobile" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /CrMo\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /CriOS\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "CrMo/", value: !0 },
                        { type: "string", $t: "Chrome/", value: !0 },
                        { type: "string", $t: "CriOS/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "SkyFire",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "SkyFire" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Skyfire\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Skyfire/", value: !0 }],
                    },
                  },
                  {
                    name: "Firefox",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MobileFirefox" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /FxiOS\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "FxiOS/", value: !0 }],
                    },
                  },
                  {
                    name: "NetFront",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NetFrontLifeBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /NetFront[a-z0-9_]*\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        {
                          type: "string",
                          $t: "NetFrontLifeBrowser/",
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "Polaris",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Polaris" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /POLARIS\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "POLARIS/", value: !0 }],
                    },
                  },
                  {
                    name: "wOSBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "WebOSBrowser" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /wOSBrowser\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "TouchPad" },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "regex", $t: /wOSBrowser/, value: !0 },
                        { type: "regex", $t: /webOS/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Ninesky",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Ninesky" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Ninesky\-android\-mobile\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Ninesky\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        {
                          type: "string",
                          $t: "Ninesky-android-mobile/",
                          value: !0,
                        },
                        { type: "string", $t: "Ninesky/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "AndroidBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "AndroidBrowser" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Android ([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Android", value: !0 },
                        {
                          type: "regex",
                          $t: /Mac OS X [0-9_]+;.*HTC[_\/ ]/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "NokiaBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NokiaBrowser" },
                      { name: "DeviceVendor", value: "Nokia" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /BrowserNG\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /NokiaBrowser\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Nokia[a-z0-9_\-]*\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Series(?:60|80)\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "NokiaBrowser/", value: !0 },
                        { type: "string", $t: "BrowserNG/", value: !0 },
                        { type: "string", $t: "Nokia", value: !0 },
                        { type: "string", $t: "SymbianOS", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MobileSafari",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MobileSafari" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "inAppBrowser",
                        pattern: [
                          { type: "string", value: !0, $t: "FBAV" },
                          { type: "string", value: !1, $t: "Safari" },
                          { type: "string", value: !0, $t: "Mobile" },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "regex",
                          $t: /iP(?:[oa]d|hone).*Mobile Safari/,
                          value: !0,
                        },
                        {
                          type: "regex",
                          $t: /Mobile\/[a-z0-9_]+(?: Safari\/)?/,
                          value: !0,
                        },
                        { type: "string", $t: "iPhone OS", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "UbuntuBrowser",
                    type: void 0,
                    branches: [],
                    define: [{ name: "BrowserName", value: "UbuntuBrowser" }],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Ubuntu; Mobile", value: !0 },
                        { type: "string", $t: "Ubuntu; Touch", value: !0 },
                      ],
                    },
                  },
                  {
                    name: void 0,
                    type: "default",
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Unknown" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: void 0,
                    type: "common",
                    branches: [],
                    define: [
                      {
                        name: "BrowserShell",
                        pattern: [
                          { type: "string", value: "Diigo", $t: "Diigo" },
                          { type: "string", value: "Diigo", $t: "iChromy" },
                          {
                            type: "string",
                            value: "UCBrowser",
                            $t: "UC AppleWebkit",
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "iPad" },
                          { type: "string", value: !0, $t: "Android 3" },
                          { type: "string", value: !0, $t: "/apad" },
                          { type: "regex", value: !1, $t: /Mobile.*Safari\// },
                          {
                            type: "regex",
                            value: !0,
                            $t: /Android (?:[4-9]|[0-9]{2,}).* Safari\/[0-9][0-9\.]*/,
                          },
                          {
                            type: "regex",
                            value: !0,
                            $t: /Chrome\/[0-9][0-9\.]* Safari\//,
                          },
                        ],
                      },
                    ],
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "WebKit" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /WebKit\/?([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  {
                    name: "BrowserBase",
                    pattern: [
                      { type: "string", value: "Chromium", $t: "Chromium/" },
                      { type: "string", value: "Chromium", $t: "Chrome/" },
                      { type: "string", value: "Safari", $t: "Safari/" },
                    ],
                  },
                  {
                    name: "BrowserBaseVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Chromium\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Chrome\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Safari\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  {
                    name: "inAppBrowser",
                    pattern: [
                      { type: "string", value: !0, $t: "FB_IAB" },
                      { type: "string", value: !0, $t: "FBAV" },
                      { type: "string", value: !0, $t: "OKApp" },
                      {
                        type: "regex",
                        value: !0,
                        $t: /CFNetwork\/[0-9][0-9\.]*.*Darwin\/[0-9][0-9\.]*/,
                      },
                    ],
                  },
                ],
                match: {
                  pattern: [
                    { type: "string", $t: "WebKit", value: !0 },
                    { type: "string", $t: "Mobile Safari/", value: !0 },
                    {
                      type: "regex",
                      $t: /^Dolphin(?: HD)? [0-9][0-9\.]*.*iPhone/,
                      value: !0,
                    },
                    {
                      type: "regex",
                      $t: /^Mercury [0-9][0-9\.]*.*iPhone/,
                      value: !0,
                    },
                  ],
                },
              },
              {
                name: "Presto",
                type: void 0,
                branches: [
                  {
                    name: "OperaMini",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "OperaMini" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Opera Mini\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "Opera Mini", value: !0 },
                        { type: "string", $t: "Opera<Ch-Ray>", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "OperaMobile",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "OperaMobile" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Opera[ \/]?([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "Tablet/" },
                          { type: "string", value: !0, $t: "Tablet browser" },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Opera Mobi/", value: !0 },
                        { type: "string", $t: "Opera Tablet/", value: !0 },
                        {
                          type: "regex",
                          $t: /Opera\/[0-9]+(?:[\.][0-9]+)?/,
                          value: !0,
                        },
                        { type: "regex", $t: /Opera [0-9][0-9\.]*/, value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Presto" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Presto\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  pattern: [{ type: "string", $t: "Opera", value: !0 }],
                },
              },
              {
                name: "Gecko",
                type: void 0,
                branches: [
                  {
                    name: "Frefox",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MobileFirefox" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Firefox\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Fennec\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "Tablet browser" },
                        ],
                      },
                      { name: "MultiTouch", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Firefox/", value: !0 },
                        { type: "string", $t: "Fennec/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Minimo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Minimo" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Minimo\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Minimo/", value: !0 }],
                    },
                  },
                  {
                    name: "Novarra-Vision",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Novarra-Vision" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Novarra-Vision\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Novarra-Vision", value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Gecko" },
                  { name: "isTouch", value: !0 },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      { type: "regex", value: "$1", $t: /rv:([0-9][0-9\.]*)/ },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "Fennec", value: !0 },
                    { type: "string", $t: "Firefox", value: !0 },
                    { type: "string", $t: "Minimo", value: !0 },
                    { type: "regex", $t: /Gecko.*Moblin/, value: !0 },
                    { type: "string", $t: "Novarra-Vision", value: !0 },
                  ],
                },
              },
              {
                name: "ProprietaryMobileBrowser",
                type: void 0,
                branches: [
                  {
                    name: "Obigo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Obigo" },
                      { name: "isWAP", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Obigo(?:InternetBrowser|\-Browser|\-MMS|\-Q[a-z0-9_]+)?\/Q([a-z0-9_]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Obigo[\- ]Q([\.a-z0-9_]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Teleca[\- ]Q([\.a-z0-9_]+)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Obigo", value: !0 },
                        { type: "string", $t: "Teleca", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Polaris",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Polaris" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /POLARIS\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "POLARIS/", value: !0 }],
                    },
                  },
                  {
                    name: "Blackberry",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "BlackBerry" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Blackberry[0-9]+\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "regex", $t: /^Blackberry/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Blazer",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Blazer" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Blazer\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Blazer/", value: !0 }],
                    },
                  },
                  {
                    name: "MQQBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MQQBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MQQBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MQQBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Dalvik",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", $t: "Dalvik" },
                      { name: "isBrowser", value: !1 },
                      { name: "inAppBrowser", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Dalvik\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Dalvik/", value: !0 }],
                    },
                  },
                  {
                    name: "NetFront",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NetFront" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /NetFront\/?([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "regex",
                          $t: /NetFront(?:\/|[0-9])/,
                          value: !0,
                        },
                        {
                          type: "string",
                          $t: "PlayStation Portable",
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "OviBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "OviBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /S40OviBrowser\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "S40OviBrowser", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "UCBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "UCBrowser" },
                      { name: "BrowserEngine", value: "UCBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(?:UC ?Browser|UCWEB)\/?([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "UCBrowser", value: !0 }],
                    },
                  },
                  {
                    name: "NokiaBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NokiaBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(?:s60|Series[89]0)\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "S60", value: !0 },
                        { type: "regex", $t: /Series[89]0/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Dolfin",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Dolfin" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Dolfin\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Dolfin/", value: !0 }],
                    },
                  },
                  {
                    name: "SEMC",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "SEMC" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SEMC\-Browser\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "SEMC-Browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Jasmine",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Jasmine" },
                      { name: "isWAP", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Jasmine\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Jasmine/", value: !0 }],
                    },
                  },
                  {
                    name: "OpenWave",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "OpenWave" },
                      { name: "isWAP", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(?:UP\.Browser|OpenWave)\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "UP.Browser/", value: !0 },
                        { type: "string", $t: "OpenWave/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "DoCoMo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Docomo" },
                      { name: "isWAP", value: !0 },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(?:DoCoMo|Docomo)\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "DoCoMo", value: !0 }],
                    },
                  },
                  {
                    name: "UnknownMobileBrowser",
                    type: "default",
                    branches: [],
                    define: [{ name: "isWAP", value: !0 }],
                  },
                ],
                define: [{ name: "BrowserEngine", value: "Proprietary" }],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "MIDP-", value: !0 },
                    { type: "string", $t: "CLDC-", value: !0 },
                    { type: "string", $t: "NetFront", value: !0 },
                    { type: "string", $t: "Obigo", value: !0 },
                    { type: "string", $t: "UCBrowser", value: !0 },
                    { type: "string", $t: "UP.Browser", value: !0 },
                    { type: "string", $t: "DoCoMo", value: !0 },
                    { type: "string", $t: "Dalvik/", value: !0 },
                    { type: "string", $t: "PSP", value: !0 },
                    { type: "string", $t: "BREW", value: !0 },
                    { type: "string", $t: "Blazer", value: !0 },
                    { type: "string", $t: "MQQBrowser", value: !0 },
                  ],
                },
              },
              {
                name: "UnknownMobileBrowser",
                type: "default",
                branches: [
                  {
                    name: "iTunes",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "iTunes" },
                      { name: "isBrowser", value: !1 },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "iTunes-", value: !0 }],
                    },
                  },
                  {
                    name: "MAUI",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "MAUI WAP Browser" },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "MAUI", value: !0 }],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Unknown" },
                  { name: "BrowserName", value: "Unknown" },
                  {
                    name: "isWAP",
                    pattern: [{ type: "string", value: !0, $t: "WAP" }],
                  },
                  {
                    name: "inAppBrowser",
                    pattern: [
                      {
                        type: "regex",
                        value: !0,
                        $t: /CFNetwork\/[0-9][0-9\.]*.*Darwin\/[0-9][0-9\.]*/,
                      },
                    ],
                  },
                ],
              },
              {
                name: "MobileOS",
                type: "common",
                branches: [
                  {
                    name: "FirefoxOS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "FirefoxOS" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "(Tablet;" },
                        ],
                      },
                      {
                        name: "OSVersion",
                        pattern: [
                          { type: "string", value: "1.0.1", $t: "Gecko/18.0" },
                          { type: "string", value: 1.1, $t: "Gecko/18.1" },
                          { type: "string", value: 1.2, $t: "Gecko/26.0" },
                          { type: "string", value: 1.3, $t: "Gecko/28.0" },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        {
                          type: "regex",
                          $t: /\((?:Mobile|Tablet);[^)]+\) Gecko\/[0-9][0-9\.]* Firefox\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "Tizen",
                    type: void 0,
                    branches: [
                      {
                        name: "TV",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "isTouch", value: !1 },
                          { name: "isTV", value: !0 },
                          { name: "isMobile", value: !1 },
                        ],
                        match: {
                          type: "any",
                          pattern: [
                            { type: "string", $t: "SMART-TV", value: !0 },
                            { type: "string", $t: "TV", value: !0 },
                          ],
                        },
                      },
                    ],
                    define: [
                      { name: "OSFamily", value: "Tizen" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Tizen[\/ ]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Tizen", value: !0 }],
                    },
                  },
                  {
                    name: "WindowsPhone",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "WindowsPhone" },
                      {
                        name: "DeviceVendor",
                        pattern: [
                          { type: "string", value: "Nokia", $t: "Nokia" },
                        ],
                      },
                      { name: "isTouch", value: !0 },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows Phone OS ([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows Phone ([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /WP([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows NT ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "isEmulator",
                        pattern: [
                          { type: "string", value: !0, $t: "XDeviceEmulator" },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "ZuneWP7", value: !0 },
                        { type: "string", $t: "Lumia", value: !0 },
                        { type: "string", $t: "Windows Phone;", value: !0 },
                        { type: "regex", $t: /Windows Phone [^6]/, value: !0 },
                        { type: "regex", $t: /MSIE.*Lumia/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Android",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "Android" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Android ?([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Adr ([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /\(Linux;.*; ?([23]\.[0-9][0-9\.]*);/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [
                          { type: "string", value: !0, $t: "Android 3" },
                          { type: "string", value: !0, $t: "Linux;U;3" },
                          { type: "regex", value: !0, $t: /Android.*Tablet/ },
                        ],
                      },
                      {
                        name: "OSName",
                        pattern: [
                          {
                            type: "regex",
                            value: "Android Astro",
                            $t: /(?:Android|\(Linux;[^)]+;) ?1\.0/,
                          },
                          {
                            type: "regex",
                            value: "Android Bender",
                            $t: /(?:Android|\(Linux;[^)]+;) ?1\.1/,
                          },
                          {
                            type: "regex",
                            value: "Android Cupcake",
                            $t: /(?:Android|\(Linux;[^)]+;) ?1\.5/,
                          },
                          {
                            type: "regex",
                            value: "Android Donut",
                            $t: /(?:Android|\(Linux;[^)]+;) ?1\.6/,
                          },
                          {
                            type: "regex",
                            value: "Android Eclair",
                            $t: /(?:Android|\(Linux;[^)]+;) ?2\.[01]/,
                          },
                          {
                            type: "regex",
                            value: "Android Froyo",
                            $t: /(?:Android|\(Linux;[^)]+;) ?2\.2/,
                          },
                          {
                            type: "regex",
                            value: "Android Gingerbread",
                            $t: /(?:Android|\(Linux;[^)]+;) ?2\.3/,
                          },
                          {
                            type: "regex",
                            value: "Android Honeycomb",
                            $t: /(?:Android|\(Linux;[^)]+;) ?3\.[012]/,
                          },
                          {
                            type: "regex",
                            value: "Android Ice Cream Sandwich",
                            $t: /(?:Android|\(Linux;[^)]+;) ?4\.0/,
                          },
                          {
                            type: "regex",
                            value: "Android Jelly Bean",
                            $t: /(?:Android|\(Linux;[^)]+;) ?4\.[123]/,
                          },
                          {
                            type: "regex",
                            value: "Android KitKat",
                            $t: /(?:Android|\(Linux;[^)]+;) ?4\.4/,
                          },
                          {
                            type: "regex",
                            value: "Android Lollipop",
                            $t: /(?:Android|\(Linux;[^)]+;) ?5\.[0-9]/,
                          },
                          {
                            type: "regex",
                            value: "Android Marshmallow",
                            $t: /(?:Android|\(Linux;[^)]+;) ?6\.[0-9]/,
                          },
                          {
                            type: "regex",
                            value: "Android Nougat",
                            $t: /(?:Android|\(Linux;[^)]+;) ?7\.[0-9]/,
                          },
                          {
                            type: "regex",
                            value: "Android Oreo",
                            $t: /(?:Android|\(Linux;[^)]+;) ?8\.[0-9]/,
                          },
                          {
                            type: "regex",
                            value: "Android Pie",
                            $t: /(?:Android|\(Linux;[^)]+;) ?9\.[0-9]/,
                          },
                        ],
                      },
                      {
                        name: "MultiTouch",
                        pattern: [
                          {
                            type: "regex",
                            value: !0,
                            $t: /(?:Android|\(Linux;.*;) ?(?:2\.[23]|[345]\.).*WebKit/,
                          },
                          { type: "string", value: !0, $t: "Opera Mobi/" },
                          { type: "string", value: !0, $t: "Opera Tablet/" },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "Android", value: !0 },
                        {
                          type: "regex",
                          $t: /\(Linux;.*; ?2\.[23]\.[0-9]+;/,
                          value: !0,
                        },
                        {
                          type: "regex",
                          $t: /\(Linux;.*; ?3\.[012]\.[0-9]+;/,
                          value: !0,
                        },
                        { type: "regex", $t: /Adr [0-9][0-9\.]*/, value: !0 },
                        {
                          type: "regex",
                          $t: /Mac OS X [0-9_]{2,};.*HTC[_\/]/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "iPhoneOS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "iOS" },
                      { name: "DeviceVendor", value: "Apple" },
                      {
                        name: "DeviceName",
                        pattern: [
                          { type: "string", value: "iPad", $t: "iPad" },
                          { type: "string", value: "iPhone", $t: "iPhone" },
                          { type: "string", value: "iPod", $t: "iPod" },
                          { type: "string", value: "iPhone", $t: "iPh OS" },
                        ],
                      },
                      {
                        name: "DeviceModel",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(iPad[0-9],[0-9]|iPod[0-9],[0-9]|iPhone[0-9],[0-9])/,
                          },
                          { type: "string", value: "iPad", $t: "iPad" },
                          { type: "string", value: "iPhone", $t: "iPhone" },
                          { type: "string", value: "iPod", $t: "iPod" },
                          { type: "string", value: "iPhone", $t: "iPh OS" },
                        ],
                      },
                      {
                        name: "isTouch",
                        pattern: [
                          { type: "string", value: !0, $t: "(iPhone" },
                          { type: "string", value: !0, $t: "iPh OS" },
                          { type: "string", value: !0, $t: "(iPad" },
                          { type: "string", value: !0, $t: "(iPod" },
                          { type: "string", value: !0, $t: "(Apple iPhone" },
                        ],
                      },
                      {
                        name: "OSVersion",
                        pattern: [
                          { type: "regex", value: 1, $t: /Mobile\/1A/ },
                          { type: "regex", value: "1.0.1", $t: /Mobile\/1C25/ },
                          { type: "regex", value: "1.0.2", $t: /Mobile\/1C28/ },
                          { type: "regex", value: "1.1.1", $t: /Mobile\/3A/ },
                          { type: "regex", value: "1.1.2", $t: /Mobile\/3B/ },
                          { type: "regex", value: "1.1.3", $t: /Mobile\/4A93/ },
                          {
                            type: "regex",
                            value: "1.1.4",
                            $t: /Mobile\/4A102/,
                          },
                          { type: "regex", value: 2, $t: /Mobile\/5A/ },
                          { type: "regex", value: "2.0.1", $t: /Mobile\/1B/ },
                          { type: "regex", value: "2.0.2", $t: /Mobile\/5C/ },
                          { type: "regex", value: 2.1, $t: /Mobile\/5F/ },
                          { type: "regex", value: 2.2, $t: /Mobile\/5G/ },
                          { type: "regex", value: "2.2.1", $t: /Mobile\/5H/ },
                          { type: "regex", value: 3, $t: /Mobile\/7A3/ },
                          { type: "regex", value: "3.0.1", $t: /Mobile\/7A4/ },
                          { type: "regex", value: 3.1, $t: /Mobile\/7C/ },
                          { type: "regex", value: "3.1.2", $t: /Mobile\/7D/ },
                          { type: "regex", value: "3.1.3", $t: /Mobile\/7E/ },
                          { type: "regex", value: 4, $t: /Mobile\/8A2/ },
                          { type: "regex", value: "4.0.1", $t: /Mobile\/8A3/ },
                          { type: "regex", value: 4.1, $t: /Mobile\/8B/ },
                          { type: "regex", value: 4.2, $t: /Mobile\/8C/ },
                          { type: "regex", value: 4.3, $t: /Mobile\/8F/ },
                          { type: "regex", value: "4.3.3", $t: /Mobile\/8J/ },
                          { type: "regex", value: "4.3.4", $t: /Mobile\/8K/ },
                          { type: "regex", value: "4.3.5", $t: /Mobile\/8L/ },
                          { type: "regex", value: 5, $t: /Mobile\/9A3/ },
                          { type: "regex", value: "5.0.1", $t: /Mobile\/9A4/ },
                          { type: "regex", value: 5.1, $t: /Mobile\/9B1/ },
                          { type: "regex", value: "5.1.1", $t: /Mobile\/9B2/ },
                          { type: "regex", value: 6, $t: /Mobile\/10A4/ },
                          { type: "regex", value: "6.0.1", $t: /Mobile\/10A5/ },
                          { type: "regex", value: 6.1, $t: /Mobile\/10B144/ },
                          {
                            type: "regex",
                            value: "6.1.1",
                            $t: /Mobile\/10B145/,
                          },
                          {
                            type: "regex",
                            value: "6.1.2",
                            $t: /Mobile\/10B146/,
                          },
                          { type: "regex", value: "6.1.3", $t: /Mobile\/10B3/ },
                          {
                            type: "regex",
                            value: "7.0.3",
                            $t: /Mobile\/11B511/,
                          },
                          {
                            type: "regex",
                            value: "7.0.4",
                            $t: /Mobile\/11B55/,
                          },
                          { type: "regex", value: "7.0.6", $t: /Mobile\/11B6/ },
                          { type: "regex", value: 7.1, $t: /Mobile\/11D1/ },
                          {
                            type: "regex",
                            value: "7.1.1",
                            $t: /Mobile\/11D20/,
                          },
                          {
                            type: "regex",
                            value: "7.1.2",
                            $t: /Mobile\/11D25/,
                          },
                          { type: "regex", value: 8, $t: /Mobile\/12A3/ },
                          {
                            type: "regex",
                            value: "8.0.1",
                            $t: /Mobile\/12A402/,
                          },
                          {
                            type: "regex",
                            value: "8.0.2",
                            $t: /Mobile\/12A405/,
                          },
                          { type: "regex", value: 8.1, $t: /Mobile\/12B41/ },
                          {
                            type: "regex",
                            value: "8.1.1",
                            $t: /Mobile\/12B43/,
                          },
                          {
                            type: "regex",
                            value: "$1.$2.$3",
                            $t: /(?:iPhone|CPU(?: OS)?|iPad) OS[ _]([0-9]+)_([0-9])_([0-9])/,
                          },
                          {
                            type: "regex",
                            value: "$1.$2",
                            $t: /(?:iPhone|CPU) OS ([0-9]+)_([0-9])/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /(?:iPhone|CPU) OS ([0-9]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /iTunes-[a-z0-9_\-]+\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1.$2",
                            $t: /iPh OS ([0-9]+)_([0-9])/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /iOS ([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                      {
                        name: "isTablet",
                        pattern: [{ type: "string", value: !0, $t: "iPad" }],
                      },
                      {
                        name: "isEmulator",
                        pattern: [
                          { type: "string", value: !0, $t: "iPhone Simulator" },
                          {
                            type: "regex",
                            value: !0,
                            $t: /OS 10_(?:9|[0-9]{2})/,
                          },
                        ],
                      },
                      {
                        name: "MultiTouch",
                        pattern: [{ type: "string", value: !0, $t: "WebKit" }],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "iPhone", value: !0 },
                        { type: "string", $t: "iPad", value: !0 },
                        { type: "string", $t: "iPod", value: !0 },
                        { type: "string", $t: "(iOS", value: !0 },
                        {
                          type: "regex",
                          $t: /YaBrowser\/[0-9][0-9\.]* YaApp_iOS\/[0-9][0-9\.]*/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "Symbian",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "Symbian" },
                      {
                        name: "DeviceVendor",
                        pattern: [
                          { type: "string", value: "Nokia", $t: "Nokia" },
                        ],
                      },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SymbianOS\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Symbian\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "SymbianOS", value: !0 },
                        { type: "string", $t: "Symbian", value: !0 },
                        { type: "string", $t: "Series60", value: !0 },
                        { type: "string", $t: "Series 60", value: !0 },
                        { type: "string", $t: "SymbOS", value: !0 },
                        { type: "string", $t: "S60", value: !0 },
                        { type: "string", $t: "Series80", value: !0 },
                        { type: "string", $t: "Series90", value: !0 },
                        { type: "regex", $t: /^Nokia.*AppleWebKit/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Moblin",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "Moblin" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Moblin\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Moblin/", value: !0 }],
                    },
                  },
                  {
                    name: "PalmOS",
                    type: void 0,
                    branches: [],
                    define: [{ name: "OSFamily", value: "PalmOS" }],
                    match: {
                      pattern: [
                        { type: "string", $t: "PalmOS", value: !0 },
                        { type: "string", $t: "PalmSource", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Series40",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "Series40" },
                      { name: "DeviceVendor", value: "Nokia" },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Series40", value: !0 }],
                    },
                  },
                  {
                    name: "Bada",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "Bada" },
                      { name: "DeviceVendor", value: "SAMSUNG" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Bada\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "MultiTouch",
                        pattern: [{ type: "string", value: !0, $t: "WebKit" }],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Bada", value: !0 }],
                    },
                  },
                  {
                    name: "BlackBerry",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "BlackBerry" },
                      { name: "DeviceVendor", value: "RIM" },
                      {
                        name: "MultiTouch",
                        pattern: [{ type: "string", value: !0, $t: "WebKit" }],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "BlackBerry", value: !0 },
                        {
                          type: "regex",
                          $t: /BB[0-9]+; (?:Touch|Kbd)/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "BlackBerryTablet",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "isTouch", value: !0 },
                      { name: "isTablet", value: !0 },
                      { name: "OSFamily", value: "RIMTabletOS" },
                      { name: "DeviceVendor", value: "RIM" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /RIM Tablet OS ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "MultiTouch",
                        pattern: [{ type: "string", value: !0, $t: "WebKit" }],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "RIM Tablet OS", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MeeGo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "MeeGo" },
                      { name: "isTouch", value: !0 },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "MeeGo", value: !0 },
                        { type: "string", $t: "Maemo", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "WindowsRT",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "WindowsRT" },
                      { name: "isTouch", value: !0 },
                      { name: "isTablet", value: !0 },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows NT ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "regex", $t: /Windows NT.*ARM;/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "WindowsMobile",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "WindowsMobile" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows *Mobile[\/ ]([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows *Phone[\/ ]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "Windows Mobile", value: !0 },
                        { type: "string", $t: "Windows CE", value: !0 },
                        { type: "string", $t: "Microsoft Windows", value: !0 },
                        { type: "string", $t: "Windows NT", value: !0 },
                        { type: "string", $t: "WindowsMobile", value: !0 },
                        { type: "string", $t: "PPC;", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "WebOS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", $t: "WebOS" },
                      { name: "DeviceVendor", value: "HP" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /hpwOS\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /webOS\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [
                        { type: "string", $t: "hpwOS", value: !0 },
                        { type: "string", $t: "webOS", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Linux",
                    type: void 0,
                    branches: [],
                    define: [
                      {
                        name: "OSFamily",
                        pattern: [
                          { type: "string", value: "Linux", $t: "Linux" },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Linux", value: !0 }],
                    },
                  },
                  {
                    name: "UbuntuTouch",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", value: "UbuntuTouch" },
                      { name: "isTouch", value: !0 },
                      {
                        name: "isTablet",
                        pattern: [{ type: "string", value: !0, $t: "Tablet" }],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Ubuntu; Mobile", value: !0 },
                        { type: "string", $t: "Ubuntu; Tablet", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "BREW",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", $t: "BREW" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /BREW ([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "(BREW", value: !0 }],
                    },
                  },
                  {
                    name: "Nucleus",
                    type: void 0,
                    branches: [],
                    define: [{ name: "OSFamily", $t: "Nucleus" }],
                    match: {
                      pattern: [{ type: "string", $t: "Nucleus", value: !0 }],
                    },
                  },
                  {
                    name: "Java",
                    type: void 0,
                    branches: [],
                    define: [{ name: "OSFamily", $t: "Java" }],
                    match: {
                      pattern: [{ type: "string", $t: "J2ME/MIDP", value: !0 }],
                    },
                  },
                  {
                    name: void 0,
                    type: "default",
                    branches: [],
                    define: [{ name: "OSFamily", value: "Unknown" }],
                  },
                ],
                define: [
                  {
                    name: "J2ME",
                    pattern: [
                      { type: "string", value: !0, $t: "J2ME" },
                      { type: "string", value: !0, $t: "MIDP-" },
                      { type: "string", value: !0, $t: "CLDC-" },
                    ],
                  },
                ],
              },
              {
                name: "DeviceProps",
                type: "common",
                branches: [],
                define: [
                  {
                    name: "DeviceVendor",
                    pattern: [
                      { type: "string", value: "Lenovo", $t: "Lenovo" },
                      { type: "string", value: "Doogee", $t: "Doogee" },
                      {
                        type: "regex",
                        value: "Vivo",
                        $t: /(?:[ \(]vivo[_ \-])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[\(\) _]Huawei[\(\) _])/,
                      },
                      {
                        type: "regex",
                        value: "Xiaomi",
                        $t: /(?:[\(\) _]Xiaomi[\(\) _])/,
                      },
                      { type: "string", value: "Zidoo", $t: "Zidoo" },
                      {
                        type: "regex",
                        value: "Google",
                        $t: /(?:Nexus|Pixel[^\/])/,
                      },
                      {
                        type: "regex",
                        value: "3Q",
                        $t: /(?:MT0812E|MT0739D|MT0729D)/,
                      },
                      { type: "string", value: "Bliss", $t: "R1001" },
                      { type: "regex", value: "Onda", $t: /(?:ONDA X20)/ },
                      { type: "string", value: "SAMSUNG", $t: "Samsung" },
                      {
                        type: "regex",
                        value: "Siemens",
                        $t: /[^M]SIE[\-\/_ ][a-z0-9_]+/,
                      },
                      {
                        type: "regex",
                        value: "HTC",
                        $t: /(?:HTC|HTC[_ 0-9\-\/]|Desire[_ 0-9\-\/]|Sensation|IncredibleS|Evo ?(?:3D|4G|WiMax|V|Design|Shift|View))/,
                      },
                      {
                        type: "regex",
                        value: "LG Electronics",
                        $t: /(?:([ \(]LG[\-almuvwe ])|; G3 Build|NetCast|LM-[GXQ][267]10(\.FGN)?)/,
                      },
                      {
                        type: "regex",
                        value: "Nokia",
                        $t: /(?:Nokia|Lumia|TA\-10[012345]{2})/,
                      },
                      {
                        type: "regex",
                        value: "Yota",
                        $t: /(?:YD20[16]|C9660)/,
                      },
                      {
                        type: "string",
                        value: "Sony Ericsson",
                        $t: "SonyEricsson",
                      },
                      { type: "string", value: "Sony", $t: "Sony" },
                      {
                        type: "regex",
                        value: "Sony",
                        $t: /; ?(c|d|e|f|g|h)[0-9]{4}/,
                      },
                      {
                        type: "regex",
                        value: "Sony",
                        $t: /(?: h[48][0-9]{3} )/,
                      },
                      {
                        type: "regex",
                        value: "SAMSUNG",
                        $t: /^(?:.*(?:[ ;\-]))?(GT|SGH|SMT?|EK|SCH?|SHV|SHW|SPH|YP)\-[BECGAITSNPLJ]?[0-9]+/,
                      },
                      {
                        type: "regex",
                        value: "SAMSUNG",
                        $t: /[- ](?:(?:SC\-0|EK\-GC|YP\-G|SCL2)[^ ]+)/,
                      },
                      { type: "regex", value: "Acer", $t: /Acer/ },
                      {
                        type: "regex",
                        value: "Supersonic",
                        $t: /[- ](?:SC\-[1^ ]+)/,
                      },
                      {
                        type: "regex",
                        value: "Ark",
                        $t: /(?: ARK[ _\-]|Benefit|Impulse[ _]P[12+]+|elf[ _]s8)/,
                      },
                      { type: "string", value: "Avivo", $t: "Avivo" },
                      { type: "string", value: "Boway", $t: "Boway" },
                      {
                        type: "regex",
                        value: "Beeline",
                        $t: /(?:Beeline|Tab_2| A239)/,
                      },
                      {
                        type: "regex",
                        value: "Blackview",
                        $t: /(?:[\(\) _](E7s|R6)[\(\) _])/,
                      },
                      { type: "string", value: "Blackview", $t: "Blackview" },
                      { type: "string", value: "CCIT", $t: "CCIT" },
                      { type: "string", value: "CKK", $t: "CKK" },
                      { type: "string", value: "Chuwi", $t: "CHUWI" },
                      { type: "string", value: "Cross", $t: "; Cross" },
                      {
                        type: "regex",
                        value: "CUBE",
                        $t: /(?:CUBE|U[0-9]{2}GT)/,
                      },
                      { type: "string", value: "Celkon", $t: "Celkon" },
                      { type: "string", value: "Changhong", $t: "Changhong" },
                      { type: "string", value: "Changjiang", $t: "Changjiang" },
                      { type: "string", value: "Cyrus", $t: "; Cherry" },
                      {
                        type: "regex",
                        value: "Cloudfone",
                        $t: /(?:Cloudfone|Cloudpad)/,
                      },
                      { type: "string", value: "Colors", $t: "; Colors" },
                      { type: "string", value: "Colors", $t: "; Colors" },
                      { type: "string", value: "GoldStar", $t: "; SP35" },
                      {
                        type: "regex",
                        value: "Irbis",
                        $t: /(?:T[XZG][0-9]{2}|SP[0-9]{2,3}[ \-\/_])/,
                      },
                      {
                        type: "regex",
                        value: "DEXP",
                        $t: /(?:DEXP|Ixion|SP7730A|MS[56]50|M445|Z[1234]5[05]|G[12]5[05]|P380|B[LS][125]5[05]|XL150)/,
                      },
                      { type: "string", value: "DiMO", $t: "DIMO" },
                      { type: "string", value: "Doov", $t: "Doov" },
                      {
                        type: "regex",
                        value: "Digma",
                        $t: /(?:Plane|Platina|PS1043MG|PS1042MG|PS7020MG|TS7854M|iDx5)/,
                      },
                      { type: "regex", value: "DNS", $t: /; S[0-9]{4}(M|Q)/ },
                      { type: "regex", value: "DNS", $t: /; S[1-9]00[1-9]/ },
                      { type: "regex", value: "DNS", $t: /DNS[ _]S[0-9]{3,4}/ },
                      { type: "regex", value: "DNS", $t: /; S450[1-9]/ },
                      {
                        type: "regex",
                        value: "DNS",
                        $t: /; [MP][7-8][1-9][q|g]{1,2}/,
                      },
                      {
                        type: "regex",
                        value: "FinePower",
                        $t: /(?:FinePower [a-zA-Z0-9]*)/,
                      },
                      { type: "string", value: "Torque", $t: "DROIDZ" },
                      {
                        type: "string",
                        value: "Discovery",
                        $t: "Discovery v9",
                      },
                      { type: "string", value: "E-Boda", $t: "E-Boda" },
                      { type: "string", value: "Ebest", $t: "; EBEST" },
                      { type: "string", value: "Evercoss", $t: "EVERCOSS" },
                      { type: "string", value: "Elephone", $t: "Elephone" },
                      { type: "regex", value: "Elephone", $t: /P9000/ },
                      { type: "regex", value: "Etuline", $t: /(ETL\-[^ ]+)/ },
                      { type: "string", value: "Modecom", $t: "FreeTab" },
                      { type: "string", value: "G-TiDE", $t: "G-TiDE" },
                      { type: "string", value: "GFive", $t: "GFIVE" },
                      {
                        type: "string",
                        value: "General Satellite",
                        $t: "GS700",
                      },
                      {
                        type: "regex",
                        value: "General Mobile",
                        $t: /(?:etab5|e\-tab4|General Mobile|GM 5 Plus)/,
                      },
                      { type: "string", value: "Ghia", $t: "Ghia" },
                      {
                        type: "regex",
                        value: "Telefunken",
                        $t: /(?:Telefunken)/,
                      },
                      {
                        type: "regex",
                        value: "Starlight",
                        $t: /(?:Starlight[_ ]I[_\- ]STAR[_\- ]PLUS)/,
                      },
                      { type: "regex", value: "IUNI", $t: /(?:IUNI[_\- ]N1)/ },
                      {
                        type: "regex",
                        value: "Geotel",
                        $t: /(?:GEOTEL[-_ ]Note)/,
                      },
                      { type: "string", value: "Jinga", $t: "JINGA" },
                      { type: "string", value: "Jinga", $t: "M500-1" },
                      { type: "regex", value: "Jinga", $t: /Basco (L3|S2)/ },
                      {
                        type: "regex",
                        value: "Jinga",
                        $t: /(?:START3G|PASSPLUS)/,
                      },
                      { type: "string", value: "Basco", $t: "Basco" },
                      { type: "string", value: "Gionee", $t: "GIONEE" },
                      { type: "string", value: "GoClever", $t: "GOCLEVER" },
                      { type: "string", value: "Hoow", $t: "HOOW" },
                      { type: "string", value: "Hosin", $t: "HOSIN" },
                      { type: "string", value: "Haier", $t: "Haier" },
                      {
                        type: "regex",
                        value: "Wileyfox",
                        $t: /(?:Wileyfox|Swift 2)/,
                      },
                      {
                        type: "regex",
                        value: "Highscreen",
                        $t: /(?:Highscreen|VergeM|Ice2| Thor|Spade|Yummy-Duo|Zera[ |_|\-][^ ]*)/,
                      },
                      {
                        type: "regex",
                        value: "Highscreen",
                        $t: /(?:Boost|Prime (?:S|Mini)|Spark|Alpha R|Spider|Pure [FJ]|PowerFour|Hercules|Power Ice)/,
                      },
                      {
                        type: "regex",
                        value: "Highscreen",
                        $t: /(?:Power Rage|Bay|Pure[_ ]Power|Easy [FL]|TCL J620|Power ?Five|Prime L|Razar)/,
                      },
                      {
                        type: "regex",
                        value: "Highscreen",
                        $t: /(?:FEST(XL)?(\-PRO)?)/,
                      },
                      { type: "string", value: "Impression", $t: "IMPAD" },
                      {
                        type: "regex",
                        value: "Vertex",
                        $t: /(?:Impress|Vertex|EAGLE_4G|BACCARA|LION_DUAL)/,
                      },
                      { type: "string", value: "Infinix", $t: "Infinix" },
                      { type: "string", value: "Intex", $t: "Intex" },
                      { type: "regex", value: "JIAYU", $t: /(?:JIAYU|; JY\-)/ },
                      {
                        type: "regex",
                        value: "Uhans",
                        $t: /(?:UHANS|U[123]00|A101S)/,
                      },
                      { type: "string", value: "JXD", $t: "JXD" },
                      { type: "string", value: "K-Touch", $t: "K-Touch" },
                      { type: "string", value: "Keneksi", $t: "KENEKSI" },
                      { type: "string", value: "KONKA", $t: "KONKA" },
                      { type: "string", value: "KPT", $t: "KPT" },
                      { type: "string", value: "Karbonn", $t: "Karbonn" },
                      { type: "string", value: "KliTON", $t: "KliTON" },
                      { type: "string", value: "Medion", $t: "lifetab" },
                      { type: "string", value: "Lenco", $t: "Lenco" },
                      { type: "string", value: "Lovme", $t: "Lovme" },
                      { type: "string", value: "Malata", $t: "Malata" },
                      { type: "string", value: "MaPan", $t: "Mapan" },
                      { type: "string", value: "Maxtron", $t: "Maxtron" },
                      { type: "string", value: "MEEG", $t: "MEEG" },
                      { type: "string", value: "MITO", $t: "MITO" },
                      { type: "string", value: "Mlled", $t: "MLLED" },
                      { type: "string", value: "Masstel", $t: "Masstel" },
                      {
                        type: "regex",
                        value: "MegaFon",
                        $t: /(?:Megafon|MT3A|MFLogin[^ ]*|MS3B)/,
                      },
                      { type: "string", value: "Nokia", $t: "; N1" },
                      { type: "string", value: "Mobiistar", $t: "Mobiistar" },
                      {
                        type: "regex",
                        value: "Motorola",
                        $t: /(?:Motorola|Moto[GE][23]|MOTO?[\-\/_ ]+)/,
                      },
                      { type: "string", value: "OBEE", $t: "OBEE" },
                      { type: "string", value: "Onida", $t: "Onida" },
                      { type: "string", value: "Oppo", $t: "; OPPO" },
                      { type: "string", value: "Opsson", $t: "OPSSON" },
                      {
                        type: "regex",
                        value: "OnePlus",
                        $t: /(?:OnePlus|A0001|ONE E1003)/,
                      },
                      {
                        type: "regex",
                        value: "Digma",
                        $t: /; (?:Optima|VOX|CITI|LINX)[ \-\/_]/,
                      },
                      {
                        type: "regex",
                        value: "4Good",
                        $t: /(?:; T7[0-9][0-9][im]|; Light[_ \-]AT?[0-9]{3}|S501m|4Good|Light B100)/,
                      },
                      {
                        type: "regex",
                        value: "Oysters",
                        $t: /(?:Oysters|(Arctic|Pacific|Atlantic|Indian[ |_|\-]?[0-9]{3})|; T[0-9]{2,3}[a-z]{0,3}[ _\-]3G|7X 3G|; T[7-8][0-9][^ ]+)/,
                      },
                      { type: "string", value: "Axioo", $t: "PICOPad" },
                      { type: "string", value: "Piranha", $t: "Piranha" },
                      { type: "string", value: "Pegatron", $t: "chagall" },
                      {
                        type: "regex",
                        value: "Harga HP",
                        $t: /(?:Polytron|; Treq)/,
                      },
                      { type: "string", value: "PocketBook", $t: "PocketBook" },
                      { type: "string", value: "Prestigio", $t: "Prestigio" },
                      { type: "string", value: "iGO", $t: "; Primo" },
                      { type: "string", value: "QSmart", $t: "Q-Smart" },
                      { type: "string", value: "QMobile", $t: "QMobile" },
                      { type: "string", value: "QUMO", $t: "QUMO" },
                      { type: "string", value: "Ramos", $t: "Ramos" },
                      {
                        type: "regex",
                        value: "Rover",
                        $t: /(?:RoverPad|Air 7.85 3G)/,
                      },
                      { type: "string", value: "Rover", $t: "Rover" },
                      { type: "string", value: "Ritmix", $t: "Ritmix" },
                      { type: "string", value: "SUPRA", $t: "SUPRA" },
                      { type: "string", value: "Spice", $t: "; Spice" },
                      { type: "string", value: "Symphony", $t: "; Symphony" },
                      { type: "string", value: "Tesla", $t: "; Tesla" },
                      { type: "string", value: "T-Smart", $t: "; T-Smart" },
                      { type: "string", value: "Tooky", $t: "; TOOKY" },
                      { type: "string", value: "Toshiba", $t: "; Toshiba" },
                      { type: "regex", value: "Vivax", $t: /TPC\-[0-9]{4}/ },
                      {
                        type: "regex",
                        value: "Denver",
                        $t: /TA[DQ]\-[0-9]{5}/,
                      },
                      { type: "regex", value: "Ritmix", $t: /RMD\-[0-9]{3}/ },
                      { type: "string", value: "MyPhone", $t: "; MyPhone" },
                      {
                        type: "regex",
                        value: "Xiaomi",
                        $t: /(?:2014811|2014817|2014813|2014818| 2013023|Xiaomi |; MI[ \-]|HM (NOTE )?1|Redmi|MIX 2)/,
                      },
                      {
                        type: "regex",
                        value: "Xiaomi",
                        $t: /(?:POCO(PHONE)? F1)/,
                      },
                      { type: "string", value: "TurboPad", $t: "; TurboPad" },
                      { type: "string", value: "UMI", $t: "; UMI" },
                      { type: "regex", value: "UMI", $t: /ROME[_ ]X/ },
                      { type: "string", value: "Uoogou", $t: "; Uoogou" },
                      { type: "string", value: "UTime", $t: "UTime" },
                      { type: "string", value: "DEXP", $t: "Ursus" },
                      { type: "string", value: "Voto", $t: "Voto" },
                      { type: "string", value: "Vexia", $t: "Vexia" },
                      { type: "string", value: "Viewsonic", $t: "ViewPad" },
                      { type: "string", value: "Woxter", $t: "Woxter" },
                      {
                        type: "regex",
                        value: "teXet",
                        $t: /(?:teXet|X\-basic|NaviPad|X\-medium|X-pad|; TM-[0-9]{3,4}[a-z]{0,2}|X\-PLUS)/,
                      },
                      { type: "string", value: "XOLO", $t: "XOLO" },
                      { type: "string", value: "Sony", $t: "XPERIA" },
                      { type: "string", value: "Yusun", $t: "Yusun" },
                      { type: "string", value: "Zopo", $t: "Zopo" },
                      { type: "regex", value: "Zopo", $t: /; ZP[0-9]{3}/ },
                      { type: "string", value: "Storex", $t: "; eZee" },
                      { type: "string", value: "i-Mobile", $t: "; i-mobile" },
                      { type: "string", value: "iBall", $t: "; iBall" },
                      { type: "string", value: "iOcean", $t: "; iOcean" },
                      { type: "string", value: "Lava", $t: "; iris" },
                      { type: "string", value: "Rombica", $t: "Rombica" },
                      { type: "regex", value: "NEO", $t: /NEO[\- ][XGZ][0-9]/ },
                      { type: "regex", value: "Ainol", $t: /Novo ?(7|10)/ },
                      { type: "regex", value: "KNC", $t: /MD\-?[0-9]{3,4}/ },
                      {
                        type: "regex",
                        value: "LeEco",
                        $t: /(LEX[0-9][0-9][0-9])/,
                      },
                      {
                        type: "regex",
                        value: "Leagoo",
                        $t: /(?:Elite [0-9]+)/,
                      },
                      {
                        type: "regex",
                        value: "Lexibook",
                        $t: /MFC[0-9]{3}[a-z]{2}/,
                      },
                      { type: "regex", value: "ASUS", $t: /ME\-?[0-9]{3}/ },
                      {
                        type: "regex",
                        value: "BQ",
                        $t: /(?:BQS?[ \-_]|BQ7008G)/,
                      },
                      {
                        type: "regex",
                        value: "BQ",
                        $t: /(?:BQru[a-zA-Z0-9\-_]|AQUARIS (M5|U LITE|U PLUS))/,
                      },
                      {
                        type: "regex",
                        value: "Acer",
                        $t: /(?: (?:a1|a3|b1|g1)\-(?:[0-9]|[a-z]){3}|Z520)/,
                      },
                      { type: "string", value: "PPTV", $t: "KING 7" },
                      { type: "string", value: "Alcatel", $t: "Alcatel" },
                      {
                        type: "regex",
                        value: "Amazon",
                        $t: /(?:amazon|KFTT|KFFOWI)/,
                      },
                      {
                        type: "regex",
                        value: "Fly",
                        $t: /(?:; iq[0-9]{3,4}|; FS[4-5][0-9]{2}|Evo Energy4|Fly)/,
                      },
                      {
                        type: "regex",
                        value: "Fly",
                        $t: /(?:POWER PLUS [035]{1,4}|PHOTO[ _\-]PRO|LIFE (PLAY|JET|ACE))/,
                      },
                      { type: "string", value: "Coolpad", $t: "Coolpad" },
                      {
                        type: "regex",
                        value: "Smartfren",
                        $t: /(?:Andromax|Smartfren)/,
                      },
                      {
                        type: "regex",
                        value: "Zte",
                        $t: /(?:zte|NX[4-5][0-9]{2}[A-Z]?|Blade S6|Light Tab 2)/,
                      },
                      { type: "string", value: "Thl", $t: "Thl" },
                      { type: "string", value: "Minix", $t: "Minix" },
                      {
                        type: "regex",
                        value: "Minix",
                        $t: /(?: [A-Z]{3}\-[A-Z][0-9]\-[A-Z][ ;\)])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:U8836D|HONOR|HUAWEI)/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[ _\(\-][A-Z]{3}\-[A-Z]{2}[0-9]{1,2}[A-Z]?[ _\);])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[ _\(\-][A-Z]{3}\-[A-Z][0-9]{2}[A-Z]{0,2}[ _\);])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[ _\(\-][A-Z][0-9]{2}\-[A-Z][0-9]{2}[ _\);])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[ _\(\-][A-Z]{2}[0-9]\-[A-Z][0-9]{2}[ _\);])/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:Mediapad|Ascend|; G700|; u[89][0-9]{3}|CHM-[^ ]+|CHE2-[^ ]+)/,
                      },
                      {
                        type: "regex",
                        value: "Huawei",
                        $t: /(?:[ _](GEM|PLE)\-[0-9]{3}[A-Z][ _\);])/,
                      },
                      {
                        type: "regex",
                        value: "Prestigio",
                        $t: /(pmt[0-9]{4}|pmt-[0-9]{3}|psp[0-9]{4}|pmp[0-9]{4}|pap[0-9]{4})/,
                      },
                      {
                        type: "regex",
                        value: "Alcatel",
                        $t: /(?:tcl[ \-_]|one[_ ]?touch|I216X)/,
                      },
                      {
                        type: "regex",
                        value: "ASUS",
                        $t: /(?:Asus|padfone|Transformer)/,
                      },
                      { type: "string", value: "ARCHOS", $t: "Archos" },
                      { type: "string", value: "ADVAN", $t: "advan_" },
                      { type: "string", value: "AKAI", $t: "akai" },
                      { type: "string", value: "Allview", $t: "allview" },
                      { type: "string", value: "Amaze", $t: "amaze" },
                      { type: "string", value: "AMOI", $t: "AMOI" },
                      {
                        type: "regex",
                        value: "Casper",
                        $t: /(?:Casper|VIA_V8C)/,
                      },
                      { type: "string", value: "Dell", $t: "Dell" },
                      { type: "string", value: "DNS", $t: "airtab" },
                      { type: "string", value: "Digma", $t: "digma" },
                      { type: "string", value: "Explay", $t: "; HIT Build" },
                      {
                        type: "regex",
                        value: "Digma",
                        $t: /(?:; HIT |; TT[0-9]{3,5}[MWAGP]|FT3001PM|iDxD[0-9]+|; MID )/,
                      },
                      { type: "string", value: "Azumi", $t: "azumi" },
                      {
                        type: "regex",
                        value: "Dell",
                        $t: /(?:; venue|inspiron)/,
                      },
                      {
                        type: "string",
                        value: "TurboPhone4G",
                        $t: "TurboPhone4G",
                      },
                      { type: "string", value: "Fly", $t: "COMPACT" },
                      { type: "string", value: "Ematic", $t: "egd" },
                      { type: "string", value: "Gigabyte", $t: "gsmart" },
                      {
                        type: "regex",
                        value: "Hisense",
                        $t: /(hisense|hs\-|led[0-9]{2})/,
                      },
                      { type: "string", value: "Keener", $t: "K-8S" },
                      { type: "regex", value: "HP", $t: /hp[ \;]/ },
                      {
                        type: "regex",
                        value: "Sony",
                        $t: /(?:SGPT?|SOL?)\-?[0-9]+/,
                      },
                      { type: "string", value: "Infocus", $t: "infocus" },
                      { type: "string", value: "Kazam", $t: "kazam" },
                      { type: "string", value: "Lanix", $t: "ilium" },
                      { type: "string", value: "Panasonic", $t: "panasonic" },
                      {
                        type: "regex",
                        value: "Pantech",
                        $t: /; im-a[0-9]{3}[a-z]/,
                      },
                      {
                        type: "regex",
                        value: "Philips",
                        $t: /(?:philips|W6500|W626|W732)/,
                      },
                      { type: "string", value: "Positivo", $t: "Positivo" },
                      { type: "regex", value: "Proscan", $t: /; plt[0-9]{4}/ },
                      { type: "string", value: "Positivo", $t: "ypy" },
                      { type: "string", value: "Tecno", $t: "; tecno" },
                      {
                        type: "regex",
                        value: "MTC",
                        $t: /(?:MTC[ |_]?[0-9]*|SMART[_ ]?(?:Start|Sprint|Run|Surf|Race|Turbo|Pro|Light))/,
                      },
                      {
                        type: "regex",
                        value: "MediaMarkt",
                        $t: /(?:3GD52i|3GDi10)/,
                      },
                      {
                        type: "regex",
                        value: "Sharp",
                        $t: /(?:sh-[0-9]{2}[a-z]?|sbm[0-9]{3,4}|FS80[019]{2})/,
                      },
                      {
                        type: "regex",
                        value: "Micromax",
                        $t: /(?:micromax|Spark|AQ[0-9]{4} Canvas Power)/,
                      },
                      {
                        type: "regex",
                        value: "Microsoft",
                        $t: /(?:Microsoft|rm-[0-9]{4})/,
                      },
                      {
                        type: "regex",
                        value: "Motorola",
                        $t: /; xt\-?[0-9]{3,4}/,
                      },
                      {
                        type: "regex",
                        value: "Lenovo",
                        $t: /(?:IdeaTab|YOGA|Athens15|; K[13] |Tab2A7\-[12]0F|A536|ZUK Z[1-4]+|Z2 Plus|TAB 3G 7-2)/,
                      },
                      {
                        type: "regex",
                        value: "Lenovo",
                        $t: /(?:TB2-X30L|TB-X304F|K350T)/,
                      },
                      { type: "string", value: "Amazon", $t: "Kindle" },
                      { type: "string", value: "ARCHOS", $t: "ARCHOS" },
                      { type: "string", value: "HYUNDAI", $t: "HYUNDAI" },
                      {
                        type: "regex",
                        value: "Wexler",
                        $t: /(?:WEXLER|TAB10IS|TAB 8iQ|ULTIMA 7)/,
                      },
                      {
                        type: "regex",
                        value: "Thl",
                        $t: /(?:W[1-2]00|[ \-\/_]T07[ \-\/_])/,
                      },
                      { type: "string", value: "Tesco", $t: "Hudl" },
                      {
                        type: "regex",
                        value: "ASUS",
                        $t: /(?:;[ ][KZ]0(?:[0-9|a-z0-9_]){2}|K00[FL7CEGKRUYZ]|G55[02]KL|C103)/,
                      },
                      { type: "regex", value: "ASUS", $t: /P0[0-9][a-z0-9_]/ },
                      {
                        type: "regex",
                        value: "HP",
                        $t: /(?:Hewlett\-Packard|Slate)/,
                      },
                      { type: "string", value: "Palm", $t: "Palm" },
                      { type: "string", value: "MEDION", $t: "MEDION" },
                      { type: "string", value: "ASUS", $t: "Transformer Pad" },
                      {
                        type: "regex",
                        value: "ASUS",
                        $t: /Z[ABCDES][0-9]{3}K[LG]/,
                      },
                      { type: "string", value: "Avea", $t: "Avea" },
                      { type: "string", value: "Hasee", $t: "Hasee" },
                      {
                        type: "regex",
                        value: "MARSHALL",
                        $t: /(MARSHALL|LONDON)/,
                      },
                      {
                        type: "regex",
                        value: "TP-Link",
                        $t: /(?:NEFFOS|TP601A|X1[ _\-]Light)/,
                      },
                      { type: "string", value: "Pyle", $t: "PTBL102BCD" },
                      { type: "string", value: "Newman", $t: "Newman" },
                      { type: "string", value: "Leagoo", $t: "LEAGOO" },
                      {
                        type: "regex",
                        value: "Blackview",
                        $t: /(?:BV[456789][0568]00([_ ]?Pro)?([_-]RU)?(\-F)*|[ \-\/_]A8[ \-\/_]|A7Pro|P10000[ _]Pro)/,
                      },
                      {
                        type: "regex",
                        value: "Oppo",
                        $t: /(?:R2001|A3[37]F|F1F|A1601|CPH1[6789][0-9]{2})/,
                      },
                      {
                        type: "regex",
                        value: "Mediatek",
                        $t: /(?:MT6572\/V[0-9]|MT6572_TD\/V[0-9])/,
                      },
                      { type: "string", value: "Mlais", $t: "Mlais" },
                      {
                        type: "regex",
                        value: "Meizu",
                        $t: /(?:Meizu|; (MZ-)?mx?[0-9]s? |MX[456]|; M[4-5][0-9]{2}[a-z]|PRO [567]|M3[se]|M5(?:c|s)|U[12]0|M6T)/,
                      },
                      { type: "regex", value: "Meizu", $t: /(?:M040)/ },
                      { type: "string", value: "Meizu", $t: "15 LITE" },
                      {
                        type: "regex",
                        value: "Doogee",
                        $t: /[ \-\/_](?:DAGGER|X5 |X[5679]pro|X5max|X5s|DG500|X595|X550|Shoot_[12]|Y6(\) \-\/_)?)/,
                      },
                      {
                        type: "regex",
                        value: "Doogee",
                        $t: /(?:BL[12579]{1,2}000|TITANS2_DG700| X[23]0L?[ \);]|Y6C|X60L|X5[35])/,
                      },
                      {
                        type: "regex",
                        value: "Doogee",
                        $t: /(?:Valencia2[ _\-]Y100pro)/,
                      },
                      {
                        type: "regex",
                        value: "Wiko",
                        $t: /(?:Darkmoon|DARKSIDE|DARKNIGHT|DARKFULL|LENNY2)/,
                      },
                      {
                        type: "regex",
                        value: "NVidia",
                        $t: /(?:NVidia|SHIELD Tablet)/,
                      },
                      { type: "regex", value: "Plark", $t: /; PLARK\-P[0-9]+/ },
                      { type: "regex", value: "Lark", $t: /; LARK/ },
                      { type: "regex", value: "Dark", $t: /; Dark/ },
                      {
                        type: "regex",
                        value: "Alcatel",
                        $t: /(?:[ ;\(][13456789][02][0-9]{2}([ADFIKQXY])?(_RU)?[ \);])/,
                      },
                      {
                        type: "regex",
                        value: "Explay",
                        $t: /(?:Explay| (Advance TV|Flame|Joy_TV|Blaze|Prime|Vision|Sky|Atlant|Polo|M2 3G|Joy|Infinityll|Art 3G) |; i1 |HD Quad)/,
                      },
                      {
                        type: "regex",
                        value: "Explay",
                        $t: /(?:Star TV|Craft|Five|X\-tremer|Surfer|Alto|Fresh| Rio|sQuad|Golf|Tornado|Vega|Indigo|A350|A400|Stark|Bit|D[0-9].[0-9] 3G)/,
                      },
                      {
                        type: "regex",
                        value: "Explay",
                        $t: /(?:Scream 3G|XL2 3G|MiniTV 3G|solo|Sky Plus|Easy|Atom|Trend 3G|Pulsar|Onyx|CinemaTV 3G|; Light)/,
                      },
                      { type: "regex", value: "Explay", $t: /(?:Style ;)/ },
                      {
                        type: "regex",
                        value: "Explay",
                        $t: /(; A[3-4][0-9]{2} )/,
                      },
                      {
                        type: "regex",
                        value: "Explay",
                        $t: /; A500 .*Mobile Safari/,
                      },
                      { type: "regex", value: "Acer", $t: /; A[0-9]{3,4}/ },
                      {
                        type: "regex",
                        value: "Acer",
                        $t: /(?:Aspire|A501|A510|A511|A200|A210|A701|A211|M973W|V360|V370|E39|Z500) Build/,
                      },
                      {
                        type: "regex",
                        value: "Sony",
                        $t: /(?:LT15i|LT18i|LT22i|LT25i|LT26i|LT26ii|LT26w|LT28h|LT29i|ST18i|ST21i|ST21i2|ST23i|ST25i|ST26i|ST27i|E2115|MT27i)/,
                      },
                      {
                        type: "regex",
                        value: "Vodafone",
                        $t: /(?:Vodafone[ \-_]|VFD[ _\-]600)/,
                      },
                      {
                        type: "regex",
                        value: "Vestel",
                        $t: /(?:Vestel|; VSP[0-9]{3}[a-z]?|venus[ _\-]V3)/,
                      },
                      { type: "regex", value: "Cubot", $t: /(?:CUBOT|S200)/ },
                      { type: "string", value: "Tele2", $t: "Tele2" },
                      {
                        type: "regex",
                        value: "Nomi",
                        $t: /(?:Nomi|i500|i5030)/,
                      },
                      { type: "string", value: "Viking", $t: "Viking" },
                      {
                        type: "regex",
                        value: "HOMTOM",
                        $t: /HT[0-9]{1,2}(?:Pro)?/,
                      },
                      { type: "string", value: "Senkatel", $t: "Senkatel" },
                      { type: "string", value: "SENSEIT", $t: "SENSEIT" },
                      {
                        type: "regex",
                        value: "Telefunken",
                        $t: /(TF\-MID9707G|TF\-MID1007G)/,
                      },
                      { type: "regex", value: "Acer", $t: /T0[12348]/ },
                      {
                        type: "regex",
                        value: "TurboPhone4G",
                        $t: /(TurboPhone4G|compact1210)/,
                      },
                      {
                        type: "regex",
                        value: "LeEco",
                        $t: /; (?:Le|Letv) (?:[a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+)/,
                      },
                      {
                        type: "regex",
                        value: "LeEco",
                        $t: /X[34]\-[4-9][0-9]/,
                      },
                      { type: "string", value: "LeEco", $t: "C106-9" },
                      { type: "string", value: "LeEco", $t: "C1-U02" },
                      {
                        type: "regex",
                        value: "Leagoo",
                        $t: /(?:KIICAA (POWER|MIX)|Shark 1|T5C)/,
                      },
                      {
                        type: "regex",
                        value: "Bluboo",
                        $t: /(?:Maya|Picasso|Bluboo)/,
                      },
                      {
                        type: "regex",
                        value: "Cubot",
                        $t: /(?:RAINBOW|RAINBOW [0-9]+)/,
                      },
                      { type: "string", value: "RITZVIVA", $t: "RITZVIVA" },
                      {
                        type: "regex",
                        value: "BlackBerry",
                        $t: /(ST[VH]100\-[0-9]|BB[ABD]100\-[267])/,
                      },
                      {
                        type: "regex",
                        value: "OUKITEL",
                        $t: /(?:K6000( Pro| Plus)?|K10000|K[45]000|U(7|16) (PLUS|MAX)|U1[56] PRO| C8 |C(5|12)[_ ]PRO|K7 POWER)/,
                      },
                      { type: "regex", value: "M-net", $t: /(?:Power[ _]1)/ },
                      { type: "string", value: "Ulefone", $t: "Ulefone" },
                      {
                        type: "regex",
                        value: "Ulefone",
                        $t: /(?:Power[ _](2|3[s]?|5))/,
                      },
                      { type: "string", value: "Ulefone", $t: "S8_PRO" },
                      { type: "string", value: "Ulefone", $t: "U008 PRO" },
                      { type: "string", value: "Caterpillar", $t: "S60" },
                      {
                        type: "regex",
                        value: "Black Fox",
                        $t: /(BMM[ \-\/_][45][34][123][ \-\/_]?[DS])/,
                      },
                      { type: "regex", value: "AGM", $t: /(?:AGM )/ },
                      { type: "string", value: "Phicomm", $t: "Phicomm" },
                      { type: "string", value: "GeoTel", $t: "GEOTEL G1" },
                      { type: "string", value: "Apls", $t: "GGXQ6580_WEG_L" },
                      { type: "string", value: "Jinga", $t: "STORM" },
                      { type: "regex", value: "INOI", $t: /(?:INOI)/ },
                      { type: "string", value: "Turbo", $t: "TURBOX_RAY" },
                      { type: "string", value: "Turbo", $t: "TURBOX5SPACE" },
                      { type: "string", value: "DEXP", $t: "C6" },
                      { type: "string", value: "Mann", $t: "ZUG 5S" },
                      { type: "string", value: "Artel", $t: "Adi 5S" },
                      { type: "string", value: "Vernee", $t: "VERNEE" },
                      { type: "regex", value: "Vernee", $t: /(?:APOLLO LITE)/ },
                      {
                        type: "regex",
                        value: "GINZZU",
                        $t: /(?:GINZZU|S5[01][25]0)/,
                      },
                      { type: "string", value: "Ark", $t: "S504" },
                      {
                        type: "regex",
                        value: "DEXP",
                        $t: /(?:GL255|ES750|ML450|;[\(\) _]B[1234][45][05][\(\) _])/,
                      },
                      {
                        type: "regex",
                        value: "Firefly",
                        $t: /(?:AURII[ \-\/_]Passion)/,
                      },
                      {
                        type: "regex",
                        value: "Jinga",
                        $t: /(?:OPTIM4G|TOUCH4G|[ \-\/_]PASS[ \-\/_]|Joy[ \-_]Pro)/,
                      },
                      { type: "string", value: "Doogee", $t: "MIX Lite" },
                      { type: "string", value: "Doogee", $t: "MIX_2" },
                      { type: "string", value: "Xiaomi", $t: "MIX" },
                      { type: "string", value: "Yandex", $t: "YNDX-000SB" },
                      { type: "string", value: "Maxvi", $t: "MAXVI_MS401" },
                      { type: "string", value: "Teclast", $t: "X80 Power" },
                      {
                        type: "string",
                        value: "Teclast",
                        $t: "TbooK 16 Power",
                      },
                      { type: "string", value: "Teclast", $t: "X10 Plus" },
                      { type: "string", value: "Santin", $t: "Santin Power" },
                      { type: "string", value: "Pixus", $t: "hiPower" },
                      { type: "regex", value: "SAMSUNG", $t: /(?:Ativ|N8000)/ },
                      { type: "string", value: "Turkcell", $t: "Turkcell" },
                      {
                        type: "string",
                        value: "General Mobile",
                        $t: "Discovery",
                      },
                      { type: "regex", value: "Meizu", $t: /(?:16th)/ },
                      { type: "regex", value: "Noa", $t: /(?:NOA[_ ]H10le)/ },
                    ],
                  },
                  {
                    name: "DeviceName",
                    pattern: [
                      { type: "string", value: "Acer Liquid E1", $t: "V360" },
                      { type: "string", value: "Acer Liquid E2", $t: "V370" },
                      {
                        type: "string",
                        value: "ActiveD 7.4 3G",
                        $t: "ActiveD 7.4 3G",
                      },
                      {
                        type: "string",
                        value: "ActiveD 8.2 3G",
                        $t: "ActiveD 8.2 3G",
                      },
                      { type: "regex", value: "AirTab 10.1", $t: /[MP]100q/ },
                      { type: "string", value: "AirTab 9.7", $t: "MS9702" },
                      { type: "string", value: "AirTab E79", $t: "E79" },
                      { type: "string", value: "AirTab ES9701", $t: "ES9701" },
                      { type: "string", value: "AirTab", $t: "P71qg" },
                      { type: "string", value: "Alpha GT", $t: "Alpha GT" },
                      { type: "string", value: "Alpha GTR", $t: "Alpha GTR" },
                      { type: "string", value: "Alpha Rage", $t: "Alpha Rage" },
                      { type: "string", value: "Alto", $t: "Alto" },
                      { type: "string", value: "Arc S", $t: "LT18i" },
                      { type: "regex", value: "Ascend D1", $t: /U95[10]0/ },
                      {
                        type: "string",
                        value: "Ascend G300",
                        $t: "HUAWEI U8815",
                      },
                      {
                        type: "string",
                        value: "Ascend G330",
                        $t: "HUAWEI U8825-1",
                      },
                      {
                        type: "string",
                        value: "Ascend G500 Pro",
                        $t: "U8836D",
                      },
                      { type: "string", value: "Ascend P1", $t: "U9200" },
                      { type: "string", value: "Ascend P1 XL", $t: "U9200E" },
                      {
                        type: "string",
                        value: "Ascend P6",
                        $t: "HUAWEI P6-U06",
                      },
                      {
                        type: "string",
                        value: "Ascend Y201 Pro",
                        $t: "HUAWEI U8666E",
                      },
                      {
                        type: "regex",
                        value: "Ativ S",
                        $t: /(?:Ativ S|GT-I8750)/,
                      },
                      { type: "string", value: "Boost", $t: "Boost" },
                      {
                        type: "string",
                        value: "Communicator",
                        $t: "Communicator",
                      },
                      { type: "string", value: "Cookie Smart", $t: "T375" },
                      {
                        type: "string",
                        value: "Daewoo Electronics",
                        $t: "DTR-07FSBH",
                      },
                      {
                        type: "string",
                        value: "Desire HD",
                        $t: "HTC Desire HD A9191",
                      },
                      { type: "string", value: "Diamond", $t: "IQ444" },
                      { type: "string", value: "Digma", $t: "MS3B" },
                      { type: "string", value: "Dream", $t: "Dream" },
                      {
                        type: "string",
                        value: "E615 Optimus L5 Dual",
                        $t: "LG-E615",
                      },
                      { type: "string", value: "Energie", $t: "IQ440" },
                      { type: "string", value: "Ericsson Hallon", $t: "MT15i" },
                      {
                        type: "string",
                        value: "Ericsson Xperia neo V",
                        $t: "MT11i",
                      },
                      {
                        type: "string",
                        value: "EVO 3D",
                        $t: "HTC EVO 3D X515m",
                      },
                      { type: "string", value: "Evoke", $t: "IQ430" },
                      {
                        type: "string",
                        value: "Evolution Tab-970",
                        $t: "rk30sdk",
                      },
                      {
                        type: "string",
                        value: "Explay A350 TV",
                        $t: "A350 TV",
                      },
                      { type: "string", value: "Explay A351", $t: "A351" },
                      { type: "string", value: "Explay A400", $t: "A400" },
                      { type: "string", value: "Five", $t: "Five" },
                      { type: "string", value: "Fonepad", $t: "ME371MG" },
                      { type: "string", value: "G2", $t: "JY-G2" },
                      { type: "string", value: "G2", $t: "LG-D802" },
                      { type: "string", value: "G3", $t: "JIAYU G3" },
                      { type: "string", value: "G3", $t: "JY-G3" },
                      {
                        type: "regex",
                        value: "Galaxy A3",
                        $t: /SM\-A3[012]0[FH]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy A5",
                        $t: /SM\-A5[012]0[FH]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy A7",
                        $t: /SM\-A7[012]0[FH]/,
                      },
                      { type: "string", value: "Galaxy A8", $t: "SM-A800F" },
                      { type: "string", value: "Galaxy A9", $t: "SM-A9000" },
                      {
                        type: "regex",
                        value: "Galaxy Ace 3",
                        $t: /GT\-S727[02]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Ace 4 Duos",
                        $t: /(?:GT\-G313H|SM\-G313HU)/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Ace 4 Neo",
                        $t: /(?:GT\-G318H|SM\-G318H)/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Ace 4 Lite",
                        $t: /(?:GT\-G313H|SM\-G313H)/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Ace Duos",
                        $t: "GT-S6802",
                      },
                      {
                        type: "string",
                        value: "Galaxy Ace Style",
                        $t: "SM-G357",
                      },
                      { type: "string", value: "Galaxy Ace", $t: "GT-S5830" },
                      {
                        type: "string",
                        value: "Galaxy Ace II",
                        $t: "GT-I8160",
                      },
                      {
                        type: "string",
                        value: "Galaxy Ace II X",
                        $t: "GT-S7560",
                      },
                      {
                        type: "string",
                        value: "Galaxy Ace Plus",
                        $t: "GT-S7500",
                      },
                      { type: "string", value: "Galaxy Alpha", $t: "SM-G850F" },
                      { type: "string", value: "Galaxy Core", $t: "GT-I8262" },
                      {
                        type: "string",
                        value: "Galaxy Core Advance",
                        $t: "GT-I8580",
                      },
                      {
                        type: "string",
                        value: "Galaxy Core 2",
                        $t: "SM-G355H",
                      },
                      {
                        type: "string",
                        value: "Galaxy Core LTE",
                        $t: "GT-G386F",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Core Prime",
                        $t: /SM\-G36[01]H/,
                      },
                      { type: "regex", value: "Galaxy E5", $t: /SM\-E500[FH]/ },
                      { type: "string", value: "Galaxy E7", $t: "SM-E700F" },
                      {
                        type: "regex",
                        value: "Galaxy Fame",
                        $t: /(?:GT\-S6790|GT\-S6810)/,
                      },
                      { type: "string", value: "Galaxy On7", $t: "SM-E600F" },
                      { type: "string", value: "Galaxy Gio", $t: "GT-S5660" },
                      {
                        type: "regex",
                        value: "Galaxy Grand 2",
                        $t: /SM\-G710[025]/,
                      },
                      { type: "string", value: "Galaxy Grand", $t: "GT-I9082" },
                      {
                        type: "string",
                        value: "Galaxy Grand Neo",
                        $t: "GT-I9060",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Grand Prime",
                        $t: /SM\-G53[01][FH]/,
                      },
                      { type: "string", value: "Galaxy K Zoom", $t: "SM-C115" },
                      {
                        type: "regex",
                        value: "Galaxy J1 Mini",
                        $t: /SM\-J10[56][FH]/,
                      },
                      { type: "regex", value: "Galaxy J1", $t: /SM\-J1[012]0/ },
                      {
                        type: "string",
                        value: "Galaxy J1 Ace Neo",
                        $t: "SM-J111F",
                      },
                      {
                        type: "string",
                        value: "Galaxy J2 Prime",
                        $t: "SM-G532F",
                      },
                      { type: "regex", value: "Galaxy J2", $t: /SM\-J200[FH]/ },
                      { type: "regex", value: "Galaxy J3", $t: /SM\-J3[23]0/ },
                      {
                        type: "string",
                        value: "Galaxy J5 Prime",
                        $t: "SM-G570F",
                      },
                      {
                        type: "regex",
                        value: "Galaxy J5",
                        $t: /SM\-J5[0123]0[FH]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy J7 Prime",
                        $t: "SM-J610F",
                      },
                      {
                        type: "string",
                        value: "Galaxy J7 Neo",
                        $t: "SM-J701F",
                      },
                      {
                        type: "regex",
                        value: "Galaxy J7",
                        $t: /SM\-J7[0123]0[FH]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Mega 5.8",
                        $t: "GT-I9152",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Mega 6.3",
                        $t: /GT\-I920[05]/,
                      },
                      { type: "string", value: "Galaxy Mini", $t: "GT-S5570" },
                      {
                        type: "string",
                        value: "Galaxy Mini 2",
                        $t: "GT-S6500D",
                      },
                      {
                        type: "string",
                        value: "Galaxy Note 10.1 2014",
                        $t: "SM-P601",
                      },
                      {
                        type: "string",
                        value: "Galaxy Note 10.1",
                        $t: "GT-N8000",
                      },
                      { type: "string", value: "Galaxy Note 3", $t: "SM-N900" },
                      {
                        type: "string",
                        value: "Galaxy Note 3 Neo",
                        $t: "SM-N750",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Note 4",
                        $t: /SM\-N910[HFCG0]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Note 8",
                        $t: "SM-N950F",
                      },
                      {
                        type: "string",
                        value: "Galaxy Note 8.0",
                        $t: "GT-N5100",
                      },
                      { type: "string", value: "Galaxy Note", $t: "GT-N7000" },
                      {
                        type: "string",
                        value: "Galaxy Note Edge",
                        $t: "SM-N915F",
                      },
                      {
                        type: "string",
                        value: "Galaxy Note II",
                        $t: "GT-N7100",
                      },
                      {
                        type: "string",
                        value: "Galaxy Note II LTE",
                        $t: "GT-N7105",
                      },
                      {
                        type: "string",
                        value: "Galaxy Pocket",
                        $t: "GT-S5300",
                      },
                      {
                        type: "string",
                        value: "Galaxy Pocket duos",
                        $t: "GT-S5302",
                      },
                      {
                        type: "string",
                        value: "Galaxy Pocket Neo",
                        $t: "GT-S5310",
                      },
                      {
                        type: "string",
                        value: "Galaxy Premier",
                        $t: "GT-I9260",
                      },
                      { type: "string", value: "Galaxy R", $t: "GT-I9103" },
                      {
                        type: "string",
                        value: "Galaxy S3 Neo",
                        $t: "GT-I9301I",
                      },
                      { type: "string", value: "Galaxy S4", $t: "GT-I9500" },
                      {
                        type: "string",
                        value: "Galaxy S4 Active",
                        $t: "GT-I9295",
                      },
                      {
                        type: "string",
                        value: "Galaxy S4 Zoom",
                        $t: "SM-C101",
                      },
                      {
                        type: "string",
                        value: "Galaxy S4 VE LTE",
                        $t: "GT-I9515",
                      },
                      {
                        type: "string",
                        value: "Galaxy S4 LTE",
                        $t: "GT-I9505",
                      },
                      {
                        type: "string",
                        value: "Galaxy S4 LTE+",
                        $t: "GT-I9506",
                      },
                      {
                        type: "string",
                        value: "Galaxy S4 mini Duos",
                        $t: "GT-I9192",
                      },
                      {
                        type: "regex",
                        value: "Galaxy S4 mini",
                        $t: /GT\-I919[05]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy S5 Duos",
                        $t: "SM-G900FD",
                      },
                      {
                        type: "string",
                        value: "Galaxy S5 Neo",
                        $t: "SM-G903F",
                      },
                      {
                        type: "regex",
                        value: "Galaxy S5 Mini",
                        $t: /SM\-G800[HF]/,
                      },
                      { type: "string", value: "Galaxy S5", $t: "SM-G900" },
                      {
                        type: "string",
                        value: "Galaxy S5 Prime",
                        $t: "SM-G906S",
                      },
                      {
                        type: "string",
                        value: "Galaxy S5 LTE",
                        $t: "SM-G901F",
                      },
                      { type: "string", value: "Galaxy S6", $t: "SM-G920F" },
                      {
                        type: "string",
                        value: "Galaxy S6 Edge",
                        $t: "SM-G925F",
                      },
                      { type: "regex", value: "Galaxy S7", $t: /SM\-G93[05]F/ },
                      { type: "regex", value: "Galaxy S8", $t: /SM\-G95[05]F/ },
                      {
                        type: "string",
                        value: "Galaxy S Advance",
                        $t: "GT-I9070",
                      },
                      {
                        type: "string",
                        value: "Galaxy S Duos",
                        $t: "GT-S7562",
                      },
                      {
                        type: "string",
                        value: "Galaxy S Duos 2",
                        $t: "GT-S7582",
                      },
                      { type: "string", value: "Galaxy S", $t: "GT-I9000" },
                      { type: "string", value: "Galaxy S II", $t: "GT-I9100" },
                      {
                        type: "regex",
                        value: "Galaxy S III",
                        $t: /GT\-I930[05]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy S III mini",
                        $t: "GT-I8190",
                      },
                      {
                        type: "string",
                        value: "GALAXY S II Plus",
                        $t: "GT-I9105",
                      },
                      {
                        type: "string",
                        value: "Galaxy S Plus",
                        $t: "GT-I9001",
                      },
                      {
                        type: "string",
                        value: "Galaxy S scLCD",
                        $t: "GT-I9003",
                      },
                      { type: "string", value: "Galaxy Star", $t: "GT-S5282" },
                      {
                        type: "regex",
                        value: "Galaxy Star Advance",
                        $t: /(?:GT\-G350|SM\-G350E)/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Star Plus",
                        $t: "GT-S7262",
                      },
                      {
                        type: "string",
                        value: "Galaxy Tab 10.1",
                        $t: "GT-P7500",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 2 10.1",
                        $t: /GT\-P51[01]0/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 2 7.0",
                        $t: /GT\-P31[01]0/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 3 10.1",
                        $t: /GT\-P52[01]0/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 3 7.0 Lite",
                        $t: /SM\-T11[0136]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 3 7.0",
                        $t: /SM\-T21[01]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 3 8.0",
                        $t: /SM\-T31[015]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 4 10.1",
                        $t: /SM\-T53[0135]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 4 7.0",
                        $t: /SM\-T23[015]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab 4 8.0",
                        $t: /SM\-T33[015]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Tab 4 8.4",
                        $t: "SM-T705",
                      },
                      {
                        type: "string",
                        value: "Galaxy Tab 7.7",
                        $t: "GT-P6800",
                      },
                      {
                        type: "string",
                        value: "Galaxy Tab Active 8.0",
                        $t: "SM-T365",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab A 10.1",
                        $t: /SM\-T58[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab A 7.0",
                        $t: /SM\-T28[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab A 8.0",
                        $t: /SM\-T35[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab A 9.7",
                        $t: /SM\-T55[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab E 9.6",
                        $t: /SM\-T56[01]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab S2 8.0",
                        $t: /SM\-T71[0359]/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Tab S2 8.4",
                        $t: "SM-T700",
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab S2 9.7",
                        $t: /SM\-T81[0359]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab S 10.5",
                        $t: /SM-T80[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab Pro 8.4",
                        $t: /SM\-T32[05]/,
                      },
                      {
                        type: "regex",
                        value: "Galaxy Tab Pro 10.1",
                        $t: /SM\-T52[05]/,
                      },
                      { type: "string", value: "Galaxy Trend", $t: "GT-S7390" },
                      {
                        type: "string",
                        value: "Galaxy Trend Duos",
                        $t: "GT-S7392",
                      },
                      {
                        type: "string",
                        value: "Galaxy Trend Plus",
                        $t: "GT-S7580",
                      },
                      { type: "string", value: "Galaxy W", $t: "GT-I8150" },
                      { type: "string", value: "Galaxy Win", $t: "GT-I8552" },
                      {
                        type: "string",
                        value: "Galaxy xCover",
                        $t: "GT-S5690",
                      },
                      {
                        type: "string",
                        value: "Galaxy xCover 2",
                        $t: "GT-S7710",
                      },
                      {
                        type: "regex",
                        value: "Galaxy xCover 3",
                        $t: /SM\-G38[89]F/,
                      },
                      {
                        type: "string",
                        value: "Galaxy Y Duos",
                        $t: "GT-S6102",
                      },
                      { type: "string", value: "Galaxy Y", $t: "GT-S5360" },
                      {
                        type: "string",
                        value: "Galaxy Young 2",
                        $t: "GT-G130H",
                      },
                      {
                        type: "string",
                        value: "Galaxy Young Duos",
                        $t: "GT-S6312",
                      },
                      { type: "string", value: "Metro 313", $t: "SM-B313E" },
                      { type: "string", value: "Metro XL", $t: "SM-B355E" },
                      { type: "string", value: "Rex 70", $t: "GT-S3802" },
                      { type: "string", value: "Rex 90", $t: "GT-S5292" },
                      { type: "string", value: "Corby II", $t: "GT-S3850" },
                      { type: "string", value: "Star", $t: "GT-S5230" },
                      { type: "string", value: "Star II", $t: "GT-S5260" },
                      { type: "string", value: "Star II Duos", $t: "GT-C6712" },
                      { type: "string", value: "Star 3 Duos", $t: "GT-S5222" },
                      { type: "string", value: "Omnia M", $t: "GT-S7530" },
                      { type: "string", value: "Omnia W", $t: "GT-I8350" },
                      { type: "string", value: "Genius", $t: "IQ445" },
                      { type: "string", value: "Golf", $t: "Golf" },
                      { type: "string", value: "HD Quad", $t: "HD Quad" },
                      { type: "string", value: "Honor 2", $t: "HUAWEI U9508" },
                      { type: "string", value: "Honor 4C", $t: "CHM-U01" },
                      {
                        type: "string",
                        value: "Honor Pro",
                        $t: "HUAWEI U8950-1",
                      },
                      { type: "string", value: "Honor", $t: "U8860" },
                      { type: "string", value: "Horizon", $t: "Fly_IQ450" },
                      { type: "string", value: "Iconia Tab A211", $t: "A211" },
                      { type: "string", value: "Iconia Tab A511", $t: "A511" },
                      { type: "string", value: "Iconia Tab A701", $t: "A701" },
                      { type: "string", value: "IdeaPhone", $t: "Lenovo P770" },
                      {
                        type: "string",
                        value: "IdeaPhone",
                        $t: "Lenovo P780_ROW",
                      },
                      {
                        type: "string",
                        value: "IdeaPhone S720",
                        $t: "Lenovo S720",
                      },
                      {
                        type: "string",
                        value: "IdeaTab A1000",
                        $t: "IdeaTabA1000-F",
                      },
                      { type: "string", value: "iDxD4 3G", $t: "iDxD4" },
                      {
                        type: "string",
                        value: "Infinity II",
                        $t: "Infinityll",
                      },
                      { type: "string", value: 1 / 0, $t: 1 / 0 },
                      { type: "string", value: "Jazz", $t: "IQ238" },
                      {
                        type: "string",
                        value: "Jolla",
                        $t: "alien_jolla_bionic",
                      },
                      { type: "string", value: "Leader", $t: "ZP900" },
                      { type: "string", value: "Login 3", $t: "MFLogin3" },
                      { type: "string", value: "Login", $t: "MegaFon_SP-AI" },
                      { type: "string", value: "Login+", $t: "MFLoginPh" },
                      { type: "string", value: "Magic", $t: "IQ446" },
                      {
                        type: "string",
                        value: "MediaPad 10 FHD",
                        $t: "MediaPad 10 FHD",
                      },
                      {
                        type: "string",
                        value: "MediaPad 7 Lite",
                        $t: "MediaPad 7 Lite",
                      },
                      { type: "string", value: "MeMO Pad HD 7", $t: "ME173X" },
                      {
                        type: "regex",
                        value: "MeMO Pad FHD 10",
                        $t: /ME302[CK]/,
                      },
                      { type: "string", value: "Miracle", $t: "Fly_IQ442" },
                      { type: "string", value: "MTC 968", $t: "MTC_968" },
                      { type: "string", value: "MultiPad 2", $t: "PMP7280C3G" },
                      {
                        type: "string",
                        value: "MultiPad 7.0 Prime",
                        $t: "PMP7170B3G",
                      },
                      { type: "string", value: "MultiPhone", $t: "PAP4055DUO" },
                      { type: "string", value: "MX2", $t: "M040" },
                      { type: "string", value: "N1", $t: "N1" },
                      { type: "string", value: "Navigator", $t: "Navigator" },
                      {
                        type: "string",
                        value: "One Touch Pixi",
                        $t: "ONE TOUCH 4007D",
                      },
                      { type: "regex", value: "One Touch POP 2", $t: /5042D/ },
                      {
                        type: "regex",
                        value: "One Touch POP 3",
                        $t: /(?:5025D|5054D|5065D)/,
                      },
                      {
                        type: "regex",
                        value: "One Touch POP Star",
                        $t: /5022D/,
                      },
                      { type: "regex", value: "One Touch POP Up", $t: /6044D/ },
                      {
                        type: "regex",
                        value: "One Touch IDOL X+",
                        $t: /6043D/,
                      },
                      { type: "string", value: "Onliner1", $t: "Onliner1" },
                      { type: "string", value: "Onliner2", $t: "Onliner2" },
                      { type: "string", value: "Optimus 4X HD", $t: "LG-P880" },
                      { type: "string", value: "Optimus G", $t: "LG-E975" },
                      {
                        type: "string",
                        value: "Optimus L3 Dual",
                        $t: "LG-E405",
                      },
                      { type: "string", value: "Optimus L3", $t: "LG-E400" },
                      {
                        type: "string",
                        value: "Optimus L4 II Dual",
                        $t: "LG-E445",
                      },
                      { type: "string", value: "Optimus L5", $t: "LG-E612" },
                      {
                        type: "string",
                        value: "Optimus L7 II Dual",
                        $t: "LG-P715",
                      },
                      { type: "regex", value: "Optimus L7", $t: /LG-P70[05]/ },
                      { type: "string", value: "Optimus L9", $t: "LG-P765" },
                      {
                        type: "string",
                        value: "Optimus Net Dual",
                        $t: "LG-P698",
                      },
                      { type: "string", value: "Optimus One", $t: "LG-P500" },
                      { type: "string", value: "PadFone 2", $t: "PadFone 2" },
                      { type: "string", value: "PadFone", $t: "PadFone" },
                      { type: "string", value: "Polo", $t: "Polo" },
                      { type: "string", value: "Pride", $t: "IQ255" },
                      {
                        type: "string",
                        value: "Pyle Astro 10.1",
                        $t: "PTBL102BCD",
                      },
                      { type: "string", value: "R413", $t: "SENSEIT_R413" },
                      { type: "string", value: "Radiance", $t: "IQ441" },
                      { type: "string", value: "RAZR i", $t: "XT890" },
                      { type: "string", value: "S4003", $t: "s4003" },
                      { type: "string", value: "S4004M", $t: "S4004M" },
                      { type: "string", value: "S4501M", $t: "S4501M" },
                      { type: "string", value: "S4502M", $t: "s4502M" },
                      { type: "string", value: "S4502", $t: "s4502" },
                      { type: "string", value: "S4503Q", $t: "S4503Q" },
                      { type: "string", value: "S4505M", $t: "S4505M" },
                      { type: "string", value: "s4506", $t: "S4506" },
                      { type: "string", value: "S5001", $t: "S5001" },
                      { type: "string", value: "S820", $t: "Athens15" },
                      { type: "string", value: "Scorpio", $t: "ZP980" },
                      { type: "string", value: "SI4301", $t: "SI4301" },
                      { type: "string", value: "Sky Plus", $t: "Sky Plus" },
                      {
                        type: "regex",
                        value: "Smarto",
                        $t: /(?:3GD52i|3GDi10)/,
                      },
                      { type: "string", value: "Solo", $t: "Solo" },
                      { type: "string", value: "Spark", $t: "IQ4404" },
                      {
                        type: "string",
                        value: "sQuad 10.01",
                        $t: "sQuad-10.01",
                      },
                      {
                        type: "string",
                        value: "sQuad 10.02 3G",
                        $t: "sQuad 10.02 3G",
                      },
                      {
                        type: "string",
                        value: "sQuad 10.06 3G",
                        $t: "sQuad 10.06 3G",
                      },
                      {
                        type: "string",
                        value: "sQuad 7.82 3G",
                        $t: "sQuad 7.82 3G",
                      },
                      { type: "string", value: "sQuad 9.71", $t: "sQuad_9.71" },
                      { type: "string", value: "Star TV", $t: "Star TV" },
                      { type: "string", value: "S-TELL M200", $t: "M200" },
                      { type: "string", value: "Strike", $t: "BQS-5020" },
                      {
                        type: "string",
                        value: "Surfer 7.03",
                        $t: "Surfer7.03",
                      },
                      {
                        type: "string",
                        value: "Surfer 7.04",
                        $t: "Surfer 7.04",
                      },
                      {
                        type: "string",
                        value: "Surfer 7.32 3G",
                        $t: "Surfer 7.32 3G",
                      },
                      {
                        type: "string",
                        value: "Surfer 7.34 3G",
                        $t: "Surfer 7.34",
                      },
                      {
                        type: "string",
                        value: "Surfer 8.31 3G",
                        $t: "Surfer 8.31 3G",
                      },
                      {
                        type: "string",
                        value: "SURFpad",
                        $t: "Obreey SURFpad",
                      },
                      { type: "string", value: "T272", $t: "T272" },
                      { type: "string", value: "V880E Dual", $t: "ZTE V880E" },
                      { type: "string", value: "Vega", $t: "S4A1" },
                      { type: "string", value: "ViewPad 7", $t: "ViewPad7" },
                      { type: "string", value: "Vision", $t: "HUAWEI-U8850" },
                      { type: "string", value: "Vista", $t: "IQ451" },
                      { type: "string", value: "Vogue", $t: "FLY IQ256" },
                      { type: "string", value: "W626", $t: "W626" },
                      { type: "string", value: "Wave 525", $t: "GT-S5250" },
                      { type: "string", value: "Wave Y", $t: "GT-S5380D" },
                      { type: "string", value: "Wave II", $t: "GT-S8530" },
                      { type: "string", value: "Wave 3", $t: "GT-S8600" },
                      { type: "string", value: "Wave M", $t: "GT-S7250D" },
                      { type: "string", value: "Wave", $t: "GT-S8500" },
                      { type: "string", value: "Wizard", $t: "Fly IQ245" },
                      {
                        type: "string",
                        value: "Wizard Plus",
                        $t: "Fly IQ245 Plus",
                      },
                      { type: "string", value: "WT19i", $t: "WT19i" },
                      { type: "string", value: "X-basic", $t: "X-basic" },
                      {
                        type: "string",
                        value: "Xenium W336",
                        $t: "Philips W336",
                      },
                      {
                        type: "string",
                        value: "Xenium W632",
                        $t: "Philips W632",
                      },
                      { type: "string", value: "Xenium W6500", $t: "W6500" },
                      { type: "string", value: "Xenium W6500", $t: "W6500" },
                      { type: "string", value: "Xenium W732", $t: "W732" },
                      {
                        type: "string",
                        value: "Xenium W832",
                        $t: "Philips W832",
                      },
                      {
                        type: "string",
                        value: "Xenium W8510",
                        $t: "Philips W8510",
                      },
                      { type: "string", value: "Xperia acro S", $t: "LT26w" },
                      { type: "string", value: "Xperia Arc", $t: "LT15i" },
                      { type: "string", value: "Xperia C", $t: "C2305" },
                      { type: "string", value: "Xperia E3", $t: "D2203" },
                      { type: "string", value: "Xperia E4 Dual", $t: "E2115" },
                      { type: "string", value: "Xperia E dual", $t: "C1605" },
                      { type: "string", value: "Xperia Go", $t: "ST27i" },
                      { type: "string", value: "Xperia ion", $t: "LT28h" },
                      {
                        type: "string",
                        value: "Xperia J1 Compact",
                        $t: "D5788",
                      },
                      { type: "string", value: "Xperia J", $t: "ST26i" },
                      { type: "string", value: "Xperia L", $t: "C2105" },
                      { type: "regex", value: "Xperia M2", $t: /D230[235]/ },
                      { type: "string", value: "Xperia M4", $t: "E2303" },
                      { type: "string", value: "Xperia M4 Aqua", $t: "E2306" },
                      {
                        type: "regex",
                        value: "Xperia M4 Aqua Dual",
                        $t: /E23[03]3/,
                      },
                      { type: "string", value: "Xperia M", $t: "C1905" },
                      { type: "string", value: "Xperia miro", $t: "ST23i" },
                      { type: "string", value: "Xperia P", $t: "LT22i" },
                      { type: "string", value: "Xperia ray", $t: "ST18i" },
                      { type: "string", value: "Xperia SL", $t: "LT26ii" },
                      { type: "string", value: "Xperia S", $t: "LT26i" },
                      { type: "string", value: "Xperia sola", $t: "MT27i" },
                      { type: "string", value: "Xperia SP", $t: "C5303" },
                      {
                        type: "regex",
                        value: "Xperia T2 Ultra",
                        $t: /(?:D5303|D5316|D5306)/,
                      },
                      {
                        type: "string",
                        value: "Xperia T2 Ultra Dual",
                        $t: "D5322",
                      },
                      {
                        type: "regex",
                        value: "Xperia T3",
                        $t: /(?:D5103|D5102|D5106)/,
                      },
                      {
                        type: "string",
                        value: "Xperia Tablet Z",
                        $t: "SGP321",
                      },
                      {
                        type: "string",
                        value: "Xperia tipo dual",
                        $t: "ST21i",
                      },
                      { type: "string", value: "Xperia TX", $t: "LT29i" },
                      { type: "string", value: "Xperia U", $t: "ST25i" },
                      { type: "string", value: "Xperia V", $t: "LT25i" },
                      { type: "string", value: "Xperia Z1", $t: "C6903" },
                      {
                        type: "string",
                        value: "Xperia Z1 Compact",
                        $t: "D5503",
                      },
                      { type: "string", value: "Xperia Z2", $t: "C6502" },
                      {
                        type: "regex",
                        value: "Xperia Z3 Compact",
                        $t: /D58[03]3/,
                      },
                      { type: "string", value: "Xperia Z3 Dual", $t: "D6633" },
                      { type: "string", value: "Xperia Z3", $t: "D6603" },
                      { type: "string", value: "Xperia Z3+", $t: "E6553" },
                      { type: "string", value: "Xperia Z", $t: "C6602" },
                      { type: "string", value: "Xperia Z", $t: "C6603" },
                      { type: "regex", value: "Xperia ZL", $t: /C650[23]/ },
                      { type: "regex", value: "Xperia ZR", $t: /C550[23]/ },
                      { type: "string", value: "Xperia Z Ultra", $t: "C6833" },
                      { type: "string", value: "X-tremer", $t: "X-tremer" },
                      { type: "regex", value: "Yota Phone 2", $t: /YD201/ },
                      { type: "regex", value: "Yota Phone", $t: /C9660/ },
                      { type: "string", value: "Yoyo", $t: "R2001" },
                      { type: "string", value: "Yummy-Duo", $t: "Yummy-Duo" },
                      { type: "string", value: "Z10", $t: "Z10" },
                      { type: "string", value: "Z30", $t: "Z30" },
                      { type: "string", value: "ZP300+", $t: "ZP300+" },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /(Lumia [0-9]+(?:[ \-\/_]XL)?)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /(Slate [a-z0-9_|0-9|\-|_|\/| ]+)\|/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /; +?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+) Build/,
                      },
                      {
                        type: "regex",
                        value: "",
                        $t: /Android[ \-\/_][0-9][0-9\.]*; +(?:Release\/[0-9][0-9\.]*|Build\/(?:(?:OP[RM]|PPR)?[0-9][0-9\.]*|[a-z0-9]+)|en\-us|x96|device info|mobile|zh\-cn|ru_ru|Build)\)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Android[ \-\/_][0-9][0-9\.]*; +?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)\)/,
                      },
                    ],
                  },
                  {
                    name: "DeviceModel",
                    pattern: [
                      { type: "string", value: "iDxD4", $t: "iDxD4" },
                      { type: "string", value: "Yummy-Duo", $t: "Yummy-Duo" },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /^(?:.*(?:[- ]))?((?:GT|SGH|SM|SHV)\-[^ \/;\)]+?)(?:(?: |\)|;|\-|\/).*)?$/,
                      },
                      { type: "regex", value: "$1", $t: /(Athens15[^ ]*)/ },
                      {
                        type: "regex",
                        value: "",
                        $t: /; (?:Neo|Supra|Cube|Infnix|Marshall|vivo|cross|htc|colors|Karbonn|OnePlus|fly|doogee|Xiaomi|amaze|Tecno|thl|texet|zte|oppo|nomi|Prestigio|Philips|PIRANHA|sony|SYMPHONY|Rombica|Micromax|dell|ark|asus|homtom|hyundai|loveme|jxd|dns)[ \-\/_](?:Release\/[0-9][0-9\.]*|Build\/(?:(?:OP[RM]|PPR)?[0-9][0-9\.]*|[a-z0-9]+)|en\-us|x96|device info|mobile|zh\-cn|ru_ru|Build)[\)\/]/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /POV[\- _]?TV[\-_ ]?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /BlackBerry[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /[^M]SIE[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /HTC[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /ZTE[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /ASUS[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Micromax[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /LG[\-_\/]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MOT[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MOT[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)\//,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Sony ?Ericsson[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Palm[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Kindle[ \-_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Lenovo(?: Lenovo| 2)?[ \-\/_]?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /HUAWEI[ \-_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Samsung[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Coolpad[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Thl[ \-\/_]+([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Hewlett-Packard[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Philips[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Fly[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /DEXP[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Nomi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /SUPRA[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Oysters[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Wileyfox[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Casper[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Infinix[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /QMobile[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Tele2[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Beeline[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MTC[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Nokia[ \-\/_]?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Vodafone[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /4Good[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Sony[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /DNS[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /PocketBook[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Elephone[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /UMI[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /WEXLER[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /OPPO[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /TurboPad[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Avea[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /QUMO[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Coolpad[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Acer[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Panasonic[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Smartfren[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /HP[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Basco[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Alcatel[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /ARCHOS[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /teXet[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Haier[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Senkatel[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Hisense[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MyPhone[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Symphony[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Jinga[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Azumi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Turkcell[ \/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Google[ \-\/_](Nexus [a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Intex[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Karbonn[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Spice[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /; NEO[ _]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Celkon[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /G\-TiDE[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MITO[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Woxter[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Positivo[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Prestigio[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Hasee[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Explay[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /; CUBE[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Ramos[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Digma[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Masstel[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Changhong[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /iBall[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /XOLO[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /JXD[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Vivo[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Ritmix[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Amazon[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /K\-Touch[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Vestel[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /HYUNDAI[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Lark[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Doogee[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /AKAI[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Vertex[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Mobiistar[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /OnePlus[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Lovme[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /E\-Boda[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Amaze[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Cloudfone[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Dark[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Highscreen[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Lanix[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Newman[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Motorola[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Colors[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /JIAYU[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Piranha[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Gionee[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /CCIT[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Cubot[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /CKK[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MARSHALL[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /UTime[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Kazam[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Mlais[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Allview[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Android[ \-\/_][0-9][0-9\.]*; Xiaomi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Lenco[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Ark[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /HOMTOM[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Megafon[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Keneksi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /ADVAN[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Vexia[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MEEG[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Amoi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /iOcean[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Changjiang[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Malata[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /KPT[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Zopo[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Chuwi[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Maxtron[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Onida[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Infocus[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MZ[ \-\/_]?(?:Meizu)?[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Meizu[ \-\/_]?(?:MZ)?[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Tecno[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Axioo[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Cross[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Evercoss[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /KliTON[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /DELL[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /NVidia[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Wiko[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Konka[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Irbis[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /SENSEIT[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /i\-Mobile[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MEDION[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Q\-Smart[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Rombica[ \-\/_]([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)(?:(?: Build|\/|;|\)| \().*)?$/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /; *([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+) Build/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /com\.yandex\.mobile.[a-z\.]+\/[0-9]+(?:[\.][0-9]+){0,2} *\([A-Za-z_]+ ([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+);/,
                      },
                      {
                        type: "regex",
                        value: "",
                        $t: /Android[ \-\/_][0-9][0-9\.]*; +(?:Release\/[0-9][0-9\.]*|Build\/(?:(?:OP[RM]|PPR)?[0-9][0-9\.]*|[a-z0-9]+)|en\-us|x96|device info|mobile|zh\-cn|ru_ru|Build)\)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Android[ \-\/_][0-9][0-9\.]*; +?([a-zA-Z0-9\/\_\-\.\+'"\(\)\\, ]+?)\)/,
                      },
                    ],
                  },
                ],
              },
            ],
            define: [
              { name: "isMobile", value: !0 },
              {
                name: "isMobile",
                pattern: [
                  {
                    type: "regex",
                    value: !1,
                    $t: /CFNetwork\/(?:1\.1|1\.2\.1|1\.2\.2|1\.2\.6|128|128\.2|129\.5|129\.9|129\.10|129\.13|129\.16|129\.18|129\.20|129\.21|129\.22|217|220|221\.5|330|330\.4|339\.5|422\.11|438\.12|438\.14|454\.4|454\.5|454\.9\.4|454\.9\.7|454\.11\.5|454\.11\.12|454\.12\.4|520\.0\.13|520\.2\.5|520\.3\.2|520\.4\.3|520\.5\.1|596\.1|596\.2\.3|596\.3\.3|596\.4\.3|596\.5|673\.0\.3||673\.2\.1||673\.4|720\.0\.9|720\.1\.1|720\.2\.4|720\.3\.13|720\.4\.4|720\.5\.7|760\.0\.5|760\.1\.2|760\.2\.6|760\.4\.2|760\.5|760\.5\.1|760\.6\.3)/,
                  },
                ],
              },
              { name: "isBrowser", value: !0 },
              {
                name: "isBrowser",
                pattern: [
                  {
                    type: "regex",
                    value: !1,
                    $t: /com\.yandex\.mobile.[a-z\.]+\/[0-9]+(?:[\.][0-9]+){0,2}/,
                  },
                ],
              },
            ],
            match: {
              type: "any",
              pattern: [
                { type: "string", $t: "Android", value: !0 },
                { type: "string", $t: "iPhone", value: !0 },
                { type: "string", $t: "Bada/", value: !0 },
                { type: "string", $t: "iPad", value: !0 },
                { type: "string", $t: "iPod", value: !0 },
                { type: "string", $t: "Mobile Safari", value: !0 },
                { type: "string", $t: "MobileSafari", value: !0 },
                { type: "string", $t: "Opera Mob", value: !0 },
                { type: "string", $t: "Opera Tab", value: !0 },
                { type: "string", $t: "Opera Mini", value: !0 },
                { type: "string", $t: "OPiOS", value: !0 },
                { type: "string", $t: "CLDC-", value: !0 },
                { type: "string", $t: "MIDP-", value: !0 },
                { type: "string", $t: "Series 60", value: !0 },
                { type: "string", $t: "Symbian", value: !0 },
                { type: "string", $t: "Windows Phone", value: !0 },
                { type: "string", $t: "ZuneWP7", value: !0 },
                { type: "string", $t: "Skyfire", value: !0 },
                { type: "string", $t: "Windows CE", value: !0 },
                { type: "string", $t: "Maemo", value: !0 },
                { type: "string", $t: "Tizen", value: !0 },
                { type: "string", $t: "Moblin", value: !0 },
                { type: "string", $t: "Fennec", value: !0 },
                { type: "string", $t: "UCWEB", value: !0 },
                { type: "string", $t: "UC Browser", value: !0 },
                { type: "string", $t: "UP.Browser", value: !0 },
                { type: "string", $t: "NetFront", value: !0 },
                { type: "string", $t: "Obigo", value: !0 },
                { type: "string", $t: "hpwOS", value: !0 },
                { type: "string", $t: "webOS", value: !0 },
                { type: "string", $t: "BREW", value: !0 },
                { type: "string", $t: "OpenWave", value: !0 },
                { type: "string", $t: "WAP", value: !0 },
                { type: "string", $t: "Nokia", value: !0 },
                { type: "string", $t: "DoCoMo", value: !0 },
                { type: "string", $t: "Kindle", value: !0 },
                { type: "string", $t: "Minimo", value: !0 },
                { type: "string", $t: "PlayStation Portable", value: !0 },
                { type: "string", $t: "Tablet browser", value: !0 },
                { type: "string", $t: "BlackBerry", value: !0 },
                { type: "string", $t: "PlayBook", value: !0 },
                { type: "string", $t: "PalmSource", value: !0 },
                { type: "string", $t: "MQQBrowser", value: !0 },
                { type: "string", $t: "iTunes-i", value: !0 },
                { type: "string", $t: "MAUI", value: !0 },
                { type: "string", $t: "Novarra-Vision", value: !0 },
                { type: "string", $t: "Puffin/", value: !0 },
                { type: "string", $t: "Ubuntu; Mobile", value: !0 },
                { type: "string", $t: "Ubuntu; Touch", value: !0 },
                { type: "string", $t: "TolokaApp/", value: !0 },
                { type: "regex", $t: /Windows NT.*ARM;/, value: !0 },
                { type: "regex", $t: /\(Mobile;.*Gecko\//, value: !0 },
                { type: "regex", $t: /MSIE.*PPC[;)]/, value: !0 },
                { type: "regex", $t: /HTC[_\/]/, value: !0 },
                { type: "regex", $t: /^SAMSUNG/, value: !0 },
                { type: "regex", $t: /^HUAWEI/, value: !0 },
                { type: "regex", $t: /^Fly/, value: !0 },
                { type: "regex", $t: /^SonyEricsson/, value: !0 },
                { type: "regex", $t: /^Alcatel/, value: !0 },
                { type: "regex", $t: /^[a-z0-9_]+ Opera\//, value: !0 },
                {
                  type: "regex",
                  $t: /YaBrowser\/[0-9][0-9\.]* YaApp_iOS\/[0-9][0-9\.]*/,
                  value: !0,
                },
                {
                  type: "regex",
                  $t: /CFNetwork\/[0-9][0-9\.]*.*Darwin\/[0-9][0-9\.]*/,
                  value: !0,
                },
                {
                  type: "regex",
                  $t: /com\.yandex\.mobile.[a-z\.]+\/[0-9]+(?:[\.][0-9]+){0,2}/,
                  value: !0,
                },
              ],
            },
          },
          {
            name: "Desktop",
            type: "default",
            branches: [
              {
                name: "Opera",
                type: void 0,
                branches: [],
                define: [
                  {
                    name: "BrowserEngine",
                    pattern: [
                      {
                        type: "regex",
                        value: "WebKit",
                        $t: /WebKit\/([0-9]+(?:[\.][0-9]+){0,2})/,
                      },
                      { type: "regex", value: "Presto", $t: /Opera[\/ ]/ },
                    ],
                  },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Presto\/([0-9]+(?:[\.][0-9]+){0,2})/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /WebKit\/([0-9]+(?:[\.][0-9]+){0,2})/,
                      },
                    ],
                  },
                  { name: "BrowserName", value: "Opera" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Version\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Opera[\/ ]([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  {
                    name: "isBeta",
                    pattern: [
                      { type: "string", value: !0, $t: "Edition Next" },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "Opera/", value: !0 },
                    { type: "string", $t: "Opera", value: !0 },
                  ],
                },
              },
              {
                name: "Trident",
                type: void 0,
                branches: [
                  {
                    name: "Lunascape",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Lunascape" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Lunascape[ \/]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Lunascape/, value: !0 }],
                    },
                  },
                  {
                    name: "Maxthon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserShell", value: "Maxthon" },
                      {
                        name: "BrowserShellVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Maxthon[\/ ]([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Maxthon", value: !0 }],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Trident" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Trident\/([0-9]+(?:[\.][0-9]+)?)/,
                      },
                    ],
                  },
                  { name: "BrowserName", value: "MSIE" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      { type: "string", value: 8, $t: "Trident/4.0" },
                      { type: "string", value: 11, $t: "Trident/7.0" },
                      { type: "string", value: 10, $t: "Trident/6.0" },
                      { type: "string", value: 9, $t: "Trident/5.0" },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /MSIE ([0-9]+(?:[\.][0-9]+)?)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /\(IE ([0-9]+(?:[\.][0-9]+)?)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /rv[: ]([0-9]+(?:[\.][0-9]+)?)/,
                      },
                    ],
                  },
                  {
                    name: "BrowserShell",
                    pattern: [
                      {
                        type: "string",
                        value: "GreenBrowser",
                        $t: "GreenBrowser",
                      },
                      {
                        type: "string",
                        value: "AvantBrowser",
                        $t: "Avant Browser",
                      },
                      { type: "string", value: "MyIE2", $t: "MyIE2" },
                      { type: "string", value: "MyIE", $t: "MyIE" },
                      {
                        type: "string",
                        value: "SlimBrowser",
                        $t: "SlimBrowser",
                      },
                      { type: "string", value: "NetCaptor", $t: "NetCaptor" },
                      {
                        type: "string",
                        value: "MicrosoftOffice",
                        $t: "Microsoft Office",
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "Trident/7", value: !0 },
                    { type: "string", $t: "Microsoft Office/", value: !0 },
                    {
                      type: "regex",
                      $t: /MSIE [0-9]+(?:[\.][0-9]+)?/,
                      value: !0,
                    },
                  ],
                },
              },
              {
                name: "Gecko",
                type: void 0,
                branches: [
                  {
                    name: "Epiphany",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Epiphany" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Epiphany\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Epiphany", value: !0 }],
                    },
                  },
                  {
                    name: "AvantBrowser",
                    type: void 0,
                    branches: [],
                    define: [{ name: "BrowserName", value: "AvantBrowser" }],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Avant Browser", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Camino",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Camino" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Camino\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Camino/", value: !0 }],
                    },
                  },
                  {
                    name: "Flock",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Flock" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Flock\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Flock/", value: !0 }],
                    },
                  },
                  {
                    name: "Galeon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Galeon" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Galeon\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Galeon/", value: !0 }],
                    },
                  },
                  {
                    name: "K-Meleon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "K-Meleon" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /K-Meleon[\/ ]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "K-Meleon/", value: !0 },
                        {
                          type: "regex",
                          $t: /K-Meleon [0-9][0-9\.]*/,
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "SeaMonkey",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "SeaMonkey" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SeaMonkey\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "SeaMonkey/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "PaleMoon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "PaleMoon" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /PaleMoon\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "PaleMoon/", value: !0 }],
                    },
                  },
                  {
                    name: "Waterfox",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Waterfox" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Waterfox\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Waterfox/", value: !0 }],
                    },
                  },
                  {
                    name: "Lunascape",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Lunascape" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Lunascape[ \/]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Lunascape/, value: !0 }],
                    },
                  },
                  {
                    name: "Netscape",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Netscape" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Netscape[0-9]?\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "regex", $t: /Netscape[0-9]?\//, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Firefox",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Firefox" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Firefox\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Namoroka\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Shiretoko\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Iceweasel\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Minefield\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Thunderbird\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Firebird\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /GranParadiso\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Iceape\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /BonEcho\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Firefox", value: !0 },
                        { type: "string", $t: "Namoroka/", value: !0 },
                        { type: "string", $t: "Shiretoko/", value: !0 },
                        { type: "string", $t: "Iceweasel/", value: !0 },
                        { type: "string", $t: "Iceape/", value: !0 },
                        { type: "string", $t: "GranParadiso/", value: !0 },
                        { type: "string", $t: "Minefield/", value: !0 },
                        { type: "string", $t: "Thunderbird/", value: !0 },
                        { type: "string", $t: "Firebird/", value: !0 },
                        { type: "string", $t: "BonEcho/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Songbird",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "SongBird" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Songbird\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Songbird\//, value: !0 }],
                    },
                  },
                  {
                    name: "Conkeror",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Conkeror" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Conkeror\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Conkeror\//, value: !0 }],
                    },
                  },
                  {
                    name: "DefaultGecko",
                    type: "default",
                    branches: [
                      {
                        name: "MozillaSuite",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "BrowserName", $t: "Mozilla" },
                          {
                            name: "BrowserVersion",
                            pattern: [
                              {
                                type: "regex",
                                value: "$1",
                                $t: /rv:([0-9][0-9\.]*)/,
                              },
                            ],
                          },
                        ],
                        match: {
                          pattern: [
                            { type: "regex", $t: /rv:0\.[6-9]/, value: !0 },
                            { type: "regex", $t: /rv:1\.[0-7]/, value: !0 },
                          ],
                        },
                      },
                      {
                        name: "FirefoxPre5",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "BrowserName", $t: "Firefox" },
                          {
                            name: "BrowserVersion",
                            pattern: [
                              { type: "regex", value: 1.5, $t: /rv:1.8.0/ },
                              { type: "regex", value: 2, $t: /rv:1.8/ },
                              { type: "regex", value: 3, $t: /rv:1.9.0/ },
                              { type: "regex", value: 3.5, $t: /rv:1.9.1/ },
                              { type: "regex", value: 3.6, $t: /rv:1.9.2/ },
                              { type: "regex", value: 3.7, $t: /rv:1.9/ },
                              { type: "regex", value: 4, $t: /rv:2.0/ },
                            ],
                          },
                        ],
                        match: {
                          pattern: [
                            { type: "regex", $t: /rv:1\.[8-9]/, value: !0 },
                            { type: "regex", $t: /rv:2./, value: !0 },
                          ],
                        },
                      },
                      {
                        name: "FirefoxPost5",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "BrowserName", $t: "Firefox" },
                          {
                            name: "BrowserVersion",
                            pattern: [
                              {
                                type: "regex",
                                value: "$1",
                                $t: /rv:([0-9][0-9\.]*)/,
                              },
                            ],
                          },
                        ],
                        match: {
                          pattern: [
                            {
                              type: "regex",
                              $t: /rv:(?:[5-9]\.|[0-9]{2,}\.)/,
                              value: !0,
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "Gecko" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      { type: "regex", value: "$1", $t: /rv:([0-9][0-9\.]*)/ },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "Gecko/", value: !0 },
                    { type: "string", $t: ") Gecko", value: !0 },
                    { type: "string", $t: "Firefox/", value: !0 },
                    { type: "regex", $t: /rv:[0-9][0-9\.]*;/, value: !0 },
                  ],
                },
              },
              {
                name: "edge",
                type: void 0,
                branches: [],
                define: [
                  { name: "BrowserEngine", value: "Edge" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Edge\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  { name: "BrowserName", value: "Edge" },
                  {
                    name: "BrowserVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Edge\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  pattern: [{ type: "string", $t: "Edge/", value: !0 }],
                },
              },
              {
                name: "KHTML",
                type: void 0,
                branches: [
                  {
                    name: "Konqueror",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Konqueror" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Konqueror\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Konqueror/", value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  {
                    name: "BrowserEngine",
                    pattern: [
                      { type: "regex", value: "KHTML", $t: /KHTML\// },
                      { type: "regex", value: "WebKit", $t: /WebKit\// },
                      { type: "regex", value: "KHTML", $t: /Konqueror/ },
                    ],
                  },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /KHTML\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /WebKit\/?([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [{ type: "string", $t: "Konqueror", value: !0 }],
                },
              },
              {
                name: "TextBased",
                type: void 0,
                branches: [],
                define: [
                  {
                    name: "BrowserEngine",
                    pattern: [
                      { type: "regex", value: "TextBased", $t: /E?Links/ },
                      { type: "string", value: "TextBased", $t: "Lynx" },
                    ],
                  },
                  {
                    name: "BrowserName",
                    pattern: [
                      { type: "string", value: "ELinks", $t: "ELinks" },
                      { type: "string", value: "Links", $t: "Links" },
                      { type: "string", value: "Lynx", $t: "Lynx" },
                    ],
                  },
                  {
                    name: "isBrowser",
                    pattern: [
                      { type: "string", value: !1, $t: "libcurl" },
                      { type: "string", value: !1, $t: "Python-urllib" },
                      { type: "string", value: !1, $t: "Wget" },
                      { type: "regex", value: !1, $t: /^PHP\// },
                      { type: "regex", value: !1, $t: /^Java\// },
                      { type: "string", value: !1, $t: "libwww-perl" },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "libwww", value: !0 },
                    { type: "string", $t: "libcurl", value: !0 },
                    { type: "string", $t: "Python-urllib", value: !0 },
                    { type: "string", $t: "Wget", value: !0 },
                    { type: "regex", $t: /^PHP\//, value: !0 },
                    { type: "regex", $t: /^Java\//, value: !0 },
                    { type: "regex", $t: /E?Links/, value: !0 },
                  ],
                },
              },
              {
                name: "RobotBrowser",
                type: void 0,
                branches: [],
                define: [
                  { name: "isRobot", value: !0 },
                  { name: "isBrowser", value: !1 },
                  {
                    name: "BrowserName",
                    pattern: [
                      {
                        type: "string",
                        value: "facebookexternalhit",
                        $t: "facebookexternalhit/",
                      },
                      { type: "string", value: "vkShare", $t: "vkShare" },
                      { type: "string", value: "OdklBot", $t: "OdklBot/" },
                      { type: "string", value: "Twitterbot", $t: "Twitterbot" },
                      {
                        type: "string",
                        value: "MailRuConnect",
                        $t: "MailRuConnect",
                      },
                      {
                        type: "regex",
                        value: "GPlusSnippet",
                        $t: /developers\.google\.com\/.*\/web\/snippet/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "facebookexternalhit/", value: !0 },
                    { type: "string", $t: "vkShare", value: !0 },
                    { type: "string", $t: "OdklBot/", value: !0 },
                    { type: "string", $t: "Twitterbot", value: !0 },
                    { type: "string", $t: "MailRuConnect", value: !0 },
                    {
                      type: "regex",
                      $t: /developers\.google\.com\/.*\/web\/snippet/,
                      value: !0,
                    },
                  ],
                },
              },
              {
                name: "WebKitFamily",
                type: void 0,
                branches: [
                  {
                    name: "YandexInternet",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "YandexInternet" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YI", value: !0 },
                        { type: "string", $t: "YE", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "YandexBrowser",
                    type: void 0,
                    branches: [
                      {
                        name: "DesktopMode",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "DesktopMode", value: !0 },
                          {
                            name: "X-OSFamily",
                            pattern: [
                              {
                                type: "regex",
                                value: "iOS",
                                $t: /YaBrowser\/(?:[0-9]+\.){4}1[0-9]/,
                              },
                              {
                                type: "regex",
                                value: "Android",
                                $t: /YaBrowser\/(?:[0-9]+\.){4}0[0-9]/,
                              },
                            ],
                          },
                          {
                            name: "X-DeviceType",
                            pattern: [
                              {
                                type: "regex",
                                value: "Phone",
                                $t: /YaBrowser\/(?:[0-9]+\.){4}[0-9]0/,
                              },
                              {
                                type: "regex",
                                value: "Tablet",
                                $t: /YaBrowser\/(?:[0-9]+\.){4}[0-9]1/,
                              },
                            ],
                          },
                        ],
                        match: {
                          type: "any",
                          pattern: [
                            {
                              type: "regex",
                              $t: /YaBrowser\/(?:[0-9]+\.){4}[0-9]{2}/,
                              value: !0,
                            },
                          ],
                        },
                      },
                    ],
                    define: [
                      { name: "BrowserName", value: "YandexBrowser" },
                      {
                        name: "BrowserName",
                        pattern: [
                          {
                            type: "regex",
                            value: "YandexBrowserLite",
                            $t: /\(lite\)/,
                          },
                        ],
                      },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YaBrowser\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Ya[a-z0-9_]*Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "YaGUI",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Yowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "YandexBrowser/", value: !0 },
                        { type: "string", $t: "YaBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Lunascape",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Lunascape" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Lunascape[ \/]([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Lunascape/, value: !0 }],
                    },
                  },
                  {
                    name: "Vivaldi",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Vivaldi" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Vivaldi\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Vivaldi/", value: !0 }],
                    },
                  },
                  {
                    name: "CocCoc",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "CocCoc" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /coc_coc_browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "coc_coc_browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Sleipnir",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Sleipnir" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Sleipnir\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Sleipnir/", value: !0 }],
                    },
                  },
                  {
                    name: "Maxthon",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Maxthon" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Maxthon\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Maxthon/", value: !0 }],
                    },
                  },
                  {
                    name: "ElementsBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Elements Browser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Elements Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Elements Browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "UCBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "UCBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /UBrowser\/([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /UCBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "UBrowser/", value: !0 },
                        { type: "string", $t: "UCBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MZBrowserDesktopMode",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "DesktopMode", value: !0 },
                      { name: "BrowserName", value: "MZBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MZBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MZBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "SamsungBrowserDesktopMode",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "DesktopMode", value: !0 },
                      { name: "BrowserName", value: "Samsung Internet" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SamsungBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "SamsungBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MiuiBrowserDesktopMode",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "DesktopMode", value: !0 },
                      { name: "BrowserName", value: "MIUI" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MiuiBrowser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MiuiBrowser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "EuiBrowserDesktopMode",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "DesktopMode", value: !0 },
                      { name: "BrowserName", value: "EUI" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /EUI Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "EUI Browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "PuffinDesktopMode",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "DesktopMode", value: !0 },
                      { name: "BrowserName", $t: "Puffin" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Puffin\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      pattern: [{ type: "string", $t: "Puffin/", value: !0 }],
                    },
                  },
                  {
                    name: "RussianChromes",
                    type: void 0,
                    branches: [],
                    define: [
                      {
                        name: "BrowserName",
                        pattern: [
                          {
                            type: "string",
                            value: "Amigo",
                            $t: "MRCHROME SOC",
                          },
                          { type: "string", value: "Mail.ru", $t: "MRCHROME" },
                          {
                            type: "string",
                            value: "Nichrome",
                            $t: "Nichrome/",
                          },
                          {
                            type: "string",
                            value: "Sputnik",
                            $t: "SputnikBrowser/",
                          },
                          { type: "string", value: "Atom", $t: "Atom/" },
                        ],
                      },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Atom\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /SputnikBrowser\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "MRCHROME SOC", value: !0 },
                        { type: "string", $t: "MRCHROME", value: !0 },
                        { type: "string", $t: "Nichrome/", value: !0 },
                        { type: "string", $t: "SputnikBrowser/", value: !0 },
                        { type: "string", $t: "Atom/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Iron",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Iron" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Iron\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Iron/", value: !0 }],
                    },
                  },
                  {
                    name: "Edge",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Edge" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Edg\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Edg/", value: !0 }],
                    },
                  },
                  {
                    name: "Opera",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Opera" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /OPR\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "isBeta",
                        pattern: [
                          { type: "string", value: !0, $t: "Edition Next" },
                          {
                            type: "string",
                            value: !0,
                            $t: "Edition Developer",
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "OPR/", value: !0 }],
                    },
                  },
                  {
                    name: "Chromium",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Chromium" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chromium\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Chromium/", value: !0 }],
                    },
                  },
                  {
                    name: "Flock",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Flock" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Flock\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Flock/", value: !0 }],
                    },
                  },
                  {
                    name: "Chrome",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Chrome" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Chrome\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Chrome/", value: !0 }],
                    },
                  },
                  {
                    name: "Midori",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Midori" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /^Midori\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Midori/", value: !0 }],
                    },
                  },
                  {
                    name: "Epiphany",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Epiphany" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Epiphany\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Epiphany", value: !0 }],
                    },
                  },
                  {
                    name: "Otter",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Otter" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Otter\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Otter", value: !0 }],
                    },
                  },
                  {
                    name: "QtWeb",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "QtWeb" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /QtWeb Internet Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "QtWeb", value: !0 }],
                    },
                  },
                  {
                    name: "QupZilla",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "QupZilla" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /QupZilla\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "QupZilla/", value: !0 }],
                    },
                  },
                  {
                    name: "Arora",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Arora" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Arora\/([0-9]+(?:[\.][0-9]+){0,2})/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Arora", value: !0 }],
                    },
                  },
                  {
                    name: "OmniWeb",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "OmniWeb" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /OmniWeb\/v([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "OmniWeb/", value: !0 }],
                    },
                  },
                  {
                    name: "Rekonq",
                    type: void 0,
                    branches: [],
                    define: [{ name: "BrowserName", value: "Rekonq" }],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "rekonq", value: !0 }],
                    },
                  },
                  {
                    name: "Uzbl",
                    type: void 0,
                    branches: [],
                    define: [{ name: "BrowserName", value: "Uzbl" }],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Uzbl", value: !0 }],
                    },
                  },
                  {
                    name: "LGBrowser",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "LGBrowser" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /LG Browser\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "LG Browser/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "AdobeAIR",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "AdobeAIR" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Adobe ?AIR\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      { name: "isBrowser", value: !1 },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "regex", $t: /Adobe ?AIR/, value: !0 }],
                    },
                  },
                  {
                    name: "Playstation",
                    type: void 0,
                    branches: [],
                    define: [{ name: "BrowserName", value: "Playstation" }],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "PLAYSTATION", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "GoogleWirelessTranscoder",
                    type: void 0,
                    branches: [],
                    define: [
                      {
                        name: "BrowserName",
                        value: "GoogleWirelessTranscoder",
                      },
                      { name: "isBrowser", value: !1 },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        {
                          type: "string",
                          $t: "Google Wireless Transcoder",
                          value: !0,
                        },
                      ],
                    },
                  },
                  {
                    name: "PhantomJS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "PhantomJS" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /PhantomJS\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      { name: "isBrowser", value: !1 },
                      { name: "isRobot", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "PhantomJS", value: !0 }],
                    },
                  },
                  {
                    name: "Safari",
                    type: void 0,
                    branches: [
                      {
                        name: "iCab",
                        type: void 0,
                        branches: [],
                        define: [
                          { name: "BrowserShell", value: "iCab" },
                          {
                            name: "BrowserShellVersion",
                            pattern: [
                              {
                                type: "regex",
                                value: "$1",
                                $t: /iCab\/([0-9]+(?:[\.][0-9]+){0,2})/,
                              },
                            ],
                          },
                        ],
                        match: {
                          type: "any",
                          pattern: [{ type: "string", $t: "iCab", value: !0 }],
                        },
                      },
                    ],
                    define: [
                      { name: "BrowserName", value: "Safari" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Version\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                      {
                        name: "historySupport",
                        pattern: [
                          {
                            type: "regex",
                            value: !0,
                            $t: /Version\/(?:5\.[1-9]|[6-9])/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Safari/", value: !0 }],
                    },
                  },
                ],
                define: [
                  { name: "BrowserEngine", value: "WebKit" },
                  {
                    name: "BrowserEngineVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /WebKit\/?([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                  {
                    name: "BrowserBase",
                    pattern: [
                      { type: "string", value: "Chromium", $t: "Chromium/" },
                      { type: "string", value: "Chromium", $t: "Chrome/" },
                    ],
                  },
                  {
                    name: "BrowserBaseVersion",
                    pattern: [
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Chromium\/([0-9][0-9\.]*)/,
                      },
                      {
                        type: "regex",
                        value: "$1",
                        $t: /Chrome\/([0-9][0-9\.]*)/,
                      },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [{ type: "string", $t: "WebKit", value: !0 }],
                },
              },
              {
                name: "UnknownEngine",
                type: "default",
                branches: [
                  {
                    name: "iTunes",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "iTunes" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /iTunes\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "iTunes/", value: !0 }],
                    },
                  },
                  {
                    name: "Dillo",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Dillo" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Dillo\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "Dillo/", value: !0 }],
                    },
                  },
                  {
                    name: "NCSAMosaic",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NCSA Mosaic" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /NCSA Mosaic\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "NCSA Mosaic/", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "NetSurf",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "NetSurf" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /NetSurf\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                      { name: "isBrowser", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "NetSurf/", value: !0 }],
                    },
                  },
                  {
                    name: "UnixNetscape",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "BrowserName", value: "Netscape" },
                      {
                        name: "BrowserVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Mozilla\/([0-9]+(?:[\.][0-9]+)?)/,
                          },
                        ],
                      },
                      { name: "isBrowser", value: !0 },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "regex", $t: /Mozilla\/4.*X11/, value: !0 },
                      ],
                    },
                  },
                ],
                define: [
                  { name: "BrowserName", value: "Unknown" },
                  { name: "BrowserEngine", value: "Unknown" },
                  { name: "isBrowser", value: !1 },
                ],
              },
              {
                name: "BrowserToolbars",
                type: "common",
                branches: [
                  {
                    name: "YandexBar",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "YandexBar", value: !0 },
                      {
                        name: "YandexBarVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /YB\/([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "YB/", value: !0 }],
                    },
                  },
                  {
                    name: "MailRuSputnik",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "MailRuSputnik", value: !0 },
                      {
                        name: "MailRuSputnikVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1.$2",
                            $t: /MRSPUTNIK ([0-9]+), +([0-9]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /sputnik ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "sputnik", value: !0 }],
                    },
                  },
                  {
                    name: "MailRuAgent",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "MailRuAgent", value: !0 },
                      {
                        name: "MailRuAgentVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /MRA ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [{ type: "string", $t: "MRA", value: !0 }],
                    },
                  },
                  {
                    name: "GoogleToolBar",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "GoogleToolBar", value: !0 },
                      {
                        name: "GoogleToolBarVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1",
                            $t: /GTB([0-9][0-9\.]*)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /GoogleT([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "GTB", value: !0 },
                        { type: "string", $t: "GoogleT", value: !0 },
                      ],
                    },
                  },
                ],
              },
              {
                name: "DesktopOS",
                type: "common",
                branches: [
                  {
                    name: "Windows",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", $t: "Windows" },
                      {
                        name: "OSName",
                        pattern: [
                          {
                            type: "string",
                            value: "Windows 98",
                            $t: "Windows 98",
                          },
                          { type: "string", value: "Windows 98", $t: "Win98" },
                          {
                            type: "string",
                            value: "Windows 2000",
                            $t: "Windows NT 5.0",
                          },
                          {
                            type: "string",
                            value: "Windows 2000",
                            $t: "Windows 2000",
                          },
                          {
                            type: "string",
                            value: "Windows XP",
                            $t: "Windows NT 5.1",
                          },
                          {
                            type: "string",
                            value: "Windows XP",
                            $t: "Windows XP",
                          },
                          {
                            type: "string",
                            value: "Windows Server 2003",
                            $t: "Windows NT 5.2",
                          },
                          {
                            type: "string",
                            value: "Windows Vista",
                            $t: "Windows NT 6.0",
                          },
                          {
                            type: "string",
                            value: "Windows 7",
                            $t: "Windows NT 6.1",
                          },
                          {
                            type: "string",
                            value: "Windows 8",
                            $t: "Windows NT 6.2",
                          },
                          {
                            type: "string",
                            value: "Windows 8.1",
                            $t: "Windows NT 6.3",
                          },
                          {
                            type: "string",
                            value: "Windows 10",
                            $t: "Windows NT 6.4",
                          },
                          {
                            type: "string",
                            value: "Windows 10",
                            $t: "Windows NT 10.0",
                          },
                          {
                            type: "string",
                            value: "Windows NT 4.0",
                            $t: "Windows NT;",
                          },
                          {
                            type: "string",
                            value: "Windows NT 3.51",
                            $t: "WinNT3.51",
                          },
                          {
                            type: "string",
                            value: "Windows NT 4.0",
                            $t: "WinNT",
                          },
                          {
                            type: "string",
                            value: "Windows ME",
                            $t: "Windows ME",
                          },
                          {
                            type: "string",
                            value: "Windows 95",
                            $t: "Windows 95",
                          },
                          { type: "string", value: "Windows 95", $t: "Win95" },
                          {
                            type: "string",
                            value: "Windows 3.11",
                            $t: "Win16",
                          },
                        ],
                      },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "string",
                            value: "4.1.1998",
                            $t: "Windows 98",
                          },
                          { type: "string", value: "4.1.1998", $t: "Win98" },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Windows NT ([0-9][0-9\.]*)/,
                          },
                          {
                            type: "string",
                            value: "5.0.2195",
                            $t: "Windows 2000",
                          },
                          {
                            type: "string",
                            value: "5.1.2600",
                            $t: "Windows XP",
                          },
                          {
                            type: "string",
                            value: "4.0.1381",
                            $t: "Windows NT;",
                          },
                          { type: "string", value: 3.51, $t: "WinNT3.51" },
                          { type: "string", value: "4.0.1381", $t: "WinNT" },
                          {
                            type: "string",
                            value: "4.90.3000",
                            $t: "Windows ME",
                          },
                          {
                            type: "string",
                            value: "4.0.950",
                            $t: "Windows 95",
                          },
                          { type: "string", value: "4.0.950", $t: "Win95" },
                          { type: "string", value: 3.11, $t: "Win16" },
                        ],
                      },
                      {
                        name: "x64",
                        pattern: [
                          { type: "string", value: !0, $t: "WOW64" },
                          { type: "string", value: !0, $t: "Win64" },
                          { type: "string", value: !0, $t: "x64" },
                        ],
                      },
                      {
                        name: "isTouch",
                        pattern: [
                          { type: "string", value: !0, $t: "Tablet PC" },
                          { type: "string", value: !0, $t: "Touch" },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Windows", value: !0 },
                        { type: "string", $t: "Win16", value: !0 },
                        { type: "string", $t: "WinNT", value: !0 },
                        { type: "string", $t: "Win9", value: !0 },
                        { type: "string", $t: "Win32", value: !0 },
                        { type: "string", $t: "Win64", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "Unix",
                    type: void 0,
                    branches: [
                      {
                        name: "LinuxDistr",
                        type: void 0,
                        branches: [
                          {
                            name: "Ubuntu",
                            type: void 0,
                            branches: [],
                            define: [
                              {
                                name: "OSName",
                                pattern: [
                                  {
                                    type: "string",
                                    value: "Ubuntu",
                                    $t: "Ubuntu",
                                  },
                                ],
                              },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /Ubuntu\/([0-9][0-9\.]*)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "Ubuntu", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "Mint",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "Mint" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /Mint\/([0-9][0-9\.]*)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "Mint", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "Fedora",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "Fedora" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /fc([0-9][0-9\.]*)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "Fedora", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "Mandriva",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "Mandriva" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /mdv([0-9][0-9\.]*)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "Mandriva", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "RedHat",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "RedHat" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1.$2",
                                    $t: /el([0-9]+)_([0-9]+)/,
                                  },
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /el([0-9]+)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "Red Hat/", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "CentOS",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "CentOS" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /el([0-9][0-9\.]*)/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "CentOS", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "ASPLinux",
                            type: void 0,
                            branches: [],
                            define: [
                              { name: "OSName", $t: "ASPLinux" },
                              {
                                name: "OSVersion",
                                pattern: [
                                  {
                                    type: "regex",
                                    value: "$1",
                                    $t: /ASPLinux\/([0-9]+(?:[\.][0-9]+){0,2})/,
                                  },
                                ],
                              },
                            ],
                            match: {
                              pattern: [
                                { type: "string", $t: "ASPLinux", value: !0 },
                              ],
                            },
                          },
                          {
                            name: "OtherDistr",
                            type: "default",
                            branches: [],
                            define: [
                              {
                                name: "OSName",
                                pattern: [
                                  {
                                    type: "string",
                                    value: "Debian",
                                    $t: "Debian",
                                  },
                                  { type: "string", value: "SUSE", $t: "SUSE" },
                                  {
                                    type: "string",
                                    value: "Gentoo",
                                    $t: "Gentoo",
                                  },
                                  {
                                    type: "string",
                                    value: "ALTLinux",
                                    $t: "ALTLinux",
                                  },
                                  {
                                    type: "string",
                                    value: "SplashTop",
                                    $t: "Splashtop",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        match: {
                          pattern: [
                            { type: "string", $t: "Linux", value: !0 },
                            { type: "string", $t: "Ubuntu", value: !0 },
                          ],
                        },
                      },
                    ],
                    define: [
                      {
                        name: "OSFamily",
                        pattern: [
                          { type: "string", value: "OpenBSD", $t: "OpenBSD" },
                          { type: "string", value: "Linux", $t: "Linux" },
                          { type: "string", value: "Linux", $t: "Ubuntu" },
                          { type: "string", value: "QNX", $t: "QNX" },
                          { type: "string", value: "SunOS", $t: "SunOS" },
                          { type: "string", value: "FreeBSD", $t: "FreeBSD" },
                          { type: "string", value: "NetBSD", $t: "NetBSD" },
                          { type: "string", value: "UNIX", $t: "UNIX" },
                          { type: "string", value: "AIX", $t: "AIX" },
                          { type: "string", value: "IRIX", $t: "IRIX" },
                          { type: "string", value: "ChromeOS", $t: "CrOS" },
                          { type: "string", value: "HP-UX", $t: "HP-UX" },
                          { type: "string", value: "UnknownNix", $t: "X11" },
                        ],
                      },
                      {
                        name: "x64",
                        pattern: [
                          { type: "string", value: !0, $t: "x86_64" },
                          { type: "string", value: !0, $t: "amd64" },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "OpenBSD", value: !0 },
                        { type: "string", $t: "NetBSD", value: !0 },
                        { type: "string", $t: "FreeBSD", value: !0 },
                        { type: "string", $t: "Linux", value: !0 },
                        { type: "string", $t: "SunOS", value: !0 },
                        { type: "string", $t: "QNX", value: !0 },
                        { type: "string", $t: "UNIX", value: !0 },
                        { type: "string", $t: "AIX", value: !0 },
                        { type: "string", $t: "IRIX", value: !0 },
                        { type: "string", $t: "CrOS", value: !0 },
                        { type: "regex", $t: /X11[^0-9]/, value: !0 },
                      ],
                    },
                  },
                  {
                    name: "MacOS",
                    type: void 0,
                    branches: [],
                    define: [
                      { name: "OSFamily", $t: "MacOS" },
                      {
                        name: "OSVersion",
                        pattern: [
                          {
                            type: "regex",
                            value: "$1.$2.$3",
                            $t: /Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1.$2",
                            $t: /Mac OS X ([0-9]+)_([0-9]+)/,
                          },
                          {
                            type: "regex",
                            value: "$1",
                            $t: /Mac OS X ([0-9][0-9\.]*)/,
                          },
                        ],
                      },
                      {
                        name: "OSName",
                        pattern: [
                          {
                            type: "regex",
                            value: "Mac OS X Tiger",
                            $t: /[^_\.]10[_\.]4/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Leopard",
                            $t: /[^_\.]10[_\.]5/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Snow Leopard",
                            $t: /[^_\.]10[_\.]6/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Lion",
                            $t: /[^_\.]10[_\.]7/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Mountain Lion",
                            $t: /[^_\.]10[_\.]8/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Mavericks",
                            $t: /[^_\.]10[_\.]9/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Yosemite",
                            $t: /[^_\.]10[_\.]10/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X El Capitan",
                            $t: /[^_\.]10[_\.]11/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Sierra",
                            $t: /[^_\.]10[_\.]12/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X High Sierra",
                            $t: /[^_\.]10[_\.]13/,
                          },
                          {
                            type: "regex",
                            value: "Mac OS X Mojave",
                            $t: /[^_\.]10[_\.]14/,
                          },
                        ],
                      },
                    ],
                    match: {
                      type: "any",
                      pattern: [
                        { type: "string", $t: "Macintosh", value: !0 },
                        { type: "string", $t: "Mac OS X", value: !0 },
                        { type: "string", $t: "PPC", value: !0 },
                        { type: "string", $t: "Darwin", value: !0 },
                        { type: "string", $t: "Mac_PowerPC", value: !0 },
                      ],
                    },
                  },
                  {
                    name: "OS2",
                    type: void 0,
                    branches: [],
                    define: [{ name: "OSFamily", value: "OS/2" }],
                    match: {
                      pattern: [{ type: "string", $t: "OS/2", value: !0 }],
                    },
                  },
                  {
                    name: "UnknownOS",
                    type: "default",
                    branches: [],
                    define: [{ name: "OSFamily", value: "Unknown" }],
                  },
                ],
              },
            ],
            define: [
              { name: "isMobile", value: !1 },
              { name: "isTouch", value: !1 },
              { name: "isBrowser", value: !0 },
            ],
          },
          {
            name: "TV",
            type: "common",
            branches: [
              {
                name: "isTV",
                type: void 0,
                branches: [],
                define: [
                  { name: "isTV", value: !0 },
                  { name: "isMobile", value: !1 },
                  { name: "isTouch", value: !1 },
                  { name: "isTablet", value: !1 },
                  {
                    name: "DeviceVendor",
                    pattern: [
                      {
                        type: "regex",
                        value: "SAMSUNG",
                        $t: /(?:SMART\-TV;[ \-\/_]X11;|Tizen)/,
                      },
                      { type: "regex", value: "LG Electronics", $t: /NetCast/ },
                      { type: "regex", value: "Sony", $t: /(?:Bravia|Sony)/ },
                      { type: "regex", value: "Philips", $t: /Philips/ },
                      { type: "regex", value: "Sharp", $t: /Sharp/ },
                    ],
                  },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "regex", $t: /Google[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /Android[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /Star[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /SMART[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /Spark[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /POV[ \-\/_]?TV/, value: !0 },
                    { type: "regex", $t: /TV[ \-\/_]?Box/, value: !0 },
                    { type: "regex", $t: /GTV[0-9][0-9\.]*/, value: !0 },
                    { type: "regex", $t: /Sony[ \-\/_]?DTV/, value: !0 },
                    { type: "regex", $t: /X[34]\-[4-9][0-9]/, value: !0 },
                    { type: "string", $t: "LG NetCast", value: !0 },
                    { type: "string", $t: "SmartTV", value: !0 },
                    { type: "string", $t: "HbbTV/", value: !0 },
                    { type: "string", $t: "NETTV/", value: !0 },
                    { type: "string", $t: "PHILIPSTV/", value: !0 },
                    { type: "string", $t: "Opera TV", value: !0 },
                    { type: "string", $t: "AQUOSBrowser", value: !0 },
                    { type: "string", $t: "IPTV", value: !0 },
                    { type: "string", $t: "LG Browser", value: !0 },
                    { type: "string", $t: "AppleTV", value: !0 },
                    { type: "string", $t: "CrKey", value: !0 },
                    { type: "string", $t: "iconBIT", value: !0 },
                    { type: "string", $t: "KIWIBOX", value: !0 },
                  ],
                },
              },
            ],
          },
          {
            name: "Misc",
            type: "common",
            branches: [
              {
                name: "isRobot",
                type: void 0,
                branches: [],
                define: [
                  { name: "isBrowser", value: !1 },
                  { name: "isRobot", value: !0 },
                ],
                match: {
                  type: "any",
                  pattern: [
                    { type: "string", $t: "baiduspider", value: !0 },
                    { type: "string", $t: "bingbot", value: !0 },
                    { type: "string", $t: "googlebot", value: !0 },
                    { type: "string", $t: "google web preview", value: !0 },
                    { type: "string", $t: "mediapartners-google", value: !0 },
                    { type: "string", $t: "msnbot", value: !0 },
                    { type: "string", $t: "yahoo! slurp", value: !0 },
                    {
                      type: "string",
                      $t: "+http://yandex.com/bots",
                      value: !0,
                    },
                    { type: "string", $t: "YandexBot", value: !0 },
                    { type: "string", $t: "Feedfetcher-Google;", value: !0 },
                    { type: "string", $t: "WebAlta", value: !0 },
                    { type: "string", $t: "StackRambler", value: !0 },
                    { type: "string", $t: "Aport", value: !0 },
                    { type: "string", $t: "Mail.Ru/", value: !0 },
                    { type: "string", $t: "Yandex/", value: !0 },
                    { type: "string", $t: "Statbox/", value: !0 },
                    { type: "string", $t: "YandexSomething/", value: !0 },
                    { type: "string", $t: "YandexBlog/", value: !0 },
                    { type: "string", $t: "Yandex.Server/", value: !0 },
                    { type: "string", $t: "YaDirectBot", value: !0 },
                    {
                      type: "string",
                      $t: "Jakarta Commons-HttpClient/",
                      value: !0,
                    },
                    { type: "string", $t: "TurtleScanner", value: !0 },
                    { type: "string", $t: "Novoteka", value: !0 },
                    { type: "string", $t: "ia_archiver", value: !0 },
                    { type: "string", $t: "heritrix", value: !0 },
                    { type: "string", $t: "Twiceler-", value: !0 },
                    { type: "string", $t: "psbot/", value: !0 },
                    { type: "string", $t: "Alchemy Eye Agent", value: !0 },
                    { type: "string", $t: "Echoping/", value: !0 },
                    { type: "string", $t: "Friends/", value: !0 },
                    { type: "string", $t: "WhatsUp", value: !0 },
                    { type: "string", $t: "; HttpSatPinger)", value: !0 },
                    {
                      type: "string",
                      $t: "MSRBOT (http://research.microsoft.com/research/sv/msrbot/",
                      value: !0,
                    },
                    { type: "string", $t: "MJ12bot/", value: !0 },
                    { type: "string", $t: "ichiro/", value: !0 },
                    { type: "string", $t: "TECOMAC-Crawler/", value: !0 },
                    { type: "string", $t: "Gigabot", value: !0 },
                    { type: "string", $t: "Sogou Push Spider", value: !0 },
                    { type: "string", $t: "check_http/", value: !0 },
                    { type: "string", $t: "http_ping", value: !0 },
                    { type: "string", $t: "KeepAliveClient", value: !0 },
                    { type: "string", $t: "SamSunf", value: !0 },
                    { type: "string", $t: "GenHash", value: !0 },
                    { type: "string", $t: "IRLbot", value: !0 },
                    { type: "string", $t: "UptimeInspector", value: !0 },
                    { type: "string", $t: "liveinternet spider", value: !0 },
                    { type: "string", $t: "Begun Robot Crawler", value: !0 },
                    { type: "string", $t: "InternetSeer.com", value: !0 },
                    { type: "string", $t: "Refer.Ru Favicon Bot", value: !0 },
                    { type: "string", $t: "Robot Semonitor", value: !0 },
                    { type: "string", $t: "Robot PagePromoter", value: !0 },
                    { type: "string", $t: "SESpider", value: !0 },
                    {
                      type: "string",
                      $t: "Jakarta Commons-HttpClient",
                      value: !0,
                    },
                    { type: "string", $t: "Parasite Eliminator", value: !0 },
                    { type: "string", $t: "Spinn3r", value: !0 },
                    { type: "string", $t: "YandexImages/", value: !0 },
                    { type: "string", $t: "YandexVideo/", value: !0 },
                    { type: "string", $t: "YandexMedia/", value: !0 },
                    { type: "string", $t: "YandexBlogs/", value: !0 },
                    { type: "string", $t: "YandexFavicons/", value: !0 },
                    { type: "string", $t: "YandexAddurl/", value: !0 },
                    { type: "string", $t: "YandexImageResizer/", value: !0 },
                    { type: "string", $t: "YandexDirect/", value: !0 },
                    { type: "string", $t: "YandexMetrika/", value: !0 },
                    { type: "string", $t: "YandexNews/", value: !0 },
                    { type: "string", $t: "YandexCatalog/", value: !0 },
                    { type: "string", $t: "YandexWebmaster/", value: !0 },
                    { type: "string", $t: "AdsBot-Google", value: !0 },
                    { type: "string", $t: "BingPreview/", value: !0 },
                    { type: "string", $t: "facebookexternalhit/", value: !0 },
                    { type: "string", $t: "vkShare", value: !0 },
                    { type: "string", $t: "OdklBot/", value: !0 },
                    { type: "string", $t: "Twitterbot", value: !0 },
                    { type: "string", $t: "MailRuConnect", value: !0 },
                    { type: "string", $t: "RamblerDmpBot", value: !0 },
                    { type: "string", $t: "RamblerDsp", value: !0 },
                    { type: "string", $t: "DuckDuckBot", value: !0 },
                    {
                      type: "regex",
                      $t: /developers\.google\.com\/.*\/web\/snippet/,
                      value: !0,
                    },
                  ],
                },
              },
            ],
          },
        ],
      };
    },
  },
]);

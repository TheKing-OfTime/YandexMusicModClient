"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4041],
  {
    84041: function (e, a, c) {
      c.d(a, {
        $: function () {
          return t;
        },
      });
      var b = c(51838),
        f = c(19910),
        r = c(98132);
      let n = {
          WINDOWS: "0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",
          MACOS: "05c45ae8-b869-4ec1-848c-4b314fbadc17",
          LINUX: "d2bcdb71-90ac-493b-b68f-024321954a5d",
          WEB: "b200fd55-5a52-4fa2-b5db-d163e986a61d",
        },
        t = () => {
          switch ((0, f.y)((0, b.X)())) {
            case r.B.WINDOWS:
              return n.WINDOWS;
            case r.B.MACOS:
              return n.MACOS;
            case r.B.LINUX:
              return n.LINUX;
          }
          return n.WEB;
        };
    },
  },
]);

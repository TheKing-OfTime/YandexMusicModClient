(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7192],
  {
    34796: function (n, e, o) {
      Promise.resolve().then(o.bind(o, 97334));
    },
    97334: function (n, e, o) {
      "use strict";
      o.r(e);
      var t = o(65067),
        s = o(58373),
        u = o.n(s);
      e.default = (n) => {
        let { children: e } = n;
        return (
          (0, t.useEffect)(
            () => (
              window.document.body.classList.add(u().body),
              () => {
                window.document.body.classList.remove(u().body);
              }
            ),
            [],
          ),
          e
        );
      };
    },
    58373: function (n) {
      n.exports = { body: "layout_body__c8t_k" };
    },
  },
  function (n) {
    n.O(0, [933, 7058, 6158, 1744], function () {
      return n((n.s = 34796));
    }),
      (_N_E = n.O());
  },
]);

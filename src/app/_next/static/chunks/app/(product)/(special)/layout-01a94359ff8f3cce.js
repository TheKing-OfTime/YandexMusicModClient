(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3433],
    {
        6273: (e) => {
            e.exports = { body: "layout_body__c8t_k" };
        },
        82541: (e, s, d) => {
            "use strict";
            d.r(s), d.d(s, { default: () => u });
            var o = d(66268),
                t = d(6273),
                n = d.n(t);
            let u = (e) => {
                let { children: s } = e;
                return (
                    (0, o.useEffect)(
                        () => (
                            window.document.body.classList.add(n().body),
                            () => {
                                window.document.body.classList.remove(n().body);
                            }
                        ),
                        [],
                    ),
                    s
                );
            };
        },
        97133: (e, s, d) => {
            Promise.resolve().then(d.bind(d, 82541));
        },
    },
    (e) => {
        e.O(0, [8244, 9902, 5598, 7358], () => e((e.s = 97133))),
            (_N_E = e.O());
    },
]);

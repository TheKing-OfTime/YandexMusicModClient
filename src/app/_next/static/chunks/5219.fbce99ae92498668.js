"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5219],
    {
        25219: (e, a, b) => {
            b.d(a, { t: () => t });
            var c = b(49913),
                d = b(70314),
                f = b(61472);
            let r = {
                    WINDOWS: "0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",
                    MACOS: "05c45ae8-b869-4ec1-848c-4b314fbadc17",
                    LINUX: "d2bcdb71-90ac-493b-b68f-024321954a5d",
                    WEB: "b200fd55-5a52-4fa2-b5db-d163e986a61d",
                },
                t = () => {
                    switch ((0, d.t)((0, c.u)())) {
                        case f.V.WINDOWS:
                            return r.WINDOWS;
                        case f.V.MACOS:
                            return r.MACOS;
                        case f.V.LINUX:
                            return r.LINUX;
                    }
                    return r.WEB;
                };
        },
    },
]);

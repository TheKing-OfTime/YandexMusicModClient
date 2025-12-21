/**
 * Преобразует hex-строку в HSL.
 * Поддерживает `#RRGGBB`, `RRGGBB`, `#RGB`, `RGB`.
 * Возвращает объект { h, s, l, css }:
 *  - h: 0..360 (целое)
 *  - s: 0..100 (целое, процент)
 *  - l: 0..100 (целое, процент)
 *  - css: строка в формате "hsl(h, s%, l%)"
 */
export default function hexToHsl(hex, lPercOverride=undefined) {
    if (typeof hex !== 'string') {
        throw new TypeError('hex must be a string');
    }

    let clean = hex.replace(/^#/, '').trim();

    if (clean.length === 3) {
        clean = clean.split('').map(ch => ch + ch).join('');
    }

    if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
        throw new Error('Invalid hex color');
    }

    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const d = max - min;

    let h = 0;
    let s = 0;

    if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1));

        switch (max) {
            case r:
                h = ((g - b) / d) % 6;
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h = Math.round(h * 60);
        if (h < 0) h += 360;
    }

    const hRound = Math.round(h);
    const sPerc = Math.round(s * 100);
    const lPerc = Math.round(l * 100);

    return {
        h: hRound,
        s: sPerc,
        l: lPerc,
        css: `hsl(${hRound}, ${sPerc}%, ${lPercOverride ?? lPerc}%)`
    };
}

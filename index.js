function _log(...args) {
    console.info(...args);
}
function _buff(str) {
    return Buffer.from(str, "base64").toString("utf-8");
}
function _chr(arr) {
    return String.fromCharCode(...arr);
}

/**
 * In Programming we don't say I Love You
 * We say :
 */

_log(
    _buff(
        _chr([
            166 >> 1,
            ((1048576 >> 13) | (40 - 2)) / 2,
            ~-67,
            (4 / 8) * (154 << (2 / 3)),
            ((24 + 3 / 6) << 2) + 2,
            (~-11 + 8 / 40) * 5,
            18 * ~-((18 * ~-6) / 15),
            (~-11) ** 2 + (4 >> 1) ** 3,
            ((144 << 1) * (7 / 28) + 1) & ((25 * 6) / 2),
            (((49 >> 3) + 1) | 6) * 0.1 ** 2 * 1000,
            (1 / 2 + ~-4 + ~-11) * 8,
            (~-11) ** 2 + (~-4 * 42) / 7,
            ((~-4 * 30) | (5 ** 3)) - 3 ** ~-4,
            ((~-4) ** 2) ** ((4 >> 1) & ~-3),
            +(+"7" - ~-+"2" + "1"),
            ((6 * ~1) / ~0 + 1 / 5) * 5
        ])
    )
);

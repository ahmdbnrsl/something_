function _log(...args) {
    console.info(...args);
}
function _buff(str) {
    return Buffer.from(str, "base64").toString("utf-8");
}
function _chr(arr) {
    return String.fromCharCode(...arr);
}

export { _log, _buff, _chr };

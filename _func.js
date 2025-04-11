import { writeFileSync } from "fs";

function _write_file(str) {
    writeFileSync("untukmu.txt", Buffer.from(str, "utf-8"));
}
function _buff(str) {
    return Buffer.from(str, "base64").toString("utf-8");
}
function _chr(arr) {
    return String.fromCharCode(...arr);
}

export { _write_file, _buff, _chr };

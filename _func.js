

function _write_file(str) {
    Deno.writeTextFileSync("untukmu.txt", str);
}
function _buff(str) {
    return atob(str);
}
function _chr(arr) {
    return String.fromCharCode(...arr);
}

export { _write_file, _buff, _chr };

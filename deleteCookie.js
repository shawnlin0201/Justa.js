export default function deleteCookie (cname) {
    return  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// module.exports = deleteCookie;
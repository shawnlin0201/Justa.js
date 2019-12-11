function getCookie (cname) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + cname + "=");
        if (parts.length == 2) 
    return parts.pop().split(";").shift();
}

module.exports = getCookie;
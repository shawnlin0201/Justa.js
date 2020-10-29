const Justa = (function() {
    let cache;
    return function(){
        if(typeof cache === 'Object') return cache

        this.getCookie = (cname) => {
            let value = "; " + document.cookie;
            let parts = value.split("; " + cname + "=");
            if (parts.length == 2) 
            return parts.pop().split(";").shift();
        }
    
        this.setCookie = (cname, cvalue, exdays) => {
            let d = new Date()
            d.setTime(d.getTime() + (exdays*24*60*60*1000))
            let expires = `expires=${d.toUTCString()}`
            return document.cookie = `${cname}=${cvalue};${expires}`
        }
    
        this.deleteCookie = (cname) => {
            return  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        cache = this
    }
})()

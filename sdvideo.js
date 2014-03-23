(function() {
    divide = window.location.toString().split("#");
    url = divide[0];
    urlArray = url.split("/");
    dominio = urlArray[2].replace("www.", "");
    switch (dominio) {
    case "ted.com":
        url = "http://embed.ted.com/talks/lang/es/" + urlArray[6];
        break;
    case "dailymotion.com":
        url = url.replace("/video/", "/embed/video/") + "?logo=0&autoPlay=1&forcedQuality=hq";
        break;
    case "youtube.com":
    case "youtube.googleapis.com":
        id = getURLParameter("v", url);
        if (id == null) {
            if (url.indexOf('/v/') != -1) splitUrl = "/v/";
            if (url.indexOf('/embed/') != -1) splitUrl = "/embed/";
            id = url.split(splitUrl)[1].split("/")[0];
        }
        getList = getURLParameter("list", url);
        if (getList != null) {
            list = "list=" + getList + "&";
        } else list = "";
        url = "http://www.youtube.com/embed/" + id + "/?" + list + "autohide=1&theme=light&hl=es&fs=1&vq=hd1080&autoplay=1&showinfo=1&rel=0";
        break;
    case "vimeo.com":
        url = "http://player.vimeo.com/video/" + urlArray[3] + "?autoplay=1%hd1";
        break;
    case "livestream.com":
        url = "http://www.livestream.com/embed/" + urlArray[3] + "?autoPlay=true";
        break;
    }
    ancho = 640;
    alto = 360;
    izquierda = screen.width - ancho;
    arriba = screen.height - alto;
    parametros = 'width=' + ancho + ',height=' + alto + ',left=' + izquierda + ',top=' + arriba + 'location=no,status=no,toolbar=no';
    self.close;
    window.open(url, 'SDVideo', parametros);
})()
function getURLParameter(name, url) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null
}

(function() {
    id = window.location.toString();
    divide = id.split("#");
    url = divide[0];
    urlArray = url.split("/");
    dominio = urlArray[2];
    dominio = dominio.replace("www.", "");
    switch (dominio) {
    case "ted.com":
        url = "http://embed.ted.com/talks/lang/es/" + urlArray[6];
        break;
    case "dailymotion.com":
        url = url.replace("/video/", "/embed/video/") + "?logo=0&autoPlay=1&forcedQuality=hq";
        break;
    case "youtube.com":
        id = url.replace(/^[^v]+v.(.{11}).*/, "$1");
        url = "http://www.youtube.com/watch_popup?v=" + id + "&hl=es&fs=1&vq=hd720&autoplay=1&showinfo=1&rel=0";
        break;
    case "vimeo.com":
        url = "http://player.vimeo.com/video/" + urlArray[3] + "?autoplay=1%hd1";
        break;
    case "livestream.com":
        url = "http://www.livestream.com/embed/" + urlArray[3] + "?autoPlay=true";
        break;
    case "ustream.tv":
        url = url.replace("/recorded/", "/embed/recorded/") + "?v=3&autoplay=1";
        break;
    }
    window.location.href = url;
})()

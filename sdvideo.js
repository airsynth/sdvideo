(function() {
    id = window.location.toString();
    divide = id.split("#");
    url = divide[0];
    urlArray = url.split("/");
    dominio = urlArray[2];
    switch (dominio) {
    case "www.dailymotion.com":
    case "dailymotion.com":
        url = id.replace("/video/", "/embed/video/") + "?logo=0&autoPlay=1&forcedQuality=hq";
        break;
    case "www.youtube.com":
    case "youtube.com":
        id = url.replace(/^[^v]+v.(.{11}).*/, "$1");
        url = "http://www.youtube.com/watch_popup?v=" + id + "&hl=es&fs=1&vq=hd720&autoplay=1&showinfo=1&rel=0";
        break;
    case "vimeo.com":
        url = "http://player.vimeo.com/video/" + urlArray[3] + "?autoplay=1";
        break;
    case "www.livestream.com":
        url = "http://www.livestream.com/embed/" + urlArray[3] + "?autoPlay=true";
        break;
    case "www.ustream.tv":
        url = url.replace("/recorded/", "/embed/recorded/") + "?v=3&autoplay=1";
        break;
    }
    window.location.href = url;
})()

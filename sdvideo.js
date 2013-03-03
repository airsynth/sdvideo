(function() {
    id = window.location.toString();
    idArray = id.split("/");
    dominio = idArray[2];
    switch (dominio) {
    case "www.dailymotion.com":
    case "dailymotion.com":
        url = id.split("#");
        url = url[0].replace("/video/", "/embed/video/") + "?logo=0&autoPlay=1&forcedQuality=hq";
        break;
    case "www.youtube.com":
    case "youtube.com":
        id = id.replace(/^[^v]+v.(.{11}).*/, "$1");
        url = "http://www.youtube.com/watch_popup?v=" + id + "&hl=es&fs=1&vq=hd720&autoplay=1&showinfo=1&rel=0";
        break;
    case "vimeo.com":
        url = "http://player.vimeo.com/video/" + idArray[3] + "?autoplay=1";
        break;
    case "www.livestream.com":
        url = "http://www.livestream.com/embed/" + idArray[3] + "?autoPlay=true";
    }
    window.location.href = url;
})()

(function() {
    "use strict";

    window.logoplugin || (window.logoplugin = !0, Lampa.Listener.follow("full", function(a) {
        if ("complite" == a.type) {
            var e = a.data.movie,
                mediaType = e.first_air_date ? "tv" : "movie",
                cacheKey = 'logo_' + mediaType + '_' + e.id,
                currentLang = Lampa.Storage.get("language"),
                cachedLogo = localStorage.getItem(cacheKey);
            if (cachedLogo) {
                cachedLogo = JSON.parse(cachedLogo);
                if (cachedLogo.timestamp > Date.now() - 30 * 24 * 60 * 60 * 1000) {
                    insertLogo(a.object.activity.render(), cachedLogo.path, true);
                    return;
                }
            }
            var mainRequest = Lampa.TMDB.api(mediaType + "/" + e.id + "/images?api_key=" + Lampa.TMDB.key() + "&language=" + currentLang);
            $.get(mainRequest, function(mainData) {
                if (mainData.logos && mainData.logos[0] && mainData.logos[0].file_path) {
                    var logoPath = mainData.logos[0].file_path;
                    cacheLogo(logoPath, cacheKey);
                    insertLogo(a.object.activity.render(), logoPath, false);
                } else if (currentLang !== 'en') {
                    var enRequest = Lampa.TMDB.api(mediaType + "/" + e.id + "/images?api_key=" + Lampa.TMDB.key() + "&language=en");
                    $.get(enRequest, function(enData) {
                        if (enData.logos && enData.logos[0] && enData.logos[0].file_path) {
                            var logoPath = enData.logos[0].file_path;
                            cacheLogo(logoPath, cacheKey);
                            insertLogo(a.object.activity.render(), logoPath, false);
                        }
                    });
                }
            });
        }
    }));
    function cacheLogo(path, key) {
        var logoData = {
            path: path,
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(logoData));
    }
    function insertLogo(renderElement, logoPath, fromCache) {
        var logoBlock = renderElement.find(".full-start-new__logo-block");
        var logoImg = $(`<img class="logo-img" style="display: block; max-height: 8em; max-width: 50vw; margin-top: 0em; margin-bottom: 0em; align-self: center;" src="${Lampa.TMDB.image("/t/p/w500" + logoPath)}">`);
        var mobileStyles = `@media (max-width: 768px) { .logo-img { max-height: 6em !important; max-width: 90vw !important; } } `;
        $('head').append('<style>' + mobileStyles + '</style>');
        logoImg.css({'opacity': '0', 'transform': 'translateY(20px) scale(0.9)', 'transition': 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'});
        logoBlock.append(logoImg);
        requestAnimationFrame(() => {
            logoImg.css({'opacity': '1', 'transform': 'translateY(0) scale(1)'});
        });
    }
})();
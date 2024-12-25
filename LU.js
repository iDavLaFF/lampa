(function () {
    'use strict';

    Lampa.Utils.putScriptAsync([
        'http://bylampa.github.io/tmdb-proxy.js',
        'http://bylampa.github.io/account.js',
// @CUB thanks for all of your work
        'http://cub.red/plugin/tracks',
// @LME thanks. Public parsers
        'https://lampame.github.io/main/pubtorr/pubtorr.js',
// @LME thanks. new categories & collection button for 'franchises'
//        'https://lampame.github.io/main/nc/nc.js?v=' + Math.random(),
// @LME thanks. torrents to Infuse saver (iOS/macOS). !NB 'Save all' need 'shortcut': https://www.icloud.com/shortcuts/406d7f6bdfcf466da153a38dea6bb663 
//        'https://lampame.github.io/main/its/its.js',
// @NB557 thanks. 'KPrating.plugin' !NB Need update 'cause not work with 'cardify'
        'https://nb557.github.io/plugins/rating.js',
// @LAMPAC thanks. !NB Timecode work only in torrents
        'https://idavlaff.github.io/lampa/plugins/timecode.js',
// @CUB thanks, !'but pay for a big background, seriously?' Combine 'interface' & 'cardify' plugins => 'beautify' !NB 'cardify' without trailers, only cards beauty
        'https://idavlaff.github.io/lampa/plugins/beautify.js',
// Add new category "Cartoons"
        'https://idavlaff.github.io/lampa/plugins/menu/mult.js',
// Add new category "Documentary"
        'https://idavlaff.github.io/lampa/plugins/menu/doc.js',
// Add new category "4K releases"
        'https://idavlaff.github.io/lampa/plugins/menu/new4k.js',
// @BWA thanks. Add 'Strawberry.plugin'
        'https://idavlaff.github.io/lampa/plugins/sisi.js',
        'https://idavlaff.github.io/lampa/plugins/modification.js'
    ], function () { });

})();

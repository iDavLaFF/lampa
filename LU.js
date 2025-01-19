(function () {
    'use strict';

    Lampa.Utils.putScriptAsync([
        'https://bylampa.github.io/tmdb-proxy.js',
        'https://bylampa.github.io/account.js',
// @CUB thanks for all of your work
        'https://cub.red/plugin/tracks',
// @LME thanks. Public parsers
        'https://lampame.github.io/main/pubtorr/pubtorr.js',
// @LME thanks. new categories & collection button for 'franchises'
//        'https://lampame.github.io/main/nc/nc.js?v=' + Math.random(),
// @LME thanks. torrents to Infuse saver (iOS/macOS). !NB 'Save all' need 'shortcut': https://www.icloud.com/shortcuts/406d7f6bdfcf466da153a38dea6bb663 
//        'https://lampame.github.io/main/its/its.js',
// @LAMPAC thanks. !NB Timecode work only in torrents
        'https://idavlaff.github.io/lampa/plugins/timecode.js',
// @CUB thanks, !'but pay for a big background, seriously?' Combine 'interface' & 'cardify' plugins => 'beautify'. @BYLAMPA thanks, fix rating issue
        'https://idavlaff.github.io/lampa/plugins/beautify.js',
// @BAZZZILIUS thanks. Add gold 'theme'
        'https://bazzzilius.github.io/scripts/gold_theme.js',
// @NB557 thanks. 'KPrating.plugin'
        'https://nb557.github.io/plugins/rating.js',
// @AndreyURL54 thanks. Add left menu sort functionality
        'http://193.233.134.21/plugins/menusort',
// @AND7EY rhanks. Add head menu sort functionality
        'https://and7ey.github.io/lampa/head_filter.js',
// Add new category "4K releases"
//        'https://idavlaff.github.io/lampa/plugins/menu/new4k.js',
// Add new category "Documentary"
//        'https://idavlaff.github.io/lampa/plugins/menu/doc.js',
// Add new category "Cartoons"
        'https://idavlaff.github.io/lampa/plugins/menu/mult.js'
// Some personal interface modifications
//        'https://idavlaff.github.io/lampa/plugins/fix.js'
// @LAMPAC thanks. Add online & 18+ balancers
//        'https://durex.monster'
    ], function () { });

function showReload(reloadText){
Lampa.Modal.open({
      title: '',
      align: 'center',
      zIndex: 300,
      html: $('<div class="about">' + reloadText + '</div>'),
      buttons: [{
        name: 'Нет',
        onSelect: function onSelect() {
         //Lampa.Modal.close();
          $('.modal').remove();
	  Lampa.Controller.toggle('content')
        }
      }, {
        name: 'Да',
        onSelect: function onSelect() {
          window.location.reload();
        }
      }]
});
}

})();

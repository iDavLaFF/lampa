(function () {
    'use strict';

    var domain = 'idavlampa.ru';
    var tmdb_proxy = {
      name: 'TMDB Proxy',
      version: '1.0.4',
      description: 'Проксирование TMDB',
      path_image: 'imagetmdb.' + domain + '/',
      path_api: 'apitmdb.' + domain + '/'
    };

    function filter(u) {
      var s = u.slice(0, 8);
      var e = u.slice(8).replace(/\/+/g, '/');
      return s + e;
    }

    Lampa.TMDB.image = function (url) {
      var base = Lampa.Utils.protocol() + 'image.tmdb.org/' + url;
      return filter(Lampa.Storage.field('proxy_tmdb') ? 
             Lampa.Utils.protocol() + tmdb_proxy.path_image + url : 
             base);
    };

    Lampa.TMDB.api = function (url) {
      var base = Lampa.Utils.protocol() + 'api.themoviedb.org/3/' + url;
      return filter(Lampa.Storage.field('proxy_tmdb') ? 
             Lampa.Utils.protocol() + tmdb_proxy.path_api + url : 
             base);
    };

    console.log('TMDB-Proxy');
})();
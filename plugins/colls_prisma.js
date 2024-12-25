(function () {
  'use strict';

  var network = new Lampa.Reguest();
  var api_url = Lampa.Utils.protocol() + 'api.lkpma.xyz/collections/';

  function main(params, oncomplete, onerror) {
    network.silent(api_url, function (data) {
      data.collection = true;
      data.total_pages = 1;
      data.results.forEach(function (element) {
      });
      oncomplete(data);
    }, onerror);
  }

  function full(params, oncomplete, onerror) {
    network.silent(api_url + '/colls/' + params.url, function (data) {
      data.total_pages = 1;
      oncomplete(data);
    }, onerror);
  }

  function clear() {
    network.clear();
  }

  var Api = {
    main: main,
    full: full,
    clear: clear
  };

  function component$1(object) {
    var comp = new Lampa.InteractionCategory(object);

    comp.create = function () {
      Api.main(object, this.build.bind(this), this.empty.bind(this));
    };

    comp.nextPageRequest = function (object, resolve, reject) {
      Api.main(object, resolve.bind(comp), reject.bind(comp));
    };

    comp.cardRender = function (object, element, card) {
      element.poster_path = 'https://img.lkpma.xyz/t/p/w300/' + element.img;

      card.onMenu = false;

      card.onEnter = function () {
        Lampa.Activity.push({
          url: element.hpu,
          title: element.title,
          component: 'prisma_collection',
          page: 1
        });
      };
    };

    return comp;
  }

  function component(object) {
    var comp = new Lampa.InteractionCategory(object);

    comp.create = function () {
      Api.full(object, this.build.bind(this), this.empty.bind(this));
    };

    comp.nextPageRequest = function (object, resolve, reject) {
      Api.full(object, resolve.bind(comp), reject.bind(comp));
    };

    return comp;
  }

  function startPlugin() {
    var manifest = {
      type: 'video',
      version: '1.1.1',
      name: 'Подборки PRISMA',
      description: '',
      component: 'prisma_collections'
    };
    Lampa.Manifest.plugins = manifest;
    Lampa.Component.add('prisma_collections', component$1);
    Lampa.Component.add('prisma_collection', component);

    function addMenuItem() {
      var button = $('<li class="menu__item selector"></li>');
      var icon = $('<div class="menu__ico"></div>');
      var svg = $('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>');
      var text = $('<div class="menu__text">' + manifest.name + '</div>');

      icon.append(svg);
      button.append(icon);
      button.append(text);

      button.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: manifest.name,
          component: 'prisma_collections',
          page: 1
        });
      });
      $('.menu .menu__list').eq(0).append(button);
    }

    if (!window.prisma_collections_ready) {
      window.prisma_collections_ready = true;
      addMenuItem();
    }

    if (window.appready) {
      addMenuItem();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          addMenuItem();
        }
      });
    }
  }

  startPlugin();

})();

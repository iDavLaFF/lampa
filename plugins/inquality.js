(function () {
  'use strict';

  Lampa.Platform.tv();
  (function () {
    var _0x5731ca = function () {
      var _0x3395b6 = true;
      return function (_0x27eac9, _0xd218aa) {
        var _0x300e78 = _0x3395b6 ? function () {
          if (_0xd218aa) {
            var _0x1f60bd = _0xd218aa.apply(_0x27eac9, arguments);
            _0xd218aa = null;
            return _0x1f60bd;
          }
        } : function () {};
        _0x3395b6 = false;
        return _0x300e78;
      };
    }();
    var _0x10cb1c = function () {
      var _0x4be477 = true;
      return function (_0x4bdd31, _0x28589e) {
        var _0x5e88a7 = _0x4be477 ? function () {
          if (_0x28589e) {
            var _0x5df9c9 = _0x28589e.apply(_0x4bdd31, arguments);
            _0x28589e = null;
            return _0x5df9c9;
          }
        } : function () {};
        _0x4be477 = false;
        return _0x5e88a7;
      };
    }();
    var _0x51f065 = function () {
      var _0x324f4e = true;
      return function (_0xda7c6c, _0x50b245) {
        var _0x202e7b = _0x324f4e ? function () {
          if (_0x50b245) {
            var _0xe86cbc = _0x50b245.apply(_0xda7c6c, arguments);
            _0x50b245 = null;
            return _0xe86cbc;
          }
        } : function () {};
        _0x324f4e = false;
        return _0x202e7b;
      };
    }();
    'use strict';
    function _0x2fbe09() {
      var _0x14e88d = _0x5731ca(this, function () {
        return _0x14e88d.toString().search("(((.+)+)+)+$").toString().constructor(_0x14e88d).search("(((.+)+)+)+$");
      });
      _0x14e88d();
      (function () {
        _0x10cb1c(this, function () {
          var _0x5cc27f = new RegExp("function *\\( *\\)");
          var _0x49eb5f = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
          var _0x4cc6d7 = _0x573497("init");
          if (!_0x5cc27f.test(_0x4cc6d7 + "chain") || !_0x49eb5f.test(_0x4cc6d7 + "input")) {
            _0x4cc6d7('0');
          } else {
            _0x573497();
          }
        })();
      })();
      var _0x464874 = _0x51f065(this, function () {
        var _0x533fe0;
        try {
          var _0x3f4044 = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x533fe0 = _0x3f4044();
        } catch (_0x19b571) {
          _0x533fe0 = window;
        }
        var _0x21ba03 = _0x533fe0.console = _0x533fe0.console || {};
        var _0x1b8fe0 = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (var _0x2ff46c = 0; _0x2ff46c < _0x1b8fe0.length; _0x2ff46c++) {
          var _0x419089 = _0x51f065.constructor.prototype.bind(_0x51f065);
          var _0x52ce19 = _0x1b8fe0[_0x2ff46c];
          var _0x51179b = _0x21ba03[_0x52ce19] || _0x419089;
          _0x419089.__proto__ = _0x51f065.bind(_0x51f065);
          _0x419089.toString = _0x51179b.toString.bind(_0x51179b);
          _0x21ba03[_0x52ce19] = _0x419089;
        }
      });
      _0x464874();
      var _0x19ab2a = $("<li class=\"menu__item selector\" data-action=\"hd\"><div class=\"menu__ico\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1.2em\" height=\"1.2em\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M3.577 8.9v.03h1.828V5.898h-.062a47 47 0 0 0-1.766 3.001z\"/><path d=\"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.372 3.715l.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202m7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624l-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z\"/></g></svg></div><div class=\"menu__text\">В качестве</div></li>");
      _0x19ab2a.on("hover:enter", function () {
        var _0x12e434 = {
          url: "?cat=&sort=now&uhd=true",
          title: "В качестве",
          component: "category_full",
          source: "cub",
          sort: "now",
          card_type: "true",
          page: 0x1
        };
        Lampa.Activity.push(_0x12e434);
      });
      $(".menu .menu__list").eq(0).append(_0x19ab2a);
    }
    if (window.appready) {
      _0x2fbe09();
    } else {
      Lampa.Listener.follow("app", function (_0x35a813) {
        if (_0x35a813.type == "ready") {
          _0x2fbe09();
        }
      });
    }
  })();
  function _0x573497(_0x220f73) {
    function _0x59641f(_0x2ccc39) {
      if (typeof _0x2ccc39 === "string") {
        return function (_0x27660a) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + _0x2ccc39 / _0x2ccc39).length !== 1 || _0x2ccc39 % 20 === 0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      _0x59641f(++_0x2ccc39);
    }
    try {
      if (_0x220f73) {
        return _0x59641f;
      } else {
        _0x59641f(0);
      }
    } catch (_0x21a1e8) {}
  }
})();
(function () {
  'use strict';

  Lampa.Platform.tv();
  (function () {
    var _0x2d5894 = function () {
      var _0x155ada = true;
      return function (_0x32f8a0, _0x56a8ed) {
        var _0x39cbc8 = _0x155ada ? function () {
          if (_0x56a8ed) {
            var _0x29d990 = _0x56a8ed.apply(_0x32f8a0, arguments);
            _0x56a8ed = null;
            return _0x29d990;
          }
        } : function () {};
        _0x155ada = false;
        return _0x39cbc8;
      };
    }();
    var _0x28ac54 = function () {
      var _0x47eab2 = true;
      return function (_0x4d9fa8, _0x57c769) {
        var _0x4ea0ad = _0x47eab2 ? function () {
          if (_0x57c769) {
            var _0x36d6dc = _0x57c769.apply(_0x4d9fa8, arguments);
            _0x57c769 = null;
            return _0x36d6dc;
          }
        } : function () {};
        _0x47eab2 = false;
        return _0x4ea0ad;
      };
    }();
    'use strict';
    var _0x186e00 = 0;
    function _0x559ae7() {
      Lampa.Controller.listener.follow("toggle", function (_0x11d06e) {
        if (_0x11d06e.name == "select") {
          setTimeout(function () {
            if (Lampa.Activity.active().component == 'full') {
              if (document.querySelector(".ad-server") !== null) {
                $(".ad-server").remove();
              }
            }
            if (Lampa.Activity.active().component === "modss_online") {
              $(".selectbox-item--icon").remove();
            }
          }, 20);
        }
      });
    }
    function _0x5bb019() {
      setTimeout(function () {
        $(".selectbox-item__lock").parent().css('display', "none");
        if (!$("[data-name=\"account_use\"]").length) {
          $("div > span:contains(\"Статус\")").parent().remove();
        }
      }, 10);
    }
    function _0x47d8c8() {
      document.addEventListener("DOMSubtreeModified", function _0x52964d(_0x2ae3a6) {
        var _0x4549a2 = document.getElementsByClassName("card");
        if (_0x4549a2.length > 0) {
          if (_0x186e00 == 0) {
            _0x186e00 = 1;
            _0x5bb019();
            setTimeout(function () {
              _0x186e00 = 0;
            }, 500);
          }
        }
      }, false);
    }
    function _0xabafa3() {
      var _0x36665c = _0x2d5894(this, function () {
        return _0x36665c.toString().search("(((.+)+)+)+$").toString().constructor(_0x36665c).search("(((.+)+)+)+$");
      });
      _0x36665c();
      var _0x33120e = _0x28ac54(this, function () {
        var _0x5de979 = function () {
          var _0x15048d;
          try {
            _0x15048d = Function("return (function() {}.constructor(\"return this\")( ));")();
          } catch (_0x15339e) {
            _0x15048d = window;
          }
          return _0x15048d;
        };
        var _0x33a895 = _0x5de979();
        var _0x28af97 = _0x33a895.console = _0x33a895.console || {};
        var _0x5365c1 = ["log", 'warn', 'info', "error", "exception", "table", "trace"];
        for (var _0x13ed6b = 0; _0x13ed6b < _0x5365c1.length; _0x13ed6b++) {
          var _0x1ad445 = _0x28ac54.constructor.prototype.bind(_0x28ac54);
          var _0x475ebd = _0x5365c1[_0x13ed6b];
          var _0x316d31 = _0x28af97[_0x475ebd] || _0x1ad445;
          _0x1ad445.__proto__ = _0x28ac54.bind(_0x28ac54);
          _0x1ad445.toString = _0x316d31.toString.bind(_0x316d31);
          _0x28af97[_0x475ebd] = _0x1ad445;
        }
      });
      _0x33120e();
      var _0x4c696b = document.createElement("style");
      _0x4c696b.innerHTML = ".button--subscribe { display: none; }";
      document.body.appendChild(_0x4c696b);
      Lampa.Listener.follow('full', function (_0x15b291) {
        if (_0x15b291.type == "build" && _0x15b291.name == "discuss") {
          setTimeout(function () {
            $(".full-reviews").parent().parent().parent().parent().remove();
          }, 100);
        }
      });
      $(document).ready(function () {
        var _0x5ab392 = new Date();
        var _0x53c442 = _0x5ab392.getTime();
        localStorage.setItem("region", "{\"code\":\"uk\",\"time\":" + _0x53c442 + '}');
      });
      $("[data-action=\"tv\"]").on("hover:enter hover:click hover:touch", function () {
        var _0x2b2ae1 = setInterval(function () {
          if (document.querySelector('.ad-bot') !== null) {
            $('.ad-bot').remove();
            clearInterval(_0x2b2ae1);
            setTimeout(function () {
              Lampa.Controller.toggle('content');
            }, 0);
          }
        }, 50);
        var _0x51beae = setInterval(function () {
          if (document.querySelector(".card__textbox") !== null) {
            $(".card__textbox").parent().parent().remove();
            clearInterval(_0x51beae);
          }
        }, 50);
      });
      setTimeout(function () {
        $(".open--feed").remove();
        $(".open--premium").remove();
        $(".open--notice").remove();
        if ($(".icon--blink").length > 0) {
          $(".icon--blink").remove();
        }
      }, 1000);
      Lampa.Settings.listener.follow("open", function (_0x5f0414) {
        if (_0x5f0414.name == "account") {
          setTimeout(function () {
            $(".settings--account-premium").remove();
            $("div > span:contains(\"CUB Premium\")").remove();
          }, 0);
        }
        if (_0x5f0414.name == "server") {
          if (document.querySelector('.ad-server') !== null) {
            $(".ad-server").remove();
          }
        }
      });
      Lampa.Listener.follow('full', function (_0x25234a) {
        if (_0x25234a.type == 'complite') {
          $(".button--book").on("hover:enter", function () {
            _0x5bb019();
          });
        }
      });
      Lampa.Storage.listener.follow("change", function (_0x1e3d6a) {
        if (_0x1e3d6a.name == 'activity') {
          if (Lampa.Activity.active().component === 'bookmarks') {
            $(".register:nth-child(4)").hide();
            $(".register:nth-child(5)").hide();
            $(".register:nth-child(6)").hide();
            $(".register:nth-child(7)").hide();
            $(".register:nth-child(8)").hide();
          }
          setTimeout(function () {
            _0x47d8c8();
          }, 200);
        }
      });
    }
    if (window.appready) {
      _0xabafa3();
      _0x47d8c8();
      _0x559ae7();
    } else {
      Lampa.Listener.follow("app", function (_0x529bee) {
        if (_0x529bee.type == 'ready') {
          _0xabafa3();
          _0x47d8c8();
          _0x559ae7();
          $("[data-action=feed]").eq(0).remove();
          $("[data-action=subscribes]").eq(0).remove();
          $("[data-action=myperson]").eq(0).remove();
        }
      });
    }
  })();
})();
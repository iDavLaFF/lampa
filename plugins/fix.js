// Удаляем разделы из настроек
Lampa.Settings.listener.follow('open', function (e) {
    if (e.name == 'main') {
        setTimeout(function () {
            $('div[data-component="account"]').remove();
            $('div[data-component="add_plugins"]').remove();
            $('div[data-component="parental_control"]').remove();
        }, 5);
    }
});

// Удаляем кнопки из верхнего меню
setTimeout(function () {
    $('.notice-screen').remove();
    $('.open--feed').remove();
    $('.open--notice').remove();
  }, 1000);

// Удаляем ненужные разделы из бокового меню, и перемещаем Аниме после Мультфильмов
Lampa.Listener.follow('app', function (e) {
    if (e.type == 'ready') {
        setTimeout(function () {
            $('[data-action=feed]').eq(0).remove();
            $('[data-action=myperson]').eq(0).remove();
            $('[data-action=relise]').eq(0).remove();
            $('[data-action=subscribes]').eq(0).remove();
            $('[data-action=timetable]').eq(0).remove();
            $('[data-action=console]').eq(0).remove();
            $('[data-action=anime]').insertBefore($('[data-action=catalog]'));
        }, 10);
    }
});

// Добавляем меню для скрытия/отображения категории "Клубничка"
Lampa.SettingsApi.addParam({
    component: 'sisi',
    param: {
        name: 'SISI_fix',
        type: 'select',
        values: {
            1: 'Скрыть',
            2: 'Отображать',
        },
        default: '1',
    },
    field: {
        name: 'Боковое меню',
    },
    onChange: function(value) {
        if (value == 2) { // Отображать
            // Показать пункт меню "Клубничка"
            $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').show();
            $('[data-action=sisi_]').eq(0).show();
        } else if (value == 1) { // Скрыть
            // Скрыть пункт меню "Клубничка"
            $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').hide();
            $('[data-action=sisi_]').eq(0).hide();
        }
    },
});

// Инициализация видимости при загрузке
$(document).ready(function() {
    if (Lampa.Storage.field('SISI_fix') == 1) {
        // Скрыть "Клубничка", если установлено значение "Скрыть"
        $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').hide();
        $('[data-action=sisi_]').eq(0).hide();
    } else if (Lampa.Storage.field('SISI_fix') == 2) {
        // Показать "Клубничка", если установлено значение "Отображать"
        $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').show();
        $('[data-action=sisi_]').eq(0).show();
    }
});

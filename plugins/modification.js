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
            $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains('lampac_sisiname')').show();
            $('[data-action=sisi_]').eq(0).show();
        } else if (value == 1) { // Скрыть
            // Скрыть пункт меню "Клубничка"
            $('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains('lampac_sisiname')').hide();
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

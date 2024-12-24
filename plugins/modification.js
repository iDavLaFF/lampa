Lampa.SettingsApi.addParam({
    component: 'sisi',
    param: {
        name: 'SISI_fix',
        type: 'select',
        values: {
            1: 'Скрыть из меню',
            2: 'Отображать в меню',
        },
        default: '1',
    },
    field: {
        name: 'Клубничка',
        description: 'Плагин с видео 18+',
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

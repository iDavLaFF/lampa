Lampa.SettingsApi.addComponent({
    component: 'sisi',
    name: '18+',
    icon: '<svg width="256px" height="256px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M51.348 15.912c-3.332-3.347-7.33-4.796-11.498-4.796c-.359 0-.721.016-1.08.038C37.734 6.492 36.295 2 36.295 2s-6.291 3.991-9.97 7.716c-4.255-3.327-9.149-6.391-9.149-6.391s-1.044 7.646-.678 13.247c-5.577-.361-13.188.692-13.188.692s3.051 4.912 6.368 9.185C5.97 30.146 2 36.47 2 36.47s4.646 1.497 9.382 2.538c-.159 4.421 1.261 8.681 4.776 12.213C23.599 58.692 36.494 62 46.373 62c5.729-.001 10.445-1.113 12.492-3.17c5.522-5.549 4.184-31.161-7.517-42.918m6.074 41.482c-1.236 1.242-4.789 2.57-11.049 2.571c-9.275 0-21.77-3.147-28.771-10.18c-8.058-8.096-3.363-20.183 4.41-27.987c5.389-5.413 12.057-8.646 17.838-8.646c3.9.001 7.283 1.411 10.055 4.198c4.908 4.93 8.424 13.172 9.643 22.61c1.147 8.891-.2 15.499-2.126 17.434" /></svg>',
});

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

// Удаляем разделы из настроек
Lampa.Settings.listener.follow('open', function (e) {
    if (e.name == 'main') {
        setTimeout(function () {
            $('div[data-component="account"]').remove();
            $('div[data-component="parental_control"]').remove();
        }, 50);
    }
});

// Удаляем кнопки из верхнего меню
setTimeout(function () {
    $('.notice-screen').remove();
    $('.open--feed').remove();
    $('.open--notice').remove();
  }, 500);

// Удаляем ненужные разделы из бокового меню
Lampa.Listener.follow('app', function (e) {
    if (e.type == 'ready') {
        setTimeout(function () {
            $('[data-action=feed]').eq(0).remove();
            $('[data-action=myperson]').eq(0).remove();
            $('[data-action=relise]').eq(0).remove();
            $('[data-action=subscribes]').eq(0).remove();
            $('[data-action=timetable]').eq(0).remove();
            $('[data-action=console]').eq(0).remove();
        }, 100);
    }
});

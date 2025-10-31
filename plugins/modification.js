// Добавляем плагины
const plugins = [
  './plugins/cardify.js', // @CUB thanks. Beauty card interface style + fix & some edits.
  './plugins/logo.js', // @ELENATV1 thanks. Movie & TV Show logo add + fix & some edits.
  'https://lam.maxvol.pro/online.js', // @MAXVOL thanks. Online plugins
  'https://lam.maxvol.pro/sisi.js', // @MAXVOL thanks. 18+ plugin
  'https://cub.rip/plugin/sport' // @CUB thanks. Sport live translations plugin
];

// Проверяем сохранённое значение стиля интерфейса
const style = Lampa.Storage.get('poster_style', 'new');
if (style === 'new') {
  plugins.unshift('./plugins/interface.js'); // подключаем в начало
}

Lampa.Utils.putScriptAsync(plugins);

// Добавляем в "Настройки" пункт выборв "Стиль главного экрана"
Lampa.SettingsApi.addParam({
  component: 'interface',
  param: {
    name: "poster_style",
    type: 'select',
    values: {
      new: 'Новый стиль',
      classic: 'Классический стиль'
    },
    default: 'new'
  },
  field: {
    name: 'Стиль главного экрана',
    description: 'Выберите стиль интерфейса'
  },
  onChange: function(value) {
    const pluginUrl = './plugins/interface.js';
    const pluginName = 'Новый интерфейс';
    const plugins = Lampa.Storage.get('plugins', []);
    const inStorage = plugins.some(p => p.url === pluginUrl || p.name === pluginName);
    const inDOM = !!document.querySelector(`script[src*="interface.js"]`);
    const isInstalled = inStorage || inDOM;

    // сохраняем выбор
    Lampa.Storage.set('poster_style', value);

    if (value === 'new') {
      if (!isInstalled) {
        Lampa.Noty.show('Установлен новый интерфейс, перезагрузка...');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        Lampa.Noty.show('Новый интерфейс уже активен');
      }
    }

    if (value === 'classic') {
      if (isInstalled) {
        Lampa.Noty.show('Возврат к классическому интерфейсу, перезагрузка...');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        Lampa.Noty.show('Классический интерфейс уже используется');
      }
    }
  }
});

// Кэшируем часто (используемые элементы
const $document = $(document);
const $body = $('body');

// Универсальная функция для удаления элементов
const removeElements = (selectors, context = document) => {
  const selector = Array.isArray(selectors) ? selectors.join(',') : selectors;
  $(selector, context).remove();
};

// Проверяем наличие Lampa и запускаем настройки
const checkLampa = () => {
  if (typeof Lampa !== 'undefined') {
    if (!Lampa.Storage.get('set', 'false')) startSet();
    return true;
  }
  return false;
};

if (!checkLampa()) {
  const timer = setInterval(() => checkLampa() && clearInterval(timer), 1000);
}

function startSet() {
  const settings = {
    set: 'true',
    language: 'ru',
//    cub_domain: 'mirror-kurwa.men',
    interface_size: 'small',
    background: 'false',
    black_style: 'true',
    glass_style: 'false',
    advanced_animation: 'false',
    mask: 'false',
    card_views_type: 'view',
    player_timecode: 'continue',
    video_quality_default: '2160',
    parser_use: 'true',
    parser_torrent_type: 'jackett',
    jackett_url: 'jacred.xyz',
    jackett_interview: 'all',
    tmdb_lang: 'ru',
    poster_size: 'w500',
//    proxy_tmdb_auto: 'true',
//    proxy_tmdb: 'true',
    source: 'tmdb',
//    protocol: 'http',
    screensaver: 'false',
    screensaver_time: '10',
    screensaver_types: 'chrome',
    helper: 'false',
    pages_save_total: '3',
    cache_images: 'true',
    keyboard_type: 'integrate',
    sisi_preview: 'false',
    torrents_filter: JSON.stringify({
      quality: ['4k', '1080p']
    })
  };

  Object.keys(settings).forEach(key => Lampa.Storage.set(key, settings[key]));
  location.reload();
}

// Удаляем элементы из меню настроек
Lampa.Settings.listener.follow('open', (e) => {
  const components = ['account', 'tmdb', 'parental_control', 'sisi'];
  const params = ['light_version', 'background', 'background_type', 'black_style', 'card_interfice_type', 
    'card_interfice_poster', 'card_interfice_cover', 'glass_style', 'glass_opacity', 
    'card_interfice_reactions', 'interface_sound_play', 'interface_sound_level', 'advanced_animation', 'scroll_type', 
    'card_views_type', 'hide_outside_the_screen', 'player_normalization', 'playlist_next', 
    'player_timecode', 'player_scale_method', 'player_hls_method', 'player_rewind', 
    'subtitles_start', 'subtitles_size', 'subtitles_stroke', 'subtitles_backdrop', 
    'video_quality_default', 'jackett_interview', 'parse_lang', 'parse_timeout', 
    'parse_in_search', 'torrserver_savedb', 'torrserver_preload', 'source', 'cache_images', 
    'screensaver', 'screensaver_type', 'screensaver_time', 'helper', 'helper--start-again', 
    'pages_save_total', 'time_offset', 'navigation_type', 'keyboard_type', 'card_quality', 
    'card_episodes', 'device_name', 'export'];
  const titles = ['Фон', 'Карточка', 'Стекло', 'Системные звуки', 'Субтитры', 'Дополнительно', 
    'Скринсейвер', 'Подсказки', 'Еще'];

  const selectorsToRemove = [
    ...components.map(c => `[data-component="${c}"]`),
    ...params.map(p => `[data-name="${p}"]`),
    ...titles.map(t => `.settings-param-title:has(span:contains("${t}"))`),
    '.settings-param:has(.settings-param__name:contains("Показать подсказки снова"))'
  ];

  removeElements(selectorsToRemove, e.body);
});

// Удаляем элементы из шапки и бокового меню
Lampa.Listener.follow('app', (e) => {
  if (e.type === 'ready') {
    const isMobile = Lampa.Platform.screen('mobile');
    
    // Элементы для удаления
    const headerElements = [
      '.head__logo-icon', '.head__logo-halloween', '.head__menu-icon', 
      '.head__title', '.processing', '.open--broadcast', '.open--premium', 
      '.open--notice', '.notice--icon', '.open--profile', '.full-screen', 
      '.head__split', '.head__time'
    ];
    
    const menuElements = isMobile
      ? ['[data-action=filter]', '[data-action=relise]', '[data-action=timetable]', '[data-action=about]', '[data-action=console]']
      : ['[data-action=filter]', '[data-action=relise]', '[data-action=timetable]', '.menu__split', '[data-action=settings]', '[data-action=about]', '[data-action=console]'];

    removeElements([...headerElements, ...menuElements]);

    // Скрываем элемент "Клубничка" из верхней панели (только для десктопов)
    if (!isMobile) {
      const hideSisiButton = (element) => {
        if (element.matches('.head__action.open--sisi')) {
          element.style.display = 'none';
          window.sisiButton = element;
        }
      };

      // Проверяем существующие элементы
      document.querySelectorAll('.head__action.open--sisi').forEach(hideSisiButton);

      // Наблюдатель для новых элементов
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(({ addedNodes }) => {
          addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              if (node.matches('.head__action.open--sisi')) hideSisiButton(node);
              node.querySelectorAll('.head__action.open--sisi').forEach(hideSisiButton);
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
});

// Удаляем источник поиска "Клубничка" после открытия окна поиска
Lampa.Search.listener.follow('open', (e) => {
  const searchElements = [
    '.search-source__tab:contains("Клубничка")',
    '.search-source:has(.search-source__tab:contains("Клубничка"))'
  ];
  removeElements(searchElements, e.body || document);
});

// Отслеживание комбинации клавиш для открытия "Клубнички"
const keySequence = [38, 38, 39, 39, 40, 40]; // ↑↑→→↓↓
let keyIndex = 0;
let lastKeyTime = 0;

$document.on('keydown', (e) => {
  const now = Date.now();
  
  // Сброс если между нажатиями больше 2 секунд
  if (now - lastKeyTime > 2000) keyIndex = 0;
  lastKeyTime = now;

  // Проверяем последовательность
  keyIndex = (e.keyCode === keySequence[keyIndex]) ? keyIndex + 1 : 0;
  
  // Если вся последовательность введена
  if (keyIndex === keySequence.length) {
    keyIndex = 0;
    const sisiButton = $('.open--sisi');
    if (sisiButton.length) {
      sisiButton.trigger('hover:enter');
    }
  }

});
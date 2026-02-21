// Добавляем плагины
const plugins = [
  './plugins/logo.js', // @ELENATV1 thanks. Movie & TV Show logo add + fix & some edits.
  'https://lam.maxvol.pro/online.js' // @MAXVOL thanks. Online plugin
//  'https://lam.maxvol.pro/sisi.js' // @MAXVOL thanks. 18+ plugin
];

Lampa.Utils.putScriptAsync(plugins);
/*
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
    Lampa.Activity.push({
      url: '',
      title: '',
      component: 'sisi_lampac',
      page: 1
    });
  }

});*/
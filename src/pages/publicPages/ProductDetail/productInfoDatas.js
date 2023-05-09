const cpu = [
  {
    id: 1,
    text: 'Процессор',
    info: [{text: 'Apple M1 3200MHz', id: 2}],
  },
  {
    id: 3,
    text: 'Количество ядер в процессоре',
    info: [{text: '8', id: 4}],
  },
  {
    id: 5,
    text: 'Объем кэша',
    info: [
      {text: 'L2 - 2MB;', id: 6},
      {text: ' L3 - 16MB;', id: 7},
    ],
  },
  {
    id: 8,
    text: 'Чипсет',
    info: [{text: 'Apple SoC', id: 9}],
  },
]

const img = [
  {
    id: 10,
    text: 'Экран',
    info: [
      {text: '13.3”;', id: 11},
      {text: ' 2560x1600;', id: 12},
      {text: ' Широкоформатный;', id: 13},
    ],
  },
  {
    id: 14,
    text: 'Тип покрытия экрана',
    info: [{text: 'Глянцевый', id: 15}],
  },
  {
    id: 16,
    text: 'Тип матрицы экрана',
    info: [{text: 'IPS', id: 17}],
  },
  {
    id: 18,
    text: 'Частота обновления экрана',
    info: [{text: '60 Hz', id: 19}],
  },
  {
    id: 20,
    text: 'Тип видеокарты',
    info: [{text: 'Встройная Дискретное', id: 21}],
  },
  {
    id: 22,
    text: 'Видео процессор',
    info: [{text: 'Apple graphics 7-core', id: 23}],
  },
  {
    id: 24,
    text: 'Тебе видео памяти',
    info: [{text: 'SMA', id: 25}],
  },
]

const storageDevice = [
  {id: 26, text: 'Конфигурация накопители', info: [{text: 'SSD', id: 27}]},
  {
    id: 28,
    text: 'Общий объем накопителей',
    info: [{text: '256 GB', id: 29}],
  },
  {
    id: 30,
    text: 'Общий объем накопителей SSD',
    info: [{text: '256 GB', id: 31}],
  },
  {
    id: 32,
    text: 'Оптический привет',
    info: [{text: 'Нет', id: 33}],
  },
]
const connection = [
  {
    id: 34,
    text: 'Беспроводная связь',
    info: [
      {text: 'Wi-Fi IEEE 802.11ax;', id: 35},
      {text: ' Bluetooth 5.0;', id: 36},
    ],
  },
  {
    id: 37,
    text: 'Интерфейсы',
    info: [
      {text: 'Микрофон/наушники Combo;', id: 38},
      {text: ' Thunderbolt/USB 4 x 2;', id: 39},
    ],
  },
  {
    id: 40,
    text: 'Функционал USB Type C',
    info: [
      {text: 'Power delivery;', id: 41},
      {text: ' Thunderbolt 3;', id: 42},
      {text: ' Thunderbolt4;', id: 43},
    ],
  },
]
const battery = [
  {
    id: 44,
    text: 'Время работы oт аккумулятора',
    info: [{text: '18 ч;', id: 45}],
  },
  {
    id: 46,
    text: 'Ёмкость аккумулятора',
    info: [{text: '49.9 watt*h;', id: 47}],
  },
  {
    id: 48,
    text: 'Типа аккумулятора',
    info: [{text: 'Li-Pol;', id: 49}],
  },
]
const inputDevice = [
  {
    id: 50,
    text: 'Устройство позиционирование',
    info: [{text: 'Touchpad', id: 51}],
  },
  {
    id: 52,
    text: 'Количество клавиш клавиатуры',
    info: [{text: '79', id: 53}],
  },
  {
    id: 54,
    text: 'Подсветка клавиатуры',
    info: [{text: 'Есть', id: 55}],
  },
]
const sound = [
  {
    id: 56,
    text: 'Встроенные колонки',
    info: [{text: 'Есть', id: 57}],
  },
  {
    id: 58,
    text: 'Встроенный микрофон',
    info: [{text: 'Есть', id: 59}],
  },
]

const moreInfo = [
  {
    id: 60,
    text: 'Веб камера',
    info: [
      {text: 'Есть;', id: 61},
      {text: ' 1 МП;', id: 62},
    ],
  },
  {
    id: 63,
    text: 'Сканер отпечатка пальца',
    info: [{text: 'Есть;', id: 64}],
  },
  {
    id: 65,
    text: 'Особенности:',
    info: [
      {text: 'Металлический корпус;', id: 66},
      {text: 'Пассивное охлаждение;', id: 67},
    ],
  },
  {
    id: 68,
    text: 'Комплектация',
    info: [
      {text: 'Ноутбук;', id: 69},
      {text: ' Адаптер питания USB-C;', id: 70},
      {text: ' Шнур питания 2м;', id: 71},
    ],
  },
  {
    id: 72,
    text: 'Размер',
    info: [{text: '304.1x212.4x16.1 мм', id: 73}],
  },
  {
    id: 74,
    text: 'Вес',
    info: [{text: '1.29 кг', id: 75}],
  },
]

export const productSpecs = [
  {
    id: 76,
    about: 'Процессор',
    info: cpu,
  },
  {
    id: 77,
    about: 'Изображение',
    info: img,
  },
  {
    id: 78,
    about: 'Устройство хранения данных',
    info: storageDevice,
  },
  {
    id: 79,
    about: 'Связь',
    info: connection,
  },
  {
    id: 79,
    about: 'Питание',
    info: battery,
  },
  {
    id: 80,
    about: 'Устройство ввода',
    info: inputDevice,
  },
  {
    id: 81,
    about: 'Звук',
    info: sound,
  },
  {
    id: 82,
    about: 'Дополнительно',
    info: moreInfo,
  },
]

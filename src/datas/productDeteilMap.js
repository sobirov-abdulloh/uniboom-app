import Bag from '../assets/icons/bag-2.svg'
import Car from '../assets/icons/car.svg'
import RecoveryConvert from '../assets/icons/recovery-convert.svg'
import MoneyChange from '../assets/icons/money-change.svg'
import Noutbook from '../assets/images/favorite_1.png'

export const productDeteilMap = {
  productHaqida: {
    sozOn: [
      'Бренд',
      'Модель',
      'Операционной системы',
      'Цвет',
      'Диагональ',
      'Процессор',
      'Оперативная память',
      'Hard (SSD)',
    ],
    sozChap: [
      'Apple',
      'Macbook Air 13 2020',
      'Mac OS',
      'Silver',
      '13.3”',
      'M1',
      '8 GB',
      '256 GB',
    ],
  },
  usluga: {
    uslugaOn: [
      {text: 'Магазин', img: Bag},
      {text: 'Доставка', img: Car},
      {text: 'Условия возврата', img: RecoveryConvert},
      {text: 'Способы оплаты', img: MoneyChange},
    ],
    uslugaChap: [
      'BSB STORE',
      'Есть',
      'Есть, 10 дней',
      'PayMe, Humo, UZCARD, Apelsin, Click',
    ],
  },
  noutbook: [Noutbook, Noutbook, Noutbook, Noutbook, Noutbook],
}

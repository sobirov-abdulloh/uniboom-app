import instaLogo from '../../assets/icons/Instagram (1).svg'
import tgLogo from '../../assets/icons/Telegram.svg'
import facebookLogo from '../../assets/icons/Facebook.svg'

const customers = [
  {text: 'Как сделать заказ', href: '#'},
  {text: 'Доставка', href: '#'},
  {text: 'Возврат товара', href: '#'},
  {text: 'Возврат денежных средств', href: '#'},
  {text: 'Вопросы и ответы', href: '#'},
]
const partners = [
  {text: 'Продать на UniStore', href: '#'},
  {text: 'Наши магазины', href: '#'},
  {text: 'Перевозчикам', href: '#'},
  {text: 'Партнерский пункт выдачи', href: '#'},
]
const companies = [
  {text: 'О нас', href: '#'},
  {text: 'Реквизиты', href: '#'},
  {text: 'Пресс-центр', href: '#'},
]
const contacts = [
  {text: 'Пресс-центр', href: '#'},
  {text: '+998 99 123 45 67', href: '#'},
  {text: 'unistore@mail.uz', href: '#'},
]
const socials = [
  {icon: instaLogo, href: '#'},
  {icon: tgLogo, href: '#'},
  {icon: facebookLogo, href: '#'},
]

export const categories = [
  {
    name: 'ПОКУПАТЕЛЯМ',
    links: customers,
    id: 1,
  },
  {
    name: 'ПАРТНЁРАМ',
    links: partners,
    id: 2,
  },
  {
    name: 'КОМПАНИЯ',
    links: companies,
    id: 3,
  },
  {
    name: 'КОНТАКТЫ',
    links: contacts,
    id: 4,
  },
  {
    name: 'СОЦИАЛЬНЫЕ СЕТИ',
    links: socials,
    id: 5,
    icons: true,
  },
]

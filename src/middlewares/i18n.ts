import { I18n } from '@grammyjs/i18n'
import { MyContext } from '../types'

const i18n = new I18n<MyContext>({
  defaultLocale: 'en',
  directory: 'locales/'
})

export default i18n

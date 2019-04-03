export default {
  state() {
    return {
      locales: ['en', 'zh'],
      locale: 'zh'
    }
  },
  getters: {

  },
  mutations: {
    setLang(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }
}
import Cookies from 'js-cookie';

function persistenceState(store) {
  store.subscribe((mutation, {locale, activeItem}) => {
    
    Cookies.set('lang', locale);
  });
}

export default {
  state() {
    return {
      locales: ['en', 'zh'],
      locale: 'en',
      activeItem: 0
    };
  },
  mutations: {
    setLang(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  },
  plugins: [
    persistenceState
  ]
}
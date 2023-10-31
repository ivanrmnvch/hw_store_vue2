import {
  checkExpiresSessionToken,
  getSessionData,
  getSessionToken,
  removeSessionToken,
  getTokenData,
  setSessionToken,
} from './utils';

let timeout = null;

export default {
  // устанавливает токен из storage(используется для сохранения сессии при refresh страницы)
  async checkToken({ dispatch }) {
    checkExpiresSessionToken();
    const data = getSessionData();
    if (!(data && data.user && data.user.email)) return;
    const token = getSessionToken();
    // До того момента, пока не проверится на сервере токен, устанавливаем его как истинный
    await dispatch('setAuth', { token, interval: 1 });
  },

  // Установка авторизации, удаление/установка токенов из/в storage, запуск проверки токена
  setAuth({ commit, dispatch }, payload) {
    const token = (payload && payload.token) || null;
    const interval = (payload && payload.interval) || null;

    const clear = () => {
      commit('SET_AUTH', { user: null, token: null });
      clearTimeout(timeout);
      localStorage.removeItem('utmUUID');
      removeSessionToken();
    };

    // Если не передан токен(например при разавторизации)
    if (!token) {
      return clear();
    }
    const data = getTokenData(token);
    // Если токен пустой, не валидный или не содержит авторизации
    if (!(data && data.user && data.user.email)) {
      return clear();
    }
    dispatch('scheduleToken', interval);
    setSessionToken(token);
    commit('SET_AUTH', { user: data.user, token });
    return true;
  },
  // async setAuthToken({ commit, state, dispatch }, newToken) {
  //   timeout && clearTimeout(timeout);
  //   const token = state.token || newToken || null;
  //   // Если это первая загрузка токена, то устанавливаем load
  //   let waitInterval = null;
  //   try {
  //     const auth = await API.method.post('/api/user', token, {
  //       headers: {
  //         'Content-Type': 'text/plain;charset=UTF-8',
  //       },
  //     });
  //     const newToken = auth && auth.data && auth.data.token;
  //     const nextInterval = auth && auth.data && auth.data.refreshIn;
  //
  //     newToken && commit('SET_AUTH', newToken);
  //     const data = jwtDecode(newToken.toString());
  //     if (!(data && data.user && data.user.email)) {
  //       // Если пришел неавторизованный токен, то прекращаем запрашивать
  //       return;
  //     }
  //     nextInterval && (waitInterval = nextInterval);
  //   } catch (e) {
  //     console.error('error auth token: ', e);
  //   }
  //   dispatch('scheduleToken', waitInterval);
  // },
  scheduleToken({ dispatch }, refresh) {
    // eslint-disable-next-line no-unused-expressions
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => dispatch('setAuthToken'), refresh || 10000); // Перезапускаем
  },
  // Получение токена с бэка
  // async getAuthToken({ state, dispatch }) {
  async getAuthToken() {
    // const accessToken = state.token;

    // const token = state.token || null;
    try {
      // const { data: { data } } = await APIv2.post('lk/user/session', { token });

      // const test = await API.get('/profile');

      // const newToken = data && data.token;
      // const nextInterval = data && data.refreshIn;
      // const tokenData = getTokenData(newToken);
      // // Не пришел пользователь
      // if (!(tokenData || {}).user) {
      //   try {
      //     dispatch('setAuth', null);
      //   } catch (e) {
      //     console.error(e);
      //   } finally {
      //     window.location.reload();
      //   }
      //   return;
      // }
      // if (newToken) {
      //   dispatch('setAuth', { token: newToken, interval: nextInterval });
      // }
    } catch (e) {
      console.error('error auth token: ', e);
    }
  },
};

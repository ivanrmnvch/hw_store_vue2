import API from '../utils/API';

export default {
  async authorization({ state }) {
    const { login, password } = state.modalLogin;
    try {
      // todo добавить к ответу с бека юзера
      const response = await API.post('/auth', { login, password });

      console.log('response', response);

      // const status = response && response.data && response.data.status;
      // const data = response && response.data && response.data.data;
      // const newToken = data && data.token;
      // if (status && status === 'OK' && newToken) {
      //   commit('auth/SET_AUTH', newToken, { root: true });
      //
      //   const nextInterval = data && data.refreshIn;
      //   dispatch('auth/scheduleToken', nextInterval, { root: true });
      // }
    } catch (e) {
      console.error(e);
    }
  },
};

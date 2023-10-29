export default {
  SET_AUTH(state, { user, token }) {
    state.token = token;
    state.user = user;
  },
};

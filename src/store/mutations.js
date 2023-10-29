export default {
  SET_DATA(state, { field, value }) {
    console.log('value', value);
    state[field] = value;
  },
  SET_MODAL(state, { field, value }) {
    state.modalLogin[field] = value;
  },
};

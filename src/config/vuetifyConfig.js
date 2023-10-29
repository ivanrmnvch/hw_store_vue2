import ru from '../langs';

export default {
  breakpoint: {
    thresholds: {
      xs: 480,
      sm: 768,
      md: 1280 + 16,
      lg: 2048 + 16,
    },
    mobileBreakpoint: 'sm',
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    themes: {
      light: {
        black: {
          base: '#001E42',
        },
        gray: {
          base: '#7387A9', // dark-2
          lighten1: '#F1F6FE', // ultra-light-1
          lighten2: '#EFF3FA', // ultra-light-2
          lighten3: '#DBE0EA', // light-1
          lighten4: '#C9D2E1', // light-2
          darken1: '#B5C3DB', // dark-1
          darken2: '#7387A9', // dark-2
          darken3: '#556B87', // ultra-dark
        },
        orange: {
          base: '#FE991F', // light
          lighten1: '#FCF0E3', // ultra-light
          darken1: '#FF6900', // dark
        },
        blue: {
          base: '#347AF0', // light
          lighten1: '#E2EAF6', // ultra-light
          darken1: '#0032A0', // dark
        },
        cyan: {
          base: '#6EBCA5', // dark
          lighten1: '#65D0CB', // light
        },
        red: {
          base: '#FB5858', // dark
          lighten1: '#FFEBEC', // light
        },
      },
    },
  },
};

import Services from 'assets/images_svg/Services.svg';

const defaultValue = {
  notFound: {
    pathname: '/404',
    pageTitle: '404',
    key: 'notFound',
  },
  signIn: {
    pathname: '/sign-in',
    component: 'pages/auth-pages/sign-in.page',
    pageTitle: 'Sign In',
    key: 'signIn',
  },
};

const routes = {
  home: {
    pathname: '/',
    component: 'containers/HomePage/MainPage',
    pageTitle: 'Home',
    key: 'home',
  },
  questions: {
    pageTitle: 'Questions',
    key: 'questions',
    pathname: '/questions',
    component: 'containers/HomePage/QuestionPage',
  },
  ...defaultValue,
};

export const protectedRouts = {
  guest: {
    // ...defaultValue,
    home: {
      pathname: '/',
      component: 'containers/HomePage/MainPage',
      pageTitle: 'guesthome',
      key: 'guesthome',
    },
  },
  admin: {
    // ...defaultValue,
    questions: {
      pageTitle: 'Questions',
      name: 'questions',
      icon: Services,
      key: 'questions',
      pathname: '/questions',
      component: 'containers/HomePage/QuestionPage',
    },
  },
};

export default routes;

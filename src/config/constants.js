export const ROUTES = {
  HOME: '/',
  FORM: '/form/:id?',
  DETAIL: '/detail/:id',
};

export const getRoute = (route, params) =>
  route.replace(/(:\w+)/g, match => params[match.substr(1)]);

export const DRAGON_API = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1';

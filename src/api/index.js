import { getLocalStorage, setLocalStorage } from '../utils/utils';
const URL = "http://localhost:3007";
const API = {
  checkToken: URL+ "/check-token",
  login: URL + "/login",
  signup: URL + "/signup",
  addPost: URL + "/posts",
  getAllPosts: URL + "/posts/all",
  getPosts: URL + "/posts",
  setFields: URL + "/change"
}

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let user = getLocalStorage("user");
  let authtoken = getLocalStorage("token");
  let email = user? user.email: null;
  console.log(user);
  console.log(authtoken);
  return { "Content-Type": "application/json", email, authtoken };
}

function get(url) {
  return fetch(url, { method: 'GET', headers: header() })
    .then(response => response.json());
}

function authGet(url) {
  return fetch(url, { method: 'GET', headers: authHeader() })
    .then(response => response.json());
}

function post(url, body) {
    return fetch(url, { method: 'POST', headers: header(), body: JSON.stringify(body) })
      .then(response => response.json());
}

function authPost(url, body) {
  return fetch(url, { method: 'POST', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}

function put(url, body) {
  //todo
}

function authPut(url, body) {
  //todo
}


export default {
  checkToken: function() {
     return authGet(API.checkToken);
  },

  login: function({email, password}) {
    return post(API.login, { email, password });
  },

  signup: function({email, password, firstName, lastName}) {
    return post(API.signup, { email, password, firstName, lastName });
  },

  addPost: function({ caption, imageUrl }) {
    return authPost(API.addPost, { caption, imageUrl });
  },

  getAllPosts: function() {
    return authGet(API.getAllPosts);
  },
  getPosts: function() {
    return authGet(API.getPosts);
  },
  setFields: function({imageUrl}) {
    return authPost(API.setFields, {imageUrl});
  }
};

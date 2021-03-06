import { getLocalStorage, setLocalStorage } from '../utils/utils';
//const URL = "http://localhost:3007";
const URL = "https://dreammy-api.herokuapp.com";
const API = {
  checkToken: URL+ "/check-token",
  login: URL + "/login",
  signup: URL + "/signup",
  addPost: URL + "/posts",
  getAllPosts: URL + "/posts/all",
  getPosts: URL + "/posts",
  getPostsUser: URL + "/posts/user",
  setFields: URL + "/change",
  comment: URL + "/comment",
  change: URL + "/change",
  getDetails: URL + "/details",
  getSavedPosts: URL + "/saved-posts",
  savePost: URL + "/save-post",
  deletePost: URL + "/delete-post"
}

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let user = getLocalStorage("user");
  let authtoken = getLocalStorage("token");
  let email = user? user.email: null;
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

function headerPost(url, body, header) {
    return fetch(url, { method: 'POST', headers: { "Content-Type": "application/json", header }})
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
  return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
  .then(response => response.json());
}


export default {
  checkToken: function() {
     return authGet(API.checkToken);
  },

  login: function({email, password}) {
    return post(API.login, {email, password });
  },

  signup: function({email, password, firstName, lastName, imageUrl}) {
    return post(API.signup, { email, password, firstName, lastName, imageUrl });
  },

  addPost: function({ caption, imageUrl , videoUrl, category, visibility}) {
    visibility = visibility=== undefined || visibility === null?  "private" : visibility.toLowerCase();
    return authPost(API.addPost, { caption, imageUrl, videoUrl, category , visibility});
  },

  getPosts: function(s) {
    if(s === "all")
      return authGet(API.getAllPosts);
   else if(s === "me")
      return authGet(API.getPosts);
   else if(s === "saved")
    return authGet(API.getSavedPosts);
  return authPost(API.getPostsUser, {_id: s});
  },
  setFields: function({imageUrl}) {
    return authPost(API.setFields, {imageUrl});
  },
  comment: function(body) {
    return authPut(API.comment, body);
  },
  ChangeFields: (body)=>{
    return authPost(API.change, body);
  },
  getDetails: (body)=>{
    return authPost(API.getDetails, body);
  },
  savePost: (body)=>{
    return authPut(API.savePost, body);
  },
  getSavedPosts: ()=>{
    return authGet(API.getSavedPosts);
  },
  deletePost: (body)=>{
      return authPut(API.deletePost, body);
  }
};

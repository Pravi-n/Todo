import axios from "axios";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export function login(email, password) {
	let Data;
 	async function getData(){
          const data = {
             Email: email,
             password: password,
          }
        const userData = {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }
        const res = await fetch('https://quiet-dusk-10883.herokuapp.com/userProfile/LogIN', userData);
        const json = await res.json();
          //console.log(json.data.[0]);
         
          Data =  json.data;
          console.log(Data)
      }
      getData();
      //console.log(Data);
      return Data;
 // return axios.post(LOGIN_URL, { email, password });
}

export function register(email, fullname, designation, password) {
	 let Data;
	 async function getData(){
	    const data = {
             Name: fullname,
             Email: email,
             password: password,
             is_admin: designation,
          }
          console.log(data);
        const userData = {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }
        const res = await fetch('https://quiet-dusk-10883.herokuapp.com/userProfile/signUp', userData);
        const json = await res.json();
          //console.log(json.data.[0]);
          Data =  json.data;
          console.log(Data);
      }
      getData();
 // return axios.post(REGISTER_URL, { email, fullname, username, password });
 	return Data;
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}

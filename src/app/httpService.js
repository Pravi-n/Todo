import axios from 'axios';
const instance = axios.create()
const baseUrl = 'http://localhost:3005/'

export const httpGet = async (url,parameter={}) =>{
    var data;
    await instance.get(url,{
        params : parameter
    })
      .then(res=>{
    //    console.log('res ',res);
        data =res.data;
      }).catch(err=>{
          console.log("in Error");
        console.log('err',err);
        data = {status:0,message:"Network Error"};
      });
      return data;
}

export const httpPost = async (url,body={}) =>{
    var data;
    await instance.post(url, body)
    .then(res=>{
        //    console.log('res ',res);
            data =res.data;
          }).catch(err=>{
              console.log("in Error");
            console.log('err',err);
            data = {status:0,message:"Network Error"};
          });
          return data;
}
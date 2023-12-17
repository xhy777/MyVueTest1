import axios,{type AxiosPromise} from "axios";
import type { BuildModel } from "../model/buildModel";
export const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000,
    headers: {'Content-Type': 'application/json;charset-utf-8'}
  });
export function getAllBuild(size:number,current:number)
  :AxiosPromise<RestResponse<any>>{
      return service({
          url:`/build/getLists?size=${size}&current=${current}`,
          method:'get',
          headers:{
              "Content-Type":"application/x-www-form-urlencoded"
          }
      });
}
export function deleteBuild(bid:number)
:AxiosPromise<RestResponse<any>>{
  var formData = new FormData();
  formData.append("bid",String(bid)!!);
  return service({
      url:"/build/delete",
      method:'post',
      headers:{
          "Content-Type":"application/x-www-form-urlencoded"
      },
      data:formData
  });
}
export function updateBuild(build: BuildModel) {
  var formData = new FormData();
  formData.append('bid', build.bid!!)
  formData.append('bunit', build.bunit!!)
  formData.append('bfloor', build.bfloor!!)
  formData.append('bnumber', build.bnumber!!)
  formData.append('barea', build.barea!!)
  return service({
      url: '/build/update',
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
  })
}

export function insertBuild(build: BuildModel) {
  var formData = new FormData();
  formData.append('bid', build.bid!!)
  formData.append('bunit', build.bunit!!)
  formData.append('bfloor', build.bfloor!!)
  formData.append('bnumber', build.bnumber!!)
  formData.append('barea', build.barea!!)
  return service({
    url:"/build/add",
    method:'post',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
  },
  data: formData
  })
  
}
import axios,{type AxiosPromise} from "axios";
import {type ownerModel} from "../model/ownerModel"
export const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000,
    headers: {'Content-Type': 'application/json;charset-utf-8'}
  });
export function getAllOwner(size:number,current:number)
  :AxiosPromise<RestResponse<any>>{
      return service({
          url:`/owner/getLists?size=${size}&current=${current}`,
          method:'get',
          headers:{
              "Content-Type":"application/x-www-form-urlencoded"
          }
      });
}
export function deleteOwner(pid:number)
:AxiosPromise<RestResponse<any>>{
  var formData = new FormData();
  formData.append("pid",String(pid)!!);
  return service({
      url:"/owner/delete",
      method:'post',
      headers:{
          "Content-Type":"application/x-www-form-urlencoded"
      },
      data:formData
  });
}
export function updateOwner(owner: ownerModel) {
  var formData = new FormData();
  formData.append('pid', owner.pid!!)
  formData.append('pname', owner.pname!!)
  formData.append('phone', owner.phone!!)
  formData.append('pnumber', owner.pnumber!!)
  formData.append('pwhether', owner.pwhether!!)
  return service({
      url: '/owner/update',
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
  })
}

export function insertOwner(owner: ownerModel) {
  var formData = new FormData();
  formData.append('pid', owner.pid!!)
  formData.append('pname', owner.pname!!)
  formData.append('phone', owner.phone!!)
  formData.append('pnumber', owner.pnumber!!)
  formData.append('pwhether', owner.pwhether!!)
  return service({
    url:"/owner/add",
    method:'post',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
  },
  data: formData
  })
  
}
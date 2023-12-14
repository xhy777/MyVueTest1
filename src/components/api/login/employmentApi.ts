import axios,{type AxiosPromise} from "axios";
import type { EmploymentModel } from "../model/employmentModel";
export const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000,
    headers: {'Content-Type': 'application/json;charset-utf-8'}
  });
export function getAllEmployments(size:number,current:number)
  :AxiosPromise<RestResponse<any>>{
      return service({
          url:`/employment/getLists?size=${size}&current=${current}`,
          method:'get',
          headers:{
              "Content-Type":"application/x-www-form-urlencoded"
          }
      });
}
export function deleteEmployment(eid:number)
:AxiosPromise<RestResponse<any>>{
  var formData = new FormData();
  formData.append("eid",String(eid)!!);
  return service({
      url:"/employment/delete",
      method:'post',
      headers:{
          "Content-Type":"application/x-www-form-urlencoded"
      },
      data:formData
  });
}
export function updateEmployment(employment: EmploymentModel) {
  var formData = new FormData();
  formData.append('eid', employment.eid!!)
  formData.append('ename', employment.ename!!)
  formData.append('eage', employment.eage!!)
  formData.append('idcard', employment.idcard!!)
  formData.append('eaddr', employment.eaddr!!)
  formData.append('sex', employment.sex!!)
  return service({
      url: '/employment/update',
      method: 'post',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
  })
}

export function insertEmployment(employment: EmploymentModel) {
  var formData = new FormData();
  formData.append('eid', String(employment.eid!!))
  formData.append('ename', employment.ename!!)
  formData.append('eage', employment.eage!!)
  formData.append('idcard', employment.idcard!!)
  formData.append('eaddr', employment.eaddr!!)
  formData.append('sex', employment.sex!!)
  return service({
    url:"/employment/add",
    method:'post',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
  },
  data: formData
  })
  
}
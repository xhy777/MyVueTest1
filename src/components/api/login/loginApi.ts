import axios,{type AxiosPromise} from "axios";
import { da } from "element-plus/es/locales.mjs";
export const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000,
    headers: {'Content-Type': 'application/json;charset-utf-8'}
  });

export function loginApi(data :UserModel)
:AxiosPromise<RestResponse<any>>{
    var formData = new FormData();
    formData.append("username",data.username!!);
    formData.append("loginname",data.loginname!!);
    formData.append("password",data.password!!);
    return service({
        url:"/user/getAdminByName",
        method:'post',
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        data:formData
    });
}
  
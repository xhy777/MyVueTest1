interface UserModel{
    username?:string;
    loginname?:string;
    password?:string;
}

interface RestResponse<T> {
    code?:number;
    message?:string;
    data?:T;
}
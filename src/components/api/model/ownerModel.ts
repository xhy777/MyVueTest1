export interface ownerModel{
    pid?:string;
    pname?:string;
    phone?:string;
    pnumber?:string;
    pwhether?:string;
}
interface RestResponse<T> {
    code?:number;
    message?:string;
    data?:T;
}
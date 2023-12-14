export interface EmploymentModel{
    eid?:string;
    ename?:string;
    eage?:string;
    idcard?:string;
    eaddr?:string;
    sex?:string;
}
interface RestResponse<T> {
    code?:number;
    message?:string;
    data?:T;
}
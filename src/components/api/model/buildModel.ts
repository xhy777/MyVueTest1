export interface BuildModel{
    bid?:string;
    bunit?:string;
    bfloor?:string;
    bnumber?:string;
    barea?:string;
}
interface RestResponse<T> {
    code?:number;
    message?:string;
    data?:T;
}
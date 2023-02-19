import { Child } from "./Child";

export class User
{
constructor(public firstName:string,public familyName:string,public tz:string,public dateOfBirth:Date,public gender:string,public hmo:string,public children:Child[],public id?:number)
{
}
}
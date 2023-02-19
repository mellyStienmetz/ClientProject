import { Component, OnInit,OnDestroy } from '@angular/core';
import { Child } from '../models/Child';
import { User } from '../models/User';
import { PersonService } from '../services/person.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../app.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy {
child:Child;
user:User;
form;
;
  constructor(public personService:PersonService ) { }
  ngOnDestroy(): void {
    this.personService.currentUser.next(this.user);
    this.personService.currentChild.next(this.child);
  }
  ngOnInit(): void {
    this.personService.currentUser.subscribe(data=>{this.user=data==null?new User("","","",new Date(),"","",[]):data;})
    this.personService.currentChild.subscribe(data=>{this.child=data==null?new Child("",new Date(),""):data;})
  }
  
async regist(form)
{
  console.log(this.user);
   await  this.personService.addUser(this.user).subscribe(succ=>{console.log("succ to add user:",this.user)},err=>{console.log("can't to add user:",this.user)});
    console.log("onSave");
   await this.downloadExcel();
   form.reset();

}
downloadExcel()
{
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet("userInformation");
  let header=["firstName","familyName","tz","dateOfBirth","gender","hmo","childName","childTz","childDateOfBirth"]
let headerRow = worksheet.addRow(header);
console.log(this.user);
let userRow=[this.user.firstName,this.user.familyName,this.user.tz,this.user.dateOfBirth,this.user.gender,this.user.hmo];
worksheet.addRow(userRow);
console.log(userRow);
let fname="userInformation"
this.user.children.forEach((c)=>{
 let childRow=['','','','','','',c.firstName,c.tz,c.dateOfBirth]
  worksheet.addRow(childRow);
})
workbook.xlsx.writeBuffer().then((data) => {
  let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
});
}
addChild()
{
 this.user.children.push(this.child);
this.personService.currentChild.next(null);
}
}

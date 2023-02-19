import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  userName={firstName:" ",familyName:" "};
  constructor(public personService:PersonService) { }

  ngOnInit(): void {
    this.personService.currentUser.subscribe(data=>{this.userName.familyName=data?.familyName;
      this.userName.firstName=data?.firstName;
    })
  }

}

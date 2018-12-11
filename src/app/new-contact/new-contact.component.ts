import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/model.contact';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:any = new Contact();
  mode:number=1;
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactService.saveContact(this.contact).subscribe(result=>{
      this.contact=result;
      this.mode=2;
    },err=>console.log(err))
  }
}

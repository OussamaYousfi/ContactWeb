import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ContactsService } from 'src/services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContent:any;
  motcle:string="";
  currentpage:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public http:HttpClient,public contactService:ContactsService) { }

  ngOnInit() {
   
  }
  doSearch(){
    this.contactService.getContacts(this.motcle,this.currentpage,this.size).subscribe(result=>{
     this.pageContent=result;
     this.pages=new Array(result["totalPages"]);}
     ,err=>console.log(err));
  }
  chercher(){
    this.doSearch();
  }
  gotoPage(i:number){
    this.currentpage=i;
    this.doSearch();
  }
}

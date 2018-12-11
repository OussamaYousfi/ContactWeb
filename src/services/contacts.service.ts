import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from 'src/models/model.contact';

@Injectable()
export class ContactsService {

    constructor(public http:HttpClient){
    }

    getContacts(motcle:string,page:number,size:number){
        return this.http.get("http://localhost:8080/cherchercontact?mc="+motcle+"&size="+size+"&page="+
        page).pipe(map(data=> data));
    }
    saveContact(contact:Contact){
        return this.http.post("http://localhost:8080/contacts",contact).pipe(map(data=> data));
    }
}
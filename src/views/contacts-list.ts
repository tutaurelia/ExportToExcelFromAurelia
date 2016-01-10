import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import 'fetch';

@inject(HttpClient)
export class ContactsList {
  contacts = [];
	searchEntry = "";
	csvContent = "";
	ctr = 0;

	constructor(private http: HttpClient) {}

	 activate() {
        return this.http.fetch(`contacts?query=${this.searchEntry}`).then(response => response.json()).then(data => {
            this.contacts = (<any>data).contacts;
        });
    }
	
  exportContacts () {
		this.csvContent = "First Name;Last Name;Email Address;Birth Date;\n";
          this.contacts.forEach(contact => {
            this.ctr++;
            this.csvContent = this.csvContent + contact.firstName + ';' + contact.lastName + ';' + contact.email + ';' + contact.birthDate + '\n';
          });
        
       this.csvContent = this.csvContent + ";;COUNT;=COUNT(D2:D" + this.ctr + "); \n";
       this.ctr = 1;
	     this.export(this.csvContent);
  }

  export(text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', 'contacts.csv');
    pom.style.display = 'none';
    document.body.appendChild(pom);
    pom.click();
    document.body.removeChild(pom);
  }

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

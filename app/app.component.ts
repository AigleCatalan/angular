
import {Component} from "@angular/core";

//import { UserComponent} from "./user/user.component"; //schon im app.modul.ts importiert.



@Component({
	
	selector:'app', 
	templateUrl:'../app/app.component.html',
	styleUrls:['./app/app.component.css'],
	//directives:[UserComponent],


	/*template:`
			<nav>Navigation</nav>
			<main>Principal content</main>
			<footer>footer</footer>

	`*/
	//template:'<h1> Toll oder nicht?</h1>'

	//styles: [`nav{color:red;} main{background-color:yellow;} footer{font-size: smaller;color:green;}`],
})

export class AppComponent{

    appCompoBirthdate  :  string = "1. January 1988";

    animalsTitle : string = ": is here the transported data from animalsComponent ";
	
	constructor(){

	console.log("App Component");

	}

	getDescription(){

	return "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

	}

	ShowTransportedData(test) {

	  this.animalsTitle  = test + this.animalsTitle; //test kommt vom animals.component wird durch die eigene Event (myevent) von Animals- zu AppComponent transportiert.


     //console.log("hier bin ich", this.animalsTitle);

    
	}
}
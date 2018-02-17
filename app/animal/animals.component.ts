import {Component,Output, EventEmitter} from "@angular/core";

@Component({
	
	selector:'animals', 


    /* Wird benutzt, um info nach außen zu transportieren. (Komponent-Ereignis binden)*/

	outputs:['myevent'], 
	
	template:`
			<section>
			           <!-- hier wird einen Ausdruck interpoliert. Außerdem wird die Eigenschaft {{animalstitel}} an die 
			                 Eigenschaft innerText gebunden -->

			            <h2 innerText="!! {{animalstitel}} ({{getTotalOfAnimals(3)}}) hello">  </h2> 

                        <!-- die Eigenschaft imgUrl wird gebunden und nicht interpoliert.
                             style-Eigenschaft radius wird gebunden. % ist die Einheit der borderRadius. Kann auch px sein -->

			            <img [src]="imgUrl" [style.borderRadius.%]="radius" [style.marginLeft.px]="marginLeft" alt="cat"> 

			          <ul>
			             <li> The dog </li>
			             <li> The cat</li>
			             <li> The Snake</li>
			           </ul>  
			            <button (click)="onClick($event)"> ready to click </button> <!-- Ereignisse binden -->
			            <p></p>
			</section>          

	`,
	
   styles: [`ul{background-color:yellow;} li{font-size: big;} `],
})

export class AnimalsComponent{

    animalstitel:string = "List of animals"; //Diese Eigenschaft wird interpolieren siehe h2 innerhalb template

    imgUrl:string="https://placekitten.com/g/64/64"; //Diese Eigenschaft wird gebunden (siehe img-Tag innerhalb Template)  

    radius:number =15; 

    marginLeft:number =15;
	
    myevent  : EventEmitter<string>= new EventEmitter<string>(); //dispatcher vom Typ EventEmitter

	constructor(){

	  console.log("Animals Component");
	}

	onClick(evt: Event){

	   //console.log("Button geklickt...", evt);

	   this.myevent.emit(this.animalstitel); //event mit Werten nach außen schicken.
	}

	getTotalOfAnimals(total:number):number{

	return total;
	
	}
}
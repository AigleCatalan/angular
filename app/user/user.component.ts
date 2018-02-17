
import {Component, Input} from "@angular/core";

@Component({
	
	selector:'my-user',

     /* Die Deklaration der Input innerhalb-component-Decorator aus dem Modul @angular/core  hat zufolge dass, die Variable nicht mehr intern (innerhalb der UserComponent) initialisiert sondern nach außen "siehe app.component.ts" initialisiert und dargestellt wird. "Bindung einer Komponent-Eigenschaft" 
     */
     /*date ist ein alias dass, für die Bindung der Eigenschaft birthdate nach außen verwenden wird. Somit wird hier intern birthdate benutzt, aber nach außen date. schließlich wird inputs benutzt, um Info nach außen zu definieren*/
	inputs:['birthdate:date'],

	
	styles:[`.colorText{ background-color:magenta; }  .hide{ display:none;}`], //die CSS-Klasse colorText wird definiert und gebunden.
	
	template:`

	     <section>

		        <h2>  List of employees </h2>


                 <!-- [class.hide]="radius==5" applique la classe hide a l image si le radius = 5-->
		         <img [src]="imgUrl" [style.borderRadius.%]="radius" [class.hide]="radius==5" alt="cat"> 

		        <!-- Css-Klasse colorText wird gebunden. -->

				<p class="colorText">   
				      Max Mustermann is user 1 --- my birthdate is {{birthdate}} -- <strong> Birthday is an property-component (gebundene Komponent-Eigenschaft)</strong> <br>

				      Elia Elianaa for user 2<br>
				      Kemp Kempamamm is user 3
				</p>
                  

                  <!-- [attr.draggable]="drag", somit wird ein Attribut gebunden.  -->
                  <!-- (click)="onClick()", somit wird ein Ereignis im Angular 2.0 gebunden.  -->
                 <button [attr.id]="identifier" [attr.disabled]="disable" (click)="onClick($event)">  my first button </button> 

                 <!-- Natives Ereignis OnKeyDown wird im Input-Feld gebunden"-->
                 <input type="text" (keydown)="onKeyDown($event)">



        </section>
	`,
	
})

export class UserComponent{
    
    
    /*@Input("date"); */

    birthdate :  string ;	

    imgUrl  :  string = "https://placekitten.com/g/64/64"; //Diese Eigenschaft wird gebunden (siehe img-Tag innerhalb Template)  

    radius  :  number = 5;

    identifier : string = "myButton";

    disable  : boolean = null; //default wert "false" wird zur initialisierung verwenden und somit myButton aktivieren.

    //drag  :  boolean = true;

	constructor(){

	console.log("User Component");
	}

	onClick(evt : Event) : void{

	   this.disable = true; //myButton wird dadurch deaktiviert

	   console.log("clicked", evt); //checkt ob event getriggert und angezeigt wird.
	}

	onKeyDown(evt : Event) : void{

	   console.log("keydown", evt); //checkt,ob event getriggert wird.

	}
}
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnimalsComponent} from './animals.component';


@NgModule({
  
  imports: [CommonModule], //ermöglicht, dass directives(z.B.:ngIf,ngFor) auch hier problemlos funktionieren.

  declarations:[AnimalsComponent], //Registrierung bzw. Anmeldung des Komponentes im Modul

  exports:[AnimalsComponent], // ermöglicht die Nutzung des AnimalsModuls im anderen Modul
 
	
})

export class AnimalsModul{
	
	constructor(){
      
      console.log("Animals modul");

	}
}
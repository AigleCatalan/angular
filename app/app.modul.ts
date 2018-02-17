
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AnimalsModul} from './animal/animals.modul';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';


@NgModule({
  
  //BrowserModule importiert das CommonModule deswegen muss ich hier nicht das CommonModule importieren.
  imports: [BrowserModule, AnimalsModul], //AnimalsModul is used in this AppModul

  declarations:[AppComponent,UserComponent], // UserComponent is used here not UserModul!!!!
  
  bootstrap: [AppComponent],    
	
})

export class AppModul{
	
	constructor(){
      
      console.log("App Modul");

	}
}
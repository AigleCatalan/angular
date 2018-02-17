
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserComponent} from './user.component';

@NgModule({
  
  imports: [BrowserModule], 
  declarations:[UserComponent], 
   
	
})

export class UserModul{
	
	constructor(){

	console.log("User Modul");

	}
}
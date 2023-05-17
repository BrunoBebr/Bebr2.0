import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Bebr2.0';
  Valheigt: any;

  scrollToElement($element :any): void {
    // console.log($element);
     $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  
  ngOnInit(){
    this.Valheigt = window.innerHeight ;
    
     
  }
}

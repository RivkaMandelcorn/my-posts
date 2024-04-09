import { Component, Input, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [MatExpansionModule,MatProgressSpinnerModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent{

  @Input()
  set accordions(value: Array<any>) {
this.myAccordion = value;
  }

  myAccordion:Array<Accordion> = [];



}

export interface Accordion{
title:string;
body:string
}

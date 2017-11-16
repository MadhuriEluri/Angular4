import {Component,Input} from '@angular/core';

@Component({
    selector:'displayresults',
    templateUrl:'./display.component.html'
})

export class DisplayresultsComponent{
    countries: string[] = ['India', 'USA', 'UK'];
    //hero: string = 'yes';
    @Input() finalSearch: string;
constructor(){
   
}

ngOnInit() {
    console.log(this.finalSearch);
}
}
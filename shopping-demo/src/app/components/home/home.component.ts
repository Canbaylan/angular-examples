import { Component } from "@angular/core";
import { BasketModel } from "src/app/models/basket";

@Component({
    selector:'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    /*
    baskets:BasketModel[]=[];
    getBaskets(event:any){
        this.baskets = event.data;
        // this.total = Math.round(event.total *100)/100;
    }
    */
   constructor(){}
}
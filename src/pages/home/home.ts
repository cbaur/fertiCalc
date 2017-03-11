import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ResultPage} from "../result/result";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  size;
  nitrogen;

  constructor(public navCtrl: NavController) {
    
  }

  calculateFertilizer() {
    if(this.size && this.nitrogen) {

      let result = (((this.nitrogen*100)/7)/10)*this.size;
      this.navCtrl.push(ResultPage, {
        value: result
      });
    }

  }

}

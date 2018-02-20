import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(private view: ViewController, private navParams: NavParams) {
  }

  closeTerms(){
    this.view.dismiss();
  }

  ionViewDidLoad() {

  }

}

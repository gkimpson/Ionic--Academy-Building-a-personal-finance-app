import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  currency = 'eur';
  @ViewChild('slides') slides: IonSlides;

  slideOpts = {
    effect: 'fade',
    height: '98vh'
  };

  constructor() { }

  ngOnInit() {

  }

  next() {
    this.slides.slideNext();
  }

  saveandStart() {

  }

}

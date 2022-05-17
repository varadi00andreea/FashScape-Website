import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  answer: string = '';

  constructor() { }

  ngOnInit(): void {
    this.answer = "Ask us anything you want!";
  }

  hey() {
    this.answer = 'Hello there and welcome to FashScape Help.';
  }
  howDoesItWork() {
    this.answer = 'FashScape was born from the love of fashion and it is our dream to make it easier to anyone to feel this type of way. In order to do this, we give our customer a full experience of being in contact with the fashion world by selling our buying clothes that make your day better.'
  }
  buy() {
    this.answer = 'All you have to do is to add the product you desire to your shopping cart and complete the needed information. We will pack your order with care and send it to you ASAP.';
  }
  sel() {
    this.answer = 'In order to sell an item on our site, you have to complete the selling form from the Sell tab from the menu and upload a picture with it on our google drive folder. We will take it from here and we will make sure that we will find a perfect buyer for you.';

  }
  howLongDoesItTake() {
    this.answer = 'After we check that all the information and the picture are in order, we will put your item up for sale. This process takes up to 2-3 hours, depending on the number of selling request we have for the day.';

  }

}

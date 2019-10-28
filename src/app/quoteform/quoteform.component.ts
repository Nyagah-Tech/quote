import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit { 
 @Output() addquote = new EventEmitter<Quote>();
 newQuote:Quote = new Quote("","","", new Date(), 0, 0);

 submitQuote(){
   this.addquote.emit(this.newQuote);

 }
  constructor() { }

  ngOnInit() {
  }

}

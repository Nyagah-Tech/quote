import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
 newQuote = new Quote(0,"","","", new Date());
 @Output() addquote = new EventEmitter<Quote>();

 submitQuote(){
   this.addquote.emit(this.newQuote);

 }
  constructor() { }

  ngOnInit() {
  }

}

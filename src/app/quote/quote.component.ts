import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, "happy coding", "haha", " Dan", new Date (2026,3,15)),
    new Quote(2,  "food is food", "mukui"," yaya", new Date(2019,4,18)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete){
      // this.quotes.splice(index,1);
      let toDelete = confirm(`Are you sure you want to delete this quote by  ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  addNewQuote(quote){
    let quotelength = this.quotes.length;
    quote.id = quotelength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  

  ngOnInit() {
  }

}

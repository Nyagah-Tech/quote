import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, "happy coding", "posted by Dan", "Author Dan", new Date (2026,3,15)),
    // new Quote(2,  "food is food", "Author mukui","posted by yaya", new Date(2019,4,18)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  

  

  ngOnInit() {
  }

}

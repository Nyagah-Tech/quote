import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote( "It is not enough for us to restrain from doing evil, unless we shall also do good.", "Dan", " Brucelee", new Date (2006,3,15), 0, 0),
    new Quote(  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.", "mukui","Kevyn Aucoin", new Date(2019,2,4), 0, 0),
    new Quote( "Of all human activities, man's listening to God is the supreme act of his reasoning and will.","paul","Pope Paul Vi", new Date(2017,3,16), 0, 0),
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
    // let quotelength = this.quotes.length;
    // quote.id = quotelength+1;
    // quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  get sortVote(){
    return this.quotes.sort((a,b)=> {
      return (b.upvote)as number - (a.upvote) as number;
    })
  }
  votedQuote(){
    let likearr:number []=[];
    for(let i of this.quotes){
      likearr.push(i.upvote)
    }
    let highvote= Math.max(...likearr);
    let bestquote= this.quotes.find(quote => quote.upvote === highvote);
    return bestquote
  }

  ngOnInit() {
  }

}

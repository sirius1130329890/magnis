import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { IComment } from '../Interface/icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: IComment[] = [];
  @ViewChild('textAreaRef' , {static: true}) commentTextValue: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onStsrClivk(number){

  }
  oneStar(c: IComment , rate: number) {
    c.numberOfReviews++;
    c.star += rate;
  }
  twoStar(c: IComment , rate: number) {
    c.numberOfReviews++;
    c.star += rate;
  }
  threeStar(c: IComment , rate: number) {
    c.numberOfReviews++;
    c.star += rate;
  }
  fourStar(c: IComment , rate: number) {
    c.numberOfReviews++;
    c.star += rate;
  }
  fiveStar(c: IComment , rate: number) {
    c.numberOfReviews++;
    c.star += rate;
  }
  addComment() {
    const c: IComment = {
      comment: this.commentTextValue.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    };
    this.comments.push(c);
  }
  likeClicked(c: IComment) {
    c.like++;
    console.log(c.like);
  }
  dislikeClicked(c: IComment) {
    c.dislike++;
  }



}

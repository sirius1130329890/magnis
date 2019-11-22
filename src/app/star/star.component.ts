import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  starWidth: number;
  reviewCount = 0;
  sum = 0;
  rate = 0;
  qnty = 0;
  starWidth2 = 0;

  onStarClick(nr: any) {
    // console.log(nr);
    this.qnty++;
    this.sum += nr;
    this.rate = this.sum / this.qnty;

    this.starWidth2 = this.rate * 90 / 5;
    console.log(this.starWidth2);
  }

  ngOnInit() {
  }
  starClicked(rate: number) {
    this.reviewCount++;
    this.sum = this.sum += rate;
    this.starWidth2 = ( this.sum / this.reviewCount) * 90 / 5;
  }




}

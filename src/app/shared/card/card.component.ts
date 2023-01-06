import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  img:string = '';
  @Input() detail:any;
  constructor() { }

  ngOnInit(): void {
    this.img = this.detail['img'];
  }
}

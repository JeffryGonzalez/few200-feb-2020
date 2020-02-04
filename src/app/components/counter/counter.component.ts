import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  current = 0;
  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.current += 1;
  }

  decrement() {
    this.current -= 1;
  }

}

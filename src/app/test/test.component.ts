import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isVisible = false
  logs = [];
  number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.isVisible = !this.isVisible;
    this.logs.push(this.number++);
  }
}

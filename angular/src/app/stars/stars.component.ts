import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  private stars: boolean[] // 布尔数组

  @Input() // 修饰器 说明值应该由他的父组件传递给他 (父组件传递给子组件)
  private rating: number = 0 // 接收产品组件传来的星级评价的值

  constructor() { }

  ngOnInit() {
    this.stars = []
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
    // this.stars = [false, true, true, true, true]
  }

}

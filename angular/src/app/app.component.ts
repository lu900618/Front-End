import { Component } from '@angular/core';

// 装饰器 告诉 angular 框架如何处理一个typescript类
// 源数据 模板 控制器 -- 必备元素
@Component({
  // 装饰器中的属性 -- 源数据
  selector: 'app-root', // css 选择器
  // 模板 -- 装饰器的必备属性
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent 是 typescript 类  
export class AppComponent {
  // 控制器只有一个属性 -- title
  title = 'app';

}

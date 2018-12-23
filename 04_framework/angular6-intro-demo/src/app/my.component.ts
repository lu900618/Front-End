import { Component } from '@angular/core';
import Student from './student';

@Component({
  selector: 'app-message',
  // template: '',
  templateUrl: './my.component.html',
})

export class MyComponent {
  // message: string = 'This is some message!';
  me: Student = {
    name: 'zhangsan',
    age: 18
  };
  group: Student[] = [
    {
      name: 'zhangsan',
      age: 18
    },
    {
      name: 'lisi',
      age: 31
    },
    {
      name: 'wangwu',
      age: 28
    }
  ];
  public addStudent(name: string, age: number) {
    this.group.push({ name, age });
  }
}

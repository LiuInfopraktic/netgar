import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  numbers:Array<number> = [1,2,3,4,5,6,7,8,9,-1,0,-2]

  addNum(n:number, input:HTMLInputElement){
    console.log(n)
    if(n>-1) input.value += n;
    else if(n==-1) input.value = '';
    else if(n==-2) input.value = input.value.slice(0, -1);
  }
}

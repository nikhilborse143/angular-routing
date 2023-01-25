import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='header in angular';
  // title = 'style banding';
  //title = 'For Loop';
  // getAdd(nikhil:string)
  // {
  //   alert("nikhil");
  // }
  // getName()
  // {
  //   alert("function called nikhil");
  //   var a=20;
  //   var b=90;
  //   var c=a+b;
  //   alert(c);
  //   document.write("nikhil borse");
  //   document.write("<br>")
  //   document.write("vishal")
  // }
  // getData(val:string)
  // {
  //   console.warn("function call");
  // }
  // displayVal='';
  // getValue(val:string)
  // {
  //   console.warn(val);
  //   this.displayVal=val;
  // }
  // getValue(val:string)
  // {
  //   console.warn(val)
  // }
//    count=0
//   counter(type:string)
//  {
//     type==='add' ?this.count++:this.count--;

//   }
// name="peter";
// disable=true;
//  } 
  //  show="yes"
//color="black";
// users=['nikhil','bobby','sunny','vishal','shubham'];
// userDetails=[
//   {name:'nikhil',email:'borsenikhilskhh12@gamil.com',phone:'6678623368'},
//   {name:'bobby',email:'bobby12@gamil.com',phone:'6678623368'},
//   {name:'sunny',email:'sunnyhh12@gamil.com',phone:'6678623368'},
//   {name:'vishal',email:'vishalskhh12@gamil.com',phone:'6678623368'},
//   {name:'shubham ',email:'shuham12@gamil.com',phone:'6678623368'},
// ]
// users=[
//   {name:'nikhil',phone:'483646',socialAccounts:['facebook','insta','gmail']},
//   {name:'borse',phone:'555555',socialAccounts:['facebook','insta','gmail']},
//   {name:'ratan',phone:'666666' ,socialAccounts:['facebook','insta','gmail'] },
//   {name:'satish',phone:'222222',socialAccounts:['facebook','insta','gmail']  },
// ]
// color="red";
// bgcolor="skyblue";

// updateColor()
// {
//  this.color="blue"; 
//   this.bgcolor="yellow";
// }
userData:any={}
getData(data:any)
{
  console.warn(data);
  this.userData=data;
}
display=true;
toggle()
{
  this.display=!this.display;
}
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputcolor:string;
myStyle:{};
color:string;

  setstyle()
{
  this.myStyle= 
  { 
    
    'color':this.generateRandomColor()
    
  }

}
generateRandomColor()
{
  this.color='#';
  var letters=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  for(var i=0;i<6;i++)
  {
    this.color+=letters[Math.floor(Math.random()*16)];
  }
  console.log(this.color);
  return this.color;
}

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  course: string = "Angular";
  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s"

  type : string = "checkbox" 

  sayHello(name:string) : void {
    alert("Hello " + name)
  }

  changeCourse(courseName: string) : void{
    this.course = courseName
  }

}

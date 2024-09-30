import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
type Student = {
  studentId : number,
  name: string,
  city: string,
  marks: number,
  isActive: boolean
}
@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  students : Student[] = [
    {studentId: 1, name: "Salman", city: "Karachi", isActive: true, marks: 56},
    {studentId: 2, name: "Nabeel", city: "Lahore", isActive: false, marks: 78},
    {studentId: 3, name: "Ishran", city: "Sukkur", isActive: true, marks: 33},
    {studentId: 4, name: "Daim", city: "Faisalabad", isActive: false, marks: 99},
  ]
}

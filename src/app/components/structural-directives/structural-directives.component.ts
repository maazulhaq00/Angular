import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Student = {
  studentId : number,
  name: string,
  city: string,
  isActive: boolean
}

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isDiv1Visible: boolean = true

  num1 : number = 0
  num2 : number = 0

  state : string = "Sindh";

  cities: string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Rawalpindi"];

  students : Student[] = [
    {studentId: 1, name: "Salman", city: "Karachi", isActive: true},
    {studentId: 2, name: "Nabeel", city: "Lahore", isActive: false},
    {studentId: 3, name: "Ishran", city: "Sukkur", isActive: true},
    {studentId: 4, name: "Daim", city: "Faisalabad", isActive: false},
  ]

  hideDiv1(){
    this.isDiv1Visible = false
  }
  showDiv1(){
    this.isDiv1Visible = true
  }
  toggleDiv1(){

    // if(this.isDiv1Visible == true){
    //   this.isDiv1Visible = false
    // }
    // else{
    //   this.isDiv1Visible = true
    // }

    this.isDiv1Visible = !this.isDiv1Visible
  }

}

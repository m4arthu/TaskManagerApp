import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../../services/tasks.service';
import { CreateTaskSchema} from '../../schemas/task.schemas';

FormsModule
@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.sass'
})
export class CreateTaskComponent {
  
  constructor(private route:Router){
    
  }
  public name:string = ""
  public description:string  = ""
  public date:string = ""
   
 async createTask(){
    
  const task:CreateTaskSchema = {
       name: this.name,
       description :this.description,
       date:  this.date
      }
      if(Number(new Date(this.date).getFullYear()) > 2033){
        alert("selecionne uma data anterior a jan/2034")
        return
      }
      await Tasks.create(task)
      .then(()=>{
        this.route.navigate([""])
      })
   }
}

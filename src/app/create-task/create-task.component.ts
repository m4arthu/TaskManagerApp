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
  // variaveis para o formulario 
  public name:string = ""
  public description:string  = ""
  public date:string = ""
  
  // cria a tarefa
 async createTask(){
    
  const task:CreateTaskSchema = {
       name: this.name,
       description :this.description,
       date:  this.date
      }
        // verifica a se  a data é  valida
        if (Number(new Date(this.date).getFullYear()) > 2033 || Number(new Date(this.date).getFullYear()) < Number(new Date().getFullYear())) {
          alert("selecionne uma data anterior a jan/2034 e maior que a atual")
          return
      }

      if (Number(new Date(this.date).getFullYear()) === Number(new Date().getFullYear()) && Number(new Date(this.date).getMonth()) < Number(new Date().getMonth())) {
          alert("selecionne o mês atual ou posterior")
          return
      }
      if (Number(new Date(this.date).getFullYear()) === Number(new Date().getFullYear()) && Number(new Date(this.date).getMonth()) === Number(new Date().getMonth())
          && Number(new Date(this.date).getDay()) < Number(new Date().getDay())) {
          alert("selecionne um dia atual ou posterior")
          return
      }
      await Tasks.create(task)
      .then(()=>{
        this.route.navigate([""])
      })
   }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../../services/tasks.service';
import { CreateTaskSchema, TaskSchema, UpdateTaskSchema } from '../../schemas/task.schemas';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass'
})
export class HomeComponent {
    public tasks: TaskSchema[] = []

    constructor() {
        this.initializeTasks();
    }

    private async initializeTasks() {
        this.tasks = await Tasks.get();
    }


    // gerenciando a modal 
    @ViewChild('exampleModal', { static: false })
    exampleModal?: ElementRef;
    public name: string = ""
    public description: string = ""
    public date: string = ""
    public taskId: number = 0
    // abre  a  modal  e pega o id da task e passa para o  seviço de atualização

    openModal(e: Event) {
        const target = e.target as HTMLTextAreaElement;
        const task = this.tasks.filter((task) => (task.id === Number(target.id)));
        this.taskId = Number(target.id) as number;
        this.name = task[0].task_name;
        this.description = task[0].task_description;
        this.date = task[0].deadline;
        (this.exampleModal?.nativeElement as HTMLElement).style.display = "block"
    }

    closeModal() {
        this.taskId = Number("") as number
        (this.exampleModal?.nativeElement as HTMLElement).style.display = "none"
    }


    // opções de atualizar e  de deletar a tasks
    public async updateTask() {
        const task: UpdateTaskSchema = {
            name: this.name,
            description: this.description,
            date: this.date,
            taskId: this.taskId
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

        // fazendo a requisição para a api
        await Tasks.update(task)
        this.initializeTasks()
        this.closeModal()
    }
    public async deleteTask(e: Event) {
        const target = e.target as HTMLTextAreaElement;
        await Tasks.delete(Number(target.id))
        this.initializeTasks()
    };

}

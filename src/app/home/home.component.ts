import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../../services/tasks.service';
import { TaskSchema } from '../../schemas/task.schemas';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule,RouterLink],
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

    updateTask = () => {
        alert("update");
    };

    public async deleteTask(e: Event){
        const target = e.target as HTMLTextAreaElement;
        await Tasks.delete(Number(target.id))
        this.initializeTasks()
    };
}

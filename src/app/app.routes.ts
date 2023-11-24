import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "create", component: CreateTaskComponent}
];

export const routing = RouterModule.forRoot(routes);

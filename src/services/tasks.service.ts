import { CreateTaskSchema, TaskSchema, UpdateTaskSchema } from "../schemas/task.schemas";
import axios from "axios"
export class Tasks {
    private static baseUrl:string = "http://m4arthu.space/tasks"
    
    private static tasks: TaskSchema[];

    public static async get(): Promise<TaskSchema[]> {
        try {
            const response = await axios.get(this.baseUrl);
            this.tasks = response.data;
            return this.tasks;
        } catch (e) {
            alert("Algo de errado aconteceu com a API. Veja o log para mais detalhes!!");
            console.log(e);
            return [];
        }
    }

    public static async create(task:CreateTaskSchema){
        try{
            await axios.post(this.baseUrl,task)
        }catch(e){
            alert("Algo de errado aconteceu durante a  criação da task. Veja o log para mais detalhes!!");
            console.log(e);
        }
    }

    public static async delete(id:number):Promise<void>{
        try{
           await axios.delete(this.baseUrl+ `/${id}`)
        }catch(e){
            alert("Algo de errado aconteceu durante a deleção. Veja o log para mais detalhes!!");
            console.log(e);
        }
    }

    public static async update(data:UpdateTaskSchema){
        try{
            await axios.put(this.baseUrl,data)
        }catch(e){
            alert("Algo de errado aconteceu durante a  criação da task. Veja o log para mais detalhes!!");
            console.log(e);
        }
    }
        
}


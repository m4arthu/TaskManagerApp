export interface TaskSchema {
	id?: number;
	task_name: string;
	task_description:string,
	deadline: string
}

export interface CreateTaskSchema {
	name: string,
	description: string,
	date: string
}

export interface UpdateTaskSchema {
	name: string,
	description: string,
	date: string,
	taskId: number
}
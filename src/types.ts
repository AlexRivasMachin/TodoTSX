import { TODO_FILTER } from './CONSTS';

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export type todoTitle = Pick<Todo, 'title'>;
export type todoId = Pick<Todo, 'id'>;
export type todoCompleted = Pick<Todo, 'completed'>;

export type FilterValue = typeof TODO_FILTER[keyof typeof TODO_FILTER]; // 'all' | 'active' | 'completed'; con la key of typeof sacamos los valores de un objeto

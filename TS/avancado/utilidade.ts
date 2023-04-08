//Partial<Type>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//Required<Type>
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

//Readonly<Type>
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "I'm a description",
};

todo.title = "Hello";

//Pick<Type, Keys>
interface Task {
  title: string;
  description: string;
  completed: boolean;
}

type TaskPreview = Pick<Task, "title" | "completed">;

const task: TaskPreview = {
  title: "Clean room",
  completed: false,
};

console.log(task);

//Omit<Type, Keys>
interface Ad {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type AdPreview = Omit<Ad, "description">;

const ad: AdPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

console.log(ad);

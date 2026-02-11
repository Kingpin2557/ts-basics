export const UtilityTypes = {
  runDemos: () => {
    // interface Todo {
    //   title: string;
    //   description: string;
    // }

    // const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    //   return { todo, ...fieldsToUpdate };
    // };

    // const todo = {
    //   title: "My First Todo",
    //   description: "a description",
    // };

    // updateTodo(todo, {
    //   title: "something else",
    // });

    //Readonly
    // interface Todo {
    //   title: string;
    // }

    // const todo: Readonly<Todo> = {
    //   title: "My todo",
    // };

    // todo.title = "test";

    //Pick
    interface Todo {
      title: string;
      description: string;
      completed: boolean;
    }

    // type TodoPreview = Pick<Todo, "title" | "description">;

    // const todo: TodoPreview = {
    //   title: "test",
    //   description: "testing desc",
    //   completed: true,
    // };

    type TodoPreview = Omit<Todo, "description">;

    const todo: TodoPreview = {
      title: "test",
      completed: true,
    };
  },
};

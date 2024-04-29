import { Component, signal, computed } from '@angular/core';
import { FilterTypeTarea, TareaModel } from '../../models/tarea';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  todoList = signal<TareaModel[]>([

    {
      id: 1,
      title: 'Comprar verduras',
      completed: false,
      editing: false,
      edited: false,

    },
    {
      id: 2,
      title: 'Comprar vegetales',
      completed: false,
      editing: false,
      edited: false,

    },
    {
      id: 3,
      title: 'Comprar frutas',
      completed: false,
      editing: false,
      edited: false,

    },
    {
      id: 4,
      title: 'Comprar lacteos',
      completed: false,
      editing: false,
      edited: false,

    },
    {
      id: 5,
      title: 'Comprar cafe',
      completed: false,
      editing: false,
      edited: false,

    },
  ]
  );

  filter = signal<FilterTypeTarea>('all');

  
  changefilter(filterString: FilterTypeTarea) {
    this.filter.set(filterString)
  }

  TodoListFilters = computed(() => {
    const filters = this.filter();
    const todos = this.todoList();

    switch(filters) {
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }

  })


  // Añadir Toodo

  newTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(4)],
  }
  );

  addTodo () {
    const newTodoTitle = this.newTodo.value.trim();

    if (this.newTodo.valid && newTodoTitle !== '' ) {

      this.todoList.update((prev_todos)=> {
        return [
          ...prev_todos,
          {id: Date.now(),title: newTodoTitle, completed: false, editing: false, edited: false, }
        ]
      })

      this.newTodo.reset();
    } else {
      this.newTodo.reset();
      
    }

  }
  
  editedTodo(todoId: number, newValue: string) {
    console.log(newValue)
    this.todoList.update((prev_todos) => 
      prev_todos.map((todo) => {
        if (todo.id === todoId && todo.title !== newValue && newValue !== '') {
          return {
            ...todo, 
            title: newValue, 
            editing: false, 
            edited: true
          }
        }else {
          return {
            ...todo,
            editing: false, 
          }
        }

      })
    )
  }

  // Cambiar el completado

  toogleTodo(todoId: number) {
    this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {
        if (todo.id === todoId) {
          return { 
            ...todo,
            completed: !todo.completed,
          };
        }
        return {
          ...todo
        }
      })
    )
  }

  updateTodo(todoId: number) {
    this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {
        if (todo.id === todoId) {
          return { 
            ...todo,
            editing: !todo.editing,
          };
        }
        return {
          ...todo
        }
      })
    )
  }


  // Remover elemento

  removeTodo(todoId: number) {
    this.todoList.update((prev_todos) => 

      prev_todos.filter((todos) =>  todos.id !== todoId)
    );
  }

  
}


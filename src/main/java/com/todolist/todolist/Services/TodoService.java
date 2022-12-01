package com.todolist.todolist.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.todolist.Entities.Todo;
import com.todolist.todolist.Repositories.TodoRepository;

@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepository;

	public TodoService() {
		super();
	}

	public TodoService(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}

	
	public Todo addTodo(Todo todo) {

		return todoRepository.save(todo);
	}

	public List<Todo> getAllTodo() {
		return todoRepository.findAll();
	}

	public Todo getTodoById(int id) {
		return todoRepository.findById(id).orElse(null);
	}

	
	public Todo updateTodo(Todo todo) {
		Todo existing_todo = todoRepository.findById(todo.getId()).orElse(null);
		existing_todo.setDescription(todo.getDescription());
		return todoRepository.save(existing_todo);
	}

	public void deleteTodo(int id) {
		todoRepository.deleteById(id);
	}

}

package com.todolist.todolist.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.todolist.todolist.Entities.Todo;
import com.todolist.todolist.Services.TodoService;

@RestController
@CrossOrigin
public class TodoController {

	    @Autowired
	    private TodoService todoService;
	    
	    private final Logger logger = LoggerFactory.getLogger(TodoController.class);
	    
	    //POST
	    @PostMapping("/add")
	    public Todo addTodo(@RequestBody Todo todo) {
	        logger.info("Todo object {}", todo.toString());
	        return todoService.addTodo(todo);
	    }
	    @GetMapping("/todo")
	    public List<Todo> getAlltodos(){
	        return todoService.getAllTodo();
	    }
	    
	    @GetMapping("/{id}")
	    public Todo findTodoById(@PathVariable int id) {
	        return todoService.getTodoById(id);
	    }
	

	    //PUT
	    @PutMapping("/update")
	    public Todo updateTodo(@RequestBody Todo todo)
	    {
	        return todoService.updateTodo(todo); 
	    }

	    @DeleteMapping("/delete")
	    public void deleteTodo(@PathVariable int id ) {
	       todoService.deleteTodo(id);
	    }

}
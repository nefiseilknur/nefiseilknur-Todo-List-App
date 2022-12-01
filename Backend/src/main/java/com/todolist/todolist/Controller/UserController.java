package com.todolist.todolist.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.todolist.todolist.Entities.User;
import com.todolist.todolist.Services.UserService;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/login")
	public User getLoginUser(@PathVariable String username, @PathVariable String password) {
   return userService.loginUser(username, password);
	}

	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return userService.registerUser(user.getUsername(), user.getPassword(), user.getEmail());
	}

	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userService.loginUser(user.getUsername(), user.getPassword());
	}}

package com.todolist.todolist.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todolist.todolist.Entities.User;
import com.todolist.todolist.Repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private  UserRepository userRepository;

	
	public UserService() {
	
}

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public User registerUser(String username, String password, String email) {
		if (username == null || password == null) {
			return null;
		} else {
			User user = new User();
			user.setUsername(username);
			user.setPassword(password);
			user.setEmail(email);
			return userRepository.save(user);
		}
	}

	public User loginUser(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password).orElse(null);

	}

}



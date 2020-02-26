package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DadJokesController {
	@GetMapping("/api/dadjokes")
	public String dadJokes() {
		return "Just a joke";
	}	
}

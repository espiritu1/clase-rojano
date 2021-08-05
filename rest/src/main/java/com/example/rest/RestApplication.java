package com.example.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class RestApplication {


	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);

	}

	@RequestMapping("/")
	public String home(){
		return"<h1>hola mundo</h1>";
	}

	@RequestMapping(method = RequestMethod.GET,value = "/hola1")
	public String hola() {
		return"hola";	
	}

	@GetMapping("/hola")
	public String holaGet() {
		return"hola Get";	
	}

	@PostMapping("/hola")
	public String holaPost() {
		return"hola Post";	
	}

	@PutMapping("/hola")
	public String holaPut() {
		return"hola Put";	
	}

	@RequestMapping("/adios")
	public String adios() {
		return"adios";
	}

	@RequestMapping("/json")
	public String json(){
		return"{contenido:calor}";
	}

	@RequestMapping("/saludar") //http://localhost:8080/saludar?apodo=espiritu
	public String saludar(@RequestParam(value = "apodo", required = false, defaultValue = "mundo!")String nombre){
		return"hola " + nombre;
	}

	//http://localhost:8080/saludar/espiritu
	@RequestMapping("/saludar/{nombre}") 
	public String saludarte(@PathVariable String nombre){
		return"hola " + nombre;
	}

	//http://localhost:8080/saludarles?nombre=fernando&espiritu&algomas
	@RequestMapping("/saludarles") 
		public List<String> saludarles(@RequestParam(value = "nombre") List<String> nombres){
		List<String> respuesta = new ArrayList<String>();
		int i=0;
		for(String nombre:nombres){
			respuesta.add(nombre);
		}
			return respuesta;
	}


	@RequestMapping(value = "/saludar/json",method = RequestMethod.GET)
	public String json2(@RequestParam Map<String,String> parametros){
		return  parametros.entrySet().toString();

	}






}

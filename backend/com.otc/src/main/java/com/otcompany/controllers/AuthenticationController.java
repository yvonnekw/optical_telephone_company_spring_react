package com.otcompany.controllers;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.otcompany.exception.EmailAlreadyTakenException;
import com.otcompany.exception.UserDoesNotExistException;
import com.otcompany.models.ApplicationUser;
import com.otcompany.models.LoginResponseDTO;
import com.otcompany.models.RegistrationDTO;
import com.otcompany.services.AuthenticationService;
import com.otcompany.services.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    private UserService userService;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(UserService userService){
        this.userService = userService;
    }

    @ExceptionHandler({EmailAlreadyTakenException.class})
    public ResponseEntity<String> handleEmailTaken(){
        return new ResponseEntity<String>("The email you provided isa already taken", HttpStatus.CONFLICT);

    }
    /* 
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getUsername(), body.getPassword());
    }*/

    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationDTO body){
        return userService.registerUser(body);
    }

    
    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

    @ExceptionHandler({UserDoesNotExistException.class})
    public ResponseEntity<String> handleUserDoesNotExist(){
        return new ResponseEntity<String>("The user you are looking for does not exist.", HttpStatus.NOT_FOUND);
    }
    @PutMapping("/update/telephone")
    public ApplicationUser updateTelephoneNumber(@RequestBody LinkedHashMap<String, String> body){

    String userName = body.get("username");
    String phone = body.get("mainTelephone");
    
        ApplicationUser applicationUser = userService.getUserByUsername(userName);

        applicationUser.setMainTelephone(Long.parseLong(phone));

        return userService.updateUser(applicationUser);
    }

    @PostMapping("/email/code")
    public ResponseEntity<String> createEmailVerification(@RequestBody LinkedHashMap<String, String> body) {

        userService.generateEmailVerification(body.get("username"));

        return new ResponseEntity<String>("Verification code generated, email sent.", HttpStatus.OK);

}

@PutMapping("/update/password")
public ApplicationUser updatePassword(@RequestBody LinkedHashMap<String, String> body) {

    String username = body.get("username");
    String password = body.get("password");

   return userService.setPassword(username, password);

}

}

package com.javatechie.jwt.api.controller;

//import com.javatechie.jwt.api.entity.AuthRequest;
import com.javatechie.jwt.api.service.CommonService;
import com.javatechie.jwt.api.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class WelcomeController {
//    @Autowired
//    private JwtUtil jwtUtil;
//    @Autowired
//    private AuthenticationManager authenticationManager;


    @Autowired
    private CommonService commonService;

    @GetMapping("/")
    public String welcome() {
        return "Welcome to javatechie !!";
    }
//
//    @PostMapping("/authenticate")
//    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
//        try {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
//            );
//        } catch (Exception ex) {
//            throw new Exception("inavalid username/password");
//        }
//        return jwtUtil.generateToken(authRequest.getUserName());
//    }

    @GetMapping("/search/:id")
    public List getCityList(@PathVariable String query) throws Exception {
        List cityList = commonService.getCityList(query);

        return cityList;
    }
}

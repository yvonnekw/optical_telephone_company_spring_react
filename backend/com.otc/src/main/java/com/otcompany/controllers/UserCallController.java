package com.otcompany.controllers;



import java.util.LinkedHashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.otcompany.models.ApplicationUser;
import com.otcompany.models.UserCall;
import com.otcompany.models.UserCallDTO;
import com.otcompany.services.UserCallService;
import com.otcompany.services.UserService;

@RestController
@RequestMapping("/calls")
@CrossOrigin("*")
public class UserCallController {
    
    private UserService userService;
    private UserCallService callService;

    @PostMapping("/make/call")
    public UserCall callsController(@RequestBody LinkedHashMap<String, String> body) throws Exception{
          String userName = body.get("username");
         String startTime = body.get("startTime");
         String endTime = body.get("endTime");
          String duration = body.get("duration");


          ApplicationUser applicationUser = userService.getUserByUsername(userName);

          UserCallDTO callsDTO = new UserCallDTO();

          callsDTO.setStartTime(Long.parseLong(startTime));
          callsDTO.setEndTime(Long.parseLong(endTime));
           callsDTO.setDuration(Long.parseLong(duration));
    
       UserCall call =   callService.makeCall(duration, callsDTO);

       // applicationUser.setMainTelephone(Long.parseLong(phone));

       // return callService.makeCall(applicationUser);

        //return userService.updateUser(applicationUser);
       // return "the calls";

       return call;
    }

}

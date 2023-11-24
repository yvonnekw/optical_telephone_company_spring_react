package com.otcompany.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.otcompany.exception.UserDoesNotExistException;
import com.otcompany.models.ApplicationUser;
import com.otcompany.models.UserCall;
import com.otcompany.models.UserCallDTO;
import com.otcompany.models.RegistrationDTO;
import com.otcompany.repository.CallsRepository;
import com.otcompany.repository.UserRepository;

@Service
public class UserCallService {

    CallsRepository callsRepository;
    private final UserRepository userRepository;

    @Autowired
    public UserCallService(CallsRepository callsRepository, UserRepository userRepository){
        this.callsRepository = callsRepository;
        this.userRepository = userRepository;
    }

     public UserCall makeCall(String username, UserCallDTO callsDTO) throws Exception {
        ApplicationUser applicationUser = userRepository.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        UserCall call = new UserCall();
       // try {
        call.setStartTime(callsDTO.getStartTime());
        call.setEndTime(callsDTO.getEndTime());
        call.setDuration(callsDTO.getDuration());

        
        return callsRepository.save(call);
        //} catch (Exception e) {
          //  e.getStackTrace();
       // }
    

    }
    
}

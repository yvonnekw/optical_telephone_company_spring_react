package com.otcompany.services;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.otcompany.exception.EmailAlreadyTakenException;
import com.otcompany.exception.UserDoesNotExistException;
import com.otcompany.models.ApplicationUser;
import com.otcompany.models.RegistrationDTO;
import com.otcompany.models.Role;
import com.otcompany.repository.RoleRepository;
import com.otcompany.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

   // @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //@Autowired
    public ApplicationUser registerUser(RegistrationDTO registrationDTO) {
        ApplicationUser applicationUser = new ApplicationUser();

       // applicationUser.setUsername(registrationDTO.getUsername());
        //applicationUser.setPassword(registrationDTO.getPassword());
        applicationUser.setFirstName(registrationDTO.getFirstName());
        applicationUser.setLastName(registrationDTO.getLastName());

        String name = applicationUser.getFirstName() + applicationUser.getLastName();
        boolean nameTaken = true;
        String tempName = " ";

        while(nameTaken) {
            tempName = generateUserName(name);
            
            if(userRepository.findByUsername(tempName).isEmpty()){
                nameTaken = false;
            }
        }
        applicationUser.setUsername(tempName);

        
        Set<Role> roles =  (Set<Role>) applicationUser.getAuthorities();
        roles.add(roleRepository.findByAuthority("USER").get());
        applicationUser.setAuthorities(roles);

        try {
            return userRepository.save(applicationUser);
        } catch (Exception e) {
            throw new EmailAlreadyTakenException();
        }
       // return userRepository.save(applicationUser);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In the user details service");
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("user is not valid"));
    }

    private String generateUserName(String name) {
        long generatedNumber = (long) Math.floor(Math.random() * 1_000_000_000);
        return name + generatedNumber;
    }

    public void generateEmailVerification(String username) {
        ApplicationUser applicationUser = userRepository.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        applicationUser.setVerification(generatedVerificationNumber());
        userRepository.save(applicationUser);
    }

   public ApplicationUser setPassword(String username, String password) {
         ApplicationUser applicationUser = userRepository.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
      String encodedPassword = passwordEncoder.encode(password);
      applicationUser.setPassword(encodedPassword);
         return userRepository.save(applicationUser);
    }

   private Long generatedVerificationNumber() {
         long generatedNumber = (long)Math.floor(Math.random() * 100_000_000);
         return  generatedNumber;
    }

    public ApplicationUser getUserByUsername(String userName) {
        return userRepository.findByUsername(userName).orElseThrow(UserDoesNotExistException::new);
    }

    public ApplicationUser updateUser(ApplicationUser applicationUser) {
        try {
            return userRepository.save(applicationUser);
        } catch (Exception e) {
            throw new EmailAlreadyTakenException();
        }
       
    }



}

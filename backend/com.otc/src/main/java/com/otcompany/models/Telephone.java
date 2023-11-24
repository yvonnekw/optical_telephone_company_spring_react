package com.otcompany.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToMany;

import jakarta.persistence.Table;

@Entity
@Table(name = "telephone")
public class Telephone {
//mention   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer telephoneId;
  
     @Column(nullable = false, columnDefinition = "varchar(150)", unique = false)
     private Integer telephoneNumber;

    //mention
    /* 
    @JsonIgnore
    @ManyToMany
    @JoinColumn(name = "user_id")
    private ApplicationUser applicationUser;*/
/* 
    @JsonIgnore
    @ManyToMany
    @JoinColumn(name = "calls_id")
    private Calls calls;*/

    public Integer getTelephoneId() {
        return telephoneId;
    }

    public void setTelephoneId(Integer telephoneId) {
        this.telephoneId = telephoneId;
    }

    public Integer getTelephone() {
        return telephoneNumber;
    }

    public void setTelephone(Integer telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }
/* 
    public ApplicationUser getApplicationUser() {
        return applicationUser;
    }

    public void setApplicationUser(ApplicationUser applicationUser) {
        this.applicationUser = applicationUser;
    }*/

    @Override
    public String toString() {
        return "Telephone [telephoneId=" + telephoneId + ", telephoneNumber=" + telephoneNumber + "]";
    }


    

}

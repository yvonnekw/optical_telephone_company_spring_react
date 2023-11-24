package com.otcompany.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.otcompany.models.UserCall;

@Repository
public interface CallsRepository extends JpaRepository<UserCall, Integer> {
	Optional<UserCall> findByCallId(String callsId);
  
}

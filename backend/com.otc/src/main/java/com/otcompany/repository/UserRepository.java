package com.otcompany.repository;

import java.util.Optional;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.otcompany.models.ApplicationUser;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUser, Integer> {
	Optional<ApplicationUser> findByUsername(String username);
}

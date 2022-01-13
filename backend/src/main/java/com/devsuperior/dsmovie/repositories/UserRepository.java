package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

// JpsRepository<tipo da entidade, tipo da id da entidade>
public interface UserRepository extends JpaRepository<User, Long>{

	// Criar uma busca usando o próprio nome do campo (macete do JpaRepository)
	User findByEmail(String email);
}

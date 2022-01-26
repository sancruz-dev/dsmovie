package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

// JpaRepository<tipo da entidade, tipo da id da entidade>
public interface MovieRepository extends JpaRepository<Movie, Long>{

}

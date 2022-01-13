package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;

// JpsRepository<tipo da entidade, tipo da id da entidade>
public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}

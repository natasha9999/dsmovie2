package com.devsuperior.dsmovie2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie2.entities.Score;
import com.devsuperior.dsmovie2.entities.ScorePrimaryKey;

public interface ScoreRepository extends JpaRepository<Score, ScorePrimaryKey> {

}

//Camada de acesso a dados do banco de dados
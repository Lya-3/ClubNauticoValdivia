package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Boleta;

@Repository 
public interface BoletaRepository extends JpaRepository<Boleta, Integer> {

}

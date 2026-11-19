package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Espacio;

@Repository 
public interface EspacioRepository extends JpaRepository<Espacio, Integer>  {

}

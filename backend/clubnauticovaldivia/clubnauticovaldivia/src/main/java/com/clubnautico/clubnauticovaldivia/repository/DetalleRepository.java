package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Detalle;

@Repository 
public interface DetalleRepository extends JpaRepository<Detalle, Integer>  {

}

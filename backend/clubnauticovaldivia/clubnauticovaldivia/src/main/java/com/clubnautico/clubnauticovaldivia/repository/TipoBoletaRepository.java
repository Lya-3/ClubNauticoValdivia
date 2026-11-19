package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.TipoBoleta;

@Repository 
public interface TipoBoletaRepository extends JpaRepository<TipoBoleta, Integer>  {

}

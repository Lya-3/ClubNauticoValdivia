package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.TipoEspacio;

@Repository 
public interface TipoEspacioRepository extends JpaRepository<TipoEspacio, Integer>  {

}

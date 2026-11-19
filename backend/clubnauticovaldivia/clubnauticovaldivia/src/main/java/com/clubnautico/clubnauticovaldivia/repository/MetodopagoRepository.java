package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Metodopago;

@Repository 
public interface MetodopagoRepository extends JpaRepository<Metodopago, Integer>  {

}

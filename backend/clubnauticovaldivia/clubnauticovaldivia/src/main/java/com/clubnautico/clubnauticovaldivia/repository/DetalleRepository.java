package com.clubnautico.clubnauticovaldivia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Detalle;

@Repository 
public interface DetalleRepository extends JpaRepository<Detalle, Integer>  {

    @Query("SELECT d FROM Detalle d WHERE d.boleta.id = :id")
    List<Detalle> buscarPorBoleta(@Param("id") Integer id);
}

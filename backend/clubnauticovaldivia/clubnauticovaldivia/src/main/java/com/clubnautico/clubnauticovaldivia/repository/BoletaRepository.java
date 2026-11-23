package com.clubnautico.clubnauticovaldivia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Boleta;

@Repository 
public interface BoletaRepository extends JpaRepository<Boleta, Integer> {

    @Query("SELECT b FROM Boleta b WHERE b.usuario.rut = :rut")
    List<Boleta> buscarPorRut(@Param("rut") String rut);
}

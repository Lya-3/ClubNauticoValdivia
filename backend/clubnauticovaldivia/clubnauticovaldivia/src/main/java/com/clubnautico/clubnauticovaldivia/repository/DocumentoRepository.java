package com.clubnautico.clubnauticovaldivia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Documento;

@Repository 
public interface DocumentoRepository extends JpaRepository<Documento, Integer>{

    @Query("SELECT d FROM Documento d WHERE d.usuario.rut = :rut")
    List<Documento> buscarPorRut(@Param("rut") String rut);
}

package com.clubnautico.clubnauticovaldivia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Espacio;

@Repository 
public interface EspacioRepository extends JpaRepository<Espacio, Integer>  {

    @Query("SELECT e FROM Espacio e WHERE e.disponible = true")
    List<Espacio> buscarDisponibles();

    @Query("SELECT e FROM Espacio e WHERE e.tipoEspacio.id = :id")
    List<Espacio> buscarEspaciosPorTipo(@Param("id") Integer id);
}

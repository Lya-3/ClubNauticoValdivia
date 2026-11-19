package com.clubnautico.clubnauticovaldivia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clubnautico.clubnauticovaldivia.model.Usuario;

@Repository 
public interface UsuarioRepository extends JpaRepository<Usuario, String>  {

}

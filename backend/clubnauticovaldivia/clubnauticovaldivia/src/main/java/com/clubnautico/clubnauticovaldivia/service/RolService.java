package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Rol;
import com.clubnautico.clubnauticovaldivia.repository.RolRepository;

@Service 
public class RolService {

    private final RolRepository rolRepository;

    public RolService(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    public List<Rol> listar() {
        return rolRepository.findAll();
    }

    public Rol buscarPorId(Integer id) {
        return rolRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "El rol que busca no se encuentra"
            ));
    }

    public Rol guardar(Rol rol) {
        return rolRepository.save(rol);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        rolRepository.deleteById(id);
    }
}

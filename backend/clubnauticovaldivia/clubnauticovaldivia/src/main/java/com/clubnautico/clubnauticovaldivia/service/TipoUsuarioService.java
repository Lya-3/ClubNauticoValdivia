package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.TipoUsuario;
import com.clubnautico.clubnauticovaldivia.repository.TipoUsuarioRepository;

@Service 
public class TipoUsuarioService {

    private final TipoUsuarioRepository tipoUsuarioRepository;

    public TipoUsuarioService(TipoUsuarioRepository tipoUsuarioRepository) {
        this.tipoUsuarioRepository = tipoUsuarioRepository;
    }

    public List<TipoUsuario> listar() {
        return tipoUsuarioRepository.findAll();
    }

    public TipoUsuario buscarPorId(Integer id) {
        return tipoUsuarioRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Tipo de usuario no encontado"
            ));
    }

    public TipoUsuario guardar(TipoUsuario tipoUsuario) {
        return tipoUsuarioRepository.save(tipoUsuario);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoUsuarioRepository.deleteById(id);
    }
}

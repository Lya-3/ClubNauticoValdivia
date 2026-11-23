package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Usuario;
import com.clubnautico.clubnauticovaldivia.repository.UsuarioRepository;

@Service 
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarPorRut(String rut) {
        return usuarioRepository.findById(rut)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "El usuario que buscas no ha sido encontrado"
            ));
    }

    public List<Usuario> buscarPorNombre(String nombre) {
        return usuarioRepository.buscarPorNombre(nombre);
    }

    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void eliminar(String rut) {
        buscarPorRut(rut);
        usuarioRepository.deleteById(rut);
    }
    
}

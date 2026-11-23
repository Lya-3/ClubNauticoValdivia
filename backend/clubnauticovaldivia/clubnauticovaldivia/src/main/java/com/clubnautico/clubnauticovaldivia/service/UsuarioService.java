package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.UsuarioDTO;
import com.clubnautico.clubnauticovaldivia.model.Usuario;
import com.clubnautico.clubnauticovaldivia.repository.UsuarioRepository;

@Service 
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    private UsuarioDTO convertirDTO(Usuario usuario) {
        UsuarioDTO dto = new UsuarioDTO();

        dto.setRut(usuario.getRut());
        dto.setNombre(usuario.getNombre());
        dto.setTelefono(usuario.getTelefono());
        dto.setCorreo(usuario.getCorreo());

        return dto;
    }

    public List<UsuarioDTO> listar() {
        return usuarioRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public UsuarioDTO buscarPorRut(String rut) {
        Usuario usuario = usuarioRepository.findById(rut)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El usuario no ha sido encontrado"
                ));

        return convertirDTO(usuario);
    }

    public List<UsuarioDTO> buscarPorNombre(String nombre) {
        return usuarioRepository.buscarPorNombre(nombre)
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public UsuarioDTO actualizar(String rut, UsuarioDTO dto) {
        Usuario usuario = usuarioRepository.findById(rut)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El usuario no ha sido encontrado"
                ));

        usuario.setNombre(dto.getNombre());
        usuario.setTelefono(dto.getTelefono());
        usuario.setCorreo(dto.getCorreo());

        return convertirDTO(usuarioRepository.save(usuario));
    }
    
}

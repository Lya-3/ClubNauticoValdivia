package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.TipoUsuarioDTO;
import com.clubnautico.clubnauticovaldivia.model.TipoUsuario;
import com.clubnautico.clubnauticovaldivia.repository.TipoUsuarioRepository;

@Service 
public class TipoUsuarioService {

    private final TipoUsuarioRepository tipoUsuarioRepository;

    public TipoUsuarioService(TipoUsuarioRepository tipoUsuarioRepository) {
        this.tipoUsuarioRepository = tipoUsuarioRepository;
    }

    private TipoUsuarioDTO convertirDTO(TipoUsuario tipoUsuario) {
        TipoUsuarioDTO dto = new TipoUsuarioDTO();

        dto.setId(tipoUsuario.getId());
        dto.setNombre(tipoUsuario.getNombre());

        return dto;
    }

    public List<TipoUsuarioDTO> listar() {
        return tipoUsuarioRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public TipoUsuarioDTO buscarPorId(Integer id) {
        TipoUsuario tipoUsuario = tipoUsuarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El tipo de usuario que busca no ha sido encontrado"
                ));

        return convertirDTO(tipoUsuario);
    }

    public TipoUsuarioDTO guardar(TipoUsuarioDTO dto) {
        TipoUsuario tipoUsuario = new TipoUsuario();

        tipoUsuario.setNombre(dto.getNombre());

        return convertirDTO(tipoUsuarioRepository.save(tipoUsuario));
    }

    public TipoUsuarioDTO actualizar(Integer id, TipoUsuarioDTO dto) {
        TipoUsuario tipoUsuario = tipoUsuarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Tipo de usuario no encontrado"
                ));

        tipoUsuario.setNombre(dto.getNombre());

        return convertirDTO(tipoUsuarioRepository.save(tipoUsuario));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoUsuarioRepository.deleteById(id);
    }
}

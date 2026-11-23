package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.TipoEspacioDTO;
import com.clubnautico.clubnauticovaldivia.model.TipoEspacio;
import com.clubnautico.clubnauticovaldivia.repository.TipoEspacioRepository;

@Service 
public class TipoEspacioService {

    private final TipoEspacioRepository tipoEspacioRepository;

    public TipoEspacioService(TipoEspacioRepository tipoEspacioRepository) {
        this.tipoEspacioRepository = tipoEspacioRepository;
    }

    private TipoEspacioDTO convertirDTO(TipoEspacio tipoEspacio) {
        TipoEspacioDTO dto = new TipoEspacioDTO();

        dto.setId(tipoEspacio.getId());
        dto.setNombre(tipoEspacio.getNombre());

        return dto;
    }

    public List<TipoEspacioDTO> listar() {
        return tipoEspacioRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public TipoEspacioDTO buscarPorId(Integer id) {
        TipoEspacio tipoEspacio = tipoEspacioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El tipo de espacio no ha podido ser encontrado"
                ));

        return convertirDTO(tipoEspacio);
    }

    public TipoEspacioDTO guardar(TipoEspacioDTO dto) {
        TipoEspacio tipoEspacio = new TipoEspacio();

        tipoEspacio.setNombre(dto.getNombre());

        return convertirDTO(tipoEspacioRepository.save(tipoEspacio));
    }

    public TipoEspacioDTO actualizar(Integer id, TipoEspacioDTO dto) {
        TipoEspacio tipoEspacio = tipoEspacioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El tipo de espacio que quiere actualizar no se ha encontrado"
                ));

        tipoEspacio.setNombre(dto.getNombre());

        return convertirDTO(tipoEspacioRepository.save(tipoEspacio));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoEspacioRepository.deleteById(id);
    }
}

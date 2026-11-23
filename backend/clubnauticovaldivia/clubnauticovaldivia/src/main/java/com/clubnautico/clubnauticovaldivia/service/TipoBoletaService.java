package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.TipoboletaDTO;
import com.clubnautico.clubnauticovaldivia.model.TipoBoleta;
import com.clubnautico.clubnauticovaldivia.repository.TipoBoletaRepository;

@Service 
public class TipoBoletaService {

    private final TipoBoletaRepository tipoBoletaRepository;

    public TipoBoletaService(TipoBoletaRepository tipoBoletaRepository) {
        this.tipoBoletaRepository = tipoBoletaRepository;
    }

    private TipoboletaDTO convertirDTO(TipoBoleta tipoBoleta) {
        TipoboletaDTO dto = new TipoboletaDTO();

        dto.setId(tipoBoleta.getId());
        dto.setNombre(tipoBoleta.getNombre());

        return dto;
    }

    public List<TipoboletaDTO> listar() {
        return tipoBoletaRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public TipoboletaDTO buscarPorId(Integer id) {
        TipoBoleta tipoBoleta = tipoBoletaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El tipo de boleta que busca no se ha encontrado"
                ));

        return convertirDTO(tipoBoleta);
    }

    public TipoboletaDTO guardar(TipoboletaDTO dto) {
        TipoBoleta tipoBoleta = new TipoBoleta();

        tipoBoleta.setNombre(dto.getNombre());

        return convertirDTO(tipoBoletaRepository.save(tipoBoleta));
    }

    public TipoboletaDTO actualizar(Integer id, TipoboletaDTO dto) {
        TipoBoleta tipoBoleta = tipoBoletaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El tipo de boleta que quiere actualizar no se ha encontrado"
                ));

        tipoBoleta.setNombre(dto.getNombre());

        return convertirDTO(tipoBoletaRepository.save(tipoBoleta));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoBoletaRepository.deleteById(id);
    }
}

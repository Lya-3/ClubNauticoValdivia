package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.EspacioDTO;
import com.clubnautico.clubnauticovaldivia.model.Espacio;
import com.clubnautico.clubnauticovaldivia.repository.EspacioRepository;

@Service 
public class EspacioService {

    private final EspacioRepository espacioRepository;

    public EspacioService(EspacioRepository espacioRepository) {
        this.espacioRepository = espacioRepository;
    }

    private EspacioDTO convertirDTO(Espacio espacio) {
        EspacioDTO dto = new EspacioDTO();

        dto.setId(espacio.getId());
        dto.setNombre(espacio.getNombre());
        dto.setPrecioDiario(espacio.getPrecioDiario());
        dto.setPrecioSemanal(espacio.getPrecioSemanal());
        dto.setPrecioMensual(espacio.getPrecioMensual());
        dto.setDisponible(espacio.getDisponible());

        if (espacio.getTipoEspacio() != null) {
            dto.setTipoEspacioId(
                    espacio.getTipoEspacio().getId()
            );
        }

        if (espacio.getUsuario() != null) {
            dto.setUsuarioRut(
                    espacio.getUsuario().getRut()
            );
        }

        return dto;
    }

    public List<EspacioDTO> listar() {
        return espacioRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public EspacioDTO buscarPorId(Integer id) {
        Espacio espacio = espacioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El espacio no ha sido encontrado"
                ));

        return convertirDTO(espacio);
    }

    public List<EspacioDTO> buscarDisponibles() {
        return espacioRepository.buscarDisponibles()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public List<EspacioDTO> buscarEspaciosPorTipo(Integer id) {
        return espacioRepository.buscarEspaciosPorTipo(id)
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public EspacioDTO actualizar(Integer id, EspacioDTO dto) {
        Espacio espacio = espacioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El espacio no se ha podido encontrar"
                ));

        espacio.setNombre(dto.getNombre());
        espacio.setPrecioDiario(dto.getPrecioDiario());
        espacio.setPrecioSemanal(dto.getPrecioSemanal());
        espacio.setPrecioMensual(dto.getPrecioMensual());

        return convertirDTO(espacioRepository.save(espacio));
    }
}

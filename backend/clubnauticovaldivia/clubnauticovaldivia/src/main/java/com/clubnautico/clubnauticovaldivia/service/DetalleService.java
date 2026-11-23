package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.DetalleDTO;
import com.clubnautico.clubnauticovaldivia.model.Detalle;
import com.clubnautico.clubnauticovaldivia.repository.DetalleRepository;

@Service 
public class DetalleService {

    private final DetalleRepository detalleRepository;

    public DetalleService(DetalleRepository detalleRepository) {
        this.detalleRepository = detalleRepository;
    }

    private DetalleDTO convertirDTO(Detalle detalle) {
        DetalleDTO dto = new DetalleDTO();

        dto.setId(detalle.getId());
        dto.setCantidad(detalle.getCantidad());
        dto.setSubtotal(detalle.getSubtotal());

        if (detalle.getServicio() != null) {
            dto.setServicioId(detalle.getServicio().getId());
        }

        if (detalle.getEspacio() != null) {
            dto.setEspacioId(detalle.getEspacio().getId());
        }

        return dto;
    }

    public List<DetalleDTO> listar() {
        return detalleRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public DetalleDTO buscarPorId(Integer id) {
        Detalle detalle = detalleRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Detalle no encontrado"
                ));

        return convertirDTO(detalle);
    }

    public List<DetalleDTO> buscarPorBoleta(Integer id) {
        return detalleRepository.buscarPorBoleta(id)
                .stream()
                .map(this::convertirDTO)
                .toList();
    }
}

package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.BoletaDTO;
import com.clubnautico.clubnauticovaldivia.DTO.DetalleDTO;
import com.clubnautico.clubnauticovaldivia.model.Boleta;
import com.clubnautico.clubnauticovaldivia.model.Detalle;
import com.clubnautico.clubnauticovaldivia.repository.BoletaRepository;

@Service 
public class BoletaService {

    private final BoletaRepository boletaRepository;

    public BoletaService(BoletaRepository boletaRepository) {
        this.boletaRepository = boletaRepository;
    }

    private DetalleDTO convertirDetalleDTO(Detalle detalle) {
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

    private BoletaDTO convertirDTO(Boleta boleta) {
        BoletaDTO dto = new BoletaDTO();

        dto.setId(boleta.getId());
        dto.setFecha(boleta.getFecha());
        dto.setTotal(boleta.getTotal());

        if (boleta.getUsuario() != null) {
            dto.setUsuarioRut(boleta.getUsuario().getRut());
        }

        if (boleta.getMetodoPago() != null) {
            dto.setMetodoPagoId(
                boleta.getMetodoPago().getId()
            );
        }

        if (boleta.getTipoBoleta() != null) {
            dto.setTipoBoletaId(
                    boleta.getTipoBoleta().getId()
            );
        }

        if (boleta.getDetalles() != null) {
            dto.setDetalles(
                    boleta.getDetalles()
                            .stream()
                            .map(this::convertirDetalleDTO)
                            .toList()
            );
        }

        return dto;
    }

    public List<BoletaDTO> listar() {
        return boletaRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public BoletaDTO buscarPorId(Integer id) {
        Boleta boleta = boletaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "La boleta no ha sido encontrada"
                ));

        return convertirDTO(boleta);
    }

    public List<BoletaDTO> buscarPorRut(String rut) {
        return boletaRepository.buscarPorRut(rut)
                .stream()
                .map(this::convertirDTO)
                .toList();
    }
}

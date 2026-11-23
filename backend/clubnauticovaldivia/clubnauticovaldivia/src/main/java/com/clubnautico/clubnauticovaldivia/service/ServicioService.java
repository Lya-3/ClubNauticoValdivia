package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.ServicioDTO;
import com.clubnautico.clubnauticovaldivia.model.Servicio;
import com.clubnautico.clubnauticovaldivia.repository.ServicioRepository;

@Service 
public class ServicioService {

    private final ServicioRepository servicioRepository;

    public ServicioService(ServicioRepository servicioRepository) {
        this.servicioRepository = servicioRepository;
    }

    private ServicioDTO convertirDTO(Servicio servicio) {
        ServicioDTO dto = new ServicioDTO();

        dto.setId(servicio.getId());
        dto.setNombre(servicio.getNombre());
        dto.setPrecio(servicio.getPrecio());

        return dto;
    }

    public List<ServicioDTO> listar() {
        return servicioRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public ServicioDTO buscarPorId(Integer id) {
        Servicio servicio = servicioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "El servicio no ha sido encontrado"
                ));

        return convertirDTO(servicio);
    }

    public List<ServicioDTO> buscarPorPrecioMaximo(Integer precio) {
        return servicioRepository.buscarPorPrecioMaximo(precio)
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public ServicioDTO guardar(ServicioDTO dto) {
        Servicio servicio = new Servicio();

        servicio.setNombre(dto.getNombre());
        servicio.setPrecio(dto.getPrecio());

        return convertirDTO(servicioRepository.save(servicio));
    }

    public ServicioDTO actualizar(Integer id, ServicioDTO dto) {
        Servicio servicio = servicioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Servicio no se pudo encontrar"
                ));

        servicio.setNombre(dto.getNombre());
        servicio.setPrecio(dto.getPrecio());

        return convertirDTO(servicioRepository.save(servicio));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        servicioRepository.deleteById(id);
    }
}

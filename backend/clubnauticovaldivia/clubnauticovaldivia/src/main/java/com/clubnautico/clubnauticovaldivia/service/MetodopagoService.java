package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.MetodopagoDTO;
import com.clubnautico.clubnauticovaldivia.model.Metodopago;
import com.clubnautico.clubnauticovaldivia.repository.MetodopagoRepository;

@Service 
public class MetodopagoService {

    private final MetodopagoRepository metodopagoRepository;

    public MetodopagoService(MetodopagoRepository metodopagoRepository) {
        this.metodopagoRepository = metodopagoRepository;
    }

    private MetodopagoDTO convertirDTO(Metodopago metodopago) {
        MetodopagoDTO dto = new MetodopagoDTO();

        dto.setId(metodopago.getId());
        dto.setNombre(metodopago.getNombre());

        return dto;
    }

    public List<MetodopagoDTO> listar() {
        return metodopagoRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public MetodopagoDTO buscarPorId(Integer id) {
        Metodopago metodopago = metodopagoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El método de pago no se ha encontrado"
                ));

        return convertirDTO(metodopago);
    }

    public MetodopagoDTO guardar(MetodopagoDTO dto) {
        Metodopago metodopago = new Metodopago();

        metodopago.setNombre(dto.getNombre());

        return convertirDTO(metodopagoRepository.save(metodopago));
    }

    public MetodopagoDTO actualizar(Integer id, MetodopagoDTO dto) {
        Metodopago metodopago = metodopagoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "El método de pago que quiere actualizar no se ha encontrado"
                ));

        metodopago.setNombre(dto.getNombre());

        return convertirDTO(metodopagoRepository.save(metodopago));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        metodopagoRepository.deleteById(id);
    }
}

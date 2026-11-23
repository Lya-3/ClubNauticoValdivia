package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Detalle;
import com.clubnautico.clubnauticovaldivia.repository.DetalleRepository;

@Service 
public class DetalleService {

    private final DetalleRepository detalleRepository;

    public DetalleService(DetalleRepository detalleRepository) {
        this.detalleRepository = detalleRepository;
    }

    public List<Detalle> listar() {
        return detalleRepository.findAll();
    }

    public Detalle buscarPorId(Integer id) {
        return detalleRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "El detalle que buscas no ha sido encontrado"
            ));
    }

    public List<Detalle> buscarPorBoleta(Integer id) {
        return detalleRepository.buscarPorBoleta(id);
    }

    public Detalle guardar(Detalle detalle) {
        return detalleRepository.save(detalle);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        detalleRepository.deleteById(id);
    }
}

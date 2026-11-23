package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Servicio;
import com.clubnautico.clubnauticovaldivia.repository.ServicioRepository;

@Service 
public class ServicioService {

    private final ServicioRepository servicioRepository;

    public ServicioService(ServicioRepository servicioRepository) {
        this.servicioRepository = servicioRepository;
    }

    public List<Servicio> listar() {
        return servicioRepository.findAll();
    }

    public Servicio buscarPorId(Integer id) {
        return servicioRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "El servicio que busca no se encuentra registado"
            ));
    }

    public List<Servicio> buscarPorPrecioMaximo(Integer precio) {
        return servicioRepository.buscarPorPrecioMaximo(precio);
    }

    public Servicio guardar(Servicio servicio) {
        return servicioRepository.save(servicio);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        servicioRepository.deleteById(id);
    }
}

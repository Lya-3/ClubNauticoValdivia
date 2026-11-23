package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Espacio;
import com.clubnautico.clubnauticovaldivia.repository.EspacioRepository;

@Service 
public class EspacioService {

    private final EspacioRepository espacioRepository;

    public EspacioService(EspacioRepository espacioRepository) {
        this.espacioRepository = espacioRepository;
    }

    public List<Espacio> listar() {
        return espacioRepository.findAll();
    }

    public Espacio buscarPorId(Integer id) {
        return espacioRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "El espacio que buscas no ha sido encontrado"
            ));
    }

    public List<Espacio> buscarDisponibles() {
        return espacioRepository.buscarDisponibles();
    }

    public List<Espacio> buscarEspaciosPorTipo(Integer id) {
        return espacioRepository.buscarEspaciosPorTipo(id);
    }

    public Espacio guardar(Espacio espacio) {
        return espacioRepository.save(espacio);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        espacioRepository.deleteById(id);
    }
}

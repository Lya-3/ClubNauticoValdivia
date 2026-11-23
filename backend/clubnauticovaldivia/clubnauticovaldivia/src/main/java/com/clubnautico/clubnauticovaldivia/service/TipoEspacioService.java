package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.TipoEspacio;
import com.clubnautico.clubnauticovaldivia.repository.TipoEspacioRepository;

@Service 
public class TipoEspacioService {

    private final TipoEspacioRepository tipoEspacioRepository;

    public TipoEspacioService(TipoEspacioRepository tipoEspacioRepository) {
        this.tipoEspacioRepository = tipoEspacioRepository;
    }

    public List<TipoEspacio> listar() {
        return tipoEspacioRepository.findAll();
    }

    public TipoEspacio buscarPorId(Integer id) {
        return tipoEspacioRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Tipo de espacio no encontado"
            ));
    }

    public TipoEspacio guardar(TipoEspacio tipoEspacio) {
        return tipoEspacioRepository.save(tipoEspacio);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoEspacioRepository.deleteById(id);
    }
}

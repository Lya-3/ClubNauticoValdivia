package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.TipoBoleta;
import com.clubnautico.clubnauticovaldivia.repository.TipoBoletaRepository;

@Service 
public class TipoBoletaService {

    private final TipoBoletaRepository tipoBoletaRepository;

    public TipoBoletaService(TipoBoletaRepository tipoBoletaRepository) {
        this.tipoBoletaRepository = tipoBoletaRepository;
    }

    public List<TipoBoleta> listar() {
        return tipoBoletaRepository.findAll();
    }

    public TipoBoleta buscarPorId(Integer id) {
        return tipoBoletaRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Tipo de boleta no encontado"
            ));
    }

    public TipoBoleta guardar(TipoBoleta tipoBoleta) {
        return tipoBoletaRepository.save(tipoBoleta);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        tipoBoletaRepository.deleteById(id);
    }
}

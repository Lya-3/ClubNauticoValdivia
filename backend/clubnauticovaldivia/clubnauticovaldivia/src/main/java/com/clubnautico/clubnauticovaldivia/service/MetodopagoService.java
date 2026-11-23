package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Metodopago;
import com.clubnautico.clubnauticovaldivia.repository.MetodopagoRepository;

@Service 
public class MetodopagoService {

    private final MetodopagoRepository metodopagoRepository;

    public MetodopagoService(MetodopagoRepository metodopagoRepository) {
        this.metodopagoRepository = metodopagoRepository;
    }

    public List<Metodopago> listar() {
        return metodopagoRepository.findAll();
    }

    public Metodopago buscarPorId(Integer id) {
        return metodopagoRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Método de pago no encontado"
            ));
    }

    public Metodopago guardar(Metodopago metodopago) {
        return metodopagoRepository.save(metodopago);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        metodopagoRepository.deleteById(id);
    }
}

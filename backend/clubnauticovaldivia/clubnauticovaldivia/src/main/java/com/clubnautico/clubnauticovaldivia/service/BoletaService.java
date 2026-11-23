package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.model.Boleta;
import com.clubnautico.clubnauticovaldivia.repository.BoletaRepository;

@Service 
public class BoletaService {

    private final BoletaRepository boletaRepository;

    public BoletaService(BoletaRepository boletaRepository) {
        this.boletaRepository = boletaRepository;
    }

    public List<Boleta> listar() {
        return boletaRepository.findAll();
    }

    public Boleta buscarPorId(Integer id) {
        return boletaRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "La boleta que esta buscando no se encuentra en el registro"
            ));
    }

    public List<Boleta> buscarPorRut(String rut) {
        return boletaRepository.buscarPorRut(rut);
    }

    public Boleta guardar(Boleta boleta) {
        return boletaRepository.save(boleta);
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        boletaRepository.deleteById(id);
    }
}

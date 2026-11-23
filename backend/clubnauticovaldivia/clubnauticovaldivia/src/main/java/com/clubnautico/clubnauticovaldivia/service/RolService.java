package com.clubnautico.clubnauticovaldivia.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.clubnautico.clubnauticovaldivia.DTO.RolDTO;
import com.clubnautico.clubnauticovaldivia.model.Rol;
import com.clubnautico.clubnauticovaldivia.repository.RolRepository;

@Service 
public class RolService {

    private final RolRepository rolRepository;

    public RolService(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    private RolDTO convertirDTO(Rol rol) {
        RolDTO dto = new RolDTO();

        dto.setId(rol.getId());
        dto.setNombre(rol.getNombre());

        return dto;
    }

    public List<RolDTO> listar() {
        return rolRepository.findAll()
                .stream()
                .map(this::convertirDTO)
                .toList();
    }

    public RolDTO buscarPorId(Integer id) {
        Rol rol = rolRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "El rol que buscas no ha sido encontrado"
                ));

        return convertirDTO(rol);
    }

    public RolDTO guardar(RolDTO dto) {
        Rol rol = new Rol();
        rol.setNombre(dto.getNombre());

        return convertirDTO(rolRepository.save(rol));
    }

    public RolDTO actualizar(Integer id, RolDTO dto) {
        Rol rol = rolRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "El rol no se pudo encontrar"
                ));

        rol.setNombre(dto.getNombre());

        return convertirDTO(rolRepository.save(rol));
    }

    public void eliminar(Integer id) {
        buscarPorId(id);
        rolRepository.deleteById(id);
    }
}

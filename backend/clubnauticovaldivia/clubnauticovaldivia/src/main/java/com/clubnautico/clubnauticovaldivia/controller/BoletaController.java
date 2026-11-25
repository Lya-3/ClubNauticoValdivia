package com.clubnautico.clubnauticovaldivia.controller;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clubnautico.clubnauticovaldivia.DTO.BoletaDTO;
import com.clubnautico.clubnauticovaldivia.service.BoletaService;

@RestController
@RequestMapping ("api/v1/boletas")
public class BoletaController {

    @Autowired 
    private BoletaService boletaService;
    
    @GetMapping
    public ResponseEntity<CollectionModel<BoletaDTO>> listar() {

        List<BoletaDTO> lista = boletaService.listar();
        CollectionModel<BoletaDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(BoletaController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<BoletaDTO>> buscarPorId(
            @PathVariable Integer id) {

        BoletaDTO dto = boletaService.buscarPorId(id);
        EntityModel<BoletaDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(BoletaController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(BoletaController.class)
                .withRel("boletas"));
        recurso.add(linkTo(DetalleController.class)
                .slash("boleta").slash(id).withRel("detalles"));

        if (dto.getUsuarioRut() != null) {
            recurso.add(linkTo(UsuarioController.class)
                    .slash(dto.getUsuarioRut()).withRel("usuario"));
        }

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/usuario/{rut}")
    public ResponseEntity<CollectionModel<BoletaDTO>> buscarPorRut(
            @PathVariable String rut) {

        List<BoletaDTO> lista = boletaService.buscarPorRut(rut);
        CollectionModel<BoletaDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(BoletaController.class)
                .slash("usuario").slash(rut).withSelfRel());
        recurso.add(linkTo(UsuarioController.class)
                .slash(rut).withRel("usuario"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }
}

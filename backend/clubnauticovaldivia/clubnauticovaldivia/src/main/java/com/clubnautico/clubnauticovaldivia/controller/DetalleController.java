package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import com.clubnautico.clubnauticovaldivia.DTO.DetalleDTO;
import com.clubnautico.clubnauticovaldivia.service.DetalleService;

@RestController 
@RequestMapping ("api/v1/detalles")
public class DetalleController {

    @Autowired 
    private DetalleService detalleService;

    @GetMapping
    public ResponseEntity<CollectionModel<DetalleDTO>> listar() {

        List<DetalleDTO> lista = detalleService.listar();
        CollectionModel<DetalleDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(DetalleController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<DetalleDTO>> buscarPorId(
            @PathVariable Integer id) {

        DetalleDTO dto = detalleService.buscarPorId(id);
        EntityModel<DetalleDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(DetalleController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(DetalleController.class)
                .withRel("detalles"));

        if (dto.getServicioId() != null) {
            recurso.add(linkTo(ServicioController.class)
                    .slash(dto.getServicioId()).withRel("servicio"));
        }

        if (dto.getEspacioId() != null) {
            recurso.add(linkTo(EspacioController.class)
                    .slash(dto.getEspacioId()).withRel("espacio"));
        }

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/boleta/{id}")
    public ResponseEntity<CollectionModel<DetalleDTO>> buscarPorBoleta(
            @PathVariable Integer id) {

        List<DetalleDTO> lista = detalleService.buscarPorBoleta(id);
        CollectionModel<DetalleDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(DetalleController.class)
                .slash("boleta").slash(id).withSelfRel());
        recurso.add(linkTo(BoletaController.class)
                .slash(id).withRel("boleta"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }
}

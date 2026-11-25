package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import com.clubnautico.clubnauticovaldivia.DTO.EspacioDTO;
import com.clubnautico.clubnauticovaldivia.service.EspacioService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping ("api/v1/espacios")
@Tag(name = "Espacios", description = "Gestión de espacios (muelles / almacenes) del club náutico")
public class EspacioController {

    @Autowired 
    private EspacioService espacioService;

    @GetMapping
    public ResponseEntity<CollectionModel<EspacioDTO>> listar() {

        List<EspacioDTO> lista = espacioService.listar();
        CollectionModel<EspacioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(EspacioController.class).withSelfRel());
        recurso.add(linkTo(EspacioController.class)
                .slash("disponibles").withRel("disponibles"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<EspacioDTO>> buscarPorId(
            @PathVariable Integer id) {

        EspacioDTO dto = espacioService.buscarPorId(id);
        EntityModel<EspacioDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(EspacioController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(EspacioController.class)
                .withRel("espacios"));
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/disponibles")
    public ResponseEntity<CollectionModel<EspacioDTO>> buscarDisponibles() {

        List<EspacioDTO> lista = espacioService.buscarDisponibles();
        CollectionModel<EspacioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(EspacioController.class)
                .slash("disponibles").withSelfRel());
        recurso.add(linkTo(EspacioController.class)
                .withRel("espacios"));
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/tipo/{id}")
    public ResponseEntity<CollectionModel<EspacioDTO>> buscarPorTipo(
            @PathVariable Integer id) {

        List<EspacioDTO> lista = espacioService.buscarEspaciosPorTipo(id);
        CollectionModel<EspacioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(EspacioController.class)
                .slash("tipo").slash(id).withSelfRel());
        recurso.add(linkTo(EspacioController.class)
                .withRel("espacios"));
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<EspacioDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody EspacioDTO dto) {

        EspacioDTO actualizado = espacioService.actualizar(id, dto);
        EntityModel<EspacioDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(EspacioController.class)
                .slash(id).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }
}

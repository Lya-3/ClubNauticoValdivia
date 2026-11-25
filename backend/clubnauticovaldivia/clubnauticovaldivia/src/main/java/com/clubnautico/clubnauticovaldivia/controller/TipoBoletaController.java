package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import com.clubnautico.clubnauticovaldivia.DTO.TipoboletaDTO;
import com.clubnautico.clubnauticovaldivia.service.TipoBoletaService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.RequestBody;

@RestController 
@RequestMapping ("api/v1/tiposdeboleta")
@Tag(name = "Tipos de boleta", description = "Gestión de tipos de boleta del club náutico")
public class TipoBoletaController {

    @Autowired 
    private TipoBoletaService tipoBoletaService;

    @GetMapping
    public ResponseEntity<CollectionModel<TipoboletaDTO>> listar() {

        List<TipoboletaDTO> lista = tipoBoletaService.listar();
        CollectionModel<TipoboletaDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(TipoBoletaController.class).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<TipoboletaDTO>> buscarPorId(
            @PathVariable Integer id) {

        TipoboletaDTO dto = tipoBoletaService.buscarPorId(id);
        EntityModel<TipoboletaDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(TipoBoletaController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(TipoBoletaController.class)
                .withRel("tipos-boleta"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<TipoboletaDTO>> guardar(
            @RequestBody TipoboletaDTO dto) {

        TipoboletaDTO nuevo = tipoBoletaService.guardar(dto);
        EntityModel<TipoboletaDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(TipoBoletaController.class)
                .slash(nuevo.getId()).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<TipoboletaDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody TipoboletaDTO dto) {

        TipoboletaDTO actualizado = tipoBoletaService.actualizar(id, dto);
        EntityModel<TipoboletaDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(TipoBoletaController.class)
                .slash(id).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        tipoBoletaService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

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

import com.clubnautico.clubnauticovaldivia.DTO.TipoEspacioDTO;
import com.clubnautico.clubnauticovaldivia.service.TipoEspacioService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.RequestBody;

@RestController 
@RequestMapping ("api/v1/tipoespacios")
@Tag(name = "Tipos de espacio", description = "Gestión de tipos de espacio del club náutico")
public class TipoEspacioController {

    @Autowired 
    private TipoEspacioService tipoEspacioService;

    @GetMapping
    public ResponseEntity<CollectionModel<TipoEspacioDTO>> listar() {

        List<TipoEspacioDTO> lista = tipoEspacioService.listar();
        CollectionModel<TipoEspacioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(TipoEspacioController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<TipoEspacioDTO>> buscarPorId(
            @PathVariable Integer id) {

        TipoEspacioDTO dto = tipoEspacioService.buscarPorId(id);
        EntityModel<TipoEspacioDTO> recurso = EntityModel.of(dto);

        recurso.add(linkTo(TipoEspacioController.class)
                .slash(id).withSelfRel());

        recurso.add(linkTo(TipoEspacioController.class)
                .withRel("tipos-espacio"));

        recurso.add(linkTo(EspacioController.class)
                .slash("tipo").slash(id).withRel("espacios"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<TipoEspacioDTO>> guardar(
            @RequestBody TipoEspacioDTO dto) {

        TipoEspacioDTO nuevo = tipoEspacioService.guardar(dto);
        EntityModel<TipoEspacioDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(TipoEspacioController.class)
                .slash(nuevo.getId()).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<TipoEspacioDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody TipoEspacioDTO dto) {

        TipoEspacioDTO actualizado = tipoEspacioService.actualizar(id, dto);
        EntityModel<TipoEspacioDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(TipoEspacioController.class)
                .slash(id).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        tipoEspacioService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

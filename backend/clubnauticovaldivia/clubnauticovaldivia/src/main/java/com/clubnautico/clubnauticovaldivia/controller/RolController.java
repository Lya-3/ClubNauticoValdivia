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

import com.clubnautico.clubnauticovaldivia.DTO.RolDTO;
import com.clubnautico.clubnauticovaldivia.service.RolService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController 
@RequestMapping ("api/v1/roles")
public class RolController {

    @Autowired 
    private RolService rolService;

    @GetMapping
    public ResponseEntity<CollectionModel<RolDTO>> listar() {

        List<RolDTO> lista = rolService.listar();
        CollectionModel<RolDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(RolController.class).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<RolDTO>> buscarPorId(
            @PathVariable Integer id) {

        RolDTO dto = rolService.buscarPorId(id);
        EntityModel<RolDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(RolController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(RolController.class)
                .withRel("roles"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<RolDTO>> guardar(
            @RequestBody RolDTO dto) {

        RolDTO nuevo = rolService.guardar(dto);
        EntityModel<RolDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(RolController.class)
                .slash(nuevo.getId()).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<RolDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody RolDTO dto) {

        RolDTO actualizado = rolService.actualizar(id, dto);
        EntityModel<RolDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(RolController.class)
                .slash(id).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        rolService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

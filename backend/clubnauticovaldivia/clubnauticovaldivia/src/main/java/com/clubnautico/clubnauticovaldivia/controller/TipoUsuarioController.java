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

import com.clubnautico.clubnauticovaldivia.DTO.TipoUsuarioDTO;
import com.clubnautico.clubnauticovaldivia.service.TipoUsuarioService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController 
@RequestMapping ("api/v1/tiposdeusuario")
public class TipoUsuarioController {

    @Autowired 
    private TipoUsuarioService tipoUsuarioService;

    @GetMapping
    public ResponseEntity<CollectionModel<TipoUsuarioDTO>> listar() {

        List<TipoUsuarioDTO> lista = tipoUsuarioService.listar();
        CollectionModel<TipoUsuarioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(TipoUsuarioController.class).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<TipoUsuarioDTO>> buscarPorId(
            @PathVariable Integer id) {

        TipoUsuarioDTO dto = tipoUsuarioService.buscarPorId(id);
        EntityModel<TipoUsuarioDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(TipoUsuarioController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(TipoUsuarioController.class)
                .withRel("tipos-usuario"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<TipoUsuarioDTO>> guardar(
            @RequestBody TipoUsuarioDTO dto) {

        TipoUsuarioDTO nuevo = tipoUsuarioService.guardar(dto);
        EntityModel<TipoUsuarioDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(TipoUsuarioController.class)
                .slash(nuevo.getId()).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<TipoUsuarioDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody TipoUsuarioDTO dto) {

        TipoUsuarioDTO actualizado = tipoUsuarioService.actualizar(id, dto);
        EntityModel<TipoUsuarioDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(TipoUsuarioController.class)
                .slash(id).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        tipoUsuarioService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

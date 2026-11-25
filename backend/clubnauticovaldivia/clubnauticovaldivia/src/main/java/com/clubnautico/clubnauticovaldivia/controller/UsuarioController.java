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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import com.clubnautico.clubnauticovaldivia.DTO.UsuarioDTO;
import com.clubnautico.clubnauticovaldivia.service.UsuarioService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController 
@RequestMapping ("api/v1/usuarios")
public class UsuarioController {

    @Autowired 
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<CollectionModel<UsuarioDTO>> listar() {

        List<UsuarioDTO> lista = usuarioService.listar();
        CollectionModel<UsuarioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(UsuarioController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{rut}")
    public ResponseEntity<EntityModel<UsuarioDTO>> buscarPorRut(
            @PathVariable String rut) {

        UsuarioDTO dto = usuarioService.buscarPorRut(rut);
        EntityModel<UsuarioDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(UsuarioController.class)
                .slash(rut).withSelfRel());
        recurso.add(linkTo(UsuarioController.class)
                .withRel("usuarios"));
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/buscar")
    public ResponseEntity<CollectionModel<UsuarioDTO>> buscarPorNombre(
            @RequestParam String nombre) {

        List<UsuarioDTO> lista = usuarioService.buscarPorNombre(nombre);
        CollectionModel<UsuarioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(UsuarioController.class)
                .withRel("usuarios"));
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PutMapping("/{rut}")
    public ResponseEntity<EntityModel<UsuarioDTO>> actualizar(
            @PathVariable String rut,
            @RequestBody UsuarioDTO dto) {

        UsuarioDTO actualizado = usuarioService.actualizar(rut, dto);
        EntityModel<UsuarioDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(UsuarioController.class)
                .slash(rut).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }
}

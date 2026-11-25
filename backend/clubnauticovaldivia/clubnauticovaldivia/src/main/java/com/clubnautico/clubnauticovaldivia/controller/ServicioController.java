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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

import com.clubnautico.clubnauticovaldivia.DTO.ServicioDTO;
import com.clubnautico.clubnauticovaldivia.service.ServicioService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController 
@RequestMapping ("api/v1/servicios")
public class ServicioController {

    @Autowired 
    private ServicioService servicioService;

    @GetMapping
    public ResponseEntity<CollectionModel<ServicioDTO>> listar() {

        List<ServicioDTO> lista = servicioService.listar();
        CollectionModel<ServicioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(ServicioController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<ServicioDTO>> buscarPorId(
            @PathVariable Integer id) {

        ServicioDTO dto = servicioService.buscarPorId(id);
        EntityModel<ServicioDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(ServicioController.class)
                .slash(id).withSelfRel());
        recurso.add(linkTo(ServicioController.class)
                .withRel("servicios"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/precio")
    public ResponseEntity<CollectionModel<ServicioDTO>> buscarPorPrecioMaximo(
            @RequestParam Integer precio) {

        List<ServicioDTO> lista = servicioService.buscarPorPrecioMaximo(precio);
        CollectionModel<ServicioDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(ServicioController.class)
                .withRel("servicios"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<ServicioDTO>> guardar(
            @RequestBody ServicioDTO dto) {

        ServicioDTO nuevo = servicioService.guardar(dto);
        EntityModel<ServicioDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(ServicioController.class)
                .slash(nuevo.getId()).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<ServicioDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody ServicioDTO dto) {

        ServicioDTO actualizado = servicioService.actualizar(id, dto);
        EntityModel<ServicioDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(ServicioController.class)
                .slash(id).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        servicioService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
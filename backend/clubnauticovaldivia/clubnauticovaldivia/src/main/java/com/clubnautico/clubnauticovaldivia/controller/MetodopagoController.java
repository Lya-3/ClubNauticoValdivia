package com.clubnautico.clubnauticovaldivia.controller;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.util.List;

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

import com.clubnautico.clubnauticovaldivia.DTO.MetodopagoDTO;
import com.clubnautico.clubnauticovaldivia.service.MetodopagoService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.RequestBody;

@RestController 
@RequestMapping ("api/v1/metodos_pago")
@Tag(name = "Métodos de pago", description = "Gestión de métodos de pago del club náutico")
public class MetodopagoController {

    @Autowired 
    private MetodopagoService metodopagoService;

    @GetMapping
    public ResponseEntity<CollectionModel<MetodopagoDTO>> listar() {

        List<MetodopagoDTO> lista = metodopagoService.listar();
        CollectionModel<MetodopagoDTO> recurso = CollectionModel.of(lista);
        recurso.add(linkTo(MetodopagoController.class).withSelfRel());
        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<MetodopagoDTO>> buscarPorId(
            @PathVariable Integer id) {

        MetodopagoDTO dto = metodopagoService.buscarPorId(id);
        EntityModel<MetodopagoDTO> recurso = EntityModel.of(dto);
        recurso.add(linkTo(MetodopagoController.class)
                .slash(id).withSelfRel());

        recurso.add(linkTo(MetodopagoController.class)
                .withRel("metodos-pago"));

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EntityModel<MetodopagoDTO>> guardar(
            @RequestBody MetodopagoDTO dto) {

        MetodopagoDTO nuevo = metodopagoService.guardar(dto);
        EntityModel<MetodopagoDTO> recurso = EntityModel.of(nuevo);
        recurso.add(linkTo(MetodopagoController.class)
                .slash(nuevo.getId()).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<MetodopagoDTO>> actualizar(
            @PathVariable Integer id,
            @RequestBody MetodopagoDTO dto) {

        MetodopagoDTO actualizado = metodopagoService.actualizar(id, dto);
        EntityModel<MetodopagoDTO> recurso = EntityModel.of(actualizado);
        recurso.add(linkTo(MetodopagoController.class)
                .slash(id).withSelfRel());

        return new ResponseEntity<>(recurso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        metodopagoService.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
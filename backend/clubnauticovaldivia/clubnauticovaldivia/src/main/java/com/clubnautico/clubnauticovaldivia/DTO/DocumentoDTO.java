package com.clubnautico.clubnauticovaldivia.DTO;

import java.time.LocalDate;

import lombok.Data;
@Data 
public class DocumentoDTO {

    private Integer id;
    private String nombre;
    private String tipoArchivo;
    private LocalDate fechaSubida;

    private String usuarioRut;
}
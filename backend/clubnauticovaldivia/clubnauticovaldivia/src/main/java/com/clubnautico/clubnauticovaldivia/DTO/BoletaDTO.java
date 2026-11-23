package com.clubnautico.clubnauticovaldivia.DTO;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data 
public class BoletaDTO {

    private Integer id;
    private LocalDate fecha;
    private Integer total;

    private String usuarioRut;
    private Integer metodoPagoId;
    private Integer tipoBoletaId;

    private List<DetalleDTO> detalles;
}

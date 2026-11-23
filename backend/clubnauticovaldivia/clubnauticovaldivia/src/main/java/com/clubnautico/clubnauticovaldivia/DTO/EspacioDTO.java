package com.clubnautico.clubnauticovaldivia.DTO;

import lombok.Data;

@Data 
public class EspacioDTO {

    private Integer id;
    private String nombre;
    private Integer precioDiario;
    private Integer precioSemanal;
    private Integer precioMensual;
    private Boolean disponible;

    private Integer tipoEspacioId;
    private String usuarioRut;
}

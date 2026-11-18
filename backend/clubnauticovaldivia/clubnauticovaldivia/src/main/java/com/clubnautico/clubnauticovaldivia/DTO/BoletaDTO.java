package com.clubnautico.clubnauticovaldivia.DTO;

import java.time.LocalDate;
import lombok.Data;

@Data 
public class BoletaDTO {

    private Integer id;
    private LocalDate fecha;
    private Integer total;
}

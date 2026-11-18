package com.clubnautico.clubnauticovaldivia.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@Entity 
@Table (name = "espacios")
public class Espacio {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "El nombre del servicio no puede estar vacío")
    @Size(min = 3, max = 80, message = "El nombre debe contener entre 3 y 80 caracteres")
    @Column(unique = true, length = 80, nullable = false)
    private String nombre;

    @Min(value = 0, message = "El precio diario no puede ser negativo")
    @Column(nullable = false)
    private Integer precioDiario;

    @Min(value = 0, message = "El precio semanal no puede ser negativo")
    @Column(nullable = false)
    private Integer precioSemanal;

    @Min(value = 0, message = "El precio mensual no puede ser negativo")
    @Column(nullable = false)
    private Integer precioMensual;

    @NotNull(message = "La disponibilidad no puede ser nula")
    @Column(nullable = false)
    private Boolean disponible;
}

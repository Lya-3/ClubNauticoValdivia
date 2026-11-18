package com.clubnautico.clubnauticovaldivia.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@Entity 
@Table (name = "muelles")
public class Muelle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "El número del muelle no puede ser nulo")
    @Positive(message = "El número del muelle debe ser positivo")
    @Column(unique = true, nullable = false)
    private Integer numero;

    @NotNull(message = "El precio diario no puede ser nulo")
    @Min(value = 0, message = "El precio diario no puede ser negativo")
    @Column(nullable = false)
    private Integer precioDiario;

    @NotNull(message = "El precio semanal no puede ser nulo")
    @Min(value = 0, message = "El precio semanal no puede ser negativo")
    @Column(nullable = false)
    private Integer precioSemanal;

    @NotNull(message = "El precio mensual no puede ser nulo")
    @Min(value = 0, message = "El precio mensual no puede ser negativo")
    @Column(nullable = false)
    private Integer precioMensual;

    @NotNull(message = "La disponibilidad no puede ser nula")
    @Column(nullable = false)
    private Boolean disponible;
}

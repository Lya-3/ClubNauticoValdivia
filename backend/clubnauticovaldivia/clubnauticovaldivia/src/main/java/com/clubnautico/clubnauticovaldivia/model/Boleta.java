package com.clubnautico.clubnauticovaldivia.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@Entity 
@Table (name = "boletas")
public class Boleta {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull (message = "La fecha no puede ser nula")
    @Column(nullable = false)
    private LocalDate fecha;

    @NotNull(message = "El total no puede ser nulo")
    @Min(value = 0, message = "El total no puede ser negativo")
    @Column(nullable = false)
    private Integer total;

    @NotNull(message = "El usuario no puede ser nulo")
    @ManyToOne
    @JoinColumn(name = "usuario_rut", nullable = false)
    private Usuario usuario;

    @NotNull(message = "El tipo de boleta no puede ser nulo")
    @ManyToOne
    @JoinColumn(name = "tipo_boleta_id", nullable = false)
    private TipoBoleta tipoBoleta;

    @NotNull(message = "El método de pago no puede ser nulo")
    @ManyToOne
    @JoinColumn(name = "metodo_pago_id", nullable = false)
    private Metodopago metodoPago;
}

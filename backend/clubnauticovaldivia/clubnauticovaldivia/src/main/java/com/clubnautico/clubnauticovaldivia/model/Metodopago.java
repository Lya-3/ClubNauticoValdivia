package com.clubnautico.clubnauticovaldivia.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@Entity 
@Table (name = "metodos_pago")
public class Metodopago {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank (message = "El método de pago no puede estar vacío")
    @Size (min = 3, max = 50, message = "El método debe contener entre 3 y 50 caracteres")
    @Column (unique = true, length = 50, nullable = false)
    private String nombre;

    //Relaciones
    
    @JsonIgnore
    @ToString.Exclude
    @OneToMany(mappedBy = "metodoPago")
    private List<Boleta> boletas;
}

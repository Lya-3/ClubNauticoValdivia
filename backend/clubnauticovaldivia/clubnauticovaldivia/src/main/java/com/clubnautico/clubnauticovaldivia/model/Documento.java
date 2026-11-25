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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor
@Entity 
@Table (name = "documentos")
public class Documento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(max = 255)
    @Column(length = 255, nullable = false)
    private String nombre;

    @NotBlank
    @Column(nullable = false)
    private String tipoArchivo;

    @NotNull
    @Column(nullable = false)
    private LocalDate fechaSubida;

    //Muchos documentos puede tener un usuario
    @NotNull
    @ManyToOne
    @JoinColumn(name = "usuario_rut", nullable = false)
    @ToString.Exclude
    private Usuario usuario;
}
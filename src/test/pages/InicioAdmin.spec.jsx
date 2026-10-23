import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InicioAdmin from '../../pages/InicioAdmin';

describe('Página InicioAdmin', () => {

    function mostrarPagina() {
        render(<MemoryRouter><InicioAdmin /></MemoryRouter>);
    }

    it('renderiza el título de administrador', () => {
        mostrarPagina();
        const titulo = screen.getByText('INICIAR SESIÓN COMO ADMINISTRADOR');
        expect(titulo).toBeTruthy();
    });

    it('renderiza el campo de correo electrónico', () => {
        mostrarPagina();
        const correo = screen.getByText('Correo Electrónico:');
        expect(correo).toBeTruthy();
    });

    it('renderiza el botón Cambiar a Cliente', () => {
        mostrarPagina();
        const boton = screen.getByText('Cambiar a Cliente');
        expect(boton).toBeTruthy();
    });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Registro from '../../pages/Registro';

describe('Página Registro', () => {

    function mostrarPagina() {
        render(<MemoryRouter><Registro /></MemoryRouter>);
    }

    it('renderiza el título de registro', () => {
        mostrarPagina();
        const titulo = screen.getByText('REGISTRO DE USUARIO');
        expect(titulo).toBeTruthy();
    });

    it('renderiza el campo de nombre completo', () => {
        mostrarPagina();
        const nombre = screen.getByText('Nombre Completo:');
        expect(nombre).toBeTruthy();
    });

    it('renderiza el campo de correo electrónico', () => {
        mostrarPagina();
        const correo = screen.getByText('Correo Electrónico:');
        expect(correo).toBeTruthy();
    });

});
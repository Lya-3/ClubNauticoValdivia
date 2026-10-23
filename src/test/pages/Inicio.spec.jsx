import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inicio from '../../pages/Inicio';

describe('Página Inicio', () => {

    function mostrarPagina() {
        render(<MemoryRouter><Inicio /></MemoryRouter>);
    }

    it('muestra el título', () => {
        mostrarPagina();
        const titulo = screen.getByText('INICIAR SESIÓN');
        expect(titulo).toBeTruthy();
    });

    it('muestra el correo electrónico', () => {
        mostrarPagina();
        const correo = screen.getByText('Correo Electrónico:');
        expect(correo).toBeTruthy();
    });

    it('muestra la contraseña', () => {
        mostrarPagina();
        const contraseña = screen.getByText('Contraseña:');
        expect(contraseña).toBeTruthy();
    });

});
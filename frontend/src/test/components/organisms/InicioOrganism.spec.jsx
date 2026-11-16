import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InicioOrganism from '../../../components/organisms/InicioOrganism';

describe('InicioOrganism Component', () => {

    function mostrarPagina() {
        render(<MemoryRouter><InicioOrganism /></MemoryRouter>);
    }

    it('renderiza el organismo correctamente', () => {
        mostrarPagina();

        const titulo = screen.getByText('INICIAR SESIÓN');
        expect(titulo).toBeTruthy();
    });

    it('muestra los campos del formulario', () => {
        mostrarPagina();

        expect(screen.getByText('Correo Electrónico:')).toBeTruthy();
        expect(screen.getByText('Contraseña:')).toBeTruthy();
    });

    it('permite ingresar un correo electrónico', () => {
        mostrarPagina();

        const correo = screen.getByRole('textbox');

        fireEvent.change(correo, {
        target: { value: 'ahri@leagueoflegends.com' }
        });

        expect(correo.value).toBe('ahri@leagueoflegends.com');
    });

});
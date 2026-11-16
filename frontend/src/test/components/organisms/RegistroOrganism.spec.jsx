import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistroOrganism from '../../../components/organisms/RegistroOrganism';

describe('RegistroOrganism Component', () => {

    function mostrarPagina() {
        render(<MemoryRouter><RegistroOrganism /></MemoryRouter>);
    }

    it('renderiza el organismo correctamente', () => {
        mostrarPagina();

        const titulo = screen.getByText('REGISTRO DE USUARIO');
        expect(titulo).toBeTruthy();
    });

    it('muestra los campos del formulario', () => {
        mostrarPagina();

        expect(screen.getByText('Nombre Completo:')).toBeTruthy();
        expect(screen.getByText('Correo Electrónico:')).toBeTruthy();
        expect(screen.getByText('Modelo de Velero:')).toBeTruthy();
    });

    it('permite ingresar un nombre', () => {
        mostrarPagina();

        const nombre = screen.getAllByRole('textbox')[0];

        fireEvent.change(nombre, {
        target: { value: 'Jinx' }
        });

        expect(nombre.value).toBe('Jinx');
    });

});
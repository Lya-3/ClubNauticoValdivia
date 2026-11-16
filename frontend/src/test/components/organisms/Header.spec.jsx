import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/organisms/Header';

describe('Header Component', () => {

    function mostrarPagina() {
        render(<Header />);
    }

    it('renderiza el header correctamente', () => {
        mostrarPagina();

        const titulo = screen.getByText('Club Nautico Valdivia');
        expect(titulo).toBeTruthy();
    });

    it('muestra los enlaces de navegación', () => {
        mostrarPagina();

        expect(screen.getByText('Inicio')).toBeTruthy();
        expect(screen.getByText('Muelle')).toBeTruthy();
        expect(screen.getByText('Almacenes')).toBeTruthy();
        expect(screen.getByText('Servicios')).toBeTruthy();
        expect(screen.getByText('Socios')).toBeTruthy();
    });

    it('muestra el botón de iniciar sesión', () => {
        mostrarPagina();

        const boton = screen.getByText('Iniciar Sesión');
        expect(boton).toBeTruthy();
    });

});
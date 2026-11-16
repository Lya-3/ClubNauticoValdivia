import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/organisms/Footer';

describe('Footer Component', () => {

    function mostrarPagina() {
        render(<Footer />);
    }

    it('renderiza el footer correctamente', () => {
        mostrarPagina();

        const titulo = screen.getByText('Contacto');
        expect(titulo).toBeTruthy();
    });

    it('muestra los datos de contacto', () => {
        mostrarPagina();

        const telefono = screen.getByText('+56 9 4312 8632');
        const correo = screen.getByText('contacto@cnvaldivia.com');

        expect(telefono).toBeTruthy();
        expect(correo).toBeTruthy();
    });

    it('muestra la ubicación correctamente', () => {
        mostrarPagina();

        const ubicacion = screen.getByText('San Sebastian 153, Valdivia.');
        expect(ubicacion).toBeTruthy();
    });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InicioAdmin from '../../pages/InicioAdmin';

describe('Página InicioAdmin', () => {

    it('renderiza correctamente la página', () => {
        const { container } = render(
            <MemoryRouter>
                <InicioAdmin />
            </MemoryRouter>
    );

    expect(container.firstChild).toBeTruthy();
  });

    it('renderiza el enlace de administrador', () => {
        render(
            <MemoryRouter>
                <Inicio />
            </MemoryRouter>
        );

        const enlace = screen.getByText(/iniciar como admin/i);

        expect(enlace).toBeTruthy();
    });

});
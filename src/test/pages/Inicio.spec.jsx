import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inicio from '../../pages/Inicio';

describe('Página Inicio', () => {

  it('renderiza la página de inicio de sesión', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    const titulo = screen.getByText(/iniciar sesión/i);

    expect(titulo).toBeTruthy();
  });

  it('renderiza el campo de correo electrónico', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    const correo = screen.getByText(/correo electrónico/i);

    expect(correo).toBeTruthy();
  });

  it('renderiza el campo de contraseña', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    const contraseña = screen.getByText(/contraseña/i);

    expect(contraseña).toBeTruthy();
  });

});
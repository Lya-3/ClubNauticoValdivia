import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Registro from '../../pages/Registro';

describe('Página Registro', () => {

  it('renderiza el título de registro', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

    const titulo = screen.getByText(/registro de usuario/i);

    expect(titulo).toBeTruthy();
  });

  it('renderiza el campo de nombre completo', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

    const nombre = screen.getByText(/nombre completo/i);

    expect(nombre).toBeTruthy();
  });

  it('renderiza el campo de correo electrónico', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

    const correo = screen.getByText(/correo electrónico/i);

    expect(correo).toBeTruthy();
  });

  it('renderiza el campo de modelo de velero', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

    const modelo = screen.getByText(/modelo de velero/i);

    expect(modelo).toBeTruthy();
  });

});
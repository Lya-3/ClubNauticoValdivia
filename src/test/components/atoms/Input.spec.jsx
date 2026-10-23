import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../../components/atoms/Input';

describe('Input Component', () => {

    it('renderiza el input correctamente', () => {
        const { getByPlaceholderText } = render(<Input placeholder="Correo" />);
        expect(getByPlaceholderText('Correo')).toBeTruthy();
    });

    it('aplica los props correctamente', () => {
        render(<Input type="password" placeholder="Contraseña" />);
        const input = screen.getByPlaceholderText('Contraseña');
        expect(input.type).toBe('password');
    });

    it('aplica la clase CSS correctamente', () => {
        render(<Input placeholder="Nombre" />);
        const input = screen.getByPlaceholderText('Nombre');
        expect(input.classList.contains('cuadroTexto')).toBe(true);
    });

});
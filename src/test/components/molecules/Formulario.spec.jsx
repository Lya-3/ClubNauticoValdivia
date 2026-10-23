import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from '../../../components/molecules/Formulario';

describe('Formulario Component', () => {

    it('renderiza el formulario correctamente', () => {
        render(<Formulario label="Viva el genshin" />);
        expect(screen.getByText('Viva el genshin')).toBeTruthy();
    });

    it('aplica los props correctamente', () => {
        render(<Formulario label="Contraseña" type="password" value="Genshin123" onChange={() => {}} />);
        const input = screen.getByDisplayValue('Genshin123');
        expect(input.type).toBe('password');
    });

    it('ejecuta la función al cambiar el input', () => {
        let contador = 0;
        render(<Formulario label="Nombre" onChange={() => contador++} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Viva el genshin' } });
        expect(contador).toBe(1);
    });

});
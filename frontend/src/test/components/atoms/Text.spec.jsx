import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {

    it('renderiza el texto correctamente', () => {
        const { getByText } = render(<Text>Viva el genshin</Text>);
        expect(getByText('Viva el genshin')).toBeTruthy();
    });

    it('aplica los props correctamente', () => {
        render(<Text variant="h1">Título</Text>);
        const texto = screen.getByText('Título');
        expect(texto.tagName).toBe('H1');
    });

    it('aplica la clase CSS correctamente', () => {
        render(<Text className="titulo">Viva el genshin</Text>);
        const texto = screen.getByText('Viva el genshin');
        expect(texto.classList.contains('titulo')).toBe(true);
    });

});
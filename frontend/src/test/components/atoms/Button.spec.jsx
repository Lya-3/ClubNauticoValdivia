// src/test/Button.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
  it('renderiza el botón correctamente', () => {
    const { getByText } = render(<Button>Haz click</Button>);
    expect(getByText('Haz click')).toBeTruthy(); 
  });


  it('aplica los props correctamente', () => {
    render(<Button variant="primary">Haz click</Button>);
    const button = screen.getByText('Haz click');
    expect(button).toHaveClass('btn-primary');
  });
  it('se ejecuta al apretar', () => {
      let contador = 0;
      render(<Button onClick={() => contador++}>Viva el genshin</Button>);
      fireEvent.click(screen.getByText('Viva el genshin'));
      expect(contador).toBe(1);
    });
});

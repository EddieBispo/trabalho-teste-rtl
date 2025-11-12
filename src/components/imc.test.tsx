import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import IMC from './imc';

describe('IMC component', () => {
  it('renders inputs and button', () => {
    render(<IMC />);
    // Acessando o primeiro elemento [0] do array retornado:
    expect(screen.getByPlaceholderText('Ex: 70.5')).toBeInTheDocument(); 
    expect(screen.getByPlaceholderText('Ex: 1.75')).toBeInTheDocument(); // Assumindo que este é o primeiro (e único)
    expect(screen.getByRole('button', { name: 'Calcular IMC' })).toBeInTheDocument();
  });




  it('shows "Abaixo do peso" for IMC < 18.5 and formats to two decimals', async () => {
    const user = userEvent.setup();

    

    expect(screen.getByText('Seu IMC é 4.99 - Abaixo do peso'));

  });

  it('classifies Peso normal, Sobrepeso and Obesidade categories correctly', async () => {});

  it('shows Obesidade grau III for very high IMC', async () => {});

  it('shows error when peso is non-positive', async () => {});

  it('shows error when altura is non-positive', async () => {});
  
});

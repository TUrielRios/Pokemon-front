import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../../../Views/Detail/Detail'; // Asegúrate de importar el componente Detail correctamente

describe('Detail Component', () => {
    it('renders loading text when loading is true', () => {
        const loading = true;
        render(<Detail loading={loading} />);

        const loadingText = screen.getByText('Loading...');
        expect(loadingText).toBeInTheDocument();
    });

    it('renders detail information when loading is false', () => {
    const loading = false;
    const detailPokemons = [
        {
            name: 'Pikachu',
            image: 'pikachu.jpg',
            types: 'Electric',
            hp: 80,
            attack: 70,
            defense: 60,
            speed: 90,
            height: 40,
            weight: 6,
        },
    ];

    render(<Detail loading={loading} detailPokemons={detailPokemons} />);

    // You can add more specific assertions based on your component's structure
    const pokemonName = screen.getByText('Pikachu');
    const typeText = screen.getByText('TYPES: Electric');
    // ... Add more assertions as needed
    });

    it('renders "Pokemon Not Found" message when detailPokemons is empty', () => {
        const loading = false;
        const detailPokemons = [];
        render(<Detail loading={loading} detailPokemons={detailPokemons} />);

        const notFoundMessage = screen.getByText('Pokemon Not Found');
        expect(notFoundMessage).toBeInTheDocument();
    });
});

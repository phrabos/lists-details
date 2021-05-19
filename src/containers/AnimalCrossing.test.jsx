import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from '../services/mockCharacterData.json';
import AnimalCrossingContainer from './AnimalCrossingContainer';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers?page=1&perPage=50', (req, res, ctx) => {
    return res(ctx.json(mockCharacterData));
  })
);

describe('AnimalCross container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of characters on the page', async () => {
    render(
      <MemoryRouter>
        <AnimalCrossingContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});

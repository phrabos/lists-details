import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DetailsContainer from './DetailsContainer';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json({
      id: '5f5fb4bbbfd05c2aed82e460',
      name: 'Admiral',
      image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
      quote: 'Only quitters give up.',
      personality: 'cranky',
      skill: 'Writing about pickles',
      species: 'bird',
    }));
  })
);

describe('DetailsContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of characters on the page', async () => {
    render(<DetailsContainer match={{
      params: {
        id: '5f5fb4bbbfd05c2aed82e460'
      }
    }  
    }/>);

    screen.getByText('Loading...');

    const characterDiv = await screen.findByTestId('character-div');
    expect(characterDiv).toMatchSnapshot();
  });
});

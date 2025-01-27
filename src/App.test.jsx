import { renderWithProviders, screen } from '@utils/test-utils';

import App from './App';

describe('App', () => {
    it('renders headline', () => {
        renderWithProviders(<App title="React" />);

        screen.debug();

        // check if App components renders headline
    });
});
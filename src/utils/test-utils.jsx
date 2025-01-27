/* eslint-disable import/export */
import setupStore from '@redux/index';
import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { afterEach } from 'vitest'

afterEach(() => {
	cleanup()
})

function renderWithProviders(
	ui,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>
			<MemoryRouter>{children}</MemoryRouter>
		</Provider>
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export {
	renderWithProviders
}
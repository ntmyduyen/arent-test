# Arent-Test

A React-based web application designed for modern and efficient development, leveraging Vite, Redux Toolkit, and Chart.js for state management and data visualization.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **React**: Built with React 18 for a robust and modular application.
- **Vite**: High-performance build tool for fast development and optimized builds.
- **Redux Toolkit**: Simplified state management.
- **Chart.js**: Interactive data visualization.
- **Styled-components**: CSS-in-JS for custom styles.
- **React Router DOM**: Intuitive client-side routing.
- **Cypress & Vitest**: Comprehensive testing setup for unit and end-to-end testing.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd arent-test
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

Run the development server:

```bash
npm run dev
```

Access the app at [http://localhost:5173](http://localhost:5173).

### Production Build

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Create a production build.
- `npm run preview`: Preview the production build.
- `npm run test`: Run unit tests with Vitest.
- `npm run test:e2e`: Run end-to-end tests with Cypress.
- `npm run test:e2e-ui`: Open the Cypress testing UI.

## Testing

- **Unit Tests**: Powered by Vitest.
- **End-to-End Testing**: Handled by Cypress for full user flow validation.

To run tests:

```bash
npm test
```

To open the Cypress UI:

```bash
npm run test:e2e-ui
```

## Folder Structure

```
project-root/
├── public/               # Static files
├── src/                  # Source code
│   ├── assets/           # Images, fonts, and other static assets
│   ├── components/       # Reusable components
│   ├── constants/        # Application constants
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── redux/            # Redux Toolkit slices and store
│   ├── tests/            # Unit and integration tests
│   ├── utils/            # Utility functions
│   └── App.jsx           # Root component
├── cypress/              # End-to-end testing
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Dependencies

Key dependencies:

- **React**: `^18.2.0`
- **Redux Toolkit**: `^1.9.3`
- **Chart.js**: `^4.2.1`
- **React Chart.js**: `^5.2.0`
- **Styled-components**: `^5.3.9`
- **React Router DOM**: `^6.8.2`

Development dependencies:

- **Vite**: `^4.1.0`
- **Vitest**: `^0.29.2`
- **Cypress**: `^12.12.0`
- **Testing Library**: Suite for React and Cypress.

## License

This project is licensed under the [MIT License](LICENSE).

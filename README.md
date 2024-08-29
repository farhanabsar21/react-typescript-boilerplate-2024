# React Typescript Boilerplate

This project is a React application built with TypeScript, ESLint, Prettier, Jest, and Husky. It includes a setup for linting, formatting, and testing, with automated Git hooks to enforce code quality.

## Project Structure

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that helps with type safety.
- **ESLint**: Linting tool to ensure code quality.
- **Prettier**: Code formatter for consistent code style.
- **Jest**: Testing framework for running unit tests.
- **Husky**: Tool for managing Git hooks to automate tasks like linting and testing.

## Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later) or Yarn

## Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/farhanabsar21/react-typescript-boilerplate-2024.git
   cd react-typescript-boilerplate-2024
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Husky (if not already set up):

   ```bash
   npx husky install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Run tests:

   ```bash
   npm test
   ```

### Additional Scripts:

- Build the app for production
  ```bash
  npm run build
  ```
- Lint the code
  ```bash
  npm run lint
  ```
- Format the code
  ```bash
  npm run format
  ```

### License:

This project is licensed under the MIT License.

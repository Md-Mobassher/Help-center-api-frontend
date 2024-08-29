# Help Center Frontend

This is the frontend for the Help Center application. The frontend is built using React and TypeScript and is styled with Tailwind CSS. It interacts with a backend API to fetch and display help center cards, allowing users to search for specific topics.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo of the project: [Help Center Frontend](https://frontend-seven-sepia.vercel.app)

## Features

- Display help center topics in a card layout.
- Search functionality to filter topics based on the title.
- Responsive design for optimal viewing on all devices.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/help-center-frontend.git
   ```

````

2. Navigate to the project directory:

   ```bash
   cd help-center-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add the following:

   ```env
   REACT_APP_API_URL=https://backend-phi-tawny.vercel.app
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the app on `http://localhost:3000`. You can now view it in your browser.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Vercel**: Platform for frontend hosting.


## API Endpoints

The frontend communicates with the following API endpoints:

- **GET /cards**: Fetches all help center cards.
- **GET /cards/:title**: Fetches a specific card by title.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to open a pull request or create an issue.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License.
````

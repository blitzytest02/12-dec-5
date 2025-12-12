# Express.js Tutorial Server

A simple Node.js server using the Express.js framework. This tutorial demonstrates how to create a basic HTTP server with multiple route handlers that return different responses.

## Features

- **GET endpoint at root path (/)** - Returns "Hello world"
- **GET endpoint at /evening path** - Returns "Good evening"
- **Configurable port** - Uses PORT environment variable or defaults to 3000

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.x or higher (comes with Node.js)

Verify your installation:
```bash
node --version   # Should output v18.x.x or higher
npm --version    # Should output 9.x.x or higher
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```bash
npm install
```

## Running the Server

Start the server using npm:
```bash
npm start
```

Or with a custom port:
```bash
PORT=8080 npm start
```

You should see output like:
```
Express Tutorial Server is running!
Server listening on port 3000
Available endpoints:
  - GET http://localhost:3000/         -> Returns "Hello world"
  - GET http://localhost:3000/evening  -> Returns "Good evening"
Press Ctrl+C to stop the server
```

## API Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Root endpoint | `Hello world` |
| `/evening` | GET | Evening greeting | `Good evening` |

## Testing the Endpoints

Using curl:
```bash
# Test root endpoint
curl http://localhost:3000/

# Test evening endpoint
curl http://localhost:3000/evening
```

Using a web browser:
- Open http://localhost:3000/ to see "Hello world"
- Open http://localhost:3000/evening to see "Good evening"

## Project Structure

```
├── index.js          # Express server with route handlers
├── package.json      # Project manifest with dependencies
├── package-lock.json # Dependency lock file
├── .gitignore        # Version control exclusions
└── README.md         # This file
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |

## License

MIT
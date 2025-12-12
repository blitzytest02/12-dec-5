# Express.js Tutorial Server

A simple Node.js tutorial server using Express.js that demonstrates basic HTTP endpoint creation. This project serves as an educational example for learning how to build web servers with Express.js.

## Description

This project is a minimal Express.js server implementation featuring two GET endpoints:
- A root endpoint that returns "Hello world"
- An evening greeting endpoint that returns "Good evening"

The server is designed for learning purposes and showcases the fundamentals of Express.js routing and response handling.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.x or higher (comes bundled with Node.js)

### Verify Installation

Check your Node.js and npm versions:

```bash
node --version
npm --version
```

## Installation

1. Clone or download this repository to your local machine.

2. Navigate to the project directory:

```bash
cd express-tutorial
```

3. Install the project dependencies:

```bash
npm install
```

This will install Express.js and create the `node_modules` directory and `package-lock.json` file.

## Usage

### Starting the Server

To start the Express.js server, run:

```bash
npm start
```

The server will start and listen on port 3000 by default. You should see a confirmation message:

```
Server is running on http://localhost:3000
```

### Custom Port Configuration

You can specify a custom port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## API Endpoints

The server exposes the following HTTP endpoints:

| Method | Endpoint   | Description                        | Response        |
|--------|------------|------------------------------------|-----------------|
| GET    | `/`        | Root endpoint - Hello world        | `Hello world`   |
| GET    | `/evening` | Evening greeting endpoint          | `Good evening`  |

### Endpoint Details

#### GET /

Returns a simple "Hello world" greeting.

**Request:**
```
GET http://localhost:3000/
```

**Response:**
- Status Code: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Hello world`

#### GET /evening

Returns a "Good evening" greeting.

**Request:**
```
GET http://localhost:3000/evening
```

**Response:**
- Status Code: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Good evening`

## Testing the Endpoints

### Using curl

Test the Hello world endpoint:

```bash
curl http://localhost:3000/
```

Expected output:
```
Hello world
```

Test the Good evening endpoint:

```bash
curl http://localhost:3000/evening
```

Expected output:
```
Good evening
```

### Using a Web Browser

Simply open the following URLs in your web browser:

- [http://localhost:3000/](http://localhost:3000/) - Displays "Hello world"
- [http://localhost:3000/evening](http://localhost:3000/evening) - Displays "Good evening"

## Verification Commands

### Check Server Status

Verify the server is running and responding:

```bash
# Test root endpoint
curl -I http://localhost:3000/

# Test evening endpoint
curl -I http://localhost:3000/evening
```

A successful response will show `HTTP/1.1 200 OK`.

### Check for Security Vulnerabilities

Run an npm security audit:

```bash
npm audit
```

Expected result: `0 vulnerabilities`

### Verify Dependencies

Check installed packages:

```bash
npm list
```

## Project Structure

```
/
├── index.js          # Express server with route handlers
├── package.json      # Project manifest with dependencies
├── package-lock.json # Dependency lock file (auto-generated)
├── .gitignore        # Version control exclusions
└── README.md         # Project documentation (this file)
```

## Technologies Used

- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.x
- **Language**: JavaScript (ES6+)

## License

This project is provided for educational purposes.

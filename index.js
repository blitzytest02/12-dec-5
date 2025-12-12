/**
 * Express.js Tutorial Server
 * 
 * This is a simple Node.js server using the Express.js framework.
 * It demonstrates how to create a basic HTTP server with multiple
 * route handlers that return different responses.
 * 
 * Features:
 * - GET endpoint at root path (/) returning "Hello world"
 * - GET endpoint at /evening path returning "Good evening"
 * - Configurable port via PORT environment variable
 * 
 * @author Tutorial Example
 * @version 1.0.0
 */

// ============================================================================
// IMPORTS
// ============================================================================

/**
 * Import the Express.js framework
 * Express is a minimal and flexible Node.js web application framework
 * that provides a robust set of features for web and mobile applications.
 * 
 * We use CommonJS require() syntax which is the standard for Node.js modules.
 */
const express = require('express');

// ============================================================================
// APPLICATION SETUP
// ============================================================================

/**
 * Create an Express application instance
 * 
 * The express() function is a top-level function exported by the express module.
 * It creates an Express application object which has methods for:
 * - Routing HTTP requests
 * - Configuring middleware
 * - Rendering HTML views
 * - Registering a template engine
 */
const app = express();

/**
 * Configure the server port
 * 
 * We use the PORT environment variable if available, otherwise default to 3000.
 * This allows flexibility when deploying to different environments:
 * - Development: typically uses port 3000
 * - Production: the hosting platform may assign a different port via PORT env var
 * 
 * Example usage:
 * - Default: npm start (uses port 3000)
 * - Custom: PORT=8080 npm start (uses port 8080)
 */
const PORT = process.env.PORT || 3000;

// ============================================================================
// ROUTE HANDLERS
// ============================================================================

/**
 * Root endpoint - GET /
 * 
 * This route handler responds to HTTP GET requests at the root path (/).
 * When a client makes a GET request to http://localhost:3000/, this handler
 * will be executed and return "Hello world" as a plain text response.
 * 
 * @route GET /
 * @returns {string} "Hello world" - Plain text response
 * 
 * Example usage with curl:
 *   curl http://localhost:3000/
 * 
 * Example response:
 *   Hello world
 */
app.get('/', (req, res) => {
    // req (request) - contains information about the HTTP request
    // res (response) - used to send data back to the client
    
    // res.send() automatically sets the Content-Type header based on the
    // type of data being sent. For strings, it sets 'text/html'.
    res.send('Hello world');
});

/**
 * Evening endpoint - GET /evening
 * 
 * This route handler responds to HTTP GET requests at the /evening path.
 * When a client makes a GET request to http://localhost:3000/evening, this
 * handler will be executed and return "Good evening" as a plain text response.
 * 
 * @route GET /evening
 * @returns {string} "Good evening" - Plain text response
 * 
 * Example usage with curl:
 *   curl http://localhost:3000/evening
 * 
 * Example response:
 *   Good evening
 */
app.get('/evening', (req, res) => {
    // This endpoint demonstrates how to create additional routes
    // Each route can have its own unique response
    res.send('Good evening');
});

// ============================================================================
// SERVER STARTUP
// ============================================================================

/**
 * Start the Express server
 * 
 * The app.listen() method binds and listens for connections on the specified
 * host and port. This method is identical to Node's http.Server.listen().
 * 
 * The callback function is executed once the server is ready to accept
 * connections. We use it to log a message confirming the server is running.
 * 
 * @param {number} PORT - The port number to listen on
 * @param {function} callback - Function called when server starts successfully
 */
app.listen(PORT, () => {
    // Log server startup information to the console
    console.log(`Express Tutorial Server is running!`);
    console.log(`Server listening on port ${PORT}`);
    console.log(`Available endpoints:`);
    console.log(`  - GET http://localhost:${PORT}/         -> Returns "Hello world"`);
    console.log(`  - GET http://localhost:${PORT}/evening  -> Returns "Good evening"`);
    console.log(`Press Ctrl+C to stop the server`);
});

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Set the response status and send the error message
    res.status(statusCode).json({
        message: err.message,
        // Only show stack trace in development environment
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = { errorHandler };

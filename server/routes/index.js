import express from 'express';
const app = express.Router();
app.get('/api/v1', (req, res) => {
    res.status(200)
        .json({
            status: true,
            message: "Welcome to politico api."
        });
});
export default app;
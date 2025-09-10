const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint raíz
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API funcionando' });
});

// Endpoint /api/sample
app.get('/api/sample', (req, res) => {
    res.status(200).json({ data: 'sample data' });
});

// Cargar rutas adicionales si lo necesitas
// require('./routes/sampleRoutes')(app);

// Middleware para 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
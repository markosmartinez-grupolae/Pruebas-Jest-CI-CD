module.exports = (app) => {
    const sampleController = require('../controllers/sampleController');

    app.get('/api/samples', sampleController.getAllSamples);
    app.get('/api/samples/:id', sampleController.getSampleById);
    app.post('/api/samples', sampleController.createSample);
    app.put('/api/samples/:id', sampleController.updateSample);
    app.delete('/api/samples/:id', sampleController.deleteSample);
};
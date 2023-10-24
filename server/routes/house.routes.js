const HomeController = require('../controllers/home.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
   
    app.post('/api/home', authenticate, HomeController.createHome);   
    app.get("/api/home",HomeController.getAllHomes)
    app.get("/api/houses",HomeController.showAllHouses);
    app.get("/api/latest-homes", HomeController.getLatestHouses)
    app.get("/api/home/:id", HomeController.getHome);
    app.patch("/api/home/:id/edit", authenticate, HomeController.updateHome);
    app.delete("/api/home/:id",HomeController.deleteHome);
    app.get("/api/search-town",HomeController.searchTown);
    app.patch("/api/home/:id/rent", HomeController.updateRent)
}
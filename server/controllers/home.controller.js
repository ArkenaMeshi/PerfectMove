const Home = require("../models/home.model");

module.exports.createHome = (request, response) => {
  Home.create(request.body)
    .then((home) => response.json(home))
    .catch((err) => response.status(400).json(err));
};
module.exports.getLatestHouses = (request, response) => {
  const limit = request.query.limit ?? 3;
  Home.find({})
    .limit(limit)
    .sort({ createdAt: "desc" })
    .then((home) => {
      console.log(home);
      response.json(home);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getHome = (request, response) => {
  Home.findOne({ _id: request.params.id })
    .then((home) => response.json(home))
    .catch((err) => response.json(err));
};

module.exports.deleteHome = (request, response) => {
  Home.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.showAllHouses = (request, response) => {
  Home.find({})
    .sort({ createdAt: "desc" })
    .then((home) => {
      console.log(home);
      response.json(home);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getAllHomes = (request, response) => {
  Home.find({})
    .sort({ createdAt: "desc" })
    .then((home) => {
      console.log(home);
      response.json(home);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.updateHome = (request, response) => {
  Home.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((home) => response.json(home))
    .catch((err) => response.status(400).json(err));
};

module.exports.searchTown = (request, response) => {
  Home.find({ town: { $regex: ".*" + request.query.search + ".*" } })
    .then((homes) => response.json(homes))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateRent = (request, response) => {
  Home.findOneAndUpdate({ _id: request.params.id }, {rented: request.body.rented}, {
    new: true
  })
    .then((home) => response.json(home))
    .catch((err) => response.status(400).json(err));
};
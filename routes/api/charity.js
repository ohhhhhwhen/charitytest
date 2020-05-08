const router = require(`express`).Router();
const charityController = require(`../../controllers/charityController`);

// Matches with "/api/books"
router
    .route(`/`)
    .get(charityController.findAll)
    .post(charityController.create);

// Matches with "/api/books/:id"
router
    .route(`/:id`)
    .get(charityController.findById)
    .put(charityController.update)
    .delete(charityController.remove);

module.exports = router;

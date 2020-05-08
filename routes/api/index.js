const router = require(`express`).Router();
const charityRoutes = require(`./charity`);

// Book routes
router.use(`/books`, charityRoutes);

module.exports = router;

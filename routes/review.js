let express = require("express");
let router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middlewares");
const reviewController = require("../controllers/reviews.js");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;

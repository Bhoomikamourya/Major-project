const express =require("express");
const router =express.Router({mergeParams:true});
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review =require("../Models/review.js");
const Listing =require("../Models/listing.js");
const {validateReview,
  isLoggedIn,
  isReviewAuthor
}=require("../middleware.js");


const reviewController=require("../controller/review.js");
const review=require("../Models/review.js");

//POSt review route
 router.post("/",
   isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.createReview));

 //Delete review route
 router.delete("/:reviewId",
   isLoggedIn,
   isReviewAuthor,
   wrapAsync(reviewController.destroyReview));

module.exports=router;
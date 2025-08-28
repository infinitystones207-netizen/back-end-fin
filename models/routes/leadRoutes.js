const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

// Middleware to fake authentication (replace with real auth in production)
router.use((req, res, next) => {
  // In production, extract businessId from JWT or session
  req.user = { businessId: "replace_with_business_id" };
  next();
});

// Add a new lead (for internal/manual testing)
router.post("/", leadController.addLead);

// Get leads for the current business
router.get("/mine", leadController.getLeads);

// Webhook endpoint for missed call, sends SMS and logs lead
router.post("/missed-call", leadController.handleMissedCall);

module.exports = router;

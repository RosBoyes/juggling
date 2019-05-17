const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Below is to branch the journey to an ineligible page for less than 3 balls juggled and to the juggling trick question where 3 or more is true.

router.post("/juggling-balls-answer", function(request, response){

  var jugglingBalls = request.session.data['juggling-balls']

  if (jugglingBalls == "3 or more") {
    response.redirect("/juggling-trick")

  } else {
    response.redirect("/ineligible")}

})

module.exports = router

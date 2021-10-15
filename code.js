onEvent("actvityLevel", "change", function( ) {
  if (getText("actvityLevel") == "Light") {
    console.log(getText("timeOfDay"));
    if (getText("timeOfDay") == "Morning") {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Light Activity at Morning. You may want to try walking around the mall.");
    } else if ((getText("timeOfDay") == "Afternoon")) {
      console.log(getText("timeOfDay"));
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Light activity at Afternoon. You may want to try kite flying at Manson Park.");
    } else {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Light activity at Evening. You may want do to some Yoga.");
    }
  }
  if (getText("actvityLevel") == "Moderate") {
    console.log(getText("timeOfDay"));
    if (getText("timeOfDay") == "Morning") {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You may want to do a Moderate activity at Morning. You may want to  try swimming in the indoor pool at Splash Complex.");
    } else if ((getText("timeOfDay") == "Afternoon")) {
      console.log(getText("timeOfDay"));
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You may want to do a Moderate activity at Afternoon. You may want to try bikiing on the boardwalk.");
    } else {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You may want to do a Moderate activity at Evening. You may want to try Hiking.");
    }
  }
  if (getText("actvityLevel") == "Strenuous") {
    console.log(getText("timeOfDay"));
    if (getText("timeOfDay") == "Morning") {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Strenuos activity at Morning. You may want to try Rock Climbing at Rocco's Gym.");
    } else if ((getText("timeOfDay") == "Afternoon")) {
      console.log(getText("timeOfDay"));
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Strenous activity at Afternoon. You may want to do Cycling.");
    } else {
      setProperty("typeOfActivity", "text", ("Hi " + getText("nameInput")) + ", You want to do a Strenuos activity at Evening. You may want to play Basketball.");
    }
  }
});

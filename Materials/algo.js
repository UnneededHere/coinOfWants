var justPeopleThings = [
    ["Kyle Scorgie", ["Ben McCallum", "Jon Ewen"]],
    ["Jon Ewen", ["Ben Fay"]],
    ["Ben McCallum", ["Kyle Scorgie", "Hugo Pirie"]],
    ["Ben Fay", ["Jon Ewen"]],
    ["Hugo Pirie", ["Kyle Scorgie"]]
  ]
  
  var guysWeSaw = []
  
  function innerFunction(newGuy) {
    console.log(guysWeSaw)
    for(var i = 0; i < guysWeSaw.length; i++) {
      if(guysWeSaw[i] == newGuy) {
        return true
      }
    }
  
    var theProfile = false
    for(var i = 0; i < justPeopleThings.length; i++) {
      if(justPeopleThings[i][0] == newGuy) {
        theProfile = justPeopleThings[i]
      }
    }
    if(!theProfile) {
      return false;
    }
  
    if(theProfile[1] == true) {
      return true
    }
  
    guysWeSaw[guysWeSaw.length] = newGuy
    for(var i = 0; i < theProfile[1].length; i++) {
      if (innerFunction(theProfile[1][i]) == false) {
        return false
      }
    }
  
    return true
  }
  
  console.log(innerFunction(justPeopleThings[0][0]))
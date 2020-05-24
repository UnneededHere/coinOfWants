function myRealFunFunction(justPeopleThings) {
  let guysWeSaw = []

  function innerFunction(newGuy) {
    console.log(guysWeSaw)
    for (let i = 0; i < guysWeSaw.length; i++) {
      if (guysWeSaw[i] == newGuy) {
        return true
      }
    }

    let theProfile = false
    for (let i = 0; i < justPeopleThings.length; i++) {
      if (justPeopleThings[i].person == newGuy) {
        theProfile = justPeopleThings[i]
      }
    }
    if (!theProfile) {
      return false;
    }

    if (theProfile.needs == true) {
      return true
    }

    guysWeSaw[guysWeSaw.length] = newGuy
    for (let i = 0; i < theProfile.needs.length; i++) {
      if (innerFunction(theProfile.needs[i]) == false) {
        return false
      }
    }

    return true
  }

  console.log(innerFunction(justPeopleThings[0].person))
}

myRealFunFunction([
  { person: "Kyle Scorgie", needs: ["Ben McCallum", "Jon Ewen"] },
  { person: "Jon Ewen", needs: ["Ben Fay"] },
  { person: "Ben McCallum", needs: ["Kyle Scorgie", "Hugo Pirie"] },
  { person: "Ben Fay", needs: ["Jon Ewen"] },
  { person: "Hugo Pirie", needs: ["Kyle Scorgie"] }
])
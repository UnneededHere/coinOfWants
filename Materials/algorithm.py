justPeopleThings = [
  ["Kyle Scorgie", ["Ben McCallum", "Jon Ewen"]],
  ["Jon Ewen", ["Ben Fay"]],
  ["Ben McCallum", ["Kyle Scorgie", "Hugo Pirie"]],
  ["Ben Fay", ["Jon Ewen"]],
  ["Hugo Pirie", ["Kyle Scorgie"]]
]

guysWeSaw = []

def helpThisIsHard(newGuy):
  for i in guysWeSaw:
    if i == newGuy:
      return True

  theProfile = False
  for i in justPeopleThings:
    if i[0] == newGuy:
      theProfile = i
  if not theProfile:
    return False

  if theProfile[1] == True:
    return True

  guysWeSaw.append(newGuy)
  for i in theProfile[1]:
    if helpThisIsHard(i) == False:
      return False
  
  return True

print(helpThisIsHard(justPeopleThings[0][0]))

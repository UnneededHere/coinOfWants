import { Meteor } from "meteor/meteor";

export const Events = new Meteor.Collection('events');
export const Persons = new Meteor.Collection('persons');

export function findOutWhetherTheyBeGoing(personObjekt) {
    try {
        const everyoneElse = Persons.find({ relEvent: personObjekt.relEvent })
        return myRealFunFunction(everyoneElse, personObjekt.person)
    }
    catch {
        console.log("Missed")
    }
}

function myRealFunFunction(justPeopleThings, ourGuy) {
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

    return innerFunction(ourGuy)
}
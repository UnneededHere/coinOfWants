import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Events, Persons, findOutWhetherTheyBeGoing } from '../import/api/wacky';
import { Mongo } from 'meteor/mongo';

Router.route('/home', function() {
  this.render('homePage')
})
Router.route('/', function() {
  Router.go('/home')
})
Router.route('/event/:eventID/:personID', {
  template: 'personPage',
  data: function() {
    const ourGuy = Persons.findOne({ _id: new Mongo.ObjectID(this.params.personID), relEvent: this.params.eventID })
    return {
      eventDetails: Events.findOne({ _id: new Mongo.ObjectID(this.params.eventID) }),
      peopleNeeds: ourGuy,
      willTheyCome: undefined
    }
  }
})
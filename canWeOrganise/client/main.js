import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Events, Persons } from '../import/api/wacky';
import { Mongo } from 'meteor/mongo';

Router.route('/home', function() {
  this.render('homePage')
})
Router.route('/', function() {
  Router.go('/home')
})
Router.route('/event/:_id', {
  template: 'eventPage',
  data: function() {
    var currentEvent = new Mongo.ObjectID(this.params._id);
    return {
      eventDetails: Events.findOne({ _id: currentEvent }),
      peopleNeeds: Persons.find({ relEvent: this.params._id })
    }
  }
})
// contact-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const contact = new mongooseClient.Schema({
    name : {
      first: {
        type: String,
        required: [true, 'First Name is required']
      },
      last: {
        type: String,
        required: false
      }
    },
    email : {
      type: mongooseClient.SchemaTypes.Email,
      required: [true, 'Email is required']
    },
    phone : {
      type: String,
      required: [true, 'Phone is required'],
      validate: {
        validator: function(v) {
          return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v);
        },
        message: '{VALUE} is not a valid international phone number!'
      }
    },
    hl_type : {
      type: mongooseClient.SchemaTypes.String,
      required: [true, 'Human language type is required']
    },
    human_language_request : {
      type: mongooseClient.SchemaTypes.String,
      required: [true, 'Human language request is required']
    },
    human_language_summary : {
      type: mongooseClient.SchemaTypes.String,
      required: [false, 'Human language request is required']
    },
    ml_type : {
      type: mongooseClient.SchemaTypes.String,
      required: [true, 'Machine language Type is required']
    },
    machine_language_response: {
      type: mongooseClient.SchemaTypes.String,
      required: [false, 'Machine language response is required']
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('contact', contact);
};

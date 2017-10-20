var db = require('../db'),
    ObjectID = require('mongodb').ObjectID;

exports.popularTags = function(cb){
    db.get().collection('popularTags').find().toArray(function(err, docs){
        cb(err, docs);
    });
};

exports.add = function(person, cb){
    db.get().collection('persons').insert(person, function(err, result){
        cb(err, result);
    });
};

exports.getPersons = function(cb){
    db.get().collection('persons').find().toArray(function(err, result){
        cb(err, result);
    });
};

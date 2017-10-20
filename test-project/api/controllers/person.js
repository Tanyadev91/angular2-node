var Person = require('../models/person');

exports.popularTags = function(req, res){
    Person.popularTags(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs[0].tags);
    })
};

exports.addPerson = function(req, res){
  Person.add(req.body ,function(err){
      if(err){
          console.log(err);
          return res.sendStatus(500);
      }
      res.status(200).json({ "message" : req.body.name});
  })
};

exports.getPersons = function(req, res){
  Person.getPersons(function(err, docs){
      if(err){
          console.log(err);
          return res.sendStatus(500);
      }
      res.send(docs);
  })
};
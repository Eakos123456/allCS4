var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');

let myDatabase = function() {
}



myDatabase.prototype.postData = function(data,res) {
  let obj = {grade:data.grade, name:data.name};
  //new Data(_data.grade);
  //return res.json({error:false});
  DataModel.create(obj,function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(username,res) {

  DataModel.find({name:username},function(error,info) {
    console.log(info);
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }
      else if (info.length == 1)    
      {
          return res.json({error:false,username:username ,grade:info[0].grade});
      }
      else
      {
          return res.json({error:true});
      }
   });
  

}

 

myDatabase.prototype.putData = function(data,res) {
  let obj = {name:data.name,grade:data.grade};
  DataModel.findOneAndUpdate({name:data.name},{grade:data.grade},function(error,oldData) {
    if (error) {
      return res.json({error:true});
    }
    else if (oldData == null) {
      return res.json({error:true});
    }
    return res.json({error:false});
  });
}

myDatabase.prototype.deleteData = function(ident,res) {
    DataModel.remove({ident:ident},function(error,removed) {
        if (error) {
            return res.json({error:true});
        }        
        if (removed.result.n == 0)
            return res.json({error:true});
        return res.json({error:false});
    });
}

module.exports = myDatabase;
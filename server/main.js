import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Promise = require('promise');
});

Meteor.methods({
  'getPhotos': function(pagenum,category){
    try{
      var access_token = "d2dbfcc0566f00d1d722b7c0c94b2abbeb42808f6f1d37b743dcfed3281c624e";      
      var query = "?page="+pagenum+"&per_page=50&query="+category+"&client_id="+access_token;
      var url = "https://api.unsplash.com/search/photos/"+query;
      return new Promise((resolve, reject)=>{
        HTTP.call('GET',url,(err,res)=> {
        // HTTP.call('GET',Meteor.absoluteUrl("/unsplash.json"),(err,res)=> {
          if (err) {
            console.log(err);
            reject(err);
          } 
          else {
            resolve(res);
          }
        });
      });
    }
    catch(err){
      throw new Meteor.Error(err);
    }
  }
})
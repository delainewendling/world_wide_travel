"use strict";

app.factory("BookStorage", ($q, $http)=>{

  let getBookList = function(){
    let books = [];
    return $q((resolve, reject)=>{
      $http.get("../../data/guides.json")
      .success((bookObject)=>{
        console.log("success", bookObject);
        resolve(bookObject);
      })
      .error((error)=>{
        console.log("error", error);
        reject(error);
      });
    });
  };
  return {getBookList};
});
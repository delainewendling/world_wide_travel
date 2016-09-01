"use strict";

app.controller("BookCtrl", function($scope, BookStorage){

  BookStorage.getBookList ()
  .then((bookCollection)=>{
    console.log("book Collection", bookCollection);
    $scope.books = bookCollection;
  });

});
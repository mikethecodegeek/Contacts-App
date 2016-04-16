/**
 * Created by Admin on 4/14/16.
 */
var getInfo= angular.module('GetInfo', ['ngStorage']);
getInfo.controller('contacts',function($scope, $localStorage) {
    if ($localStorage.contact === undefined){ $localStorage.contact= [] }

    $scope.records = $localStorage.contact;
    var contact = $scope.records;
    $scope.addContact = function() {
        var objArr = $localStorage.contact;
        objArr.push(createContact());
        $localStorage.contact=objArr;

    };
     var createContact = function() {
        var myname = document.getElementById('name').value || 'Name of Contact';
        var myaddress = document.getElementById('address').value || 'Contact Address';
        var myphone = document.getElementById('phone').value || 'Contact Phone';
        var myemail = document.getElementById('email').value || 'Contact Email';
        var mypic = document.getElementById('pic').value || 'http://2qdocg2za8g336a8w21fo83z.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/english-vocabulary-words-anonymous.png';
        var obj = {name:myname, address:myaddress,phone:myphone,email:myemail,pic:mypic};
        return obj
    };
    $scope.delete = function() {
        var thing = $(this);
        var ind = (thing[0].$index);
        $localStorage.contact.splice(ind,1);
    };
    $scope.edit = function() {

        ind = (this.$index);
        $('#myModal2').modal('show');
        getind = function() {
            return ind;
        };
            var myname = $('#contactName').text() || 'Name of Contact';
            var myaddress = $('#editaddress').text() || 'Contact Address';
            var myphone = $('#editphone').text() || 'Contact Phone';
            var myemail = $('#editemail').text() || 'Contact Email';
            var mypic = $('#editpic').text() || 'http://2qdocg2za8g336a8w21fo83z.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/english-vocabulary-words-anonymous.png';
            $('#editname').val(myname);
            $('#editaddress').val(myaddress);
            $('#editphone').val(myphone);
            $('#editemail').val(myemail);
            $('#editpic').val(mypic);

    };
     $scope.modal =function() {

        var myname = document.getElementById('editname').value || 'Name of Contact';
        var myaddress = document.getElementById('editaddress').value || 'Contact Address';
        var myphone = document.getElementById('editphone').value || 'Contact Phone';
        var myemail = document.getElementById('editemail').value || 'Contact Email';
        var mypic = document.getElementById('editpic').value || 'http://2qdocg2za8g336a8w21fo83z.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/english-vocabulary-words-anonymous.png';
        var obj = {name:myname, address:myaddress,phone:myphone,email:myemail,pic:mypic};
        //console.log(obj);
         var ind=getind();
        $localStorage.contact[ind]=obj;

    };
     

    });

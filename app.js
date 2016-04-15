/**
 * Created by Admin on 4/14/16.
 */
var getInfo= angular.module('GetInfo', []);
getInfo.controller('contacts',function($scope) {
    $scope.records = [
        {
            "Name" : "Alfreds Futterkiste",
            "Address" : "Germany",
            "Email" :"Something.com",
            "Phone" : "555-5555",
            "pic":"http://geedmo.com/codecanyon/47admin/app/img/user/06.jpg"
        },{
            "Name" : "Berglunds snabbköp",
            "Address" : "Sweden",
            "Email" :"Something.com",
            "Phone" : "555-5555"

        },{
            "Name" : "Centro comercial Moctezuma",
            "Address" : "Mexico",
            "Email" :"Something.com",
            "Phone" : "555-5555"
        },{
            "Name" : "Ernst Handel",
            "Address" : "Austria",
            "Email" :"Something.com",
            "Phone" : "555-5555"
        }
    ];
    var contact = $scope.records;
    $scope.addContact = function() {
        var myname = document.getElementById('name');
        var myaddress = document.getElementById('address');
        var myphone = document.getElementById('phone');
        var myemail = document.getElementById('email');
        var mypic = document.getElementById('pic');
        $scope.records.push({'Name': myname.value, "Address":myaddress.value, 'Phone':myphone.value, "Email":myemail.value, 'pic': mypic.value});
    }
   
});

/*var myapp = angular.module('myApp', []);

myapp.controller('HelloWorldCtrl', function($scope){
    $scope.helloMessage = "Hello world";

}) */

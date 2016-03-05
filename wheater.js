"use strict";

function APP(){

    function getByCity(city,callback){
        if(city){
            var url = "http://api.openweathermap.org/data/2.5/forecast/city?q="+city+"&APPID=3a2826432f396fee42df36198389f5b0&units=metric";
            $.get(url,function(data){
                callback(data);
            });
        }else{
            console.log("Ingrese una ciudad valida");
        }
    }
    return {

        load:function(){
            var city = $("#city").val();
            getByCity(city, function(data){
                console.log(data);
                $("#temp").text("La temperatura en "+city+" es "+data.list[0].main.temp+" grados Celsius");
            } );
        }
    }
}

window.APP = new APP();


//Por dentro jquery
/*
var jQuery = {
    get:function(param,callback){
        callback(data);
    }
};
*/

/*
//var users = jQuery.get("/users");
jQuery.get("/users",function(data){

});
*/

/**
//callback hell
getUserById(1,function(err,user){
    getRolesByUser(user,function(err,roles){
        async.eachSeries()
        for(var i = 0; i < roles.length; i++){
            getPermissionsByRole(roles[i],function(err,permissions){

            });
        }
    });
});
**/
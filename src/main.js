import {Tamagatchi} from './tamagatchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function(){
  $("#name").submit(function(event){
    event.preventDefault();

    $("#stats").show();
    $("#info").hide();

    let name = $("#enterName").val();
    let newTamagatchi = new Tamagatchi(name);
    $("#hungerLevel").text(newTamagatchi.foodLevel);
    $("#sleepLevel").text(newTamagatchi.sleepLevel);
    $("#playLevel").text(newTamagatchi.playLevel);
    newTamagatchi.hungerDrain();
    newTamagatchi.sleepDrain();
    newTamagatchi.playDrain();

    $(".nameDisplay").text(newTamagatchi.name);

    let drain = setInterval(function(){
      $("#hungerLevel").text(newTamagatchi.foodLevel);
      $("#sleepLevel").text(newTamagatchi.sleepLevel);
      $("#playLevel").text(newTamagatchi.playLevel);
      $("#hunger-bar").css("width", newTamagatchi.foodLevel);
      $("#play-bar").css("width", newTamagatchi.playLevel);
      $("#sleep-bar").css("width", newTamagatchi.sleepLevel);
      if(newTamagatchi.didTamagatchiDie())
      {
        $("#dead").show();
        $("#stats").hide();
        clearInterval(drain);
      }
    }, 1000);

    $("#eat").click(function(){
      newTamagatchi.feed();
    })

    $("#play").click(function(){
      newTamagatchi.play();
    })

    $("#sleep").click(function(){
      newTamagatchi.sleep();
    })

    $("#reset").click(function(){
      $("#dead").hide();
      $("#info").show();
    })

    $("#food-bar").click

  });

});

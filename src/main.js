import {Tamagatchi} from './tamagatchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function(){
  $("#name").submit(function(event){
    event.preventDefault();

    let name = $("#enterName").val();
    let newTamagatchi = new Tamagatchi(name);
    newTamagatchi.hungerDrain();
    newTamagatchi.sleepDrain();
    newTamagatchi.playDrain();

    $("#nameDisplay").text(newTamagatchi.name);

    setInterval(function(){
      $("#hungerLevel").text(newTamagatchi.foodLevel);
      $("#sleepLevel").text(newTamagatchi.sleepLevel);
      $("#playLevel").text(newTamagatchi.playLevel);
    }, 1000);

    $(".stats").show();
    $(".info").hide();
  });
});

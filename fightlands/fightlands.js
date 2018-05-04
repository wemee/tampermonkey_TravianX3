(function() {
  'use strict';

  if(jQuery('body > center:nth-child(1):contains("502 Bad Gateway")').length>=1 || jQuery('body > center:nth-child(3):contains("nginx")').length>=1){
    setTimeout(function(){
      window.location.href = "http://www.fightlands.biz/"+Server+"/dorf1.php";
    }, 1000*60*1);
  } else if (window.location.pathname.match(/login/)) {
    jQuery('input[name="user"]').val('wemee');
    jQuery('input[name="pw"]').val('7012');
    jQuery('#lowRes').click();
    jQuery('form[name="snd"]').submit();
  } else if(!jQuery('li.entry:eq(0)').hasClass('active')){ // 不再目標分村
    // jQuery('li.entry:eq(0) > a').click();
    setTimeout(function(){
      jQuery('li.entry:eq(0) > a').trigger('click');
      // window.location.href = "http://www.fightlands.biz/"+Server+"/"+jQuery('li.entry:eq(0) > a').attr('href');
    }, 1000*60*3);
  } else {
    if(typeof(localStorage.state)=="undefined"){
      localStorage.state = "idle";
    }
    if(typeof(localStorage.free_gold)=="undefined"){
      localStorage.free_gold = new Date(2018, 5, 1, 23, 45).getTime(); //new Date().getTime();
    }

    if((new Date().getTime())-parseInt(localStorage.free_gold)>=86400000){
      // localStorage.state = 'free_gold'
    }

    console.log(localStorage.state);

    switch (localStorage.state) {
      case 'attack':
        attack();
        break;
      case 'hero_adventure':
        hero_adventure();
        break;
      case 'idle':
        idle();
        break;
      case 'trainTroops':
        trainTroops();
        break;
      case 'free_gold':
        free_gold();
        break;
      default:
        console.log('localStorage.state Error');
    }
  }

  // jQuery( document ).ready(function( $ ) {
  // }); // end jQuery( document ).ready(function( $ ) {
})(); // end (function() {

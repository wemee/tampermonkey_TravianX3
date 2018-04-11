// ==UserScript==
// @name         Travian X3 by Wemee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Travian X3 by Wemee
// @author       Wemee Tsai
// @match        https://ts20.travian.tw/*
// @grant        none
// ==/UserScript==

function min(arr, compare){
  var tmp=arr[0];
  for(var idx in arr){
    tmp = compare(tmp, arr[idx]);
  }
  return tmp;
}
function max(arr, compare){
  var tmp=arr[0];
  for(var idx in arr){
    tmp = compare(tmp, arr[idx]);
  }
  return tmp;
}

(function() {
  'use strict';
  setInterval(function(){location.reload();}, 60000+Math.random()*100000);

  var host = 'https://ts20.travian.tw/';

  function find_min_resourse_index(func){
    /*if($('#village_map > div.gid4.good.level0').length>=1){
      func(4);
    } else */
    if($('#stockBarFreeCrop').text() < 10) {
      console.log('stockBarFreeCrop < 10');
      func(4);
    } else {
      var wood = $('#l1').text().replace(',',''), clay = $('#l2').text().replace(',',''),
          iron = $('#l3').text().replace(',',''), crop = $('#l4').text().replace(',','');
      console.log('wood:'+wood+',clay:'+clay+', iron:'+iron+',crop:'+crop);
      var minRes = Math.min(wood, clay, iron, crop);
      if(wood == minRes)
        func(1);
      else if(clay == minRes)
        func(2);
      else if(iron == minRes)
        func(3);
      else if(crop == minRes)
        func(4);
      else
        func(2);
    }
  }

  if(typeof(localStorage.state)==="undefined")
    localStorage.state = "idle";

  function upgradeRes(){
    console.log('upgradeRes');
    if(window.location.pathname != '/dorf1.php'){
      window.location.pathname = '/dorf1.php';
    } else {
      find_min_resourse_index(function(min_resourse_index){
        console.log('min_resourse_index:' +min_resourse_index);
        var min_resourse_html_objs = $('#village_map > div.gid'+min_resourse_index+'.good');
        if(min_resourse_html_objs.length==1) {
          if(min_resourse_html_objs.hasClass('level10')){
            localStorage.state = 'idle';
            console.log('超過level 10');
            return ;
          }
          console.log('goto build: '+(min_resourse_html_objs.index()+1));
          localStorage.state = 'build';
          window.location.href = host+'build.php?id='+(min_resourse_html_objs.index()+1);
        } else if(min_resourse_html_objs.length>1) {
          var min_level_obj = $(min(min_resourse_html_objs.toArray(), function(a,b){
            return $(a).attr('class').match(/level(\d+)/)[1] > $(b).attr('class').match(/level(\d+)/)[1] ? b:a;
          }));
          if(min_level_obj.hasClass('level10')){
            localStorage.state = 'idle';
            console.log('超過level 10');
            return ;
          }
          console.log('goto build: '+(min_level_obj.index()+1));
          localStorage.state = 'build';
          window.location.href = host+'build.php?id='+(min_level_obj.index()+1);
        } else {
          console.log('not goto build');
        }
      });
    }
  }

  function adventures(){
    console.log('adventures');
    if(window.location.href == host+'hero.php?t=3'){
      console.log('link to Adventure: '+$('.gotoAdventure:eq(0)').attr('href'));
      window.location.href = host+$('.gotoAdventure:eq(0)').attr('href');
    } else if(window.location.pathname=="/start_adventure.php"){
      localStorage.state = 'idle';
      console.log('click 開始歷險');
      $('button[value="開始歷險"]').click();
    } else {
      console.log('go to hero.php?t=3');
      window.location.href = host+'hero.php?t=3';
    }
  }
  function hp(){
    var _hp = $('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.progressBars > div.heroHealthBarBox.alive > div').attr('style').match(/width:(\d+)%/)[1];
    console.log('hp: '+_hp);
    return _hp;
  }
  function is_hero_on_the_way(){
    return $('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.heroStatusMessage').text().includes('在路上');
  }

  function find_max_level_by_resIndex(resIndex){
    var max_level_res = $(max($('#village_map > div.gid'+resIndex).toArray(), function(a, b){
      return $(a).attr('class').match(/level(\d+)/)[1] > $(b).attr('class').match(/level(\d+)/)[1] ? a:b;
    }));
    return max_level_res.attr('class').match(/level(\d+)/)[1];
  }
  function productions(){
    return {
      wood: parseInt($('#production .num:eq(0)').text().match(/(\d+,?\d+)/)[1]),
      clay: parseInt($('#production .num:eq(1)').text().match(/(\d+,?\d+)/)[1]),
      iron: parseInt($('#production .num:eq(2)').text().match(/(\d+,?\d+)/)[1]),
      crop: parseInt($('#production .num:eq(3)').text().match(/(\d+,?\d+)/)[1])
    };
  }
  function need_to_upgrade_warehouse() {
    // return false;
    // if(typeof(localStorage.upgrade_warehouse)==="undefined")
    //   localStorage.upgrade_warehouse = 0;
    //
    // if(localStorage.upgrade_warehouse<1 && new Date()/1000>1523318400){
    //   localStorage.upgrade_warehouse = localStorage.upgrade_warehouse+1
    //   return true;
    // } else if(localStorage.upgrade_warehouse<2 && new Date()/1000>1523372400){
    //   localStorage.upgrade_warehouse = localStorage.upgrade_warehouse+1
    //   return true;
    // } else if(localStorage.upgrade_warehouse<3 && new Date()/1000>1523383200){
    //   localStorage.upgrade_warehouse = localStorage.upgrade_warehouse+1
    //   return true;
    // } else if(localStorage.upgrade_warehouse<4 && new Date()/1000>1523394000){
    //   localStorage.upgrade_warehouse = localStorage.upgrade_warehouse+1
    //   return true;
    // } else {
    //   return false
    // }
    if(window.location.pathname != '/dorf1.php'){
      window.location.pathname = '/dorf1.php';
      return false;
    }
    var pd = productions();
    var stockBarWarehouse = $('#stockBarWarehouse').text().match(/(\d+,?\d+)/)[1].replace(',','');
    // var stockBarWarehouse = parseInt($('#stockBarWarehouse').text().replace(',', ''));
    var result = stockBarWarehouse/Math.max(pd.wood, pd.clay, pd.iron);
    console.log('need_to_upgrade_warehouse: '+result+', stockBarWarehouse: '+
      stockBarWarehouse+', max:'+Math.max(pd.wood, pd.clay, pd.iron));
    return result < 5;
  }
  function need_to_upgrade_Granary() {
    // return false;
    // if(typeof(localStorage.upgrade_Granary)==="undefined")
    //   localStorage.upgrade_Granary = 0;
    //
    // if(localStorage.upgrade_Granary<1 && new Date()/1000>1523318400){
    //   localStorage.upgrade_Granary = localStorage.upgrade_Granary+1
    //   return true;
    // } else if(localStorage.upgrade_Granary<2 && new Date()/1000>1523372400){
    //   localStorage.upgrade_Granary = localStorage.upgrade_Granary+1
    //   return true;
    // } else if(localStorage.upgrade_Granary<3 && new Date()/1000>1523383200){
    //   localStorage.upgrade_Granary = localStorage.upgrade_Granary+1
    //   return true;
    // }  else if(localStorage.upgrade_Granary<4 && new Date()/1000>1523394000){
    //   localStorage.upgrade_Granary = localStorage.upgrade_Granary+1
    //   return true;
    // } else {
    //   return false
    // }
    if(window.location.pathname != '/dorf1.php'){
      window.location.pathname = '/dorf1.php';
      return false;
    }
    var pd = productions();
    var stockBarGranary = $('#stockBarGranary').text().match(/(\d+,?\d+)/)[1].replace(',','');
    // var stockBarGranary = parseInt($('#stockBarGranary').text().replace(',',''));
    var result = stockBarGranary/Math.max(pd.crop);
    console.log('need_to_upgrade_Granary: '+result+', stockBarGranary: '+
      stockBarGranary+', max:'+Math.max(pd.crop));
    return result < 6;
  }
  function upgrade_warehouse(){
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=21';
  }
  function upgrade_Granary(){
    localStorage.state = 'build';
    window.location.href = host+'build.php?id=20';
  }
  function build(){
    console.log("build");
    var upgrade_btn = $('#build .section1 > button.green:not(.gold)');
    if(upgrade_btn.length >= 1){
      localStorage.state = 'idle';
      console.log('click build');
      upgrade_btn.click();
    } else {
      console.log('not click build');
    }
  }

  function idle(){
    console.log("idle");
    if(false && !is_hero_on_the_way()
        && $('#sidebarBoxHero div.speechBubbleContainer > div.speechBubbleContent').text()>=1
        && hp()>20){
      localStorage.state = 'adventures';
      adventures();
    } else if(need_to_upgrade_warehouse()) {
      upgrade_warehouse();
    } else if(need_to_upgrade_Granary()) {
      upgrade_Granary();
    } else {
      localStorage.state = 'upgradeRes';
      upgradeRes();
    }
  }
  switch(localStorage.state) {
    case "idle":
      idle();
      break;
    case "adventures":
      adventures();
      break;
    case "build":
      build();
      break;
    case "upgradeRes":
      upgradeRes();
      break;
    default:
      console.log('nothing: '+window.location.href+ ", state: " +localStorage.state);
  }
})();

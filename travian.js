// ==UserScript==
// @name         Travian X3 by Wemee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ts20.travian.tw/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var host = 'https://ts20.travian.tw/';

  function find_min_resourse_index(func){
    if($('#village_map > div.gid4.good.level0').length>=1){
      func(4);
    } else if($('#stockBarFreeCrop').text() < 10) {
      console.log('stockBarFreeCrop < 10');
      func(4);
    } else {
      var wood = $('#l1').text(), clay = $('#l2').text(),
          iron = $('#l3').text(), crop = $('#l4').text();
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

  setInterval(function(){
    if(window.location.pathname == '/dorf1.php'){
      find_min_resourse_index(function(min_resourse_index){
        console.log('min_resourse_index:' +min_resourse_index);
        var min_resourse_html_objs = $('#village_map > div.gid'+min_resourse_index+'.good');
        if(min_resourse_html_objs.hasClass('level10')){
          console.log('超過level 10');
          return ;
        } else if(min_resourse_html_objs.length>=1) {
          console.log('goto build: '+(min_resourse_html_objs.index()+1));
          window.location.href = host+'build.php?id='+(min_resourse_html_objs.index()+1);
        } else {
          console.log('not goto build');
          location.reload();
        }
      });
    } else if(window.location.pathname == '/build.php'){
      var upgrade_btn = $('#build .section1 > button.green:not(.gold)');
      if(upgrade_btn.length >= 1){
        console.log('click build');
        upgrade_btn.click();
      } else {
        console.log('not click build');
        location.reload();
      }
    } else {
      console.log('nothing: '+window.location.href);
      window.location.href = host+'dorf1.php';
    }
  }, window.location.pathname=='/build.php' ? 10000 : 60000);
})();

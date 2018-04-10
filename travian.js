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

  function find_min_resourse_index(){
    if($('#stockBarFreeCrop').text() < 10)
      return 4;

    var wood = $('#l1').text(),
        clay = $('#l2').text(),
        iron = $('#l3').text(),
        crop = $('#l4').text();
    var minRes = Math.min(wood, clay, iron, crop);
    if(wood == minRes)
      return 1;
    else if(clay == minRes)
      return 2;
    else if(iron == minRes)
      return 3;
    else if(crop == minRes)
      return 4;
    else
      return 2;
  }

  setInterval(function(){
    if(window.location.pathname == '/dorf1.php'){
      var min_resourse_index = find_min_resourse_index();
      var min_resourse_html_objs = $('#village_map > div.gid'+min_resourse_index+'.good');
      if(min_resourse_html_objs.length>=1) {
        console.log('goto build: '+($('#village_map > div.gid4.good:eq(0)').index()+1));
        window.location.href = host+'build.php?id='+($('#village_map > div.gid4.good:eq(0)').index()+1);
      } else {
        console.log('not goto build');
        location.reload();
      }
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
  }, 1000*60);
})();

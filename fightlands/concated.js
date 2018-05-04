// ==UserScript==
// @name         Fightlands_buildup new village
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.fightlands.biz/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

var Server = 'tx10000';

setTimeout(function(){
  window.location.reload();
}, 1000*60*10);

$.noConflict();
// -14|34
// -12|35 羊
// -32 | 17
// -13|37 羊

// 24|-29

function attack() {
  if(window.location.pathname.match(/a2b/)){
    if(jQuery('#short_info').length==0){
      // jQuery('#troops a:eq(0)').click();
      // jQuery('#troops a:eq(3)').click();
      // jQuery('#troops a:eq(4)').click();
      // jQuery('#troops a:eq(5)').click();
      // jQuery('#troops a:eq(6)').click();
      // jQuery('#troops a:eq(7)').click();

      jQuery('#troops > tbody > tr > td:eq(0) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(0) > input').val(20000000);

      // jQuery('#troops > tbody > tr > td:eq(6) > a').click(); // 投石車
      // jQuery('#troops > tbody > tr > td:eq(6) > input').val(100000);

      jQuery('#troops > tbody > tr > td:eq(8) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(8) > input').val(2500000);

      // jQuery('#troops > tbody > tr > td:eq(9) > a').click();
      // jQuery('#troops > tbody > tr > td:eq(8) > input').val(2500000);

      // jQuery('#troops > tbody > tr > td:eq(11) > a').click(); // 英雄 // 先不要 避免要復活
      jQuery('#content > form > div.option > label:nth-child(3) > input').click(); // normal attack
      // jQuery('#content > form > div.option > label:nth-child(5) > input').click(); // raid

      var to_attack = [
        // {x:'-18',y:'36'}, // 有兵 // 變Natars了
        // {x:'-14',y:'36'}, // 會反擊 // 變Natars了
        // {x:'-24',y:'38'}, // 會反擊
        {x:'-16', y:'36'}, // 會反擊

        {x:'-13', y:'39'},
        {x:'-13', y:'40'},
        {x:'-12', y:'40'},
        {x:'-12', y:'41'},
      ];

      // 新 -18 39
      // -13 35
      // 車 -10 36
      // 車 -10 37

      // 羊
      // -13 39
      // -13 40
      // -12 40
      // -12 41
      // -11 39

      // 大肥羊
      // -12 39
      // -18 36
      // -13 42

      // Dandy from village 01 Zutphen
      // arni from village arnis village

      var idx = parseInt(Math.random()*10/2);
      var x = -10;//to_attack[idx].x;
      var y = Math.random()<0.8 ? 36:37; // ;//to_attack[idx].y;

      let _r_val = Math.random();
      console.log('_r_val:'+_r_val);
      if (_r_val<0.2) { // 一堆陷阱
        console.log('打1');
        y = 36;
      } else if (_r_val<0.4) { // Goro 不斷反擊
        console.log('打2');
        y = 37;
      } else if (_r_val<0.6) { // 不斷囤兵
        console.log('打4');
        x = -16;
        y = 42;

      } else if (_r_val<0.8) { // 肥羊
        console.log('打4');
        x = -19;
        y = 49;
        jQuery('#troops > tbody > tr > td:eq(0) > input').val(0);
        jQuery('#troops > tbody > tr > td:eq(8) > input').val(0);
        jQuery('#troops > tbody > tr > td:eq(5) > a').click(); // 聖
      } else { // 肥羊
        console.log('打3');
        x = -13;
        y = 42;
      }

      // x = -16
      // y = 53 // 以車平

      // x = -15;
      // y = 36; // 以車平

      // -14|38
      // -24|38 會反擊 -16|36
      // 10, 171, 2.82843:x
      // x = 171*2.82843/10
      // -16, 42 搶我綠洲
      jQuery('input[name="x"]').val(x);
      jQuery('input[name="y"]').val(y);
      jQuery('form[name="snd"]').submit();
    } else { // 進入確認頁
      //有車的狀況
      // jQuery('select[name="ctar1"]').val(3); // 鐵 兩個隨機攻擊
      // jQuery('select[name="ctar2"]').val(0); // 米 兩個隨機攻擊

      localStorage.state = 'trainTroops';
      jQuery('#content > form').submit();
    }
  } else {
    setTimeout(function(){
      window.location.href = "http://www.fightlands.biz/"+Server+"/a2b.php";
    }, 1000*60*2);
  }
}
function hero_adventure_count() {
  return parseInt(jQuery('#sidebarBoxHero .speechBubbleContent').text());
}
// console.log(jQuery('#movements .mov').length);
// console.log(hero_adventure_count());

function hero_adventure() {
  if(window.location.pathname.match(/hero_adventure/)){
    // window.location.pathname='/'+Server+'/hero_adventure.php';
    // jQuery('a.gotoAdventure').click();
    window.location.href = "http://www.fightlands.biz/"+Server+"/"+jQuery('a.gotoAdventure:eq(0)').attr('href');
  } else {
    localStorage.state = "idle";
    if(jQuery('#btn_ok > div > div.button-content').click().length>=1){
      jQuery('#btn_ok > div > div.button-content').click();
    } else {
      // 需要復活 未實作

    }
  }
}

  function idle() {
    if(!window.location.pathname.match(/dorf1/)){
      window.location.pathname='/'+Server+'/dorf1.php';
    } else {
      if(hero_adventure_count()>1 && jQuery('#movements .mov').length<1 && jQuery('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.heroStatusMessage').text().trim()=='In home village') {
        localStorage.state = 'hero_adventure';
        window.location.pathname='/'+Server+'/hero_adventure.php';
      } else {
        // localStorage.state = 'trainTroops';
        // window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id=28"; // 28 // 32
        localStorage.state = 'attack';
        window.location.href = "http://www.fightlands.biz/"+Server+"/a2b.php";
      }
    }
  }
function print_training_troops() {
  let map = {};
  jQuery('table.under_progress td.desc').each(function(){
    let arr = jQuery(this).text().match(/(\d+)\s([a-zA-Z]+)/);
    if (typeof(map[arr[2]]) === 'undefined') map[arr[2]]=0;
    map[arr[2]] += parseInt(arr[1]);
  });

  for (let k in map){
    map[k] = map[k].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(map);
}

function trainTroops() {
  let _r_type_val = Math.random();
  let train_type = _r_type_val < 0.7 ? "0":"1"; //0兵 1馬
  // if(window.location.href != "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32)){ // 28 // 32
  //   window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32); // 28 // 32
  if(!window.location.href.match(/build\.php\?id\=(28|32)/)){ // 28 // 32
    window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id="+(train_type==0 ? 28:32); // 28 // 32
  } else {
    var train_wait_time = 2;
    if(train_type == "0"){
      setTimeout(function(){
        let _r_val = Math.random();
        if(_r_val < 0.4) {
          jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 棒
        } else if(_r_val < 0.5) {
          jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 矛
        } else {
          jQuery('#build > form > div > div:nth-child(7) > div.details > a').click(); // 斧
        }
        // jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 羅
        // jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 禁
        // jQuery('#build > form > div > div:nth-child(7) > div.details > a').click(); // 帝
        setTimeout(function(){
          localStorage.state = 'idle';
          jQuery('#build > form > button').click();
        }, 1000*60*train_wait_time);
      }, 1000*5);
    } else if(train_type == "1"){
      setTimeout(function(){
        let _r_val = Math.random();
        if(_r_val < 0.5) {
          jQuery('#build > form > div > div:nth-child(1) > div.details > a').click(); // 聖
        } else {
          jQuery('#build > form > div > div:nth-child(4) > div.details > a').click(); // 條
        }

        setTimeout(function(){
          localStorage.state = 'idle';
          jQuery('#build > form > button').click();
        }, 1000*60*train_wait_time);
      }, 1000*5);
    } else {

    }

    print_training_troops();
  }
}
function free_gold() {

}
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

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

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
    // Your code here...
    setInterval(function(){
        if(window.location.pathname == '/dorf1.php'){
            var wood  = $('#l1').text();
            var clay  = $('#l2').text();
            var iron  = $('#l3').text();
            var wheat = $('#l4').text();
            var minRes = Math.min(wood, clay, iron, wheat);
            var index = -1;
            if(wood == minRes && $('#village_map > div.gid1.good').length>=1){
                index = $('#village_map > div.gid1.good:eq(0)').index()+1;
            }else if(clay == minRes && $('#village_map > div.gid2.good').length>=1){
                index = $('#village_map > div.gid2.good:eq(0)').index()+1;
            }else if(iron == minRes && $('#village_map > div.gid3.good').length>=1){
                index = $('#village_map > div.gid3.good:eq(0)').index()+1;
            }else if(wheat == minRes && $('#village_map > div.gid4.good').length>=1){
                index = $('#village_map > div.gid4.good:eq(0)').index()+1;
            }
            console.log('index: '+index);
            if(index != -1){
                console.log('go to index: '+index);
                window.location.href = 'https://ts20.travian.tw/build.php?id='+index;
                if($('#build .section1 > button.green:not(.gold)').length >= 1)
                    $('#build button.green:not(.gold)').click();
            } else {
                console.log('not go index: '+index);
                location.reload();
            }
        } else if(window.location.pathname == '/build.php'){
            console.log('length:' + $('#build .section1 > button.green:not(.gold)').length);
            if($('#build .section1 > button.green:not(.gold)').length >= 1){
                console.log('build');
                $('#build button.green:not(.gold)').click();
            } else {
                console.log('not build');
                location.reload();
            }
        } else {
            window.location.href = 'https://ts20.travian.tw//dorf1.php';
        }
    }, 1000*55+Math.random()*10000);
})();

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

(function() {
  'use strict';

  $.noConflict();
  jQuery( document ).ready(function( $ ) {
<<<<<<< HEAD
    if(window.location.pathname.match(/login\.php/)){
      $('#content > div > div.innerLoginBox > form > table > tbody > tr.account > td:nth-child(2) > input').val('wemee');
      $('#content > div > div.innerLoginBox > form > table > tbody > tr.pass > td:nth-child(2) > input').val('7012');
      $('#s1').click();
    }
    // 狂產兵
    setTimeout(function(){
      $('#build > form > div > div:nth-child(1) > div.details > a').click(); // 古羅馬
      // $('#build > form > div > div:nth-child(4) > div.details > a').click(); // 禁衛
      setTimeout(function(){
        $('#build > form > button').click();
      }, 1000*5);
    }, 1000*60*3);

//     function min(arr, compare){
//       var tmp=arr[0];
//       for(var idx in arr){
//         if(typeof(arr[idx])=="function")
//           return tmp;
//         tmp = compare(tmp, arr[idx]);
//       }
//       return tmp;
//     }
//
//     var Server = 'tx8000';
//     if(typeof(localStorage.state)=="undefined"){
//       localStorage.state = 'dorf1';
//     }
//     if(typeof(localStorage.resIdx)=="undefined"){
//       localStorage.resIdx = 1;
//     }
//     if(typeof(localStorage.resLevel)=="undefined"){
//       localStorage.resLevel = 1;
//     }
// // -201|292
// // -198|294 75
// // -214|306
// // -221|304
//     if(typeof(localStorage.tasks)=="undefined"){
//       localStorage.tasks = JSON.stringify([
//         {building:"Main Building"         , level:  9},
//         // {building:"Resouse"               , level:  6},
//         {building:"Main Building"         , level: 13},
//         // {building:"Resouse"               , level:  8},
//         {building:"Main Building"         , level: 20},
//         {building:"Warehouse"             , level: 10},
//         {building:"Granary"               , level: 10},
//         // {building:"Resouse"               , level: 10},
//         // {building:"Resouse"               , level: 13},
//         {building:"Warehouse"             , level: 20},
//         {building:"Granary"               , level: 20},
//         // {building:"Iron Foundry"          , level:  5}, // 15田不需要
//         // {building:"Brickyard"             , level:  5}, // 15田不需要
//         // {building:"Sawmill"               , level:  5}, // 15田不需要
//         // {building:"Grain Mill"            , level:  5},
//         {building:"Residence"             , level: 10},
//         {building:"City Wall"             , level: 20},
//         {building:"Rally point"           , level: 20},
//         {building:"Barracks"              , level: 20},
//         {building:"Academy"               , level: 20},
//         {building:"Blacksmith"            , level: 20},
//         {building:"Market"                , level: 20},
//         {building:"Stable"                , level: 20},
//         {building:"Horse Drinking Trough" , level: 20},
//         {building:"Embassy"               , level: 20},
//         {building:"Hero's Mansion"        , level: 20},
//         // {building:"Bakery"                , level: 5},
//         {building:"Workshop"              , level: 20}, //<-- 資源村不需要
//       ]);
//     }
//
//
//
//     // 單純升級兵種
//     if (localStorage.state == "alldone"){
//       setTimeout(function(){
//         window.location.reload();
//       }, 1000*60*3);
//     } else if(localStorage.state=="updateOnly"){
//       console.log('升級模式');
//       if(window.location.pathname.match(/build/)) {
//         let btn = $('button[type="submit"].green.build');
//         if(btn.length>=1){
//           btn.first().click();
//         } else { // localStorage.state = "alldone";
//           let reload_times = 0;
//           (function check_reload(){
//             setTimeout(function(){
//               if($('#timer1 a[onclick="document.location.reload();"]').length>=1)
//                 $('#timer1 a[onclick="document.location.reload();"]').click();
//               else if(reload_times>2)
//                 window.location.reload();
//               else {
//                 reload_times++;
//                 check_reload();
//               }
//             }, 500);
//           })();
//         }
//       } else {
//         if(window.location.pathname.match(/dorf2/)){
//           let idx = $('#village_map img[alt*="Blacksmith"]').index();
//           if(idx==-1){
//             console.log('找不到Blacksmith');
//           }
//           $('#Build2Status'+(18+idx)).click();
//           // window.location.href = 'http://www.fightlands.biz/'+Server+'/build.php?id=23';
//         } else {
//           window.location.pathname='/'+Server+'/dorf2.php';
//         }
//       }
//     } else if(localStorage.state=="researchOnly"){
//       console.log('研發模式');
//       if(window.location.pathname.match(/build/)) {
//         let btn = $('button[type="submit"].green.build');
//         if(btn.length>=1){
//           btn.click();
//         } else {
//           if($('div.none:contains("No new troop types are currently available to be researched.")').length>=1){
//             console.log('研發結束');
//             window.location.pathname='/'+Server+'/dorf2.php';
//             localStorage.state="updateOnly";
//           } else {
//             let reload_times = 0;
//             (function check_reload(){
//               setTimeout(function(){
//                 if($('#timer1 a[onclick="document.location.reload();"]').length>=1)
//                   $('#timer1 a[onclick="document.location.reload();"]').click();
//                 else if(reload_times>10)
//                   window.location.reload();
//                 else {
//                   reload_times++;
//                   check_reload();
//                 }
//               }, 500);
//             })();
//           }
//         }
//       } else {
//         if(window.location.pathname.match(/dorf2/)){
//           let idx = $('#village_map img[alt*="Academy"]').index();
//           if(idx==-1){
//             console.log('找不到Academy');
//           }
//           $('#Build2Status'+(18+idx)).click();
//           // window.location.href = 'http://www.fightlands.biz/'+Server+'/build.php?id=23';
//         } else {
//           window.location.pathname='/'+Server+'/dorf2.php';
//         }
//       }
//     } else {
//       // 強制只升級dorf2
//       localStorage.state = 'dorf2';
//
//       var tasks = JSON.parse(localStorage.tasks);
//       if(tasks.length==0){
//         console.log('tasks.length==0');
//         // localStorage.state = 'dorf1';
//         localStorage.state="researchOnly";
//         window.location.reload();
//       }
//       var task = tasks[0];
//       if(task.building=="Resouse"){
//         localStorage.state = 'dorf1';
//       }
//
//       if(localStorage.state == 'dorf1'){
//         if(window.location.pathname.match(/dorf2/)){
//             window.location.pathname='/'+Server+'/dorf1.php';
//         } else if(window.location.pathname.match(/dorf1/)){
//           if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul div.name').length>=2){
//             setTimeout(function(){window.location.reload();}, 10000);
//           } else if($("#village_map > .level:not('.maxLevel')").length<=0){//} || $('#village_map > div').length>19){
//             console.log('無可升級 前往dorf2');
//             localStorage.state = 'dorf2';
//             tasks.shift();
//             localStorage.tasks = JSON.stringify(tasks);
//             window.location.pathname='/'+Server+'/dorf2.php';
//           } else {
//             // var min_level_obj = $(min($("#village_map > .level:not('.maxLevel,.underConstruction,.level20')").toArray(), function(a,b){
//             //   return parseInt($(a).attr('class').match(/level(\d+)/)[1]) > parseInt($(b).attr('class').match(/level(\d+)/)[1]) ? b:a;
//             // }));
//             // let idx = min_level_obj.index();
//             // console.log(min_level_obj);
//             // console.log('#BuildStatus'+(idx));
//             // $('#BuildStatus'+(idx)).click();
//             let idx = localStorage.resIdx;
//             localStorage.resIdx++;
//             if(localStorage.resIdx>18){
//               localStorage.resLevel++;
//               localStorage.resIdx=1;
//               if(localStorage.resLevel >= task.level){
//                 tasks.shift();
//                 localStorage.tasks = JSON.stringify(tasks);
//                 window.location.pathname='/'+Server+'/dorf2.php';
//               }
//             }
//             jQuery('#BuildStatus'+idx).click();
//           }
//         } else if(window.location.pathname.match(/build/)){
//           let btn = $('#archive > div > div.button-content');
//           if(btn.length>=1)
//             $('#archive > div > div.button-content').click();
//           else
//             setTimeout(function(){
//               localStorage.state = 'dorf2';
//               window.location.pathname='/'+Server+'/dorf2.php';
//             }, 1000);
//         } else {
//           console.log('其他例外網頁');
//         }
//       } else if(localStorage.state == 'dorf2') {
//         if(window.location.pathname.match(/dorf1/)){
//             window.location.pathname='/'+Server+'/dorf2.php';
//         } else if(window.location.pathname.match(/dorf2/)){
//           if(task.building=="City Wall"){
//             $('#Build2Status40').click();
//           } else if(task.building=="Rally point") {
//             $('#Build2Status39').click();
//           } else {
//             let idx = $('#village_map img[alt*="'+task.building+'"]').index();
//             if(idx==-1){
//               idx = $('#village_map img[alt*="Building site"]').index();
//             }
//             console.log('Go to: '+task.building);
//             $('#Build2Status'+(18+idx)).click();
//           }
//         } else if(window.location.pathname.match(/build/)){
//           if($('#content > h1 > span').length<=0){
//             if(task.building=="Rally point"){
//               console.log('Build new: '+task.building);
//               $('#archive > div > div.button-content').click();
//             } else {
//               console.log('Build new: '+task.building);
//               if(task.building=='Iron Foundry'){
//                 $('h2:contains("Ironfoundry")').nextAll('#contract:eq(0)').find('button').click();
//               } else if(task.building=='Grain Mill'){
//                 $('h2:contains("Grainmill")').nextAll('#contract:eq(0)').find('button').click();
//               } else if(task.building=="Hero's Mansion"){
//                 $('h2:contains("Heromansion")').nextAll('#contract:eq(0)').find('button').click();
//               } else if(task.building=="Blacksmith"){
//                 $('h2:contains("Smithy")').nextAll('#contract:eq(0)').find('button').click();
//               } else {
//                 $('h2:contains("'+task.building+'")').nextAll('#contract:eq(0)').find('button').click();
//               }
//             }
//           } else {
//             var level = parseInt(jQuery('#content > h1 > span').text().match(/Level\s*(\d+)/)[1]);
//             if(level>=task.level){
//               tasks.shift();
//               localStorage.tasks = JSON.stringify(tasks);
//               window.location.pathname='/'+Server+'/dorf2.php';
//             } else {
//               let btn = $('#archive > div > div.button-content');
//               localStorage.state = 'dorf1';
//               if(btn.length>=1){
//                 console.log('Level up: '+task.building+", "+level);
//                 $('#archive > div > div.button-content').click();
//               } else {
//                 setTimeout(function(){
//                   localStorage.state = 'dorf1';
//                   // window.location.pathname='/'+Server+'/dorf1.php';
//                   window.location.reload();
//                 }, 3000);
//               }
//             }
//           }
//         } else {
//           console.log('其他例外網頁');
//         }
//       }
//     }
=======
    var Server = 'tx8000';

    function hero_adventure_count(){
      return parseInt(jQuery('#sidebarBoxHero .speechBubbleContent').text());
    }
    console.log($('#movements .mov').length);
    console.log(hero_adventure_count());

    if(typeof(localStorage.state)=="undefined"){
      localStorage.state = "idle";
    }
//http://www.fightlands.biz/tx8000/a2b.php?z=344054
    console.log(localStorage.state);
    // 24|-29
    if(localStorage.state == 'attack'){
      if(window.location.pathname.match(/a2b/)){
        if(jQuery('#short_info').length==0){
          // $('#troops a:eq(0)').click();
          // $('#troops a:eq(3)').click();
          // $('#troops a:eq(4)').click();
          // $('#troops a:eq(5)').click();
          // $('#troops a:eq(6)').click();
          // $('#troops a:eq(7)').click();
          $('#troops a').click();
          $('#content > form > div.option > label:nth-child(3) > input').click();
          $('input[name="x"]').val('24');
          $('input[name="y"]').val('-29');
          $('form[name="snd"]').submit();
        } else {
          $('select[name="ctar2"]').val(0);
          $('#content > form').submit();
        }
      } else {
        setTimeout(function(){
          window.location.href = "http://www.fightlands.biz/"+Server+"/a2b.php";
        }, 1000*60*2);
      }
    } else if(localStorage.state == 'hero_adventure'){
      if(window.location.pathname.match(/hero_adventure/)){
        // window.location.pathname='/'+Server+'/hero_adventure.php';
        // $('a.gotoAdventure').click();
        console.log('1');
        window.location.href = "http://www.fightlands.biz/"+Server+"/"+$('a.gotoAdventure:eq(0)').attr('href');
      } else {
        localStorage.state = "idle";
        $('#btn_ok > div > div.button-content').click();
      }
    } else if(localStorage.state == 'idle'){
      if(!window.location.pathname.match(/dorf1/)){
        window.location.pathname='/'+Server+'/dorf1.php';
      } else {
        if(hero_adventure_count()>1 && $('#movements .mov').length<1) {
          localStorage.state = 'hero_adventure';
          window.location.pathname='/'+Server+'/hero_adventure.php';
        } else {
          localStorage.state = 'trainTroops';
          window.location.href = "http://www.fightlands.biz/"+Server+"/build.php?id=27";
        }
      }
    } else if(localStorage.state == 'trainTroops') {
      setTimeout(function(){
        // $('#build > form > div > div:nth-child(1) > div.details > a').click(); // 羅
        // $('#build > form > div > div:nth-child(4) > div.details > a').click(); // 禁
        $('#build > form > div > div:nth-child(7) > div.details > a').click(); // 帝
        setTimeout(function(){
          localStorage.state = 'idle';
          $('#build > form > button').click();
        }, 1000*5);
      }, 1000*60*10);
    } else {
      console.log('Error');
    }


    // function min(arr, compare){
    //   var tmp=arr[0];
    //   for(var idx in arr){
    //     if(typeof(arr[idx])=="function")
    //       return tmp;
    //     tmp = compare(tmp, arr[idx]);
    //   }
    //   return tmp;
    // }
    //
    // var Server = 'tx8000';
    // if(typeof(localStorage.state)=="undefined"){
    //   localStorage.state = 'dorf1';
    // }
    // if(typeof(localStorage.resIdx)=="undefined"){
    //   localStorage.resIdx = 0;
    // }
    //
    // if(typeof(localStorage.tasks)=="undefined"){
    //   localStorage.tasks = JSON.stringify([
    //     {building:"Main Building"         , level:  9},
    //     {building:"Resouse"               , level:  6},
    //     {building:"Main Building"         , level: 13},
    //     {building:"Resouse"               , level:  8},
    //     {building:"Main Building"         , level: 20},
    //     {building:"Warehouse"             , level: 10},
    //     {building:"Granary"               , level: 10},
    //     {building:"Resouse"               , level: 10},
    //     {building:"Warehouse"             , level: 20},
    //     {building:"Granary"               , level: 20},
    //     {building:"Iron Foundry"          , level:  5}, // 15田不需要
    //     {building:"Brickyard"             , level:  5}, // 15田不需要
    //     {building:"Sawmill"               , level:  5}, // 15田不需要
    //     {building:"Grain Mill"            , level:  5},
    //     {building:"Residence"             , level: 20},
    //     {building:"City Wall"             , level: 20},
    //     {building:"Rally point"           , level: 20},
    //     {building:"Barracks"              , level: 20},
    //     {building:"Academy"               , level: 20},
    //     {building:"Blacksmith"            , level: 20},
    //     {building:"Market"                , level: 20},
    //     {building:"Stable"                , level: 20},
    //     {building:"Horse Drinking Trough" , level: 20},
    //     {building:"Embassy"               , level: 20},
    //     {building:"Hero's Mansion"        , level: 20},
    //     {building:"Bakery"                , level: 5},
    //     // {building:"Workshop"              , level: 20}, <-- 資源村不需要
    //   ]);
    // }
    //
    //
    //
    // // 單純升級兵種
    // if (localStorage.state == "alldone"){
    //   setTimeout(function(){
    //     window.location.reload();
    //   }, 1000*60*3);
    // } else if(localStorage.state=="updateOnly"){
    //   console.log('升級模式');
    //   if(window.location.pathname.match(/build/)) {
    //     let btn = $('button[type="submit"].green.build');
    //     if(btn.length>=1){
    //       btn.first().click();
    //     } else { // localStorage.state = "alldone";
    //       let reload_times = 0;
    //       (function check_reload(){
    //         setTimeout(function(){
    //           if($('#timer1 a[onclick="document.location.reload();"]').length>=1)
    //             $('#timer1 a[onclick="document.location.reload();"]').click();
    //           else if(reload_times>10)
    //             window.location.reload();
    //           else {
    //             reload_times++;
    //             check_reload();
    //           }
    //         }, 500);
    //       })();
    //     }
    //   } else {
    //     if(window.location.pathname.match(/dorf2/)){
    //       let idx = $('#village_map img[alt*="Blacksmith"]').index();
    //       if(idx==-1){
    //         console.log('找不到Blacksmith');
    //       }
    //       $('#Build2Status'+(18+idx)).click();
    //       // window.location.href = 'http://www.fightlands.biz/'+Server+'/build.php?id=23';
    //     } else {
    //       window.location.pathname='/'+Server+'/dorf2.php';
    //     }
    //   }
    // } else if(localStorage.state=="researchOnly"){
    //   console.log('研發模式');
    //   if(window.location.pathname.match(/build/)) {
    //     let btn = $('button[type="submit"].green.build');
    //     if(btn.length>=1){
    //       btn.click();
    //     } else {
    //       if($('div.none:contains("No new troop types are currently available to be researched.")').length>=1){
    //         console.log('研發結束');
    //         window.location.pathname='/'+Server+'/dorf2.php';
    //         localStorage.state="updateOnly";
    //       } else {
    //         let reload_times = 0;
    //         (function check_reload(){
    //           setTimeout(function(){
    //             if($('#timer1 a[onclick="document.location.reload();"]').length>=1)
    //               $('#timer1 a[onclick="document.location.reload();"]:eq(0)').click();
    //             else if(reload_times>10)
    //               window.location.reload();
    //             else {
    //               reload_times++;
    //               check_reload();
    //             }
    //           }, 500);
    //         })();
    //       }
    //     }
    //   } else {
    //     if(window.location.pathname.match(/dorf2/)){
    //       let idx = $('#village_map img[alt*="Academy"]').index();
    //       if(idx==-1){
    //         console.log('找不到Academy');
    //       }
    //       $('#Build2Status'+(18+idx)).click();
    //       // window.location.href = 'http://www.fightlands.biz/'+Server+'/build.php?id=23';
    //     } else {
    //       window.location.pathname='/'+Server+'/dorf2.php';
    //     }
    //   }
    // } else {
    //   // 強制只升級dorf2
    //   localStorage.state = 'dorf2';
    //
    //   var tasks = JSON.parse(localStorage.tasks);
    //   if(tasks.length==0){
    //     console.log('tasks.length==0');
    //     // localStorage.state = 'dorf1';
    //     localStorage.state="researchOnly";
    //     window.location.reload();
    //   }
    //   var task = tasks[0];
    //   if(task.building=="Resouse"){
    //     localStorage.state = 'dorf1';
    //   }
    //
    //   if(localStorage.state == 'dorf1'){
    //     if(window.location.pathname.match(/dorf2/)){
    //         window.location.pathname='/'+Server+'/dorf1.php';
    //     } else if(window.location.pathname.match(/dorf1/)){
    //       if($('#content > div.boxes.buildingList > div.boxes-contents.cf > ul div.name').length>=2){
    //         setTimeout(function(){window.location.reload();}, 10000);
    //       } else if($("#village_map > .level:not('.maxLevel')").length<=0){//} || $('#village_map > div').length>19){
    //         console.log('無可升級 前往dorf2');
    //         localStorage.state = 'dorf2';
    //         window.location.pathname='/'+Server+'/dorf2.php';
    //       } else {
    //         // var min_level_obj = $(min($("#village_map > .level:not('.maxLevel,.underConstruction,.level20')").toArray(), function(a,b){
    //         //   return parseInt($(a).attr('class').match(/level(\d+)/)[1]) > parseInt($(b).attr('class').match(/level(\d+)/)[1]) ? b:a;
    //         // }));
    //         // let idx = min_level_obj.index();
    //         // console.log(min_level_obj);
    //         // console.log('#BuildStatus'+(idx));
    //         // $('#BuildStatus'+(idx)).click();
    //         let idx = localStorage.resIdx;
    //         localStorage.resIdx++;
    //         if(localStorage.resIdx>18){
    //           localStorage.resIdx++;
    //           localStorage.resIdx=1;
    //           if(localStorage.resIdx >= task.building){
    //             tasks.shift();
    //             localStorage.tasks = JSON.stringify(tasks);
    //             window.location.pathname='/'+Server+'/dorf2.php';
    //           }
    //         }
    //         jQuery('#BuildStatus'+idx).click();
    //       }
    //     } else if(window.location.pathname.match(/build/)){
    //       let btn = $('#archive > div > div.button-content');
    //       if(btn.length>=1)
    //         $('#archive > div > div.button-content').click();
    //       else
    //         setTimeout(function(){
    //           localStorage.state = 'dorf2';
    //           window.location.pathname='/'+Server+'/dorf2.php';
    //         }, 1000);
    //     } else {
    //       console.log('其他例外網頁');
    //     }
    //   } else if(localStorage.state == 'dorf2') {
    //     if(window.location.pathname.match(/dorf1/)){
    //         window.location.pathname='/'+Server+'/dorf2.php';
    //     } else if(window.location.pathname.match(/dorf2/)){
    //       if(task.building=="City Wall"){
    //         $('#Build2Status40').click();
    //       } else if(task.building=="Rally point") {
    //         $('#Build2Status39').click();
    //       } else {
    //         let idx = $('#village_map img[alt*="'+task.building+'"]').index();
    //         if(idx==-1){
    //           idx = $('#village_map img[alt*="Building site"]').index();
    //         }
    //         console.log('Go to: '+task.building);
    //         $('#Build2Status'+(18+idx)).click();
    //       }
    //     } else if(window.location.pathname.match(/build/)){
    //       if($('#content > h1 > span').length<=0){
    //         if(task.building=="Rally point"){
    //           console.log('Build new: '+task.building);
    //           $('#archive > div > div.button-content').click();
    //         } else {
    //           console.log('Build new: '+task.building);
    //           if(task.building=='Iron Foundry'){
    //             $('h2:contains("Ironfoundry")').nextAll('#contract:eq(0)').find('button').click();
    //           } else if(task.building=='Grain Mill'){
    //             $('h2:contains("Grainmill")').nextAll('#contract:eq(0)').find('button').click();
    //           } else if(task.building=="Hero's Mansion"){
    //             $('h2:contains("Heromansion")').nextAll('#contract:eq(0)').find('button').click();
    //           } else if(task.building=="Blacksmith"){
    //             $('h2:contains("Smithy")').nextAll('#contract:eq(0)').find('button').click();
    //           } else {
    //             $('h2:contains("'+task.building+'")').nextAll('#contract:eq(0)').find('button').click();
    //           }
    //         }
    //       } else {
    //         var level = parseInt(jQuery('#content > h1 > span').text().match(/Level\s*(\d+)/)[1]);
    //         if(level>=task.level){
    //           tasks.shift();
    //           localStorage.tasks = JSON.stringify(tasks);
    //           window.location.pathname='/'+Server+'/dorf2.php';
    //         } else {
    //           let btn = $('#archive > div > div.button-content');
    //           localStorage.state = 'dorf1';
    //           if(btn.length>=1){
    //             console.log('Level up: '+task.building+", "+level);
    //             $('#archive > div > div.button-content').click();
    //           } else {
    //             setTimeout(function(){
    //               localStorage.state = 'dorf1';
    //               // window.location.pathname='/'+Server+'/dorf1.php';
    //               window.location.reload();
    //             }, 3000);
    //           }
    //         }
    //       }
    //     } else {
    //       console.log('其他例外網頁');
    //     }
    //   }
    // }
>>>>>>> c42bda5d36dbc18514a8a25a2420d4e9417e93bc



  }); // end jQuery( document ).ready(function( $ ) {
})(); // end (function() {

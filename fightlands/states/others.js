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
//     // {building:"Resouse"               , level:  6},
//     {building:"Main Building"         , level: 13},
//     // {building:"Resouse"               , level:  8},
//     {building:"Main Building"         , level: 20},
//     {building:"Warehouse"             , level: 10},
//     {building:"Granary"               , level: 10},
//     // {building:"Resouse"               , level: 10},
//     {building:"Warehouse"             , level: 20},
//     {building:"Granary"               , level: 20},
//     {building:"Iron Foundry"          , level:  5}, // 15田不需要
//     {building:"Brickyard"             , level:  5}, // 15田不需要
//     {building:"Sawmill"               , level:  5}, // 15田不需要
//     {building:"Grain Mill"            , level:  5},
//     // {building:"Residence"             , level: 20},
//     {building:"Palace"             , level: 20},
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
// 單純升級兵種
// if (localStorage.state == "alldone"){
//   setTimeout(function(){
//     window.location.reload();
//   }, 1000*60*3);
// } else if(localStorage.state=="updateOnly"){
//   console.log('升級模式');
//   if(window.location.pathname.match(/build/)) {
//     let btn = jQuery('button[type="submit"].green.build');
//     if(btn.length>=1){
//       btn.first().click();
//     } else { // localStorage.state = "alldone";
//       let reload_times = 0;
//       (function check_reload(){
//         setTimeout(function(){
//           if(jQuery('#timer1 a[onclick="document.location.reload();"]').length>=1)
//             jQuery('#timer1 a[onclick="document.location.reload();"]').click();
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
//       let idx = jQuery('#village_map img[alt*="Blacksmith"]').index();
//       if(idx==-1){
//         console.log('找不到Blacksmith');
//       }
//       jQuery('#Build2Status'+(18+idx)).click();
//       // window.location.href = 'http://www.fightlands.biz/'+Server+'/build.php?id=23';
//     } else {
//       window.location.pathname='/'+Server+'/dorf2.php';
//     }
//   }
// } else if(localStorage.state=="researchOnly"){
//   console.log('研發模式');
//   if(window.location.pathname.match(/build/)) {
//     let btn = jQuery('button[type="submit"].green.build');
//     if(btn.length>=1){
//       btn.click();
//     } else {
//       if(jQuery('div.none:contains("No new troop types are currently available to be researched.")').length>=1){
//         console.log('研發結束');
//         window.location.pathname='/'+Server+'/dorf2.php';
//         localStorage.state="updateOnly";
//       } else {
//         let reload_times = 0;
//         (function check_reload(){
//           setTimeout(function(){
//             if(jQuery('#timer1 a[onclick="document.location.reload();"]').length>=1)
//               jQuery('#timer1 a[onclick="document.location.reload();"]:eq(0)').click();
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
//       let idx = jQuery('#village_map img[alt*="Academy"]').index();
//       if(idx==-1){
//         console.log('找不到Academy');
//       }
//       jQuery('#Build2Status'+(18+idx)).click();
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
//       if(jQuery('#content > div.boxes.buildingList > div.boxes-contents.cf > ul div.name').length>=2){
//         setTimeout(function(){window.location.reload();}, 10000);
//       } else if(jQuery("#village_map > .level:not('.maxLevel')").length<=0){//} || jQuery('#village_map > div').length>19){
//         console.log('無可升級 前往dorf2');
//         localStorage.state = 'dorf2';
//         window.location.pathname='/'+Server+'/dorf2.php';
//       } else {
//         // var min_level_obj = jQuery(min(jQuery("#village_map > .level:not('.maxLevel,.underConstruction,.level20')").toArray(), function(a,b){
//         //   return parseInt(jQuery(a).attr('class').match(/level(\d+)/)[1]) > parseInt(jQuery(b).attr('class').match(/level(\d+)/)[1]) ? b:a;
//         // }));
//         // let idx = min_level_obj.index();
//         // console.log(min_level_obj);
//         // console.log('#BuildStatus'+(idx));
//         // jQuery('#BuildStatus'+(idx)).click();
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
//       let btn = jQuery('#archive > div > div.button-content');
//       if(btn.length>=1)
//         jQuery('#archive > div > div.button-content').click();
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
//         jQuery('#Build2Status40').click();
//       } else if(task.building=="Rally point") {
//         jQuery('#Build2Status39').click();
//       } else {
//         let idx = jQuery('#village_map img[alt*="'+task.building+'"]').index();
//         if(idx==-1){
//           idx = jQuery('#village_map img[alt*="Building site"]').index();
//         }
//         console.log('Go to: '+task.building);
//         jQuery('#Build2Status'+(18+idx)).click();
//       }
//     } else if(window.location.pathname.match(/build/)){
//       if(jQuery('#content > h1 > span').length<=0){
//         if(task.building=="Rally point"){
//           console.log('Build new: '+task.building);
//           jQuery('#archive > div > div.button-content').click();
//         } else {
//           console.log('Build new: '+task.building);
//           if(task.building=='Iron Foundry'){
//             jQuery('h2:contains("Ironfoundry")').nextAll('#contract:eq(0)').find('button').click();
//           } else if(task.building=='Grain Mill'){
//             jQuery('h2:contains("Grainmill")').nextAll('#contract:eq(0)').find('button').click();
//           } else if(task.building=="Hero's Mansion"){
//             jQuery('h2:contains("Heromansion")').nextAll('#contract:eq(0)').find('button').click();
//           } else if(task.building=="Blacksmith"){
//             jQuery('h2:contains("Smithy")').nextAll('#contract:eq(0)').find('button').click();
//           } else {
//             jQuery('h2:contains("'+task.building+'")').nextAll('#contract:eq(0)').find('button').click();
//           }
//         }
//       } else {
//         var level = parseInt(jQuery('#content > h1 > span').text().match(/Level\s*(\d+)/)[1]);
//         if(level>=task.level){
//           tasks.shift();
//           localStorage.tasks = JSON.stringify(tasks);
//           window.location.pathname='/'+Server+'/dorf2.php';
//         } else {
//           let btn = jQuery('#archive > div > div.button-content');
//           localStorage.state = 'dorf1';
//           if(btn.length>=1){
//             console.log('Level up: '+task.building+", "+level);
//             jQuery('#archive > div > div.button-content').click();
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

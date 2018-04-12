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

function hp(){
  if(typeof(HP)!=='undefined')
    return HP;

  if(!$('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.progressBars > div.heroHealthBarBox.alive > div').attr('style')){
    HP = 0;
  } else {
    HP = $('#sidebarBoxHero > div.sidebarBoxInnerBox > div.innerBox.content > div.progressBars > div.heroHealthBarBox.alive > div').attr('style').match(/width:(\d+)%/)[1];
  }
  console.log('hp: '+HP);
  return HP;
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

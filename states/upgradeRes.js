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

function upgradeRes(){
  localStorage.state = 'upgradeRes';
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
        localStorage.state = 'idle';
        console.log('not goto build');
      }
    });
  }
}

function adventures(){
  localStorage.state = 'adventures';
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

let skills = {
  wi: 85,
  le: 90,
  ma: 80,
  in: 85,
  sk: 75
};



const gaugeBar = function(){
$.each(skills, function(key, value) {
  let skillbar = $("." + key);
  skillbar.animate(
    {
      width: value + "%"
    },
    100,
  );
}); 
}




const charaterChangeEvent = function(charter){
switch (charter) {
  case "charter1" :
    skills = {
      wi: 85,
      le: 90,
      ma: 80,
      in: 85,
      sk: 75
    };
    gaugeBar();
    console.log($(this))

    break;
  case "charter2" :
    skills = {
      wi: 65,
      le: 85,
      ma: 85,
      in: 90,
      sk: 60
    };
    gaugeBar();
    break;

  case "charter3" :
    skills = {
      wi: 60,
      le: 75,
      ma: 90,
      in: 85,
      sk: 70
    };
    gaugeBar();
    break;

  case "charter4" :
    skills = {
      wi: 65,
      le: 75,
      ma: 60,
      in: 90,
      sk: 85
    };
    gaugeBar();
    break;

  case "charter5" :
    skills = {
      wi: 70,
      le: 60,
      ma: 90,
      in: 85,
      sk: 65
    };
    gaugeBar();
    break;
  default:
    
    break;
}
}

$(function(){
  gaugeBar();
    $('.image-group').click(function(){
    $('.image-group').removeClass('on');
    $(this).toggleClass('on');
  })
})


$('.one').on({
  'click':function(){
    $('.big-image').attr('src','./img/character_1.png');
    $('.name').attr('src','./img/information_1.png');
  }
});
$('.two').on({
  'click':function(){
    $('.big-image').attr('src','./img/character_2.png');
    $('.name').attr('src','./img/information_2.png');
  }
});
$('.three').on({
  'click':function(){
    $('.big-image').attr('src','./img/character_3.png');
    $('.name').attr('src','./img/information_3.png');
  }
});
$('.four').on({
  'click':function(){
    $('.big-image').attr('src','./img/character_4.png');
    $('.name').attr('src','./img/information_4.png');
  }
});
$('.five').on({
  'click':function(){
    $('.big-image').attr('src','./img/character_5.png');
    $('.name').attr('src','./img/information_5.png');
  }
});






// $(function(){
//   $('.tab div').click(function(){
//     $('.two img').attr('src','./images/light_2.png')
//     $('.one img').attr('src','./images/dark_1.png')
//     $('.character_img img').attr('src','./images/character_2.png')
//   })
// })














// ops text fadein,out

$(document).ready(() => {
$('.ops_right').hover(function(){
    $(this).find('.ops_right_box').stop().fadeIn()
}, function() {
    $(this).find('.ops_right_box').stop().fadeOut();
});
})

// MULTIPLAYER

$(document).ready(() => {
$('.multi_right').hover(function(){
    $(this).find('.multi_right_box span').stop().fadeIn()
}, function() {
    $(this).find('.multi_right_box span').stop().fadeOut();
});

// $('.multi_right').mouseenter(function() {
//     const box = $(this).find('.multi_right_box span');
//     box.fadeIn();
// })

// $('.multi_right').mouseleave(function() {
//     const box = $(this).find('.multi_right_box span');
//     box.fadeOut();
// })
})


// E-MAIL

$(document).ready(function(){
$('.search input').focus(function(){
  $('.search>span').hide();
})

$('.search input').blur(function(){
  $('.search>span').show();
})
})


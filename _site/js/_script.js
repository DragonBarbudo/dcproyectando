$(function(){

var hashInit = location.hash;
hashInit = hashInit.replace('_','');
location.hash = hashInit;


  $('.mainNav ul li a').click(function(e){
        e.preventDefault();
        var hash = $(this).attr('href');
        location.hash = hash;
        hash = hash.replace('_','');
        $('.content').scrollTo(hash, 500);
        $('.active').removeClass('active');
        $(this).parent().addClass('active');

  });


  $(window).hashchange([
    {
      hash: "#_home",
      onSet: function(){
        changeBG('_site/img/bg_home.jpg');
      }
    },
    {
      hash: "#_servicios",
      onSet: function(){
        changeBG('_site/img/bg_servicios.jpg');
      }
    },
    {
      hash: "#_proyectos",
      onSet: function(){
        changeBG('_site/img/bg_home.jpg');
      }
    },
    {
      hash: "#_clientes",
      onSet: function(){
        changeBG('_site/img/bg_clientes.jpg');
      }
    },
    {
      hash: "#_contacto",
      onSet: function(){
        changeBG('_site/img/bg_home.jpg');
      }
    }
  ]);

  //HOME SLIDER
  var sliceboxInit = (function(){
    var slicebox = $( '#sbslider' ).slicebox({
      orientation : 'r',
      cuboidsRandom : true,
      autoplay: true,
      colorHiddenSides : '#fff',
      interval: 4000,
    });
  })();



  $('#gallery').photobox('a', {
    history: false
  });


});


function changeBG(imageNew){
  $('.fullBG').addClass('animated fadeOutRight');
  setTimeout(function(){
    $('.fullBG').css("background-image",'url('+imageNew+')').removeClass('fadeOutRight').addClass('fadeInRight');
  }, 1000);
}

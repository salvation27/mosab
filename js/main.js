


(function($) {
$(function() {
 
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
})(jQuery);




// длябургера анимация

(function() {
  'use strict';

  var toggles = document.querySelectorAll('.toggle-hamburger');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.contains('is-active') === true
        ? this.classList.remove('is-active')
        : this.classList.add('is-active');
    });
  }
})();






jQuery(function(f) {
  var element = f('#back-top');
  f(window).scroll(function() {
    element['fade' + (f(this).scrollTop() > 150 ? 'In' : 'Out')](150);
  });
});

// открывает модальное окно кнопка в меню


// $(".content-current").delay(2500).fadeIn();
// $(".content-current").delay(2500).show();


// открывает модальное окно кнопка цены
$(function(){

// открывает модальное окно кнопка в меню

  $ ('.header_btn').click(function(){

    $('#exampleModal1').arcticmodal();
    
  });

    $ ('.footer_btn').click(function(){

    $('#exampleModal1').arcticmodal();
    
  });

  $ ('.light_btn').click(function(){

    $('#exampleModal2').arcticmodal();
    
  });

   $ ('.optimym_btn').click(function(){

    $('#exampleModal3').arcticmodal();
    
  });


  $ ('.norm_btn').click(function(){

    $('#exampleModal4').arcticmodal();
    
  });

// согласие на обработкуданных

 $ ('.confi').click(function(){

    $('#exampleModal5').arcticmodal();
    
  });




});


// // открывает модальное окно кнопка цены 1
// $(function(){
//   $ ('.light_btn').click(function(){

//     $('#exampleModal2').arcticmodal();
    
//   });
// });



// аккордеон вопросы 

$(function(){
  $(".accordion-titulo").click(function(e){
           
        e.preventDefault();
    
        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open    
          contenido.slideDown(250);     
          $(this).addClass("open");
        }
        else{ //close   
          contenido.slideUp(250);
          $(this).removeClass("open");  
        }

      });
});

// длябургера анимация


// появление меню по нажатии на кнопку

$(document).ready(function() {
  
	$('.burger_test').click(function() {
		$('.brger_menu').toggleClass('vis');
	});
});

$(document).ready(function() {
	$('.closer').click(function() {
		$('.brger_menu').click('brger_menu');
	});

});

$('[data-fancybox]').fancybox({
    // Options will go here
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
     // thumbs          : false,
    // hash            : false,
    loop            : true,
    // keyboard        : true,
    toolbar         : false,
    // animationEffect : false,
    // arrows          : true,
    clickContent    : false
  });


  $(window).on("load resize",function(){
    var width = $(window).width();
    if(width <= 1200){
      $(".left-sidebar").removeClass("position-fixed" );
      $(".dummy").removeClass("content-width");
      $(".responsive-leftsidebar").addClass("container");
      $(".responsive-leftsidebar").css("margin-top" , "60px !important");
      $(".left-sidebar").css({"position" : "static" , "display" : "block" , "max-width" : "767px" });
      $(".left-sidebar").addClass("responsive-left"); 
      $(".right-sidebar").hide(); 
      $(".toggle-bar").addClass("position-fixed");
      $(".toggle-bar").css({"top" : "0px" , "right" : "30px"});
      $(".toggle-bar").removeClass("position-absolute");
    }
    else{
      $(".dummy").addClass("content-width");
      $(".left-sidebar").addClass("position-fixed");
      $(".responsive-leftsidebar").removeClass("container");
      $(".left-sidebar").css({"position" : "fixed" , "max-width" : "346px" });
      $(".left-sidebar").removeClass("responsive-left"); 
      $(".right-sidebar").show(); 
      $(".toggle-bar").addClass("position-absolute");
      $(".toggle-bar").css({"top" : "30px" , "right" : "35px"});
      $(".toggle-bar").removeClass("position-fixed");
    
    }
  });
  $(document).ready(function(){
    $(".settings").click(function(){
      $(".switch-color").toggleClass("d-none");
    });
    $(".switch-color li").click(function(){
      var abc;
			abc = $(this).css("background-color");
			$(":root").css("--theme-color",abc);
    });
  });

  // Tooltips 
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  // Auto Active Menu
  
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.right-sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.right-sidebar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Cursor 

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// Headline js 
//you can change the text, but you need to keep same format [yourtext, color];
let yourtext = [
  ["Coding"],
  ["Creative"]
];

let x = 0;
let y = 0;
//how fast typing is
let wait = 300;
//how long you want to text stay before overwriting
let additionalwait = 5;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
  document.getElementById("changingText").innerHTML = out;
  if (x > txt.length - 1) {
  } else {
    out += txt[x];
  }
  x++;
  if (x == txt.length + 2 + additionalwait) {
    if (y == yourtext.length - 1) {
      y = 0;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    } else {
      y += 1;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    }
  }
}, wait);

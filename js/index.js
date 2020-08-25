$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        
    });
    $("#2048toggle").click(function(){
        // Toggle 2048 visibility:
        $("#2048").toggleClass("is-hidden");
        
        if($("#2048").hasClass("is-hidden")) {
            $("#2048toggle i").removeClass().addClass("fa fa-plus-circle");
        }
        else {
            $("#2048").focus();
            $("#2048toggle i").removeClass().addClass("fa fa-minus-circle"); 
        }
        

    });

    // var $navigationLinks = $('#navbar > div > a');
    // var $sections = $(".section");
    // var position = $(this).scrollTop();
    // console.log(position);

    // var lastId,
    // topMenu = $("#navbar"),
    // topMenuHeight = topMenu.outerHeight()+1,
    // // All list items
    // menuItems = topMenu.find("a"),
    // // Anchors corresponding to menu items
    // scrollItems = menuItems.map(function(){
    // var item = $($(this).attr("href"));
    //     if (item.length) { return item; }
    // });

    // // Bind click handler to menu items
    // // so we can get a fancy scroll animation
    // menuItems.click(function(e){
    // var href = $(this).attr("href"),
    //     offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    // $('html, body').stop().animate({ 
    //     scrollTop: offsetTop
    // }, 850);
    // e.preventDefault();
    // });

    // // Bind to scroll
    // $(window).scroll(function(){
    // // Get container scroll position
    // var fromTop = $(this).scrollTop()+topMenuHeight;
    
    // // Get id of current scroll item
    // var cur = scrollItems.map(function(){
    //     if ($(this).offset().top < fromTop)
    //     return this;
    // });
    // // Get the id of the current element
    // cur = cur[cur.length-1];
    // var id = cur && cur.length ? cur[0].id : "";
    
    // if (lastId !== id) {
    //     lastId = id;
    //     // Set/remove active class
    //     menuItems
    //         .parent().removeClass("active");
    //         // .end().filter("[href=#"+id+"]").parent().addClass("active");
    // }                   
    // });

  });
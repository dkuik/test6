$(function () {

    //ACCORDION 

    $("#accordion").accordion({
        heightStyle: "content",
        header: ".wrapper .accordionTab"
    });

    $("#accordion").accordion({
        collapsible: true,
        active: false,

    });

    //DARK/LIGHTMODE SWITCH

    $('#switch').change(function () {
        if ($(this).is(":checked")) {

            $('body').addClass('dark')

            $('#logo').attr('src', 'assets/logowit.svg');


        } else {

            $('body').removeClass('dark');

           
            $('#logo').attr('src', 'assets/logosvg.svg');

        }

    });

    // VIDEO PLAYER BUTTONS

    $('video').each(function () {

        var player = videojs(this.id, {});

$(this).parents(".accordion-content").find(".rewind").click(function(){

    player.currentTime(player.currentTime() - 10);

});


    var geklikt = false;


    $(this).parents(".accordion-content").find(".playPause").click(function(){
        if (!geklikt) {
            $(".playPause").addClass('pause');
            player.play();
            geklikt = true;
            

        } else {
            $(".playPause").removeClass('pause');
            player.pause();
            geklikt = false;
            
          
        }

    }); 

});


   //CHECK BUTTON VOOR VIDEO & MODAL POPUP


    $('.videoDone').click(function () {
        $('.modal-bg').css('display', "block")

            var typed = new Typed('.typing', {
                strings: ["Je hebt de tutorial succesvol afgerond!"],
                typeSpeed: 100,
                showCursor: false,
                backDelay: 900,
                startDelay: 100
              });

    });

    $('.modalClose').click(function () {
        $('.modal-bg').css('display', "none")

    });
    


    $("video").each(function () {

        var checkVideo = $(this).parents(".accordion-content").find(".videoDone");

        checkVideo.click(function() {
                $(this).parents(".wrapper").find(".doneLabel").css("display", "block");

        });

    });

    $(".menu-toggle").click(function(){
        $(".menu-toggle").toggleClass('active')
        $("nav").toggleClass('active')

    });

});
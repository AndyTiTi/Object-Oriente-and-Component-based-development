requirejs(['jquery','backtop'],function($,backtop){
    $('#backTop').backtop({
        mode:'move'
    });

    // new backtop.BackTop($('#backTop'),{
    //     mode:'move'
    // });



    // var scroll = new scrollTo.ScrollTo({
    //     dest:0,
    //     speed:5000
    // });
    // $('#backTop').on('click',$.proxy(scroll.move,scroll));
    // $(window).on('scroll',function(){
    //     checkPosition($(window).height())
    // });
    // checkPosition($(window).height());
    // function move(){
    //     $('html,body').animate({
    //         scrollTop:0
    //     },800);
    // }
    // function checkPosition(pos) {
    //     if($(window).scrollTop()>pos){
    //         $('#backTop').fadeIn();
    //     }else{
    //         $('#backTop').fadeOut();
    //     }
    // }
});
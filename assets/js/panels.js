$(document).ready(function(){
    $(".sidebar-item").click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('.content').not(target).hide();
        $(target).fadeIn(600);
    });
});

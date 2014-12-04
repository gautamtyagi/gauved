//$(function(){
//
//    $(".home").click(home);
//
//
//
//});
$(function(){

    $(".dashboard").click(function(){
        $(".left-btn a").removeClass("active");
        $(this).addClass("active");
        dashboard();
    });

    $(".room").click(function(){
        $(".left-btn a").removeClass("active");
        $(this).addClass("active");
        room();
    });
    $(".arrangement").click(function(){
        $(".left-btn a").removeClass("active");
        $(this).addClass("active");
        arrangement();
    });
    $(".student").click(function(){
        $(".left-btn a").removeClass("active");
        $(this).addClass("active");
        info();
    });

});
function dashboard() {

    $.ajax({
        url : 'dashboard.html',
        type : 'GET',
        success : function(r) {
            $(".form-view").html(r);

        }
    });

};
function room() {

    $.ajax({
        url : 'room.html',
        type : 'GET',
        success : function(r) {
            $(".form-view").html(r);

        }
    });

};
function arrangement() {

    $.ajax({
        url : 'arrangement.html',
        type : 'GET',
        success : function(r) {
            $(".form-view").html(r);

        }
    });
    function info() {

        $.ajax({
            url : 'info.html',
            type : 'GET',
            success : function(r) {
                $(".form-view").html(r);

            }
        });

};
}
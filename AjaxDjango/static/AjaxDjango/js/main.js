
function get_id_usuario(id){
    $.ajax({
        type: "GET",
        url: "/user/"+id,
        dataType: "JSON",
    })
    .done(function(response){
        console.log(response)
    })
    .fail(function(response){
        console.log(response)
    });
}
$(document).ready(function(){
    $('#frmFormUser').on('submit', llamar_Ajax)
    get_usuarios()
    function get_usuarios(){
        $.ajax({
            type: "GET",
            url: "/user/",
            dataType: "JSON",
        })
        .done(function(response){
            console.log(response)
        })
        .fail(function(response){
            console.log(response)
        });
    }
    function llamar_Ajax(e){
        e.preventDefault()
        var csrf_token = $('input[name="csrfmiddlewaretoken"]').val()
        info_csrf = {'csrfmiddlewaretoken':csrf_token}
        $.ajax({
            type: "POST",
            url: "/user_view/",
            data: $('#frmFormUser').serialize()+"&"+ info_csrf,
            dataType: "JSON",
        })
        .done(function(response){
            console.log(response)
        })
        .fail(function(responsee){
            console.log(responsee)
        });
    }
})

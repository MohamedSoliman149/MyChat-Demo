


      
       var chattHub;
$(function () {
    chattHub = $.connection.chatHub;
    chattHub.client.resieveMessage = function (name, message) {
        var encodedName = $("<div />").text(name).html();
        var encodedMessage = $("<div />").text(message).html();
        $("#discussion").append("<li><strong style =`>" + encodedName + "</strong> :&nbsp;&nbsp;&nbsp;&nbsp;" + encodedMessage + "</li>");

    };
    $.connection.hub.start();

    $("#UserName").val(prompt('Enter Your Name Please ', ' '));

    $("#txtmessage").focus();


    $("#sendMessage").click(function () {
        chattHub.server.sendMessage($("#UserName").val(), $("#txtmessage").val());
        console.log("hiiiiiiiiiii");
        $("#txtmessage").val('').focus();
    });


});
   
     
       
$(function () {
    $("#Header").css("color", "blue");
})


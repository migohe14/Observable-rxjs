$( document ).ready(function() {
    var chatContainer = $("#chatContainer");
    var btn = $("#btnSend");
    var msg = $("#msg").val();
    var text = $("#text");
    var typing = "";

    var timeout;
    $("#msg").keypress(function(e){
        function isNotTyping() {
            typing = "";
            text.text(typing);
        }
        if(timeout) {
            clearTimeout(timeout);
            typing = "Is typing...";
            text.text(typing);
            timeout = null;
        } 
        timeout = setTimeout(isNotTyping, 500)
    });


    btn.on( "click", function() {
        msg = $("#msg").val();
        
        if(msg !== "") {
            chatContainer.append(`<li><p>${msg}</p></li>`);
            $('html,body').animate({ scrollTop: chatContainer.height()-50 }, 'slow');
        }
        msg = '';
        $("#msg").val(msg)
        

        console.log(msg);
    });
});
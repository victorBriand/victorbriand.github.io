$(document).ready(function () {
    // HOVER IMAGES CABANES
    $("#cabanes a").hover(function () {
        $(this).children("figcaption").removeClass("disNone");    
    }, function () {
            $(this).children("figcaption").addClass("disNone");    
        }
    );

    // VALIDATION FORMULAIRE (réctifié V2)
    
    $("#envoi").click(function(){
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        if(nom==""){
            $("#nom").next('span').text("Champ obligatoire");
            return false;
        }
        else {
            $("#nom").next('span').hide();
        }
        if(prenom==""){
            $("#prenom").next('span').text("Champ obligatoire");
            return false;
        }
        else {
            $("#prenom").next('span').hide();
        }
        if(email==""){
            $("#email").next('span').text("Champ obligatoire");
            return false;
        }else if(!email.includes("@")){
            $("#email").next('span').text("Champ incorrect");
            return false;
        }
        else {
            $("#email").next('span').hide();
        }
        $("#envoi").next('span').text("Message envoyé")
    });
});
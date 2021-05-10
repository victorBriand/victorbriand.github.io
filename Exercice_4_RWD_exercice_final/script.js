$(document).ready(function () {


    //Aside Accueil
    $("#infosAccueil li").click(function () { 
            var texte = $(this).children('p');
            $('#infosAccueil li p').slideUp();
            if (texte.is(':hidden')){
                texte.slideDown();
            }
    });



    //Planetes Interieures
    $("input[value='Animation']").click(function(e){
        $("#mercure").addClass("spinMercure");
        $("#terre").addClass("spinTerre");
        $("#venus").addClass("spinVenus");
        $("#mars").addClass("spinMars");
    })
    
    $("input[value='Reset']").click(function(e){
        $("#mercure").removeClass("spinMercure");
        $("#terre").removeClass("spinTerre");
        $("#venus").removeClass("spinVenus");
        $("#mars").removeClass("spinMars");
    })
    
    $("input[value='Mercure']").click(function(e){
        $("#mercure").addClass("spinMercure");
    })
    
    $("input[value='Terre']").click(function(e){
        $("#terre").addClass("spinTerre");
    })

    $("input[value='Vénus']").click(function(e){
        $("#venus").addClass("spinVenus");
    })
    $("input[value='Mars']").click(function(e){
        $("#mars").addClass("spinMars");
    })
    // je ne voulais pas recopier ta methode :)




    //Planetes Geantes
    $("#sectionGeantes figure").click(function(){

        var planete = $(this).attr("data-planete");

		$("#"+planete).fadeIn(500);

        $("#wrapper").css("opacity",0.5);
	});

	$(".croix").click(function(){

		$(this).parent().slideUp();

		$("#wrapper").css("opacity",1);

    });


    //Contact Validation
    $("#submit").click(function (e) { 
        var nom = $("#nom").val();
        var tel = $("#tel").val();
        var email = $("#email").val();

        if(nom == ""){
            $("#nom").next('span').css("display","inline");;
            return false;
        }else{
            $("#nom").next('span').css("display","none");
        }

        if(isNaN(tel)){
            $("#tel").next('span').css("display","inline");;
            return false;
        }else{
            $("#tel").next('span').css("display","none");
        }

        if(email == ""){
            $("#email").next('span').css("display","inline");;
            return false;
        }else if(!email.includes("@")){
            $("#email").next('span').css("display","inline");
            return false;
        }else{
            $("#email").next('span').css("display","none");
        }
    });

    $(".open").click(function (e) { 
        $("body").toggleClass("reduce", 1000);
    });
});
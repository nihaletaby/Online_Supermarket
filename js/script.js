jQuery(document).ready(function($) {
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});


    var product = [];
    product[0] = "Fresh spinach";
    product[1] = "Fresh apple red (1 kg)";
    product[2] = "Butter croissants (50 gm)";
    product[3] = "Masala bread (500 gm)";
    product[4] = "Mixed fruit juice";
    product[5] = "Catch fish finger (200 gm)";

    var item = "";
    for(i=0; i<product.length; i++){
        item += "<option>" + product[i] + "</option>";
    }

    document.getElementById("p").innerHTML = item; 

    
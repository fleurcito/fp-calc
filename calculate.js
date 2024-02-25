document.getElementById("calculate").addEventListener("click", function(event){

    ab1 = document.getElementById("ab1").value;
    ab2 = document.getElementById("ab2").value;
    ab3 = document.getElementById("ab3").value;
    gl1 = document.getElementById("gl1").value;
    gl2 = document.getElementById("gl2").value;
    gl3 = document.getElementById("gl3").value;

    pet_rarity = document.getElementById("rarity");
    
    var ab1_res = Math.round(20 * (1.08**(ab1-1) - 1)/(1.08 - 1));
    var ab2_res = Math.round((20/0.65) * (1.08**(ab2-1) - 1)/(1.08 - 1));
    var ab3_res = Math.round((20/0.3) * (1.08**(ab3-1) - 1)/(1.08 - 1));
    
    var gl1_res = Math.round(20 * (1.08**(gl1-1) - 1)/(1.08 - 1));
    var gl2_res = Math.round((20/0.65) * (1.08**(gl2-1) - 1)/(1.08 - 1));
    var gl3_res = Math.round((20/0.3) * (1.08**(gl3-1) - 1)/(1.08 - 1));

    var total_gl1 = (gl1_res - ab1_res);
    var total_gl2 = (gl2_res - ab2_res);
    var total_gl3 = (gl3_res - ab3_res);

    var total_fp = Math.max(total_gl1, total_gl2, total_gl3);

    document.getElementById("total_gl1").innerHTML = total_gl1;
    document.getElementById("total_gl2").innerHTML = total_gl2;
    document.getElementById("total_gl3").innerHTML = total_gl3;
    document.getElementById("total_fp").innerHTML = total_fp;
    
});
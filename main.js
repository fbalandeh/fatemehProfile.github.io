var err = "";
function FormCheck(){
    var ret = false;
    err=="";
    PostalCodeCheck();
    document.getElementById("errors").innerText = err;
    if(err==""){
        ret = true;
    }
    return ret;
}
function PostalCodeCheck(){
    //var corr_postal = /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\ ?([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/;
    var corr_postal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    var postal = document.getElementById("postal_code").value;
    console.log(postal);
    if(corr_postal.test(postal) == false){
        err+= "Wrong postal code, Valid pattern is A1A 1A1 ";
    }
}
function AboutCheck(){
    var edu = document.getElementById("oth").value;
    if(edu == 0){
        var x = document.createElement("TEXTAREA");
        const element = document.getElementById("div1");
        element.appendChild(x);
    }
}
AboutCheck();
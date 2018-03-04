function calculate (){
    //male 76, female 81
    var age = $('#age').val()
    var sleep = $('#sleep').val()
    let maxAge = 76
    let finalHours = 0;
    let finalAge = 0;
    
    
    if ($('#male').is(":checked")) {
        finalAge = maxAge - age
        finalHours = finalAge * (24 - sleep) * 365
    }
    
    else if ($('#female').is(":checked")) {
        maxAge = 81
        finalAge = maxAge - age
        finalHours = finalAge * (24 - sleep) * 365
    }
    
    else {
        alert("No sex chosen!")
        location.reload()
    }
    $('#answer').html("Hours left: " + finalHours + 
                      "<br>Or " + (finalAge * 365) + " days" +
                      "<br>Or " + finalAge + " years")
}

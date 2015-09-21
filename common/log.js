function clog(description, result) {
    console.log(description + " --> " + result)
}

function plog(description, result) {
    separator = " --> ";
    if(result === undefined){
        result = "";
        separator = "";
        description =
            "<span style='margin-bottom: 0px; margin-top:0px;font-size: 20px;'>"
                + description + "</span>"
    }
    $("#log").append(
        description + separator + result + "</br>"
    )
}
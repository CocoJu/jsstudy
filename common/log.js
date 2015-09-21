function clog(description) {
    console.log(description)
}

function plog(description, result) {
    separator = " --> ";
    if(result === undefined){
        $("#log").append(
            "<span style='margin-bottom: 0px; margin-top:0px;font-size: 20px;'>"
            + description + "</span>" + "</br>"
        )
        return;
    }
    comment = "";
    if(result[1] !== undefined )
        comment = " (" + result[1] + ") ";
    if(result[0] === 'eval')
        result = eval(description);
    else
        result = result[0];
    description += comment;
    $("#log").append(
        description + separator + result + "</br>"
    )
}
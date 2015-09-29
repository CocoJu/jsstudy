function plog(description, result){
    message = result_message(description, result);
    if(message.type === "head")
        $("#log").append(
            "<span style='margin-bottom: 0px; margin-top:0px;font-size: 20px;'>"
            + message.body + "</span>" + "</br>"
        )
    else
        $("#log").append(message.body + "</br>")
}

function clog(description, result) {
    console.log(result_message(description, result).body);
}

function result_message(description, result) {
    separator = " --> ";
    if(result === undefined){
        return {type:"simple", body:description};
    }
    comment = "";
    if(result[1] !== undefined )
        comment = " (" + result[1] + ") ";
    if(result[0] === "h")
        return {type:"head", body:description};
    if(result[0] === 'eval')
        result = eval(description);
    else
        result = result[0];
    description += comment;
        return {type:"simple", body:description + separator + result};
}

var $eval = "eval";
var $h = "h";
// plog = page logger
var log = plog;
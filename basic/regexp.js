/**
 *  reexp declaration:
 *  var re = /expression/flags
 *
 *  using:
 *      test(string);
 *      exec(string);
 *
 *  using: string methods:
 *      replace(regexp, string);
 *      split(regexp);
 *      search(regexp);
 *      match(regexp);
 */

var re;
var mail = "petua@mail.ru";
var gmail = "petua@gmail.ru";

function _regexp(){
    log("RegExp:", [$h]);
    log("re = /yandex|main|gmail/", [$eval]);
    log("mail", [$eval]);
    log("mail.search(re)", [$eval]);
    log("gmail", [$eval]);
    log("gmail.search(re)", [$eval]);
}
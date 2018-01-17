// ==UserScript==
// @name        PHPBB Ignore hidden
// @namespace   sds
// @include     https://forum.bitcoin.pl/viewtopic.php*
// @version     1
// @grant       none
// ==/UserScript==

var divs = document.getElementsByTagName("div");
//var divParent1, divParent2;

for (i = 0; i<divs.length; i++) {
    if (divs.item(i).id.toString().indexOf("post_hidden") > -1) {
      divs.item(i).style.visibility = "hidden";
    }
}

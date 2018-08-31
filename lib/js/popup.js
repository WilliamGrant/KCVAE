$(document).ready(function(){
    var details = chrome.app.getDetails();
    var html ="<h2>"+details.name+"</h2>"+
        "<p>版本:v"+details.version+"</p>"+
        "<p>作者:Reki</p>"+
        "<p>@copyright 2018, 不可用于商业用途</p>";
    $("#about-box").html(html);
});
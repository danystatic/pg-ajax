$(document).ready(function(){
    loadPage();
});

function loadPage(url) {
    $('body').append('<div id="progress">Loading...</div>');
    scrollTo(0,0);
    if (url == undefined) {
        $('#container').load('home.html #header ul', hijackLinks);
    } else {
        $('#container').load(url + ' #content', hijackLinks);
    }
}

function hijackLinks() {
    $('#container a').click(function(e){
        var url = e.target.href;
        if (url.indexOf('http')==-1) {
            e.preventDefault();
            loadPage(url);
        }
    });

    var title = $('h2').html() || 'Hello!';
    $('h1').html(title);
    $('h2').remove();
    $('#progress').remove();
}


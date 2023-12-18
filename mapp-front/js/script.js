$(document).ready(function() {
    var currentUrl = window.location.pathname.split('/').pop();
    $('#sidebar a').each(function() {
        var linkHref = $(this).attr('href');
        if (linkHref.substring(linkHref.lastIndexOf('/') + 1) === currentUrl) {
            $(this).addClass('active');
        }
    });
});

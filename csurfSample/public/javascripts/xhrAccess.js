'use strict';
$(function() {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        var token;
        if (!options.crossDomain) {
            token = $('#token').val();
            if (token) {
                return jqXHR.setRequestHeader('X-XSRF-Token', token);
            }
        }
    });
    function cheer() {
        var cheerPost = $.post('/registXhr', '');
        cheerPost.done(function(result) {
            alert(result);
        });
    }
    $('#xhrSubmit').click(function() {
        cheer();
    });
});

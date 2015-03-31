/**
 * Created by nxtonic on 31/03/15.
 */

$(document).ready(function(){
    $('#down-arrow, #svgcontainer').on('click', function () {
       $("body,html").animate({ scrollTop: $(window).height() }, 600, 'swing');
    });
});
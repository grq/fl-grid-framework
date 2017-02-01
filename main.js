$(document).ready(function () {
    /* Render Table */
    var columns = 20,
        records = 100;
    var row = $('<div class="tr"/>');
    for (var i = 0; i < columns; i++) {
        var name = i ? 'Header ' + i : 'Select';
        row.append('<div class="th">' + name + '</div>');
    }
    $('.thead').append(row);
    for (var rec = 0; rec < records; rec++) {
        var row = $('<div class="tr"/>');
        for (var col = 0; col < columns; col++) {
            var name = col ? 'Record ' + rec + '-' + col : (rec + 1) + ')<input type="checkbox" />';
            row.append('<div class="td">' + name + '</div>');
        }
        $('.tbody').append(row);
    }
    /* Handler for header */
    $(window).scroll(function() {
        $(window).scrollTop();
        $('.thead').css('top', $(window).scrollTop());
    });
    $(window).scroll(function() {
        var scrollLeft = $(window).scrollLeft();
        $('.th:first-child, .td:first-child').css('left', scrollLeft);
        $('.grid').toggleClass('grid-moved-right', !!scrollLeft);
    });
});

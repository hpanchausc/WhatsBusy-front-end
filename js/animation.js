// Handler for .ready() called.
$(function() {
    $example = $('<iframe src="https://giphy.com/embed/xUPGcoTKhfDvStjxMA" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
    $(".home-section-photo")
        .mouseenter(function() {
            alert("Enter")
        })
        .mouseleave(function() {
            alert("Left")
        })
})



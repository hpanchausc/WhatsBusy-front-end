const animationArr = [
    'images/home-7/Industry.png', // 5
    '/images/home-7/Segment.png', // 10
]

// Initialize Counter.
var count = 0

// Handler for .ready() called.
$(function() {
    // Loop through array of animations/pictures.
    $.each(animationArr, function( index, value ) {

        // Interval to display every 5 seconds.
        setInterval(() => {
            // When it hits 5 seconds then display the value ===
            if ((count / 5) === index)  {
                if($('.overlay')) {
                    $('.overlay').remove()
                }
                $('.home-section-photo').append($(`<img src=${value} class="overlay img-fluid animated fadeIn">`))
                console.log(value)
                count++
            } else if (count === (animationArr.length * 5)) {
                count = 0
            } else {
                count++
            }
            console.log(count)
        }, 5000);
    })
})

/*

if ((count / 5) === index)  {
                console.log(value)
                count++
            } else if (count === (testArr.length * 5)) {
                count = 0
            } else {
                count++
            }

*/
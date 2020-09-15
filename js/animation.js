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
            // When it hits 5 seconds then display the value at the index.
            // For example: 5 seconds / 5 === Index 0
            if ((count / 5) === index)  {
                // Remove appended element to not cluster the DOM.
                if($('.overlay')) {
                    $('.overlay').remove()
                }
                // Append the element to the DIV container as an IMG.
                $('.home-section-photo').append($(`<img src=${value} class="overlay img-fluid animated fadeIn">`))
                console.log(value)
                count++
            // Resets count if the end of the array is reached to reset the animation to the beginning.
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
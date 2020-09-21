const animationGif = $(`<img src="/images/home-7/animation/home-section-animation.gif" class="overlay img-fluid animated fadeIn">"`)

$(function() {
    $('.home-section-photo').append(animationGif)
})

// Original Code that used seperate PNGs and gifs stored in an array.

/*

const animationArr = [
    './images/home-7/animation/first-animation.gif',
    './images/home-7/animation/second-animation.gif',
    './images/home-7/animation/second.png',
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
            if ((count / 2) === index) {
                // Remove appended element to not cluster the DOM.
                if($('.overlay')) {
                    $('.overlay').remove()
                }
                // Append the element to the DIV container as an IMG.
                $('.home-section-photo').append($(`<img src=${value} class="overlay img-fluid animated fadeIn">`))
                console.log(value)
                count++
            // Resets count if the end of the array is reached to reset the animation to the beginning.
            } else if (count === (animationArr.length * 2)) {
                count = 0
            } else {
                count++
            }
            console.log(count)
            console.log(index + " === " + value)
        }, 2000)
    })
})

*/
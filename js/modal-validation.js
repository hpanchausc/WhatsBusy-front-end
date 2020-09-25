$(function() {
    $("#contact-form-modal").validate({
        rules: {
            _firstName: {
                required: true,
            },
            _lastName: {
                required: true,
            },
            _email: {
                required: true,
                email: true
            },
            _number: {
                required: true,
                phoneUS: true
            },
            _restaurant: {
                required: true
            },
        action: "required"
    },

        messages: {
            pName: {
                required: "Please enter your first name"
            },
            _lastName: {
                required: "Please enter your last name",
            },
            _email: {
                required: true,
                email: "Please enter a valid email address."
            },
            _number: {
                phoneUS: "Please enter in a valid US phone number"
            },
            _restaurant: {
                required: "Please enter your restaurant's name"
            },
            action: "Please provide some data"
        }
    })
})
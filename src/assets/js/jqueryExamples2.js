
$(document).ready( () => {
    $('#btn1').on('click', () => {
        $('#para1').toggle();
    });
    
    // Combo of mouseenter & mouseleave.
    $('#btn2').hover(() => {
        $('#para1').toggle();
    });

    $('#btn3').click( (event) => {
        console.log(event.currentTarget.className)
    });

    $(document).on('mousemove', (event) => {
        $('#coords').text(event.clientX + ', ' + event.clientY)
    });

    $(document).keypress( (event) => {
        //console.log('keypress:', event.key)
    });
    
    $('#gender').change( (event) => {
        console.log(event.target.value)
    });

    $('form').submit( (event) => {
        event.preventDefault();
        console.log($('#name').val()); // text field
        console.log($('#email').val()); // email field
        console.log($('#gender').val()); // select list
    });





});




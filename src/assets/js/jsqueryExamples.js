console.log('hi')

setInterval(() => {
    location.reload();
}, 3000);


// Mostly just CSS selectors.
// Hide <h1> tags.
//$('h1').hide();

// Note syntax for accessing id withing <h1> tags.
// But just #heading1 works as expected, too.
//$('h1#heading1').hide();

// Hide <h1> tag of certain class.
//$('h1.heading2').hide();

// To access style attributes.
$('span').css('color', 'red')

// Accessing <li>s w/in id'd list.
$('#list li:first').css('color', 'green')
$('#list li:last').css('color', 'green')
$('#list li:even').css('background-color', 'yellow')

// Forms, getting elements with 'button' as value for type attribute.
//$(':button').hide();
// Or submit ...
//$(':submit').hide();
// Or text ...
//$(':text').hide();

// Attributes as selectors:
// Elements that have an href attribute.
$('[href]').css('color', 'red')

// Elements that have an href attribute VALUE (note: case-sensitive).
$('[href="http://Yahoo.com"]').css('background-color', 'pink')





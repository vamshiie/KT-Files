$()  // jQuery $ symbol
// jQuery()

/** Uses of JQUERY 
 HTML/DOM manipulation
 CSS manipulation
 HTML event methods
 Effects and animations
 AJAX
 Utilities
 */

$(document).ready(function(){
    console.log("yayy we are using jquery...!");
})

//shorthand version.
// $(function(){
//     console.log("yayy we are using jquery...!");
// })

// $("selector")  // selector we can add id,class, attributes, psuedo Class, psuedo Elements

let maindiv;
maindiv = $("#maindiv1").html();
maindiv = $("#maindiv1");
// $("#maindiv1").click(function() {
//     // $('p').hide();
//     // $("p").fadeOut('slow');
//     // $("p").slideUp('slow');
//     // $("p").css("color", "red").slideUp(2000).slideDown(2000); 
//     // $("p").css("color", "red"); 
//     // $("p").css("background", "green"); 
//     $("p").css({"color":"red","background":"green","fontSize":"24px"}); 
//     // alert("you just removed p tag")
// });

// $("#btn").dblclick(function () {
$("#btn").click(function () {
    // $('p').show();
    // $('p').fadeIn('fast');
    // $('p').slideDown('fast');

    // getting values
    let val;     
    val = $("input").val();      
    val = $("p").text();

    // Setting a value      
    // val =  $("p").text("this text is being rendered from jquery");
    // val =  $("p").html("<b>this is bold taggggg</b>");
    // val = $("input").class()

    //getting class
    val = $("input").attr('class')
    // setting class
    // val = $("input").attr('class','whatever')
    // val = $("input").toggleClass('classInfinity')
    
    // val = $('p').parent('body').toggleClass('classInfinity');
    // val = $('p').parents().toggleClass('classInfinity');
    // val = $('p').parentsUntil('body').toggleClass('classInfinity');
    // val = $('#maindiv1').children().toggleClass('classInfinity');
    val = $('#maindiv1').find('p').toggleClass('classInfinity');


    console.log(val);
})
console.log(maindiv);

// Events in jquery 
// All the event in javascript are in jqurey as well

// 1.MouseEvents,       - click,dblclick,mouseenter,mouseleave
// 2.keyboard Events,   - keyup,keypress,keydown
// 3.Form Events,       - submit, change, focus, blur
// 4.Document evnts     - load,scroll,resize,unload


//====== Traversing DOM/HTML======//
// parent
// parents

//====== Childern========//
// children

//===== Sibiling =======//

// siblings()
// next()
// nextAll()
// nextUntil()
// prev()
// prevAll()
// prevUntil()








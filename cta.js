document.getElementsByTagName("NAV")[0].innerHTML ='<ul>'+
  '<li><a href="./">Home</a></li>'+
    '<li><a href="directories">Directories and Files</a></li>'+
    '<li><a href="lettersnumbers">Letters and Numbers</a></li>'+
    '<li><a href="rubybits">Ruby Tidbits</a></li>'+
    '<li><a href="identifiers">Ruby Identifiers</a></li>'+
    '<li><a href="oo_programming">OOP</a></li>'+
    '<li><a href="resources">More Resources</a></li>'+
  '</ul>';

document.getElementById("mobilenav").innerHTML ='<ul>'+
  '<li><a href="./">Home</a></li>'+
    '<li><a href="directories">Directories and Files</a></li>'+
    '<li><a href="lettersnumbers">Letters and Numbers</a></li>'+
    '<li><a href="rubybits">Ruby Tidbits</a></li>'+
    '<li><a href="identifiers">Ruby Identifiers</a></li>'+
    '<li><a href="oo_programming">OOP</a></li>'+
    '<li><a href="resources">More Resources</a></li>'+
  '</ul>';


document.getElementById("secondaryNav").innerHTML ='<div class="panel">'+
   '<h3>Flashcards</h3>'+
   '<p>Flashcards have been a useful tool that have helped me memorize terms and phrases by sight. View my homemade flash cards below.</p>'+
    '<ul><li><a href="flashcard.html">Set 1</a></li></ul>'+
    '</div>'+
    '<a class="trigger" href="#">flashcards</a>';

//   '<div style="clear:both;"></div>'+
//   '<h3>Other Languages</h3>'+
//   '<p>The journey doesn\'t end at Ruby and Rails. Below you\'ll find my HTML5, CSS3 and Javascript journals.</p>'+
//   '<div style="clear:both;"></div>'+
//      '<div class="columns">'+
//        '<div class="colleft">'+
//          '<h3>HTML & CSS</h3>'+
//             '<ul>'+
//              '<li><a href="/" title="cascade">Cascade Order</a></li>'+
//              '<li><a href="/" title="structures">Structures</a></li>'+
//                '<li><a href="/" title="transitions">Transitions</a></li>'+
//                '<li><a href="/" title="sass">Sass</a></li>'+
//                '<li><a href="/" title="mobile">Mobile</a></li>'+
//              '</ul>'+
//            '</div>'+
//            '<div class="colright">'+
//              '<h3>Javascript</h3>'+
//              '<ul>'+
//                '<li><a href="/" title="variables">Variables</a></li>'+
//                '<li><a href="/" title="files">File Naming</a></li>'+
//                '<li><a href="/" title="operators">Operators</a></li>'+
//                '<li><a href="/" title="popout">Pop Out Nav</a></li>'+
//                '<li><a href="/" title="jquery">Jquery</a></li>'+
//              '</ul>'+
//            '</div>'+
//          '</div>'+
//          '<div style="clear:both;"></div>'+
//        '</div>'+
//        '<a class="trigger" href="#">more</a>';


document.getElementsByTagName("FOOTER")[0].innerHTML = '<h4>Ruby Wars '+currentYear()+ ' - Website by <a href="http://www.tinaellisbend.com/" target="_blank" />Tina Ellis</a></h4>';

//change specific element by ID
//document.getElementById('{id goes here - case sensitive}').innerHTML = '';
//document.getElementById('')

function currentYear(){
  var date=new Date();
  var year=date.getFullYear();
  return year;
}

(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

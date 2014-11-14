 $(document).ready(function() {


     var $article = $('article');


     function addtwit(item) {

         var $tweet = $('<div></div>');
         $tweet.text('@' + item.user + ': ' + item.message +"   time: " + item.created_at);
         $tweet.appendTo($article);
         ind += 1
     }
     var ind = 0;
     streams.home.forEach(addtwit);


     $('button').on('click', function() {
         var ix = ind;
         var arr = streams.home.slice(ix, streams.home.length);
         arr.forEach(addtwit);
     });

 });
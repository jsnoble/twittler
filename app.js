$(document).ready(function() {


    var $article = $('article');


    function addtwit(item) {
        var $tweet = $('<div class="indtweet"></div>');
        var $user = $('<a href= "#" class="name"></a>');
        var $message = $('<span class="message"></span>');
        var $time = $('<span class="time"></span>');
        $user.text('@' + item.user);
        $message.text(" " + item.message);
        $time.text(" time: " + item.created_at);

        $tweet.append($user, $message, $time);
        $tweet.appendTo($article)

        ind += 1
    }
    var ind = 0;
    streams.home.forEach(addtwit);

    $(document).on("click", ".name", function() {
        var user = $(this).text().slice(1);
        $('.indtweet').remove();
        streams.users[user].forEach(addtwit);
    });


    $('button').on('click', function() {
        var ix = ind;
        var arr = streams.home.slice(ix, streams.home.length);
        arr.forEach(addtwit);
    });

});
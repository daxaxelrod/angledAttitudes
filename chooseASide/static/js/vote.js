function sendVote(pk, topicURL) {
    var score = $("#"+pk+"_score");
    console.log(score);
    var opinion = $("#"+pk);
    var csrftoken = getCookie('csrftoken');
    $.post( topicURL, { vote: pk, csrfmiddlewaretoken: csrftoken}, function(data){
        var parsed = JSON.parse(data);
        score.text(parsed['current_score']);
        console.log(data['current_score']);
        opinion.text("Got it!");
        opinion.attr('onclick', '');
    });
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


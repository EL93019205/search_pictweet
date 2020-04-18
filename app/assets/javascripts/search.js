$(function(){
  var search_list = $(".contents.row");
  $(".search-input").on("keyup", function(){
    var input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets){
      search_list.empty();
      if(tweets.length !== 0){
      }
      else{
      }
    })
  });
});

$(function(){
  var search_list = $(".contents.row");

  function appendTweet(tweet){
    var current_user = "";

    if( tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ){
      current_user = `<li>
                        <a href="/tweets/${tweet.id}/edit" data-method="get" >編集</a>
                      </li>
                      <li>
                        <a href="/tweets/${tweet.id}" data-method="delete" >削除</a>
                      </li>`;
    }

    var html = `<div class="content_post" style="background-image: url(${tweet.image});">
                  <div class="more">
                    <span><img src="/assets/arrow_top.png"></span>
                    <ul class="more_list">
                      <li>
                        <a href="/tweets/${tweet.id}" data-method="get" >詳細</a>
                      </li>
                      ${current_user}
                    </ul>
                  </div>
                  <p>${tweet.text}</p><br>
                  <span class="name">
                    <a href="/users/${tweet.user_id}">
                      <span>投稿者</span>${tweet.nickname}
                    </a>
                  </span>
                </div>`;

    search_list.append(html);
  }

  function appendErrMsgToHTML(msg){
    var html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }

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
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else{
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
  });
});

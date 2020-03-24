$(function(){
  function buildHTML(index){
    var html = `<div class=wrapper>
    <header>
      <div class= header>
        <div class= contents>
          <i class="fas fa-sign-in-alt">
            <a href="#"class= content>ログイン</a>
          </i>
        </div>
        <div class= header-contents>
          <h1 class= title>BodyCheck</h1>
          <p>体型が変わると、人生が変わる。</p>
        </div>
      </div>
    </header>
    <div class = "main">
      <div class = "main-contents">
        <h2 class= "main-title">基礎代謝計算</h2>
        <div class="form">
          <%= render "form" %>
        </div>
        <div class = "contents-right">
          <%= render "contents-right" %>
        </div>
      </div>
    </div>
    <div class= footer>
    </div>
  </div>
  `
  return html;
  }
  $('form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var group_id = $('.group_id').attr('value');
    var url = root
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      processData: false,
      contentType: false
    })
    .done(function(index) {
      var html = buildHTML(index);
      $('.main').append(html);
      $('.form').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});
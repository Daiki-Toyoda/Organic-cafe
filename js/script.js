$(function(){
  console.log('read jQuery File!');

  //ナビゲーションスクロール用 
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); 
    var pos = $(elmHash).offset().top;	
    $('body,html').animate({scrollTop: pos}, 500); 
    return false;
  });

  // ハンバーガーメニュー
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line , header').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  });

  // コンタクト 
  $('.mail').hover(
    function(){
      $('.mail').css('background-color','#fff');
      $('.mail').css('color','#282B2B');
      $('.mail').css('transition','all 0.4s');
    },
    function(){
      $('.mail').css('background-color','#282B2B');
      $('.mail').css('color','#fff');
      $('.mail').css('transition','all 0.4s');
    }
  );

  $('.tell').hover(
    function(){
      $('.tell').css('background-color','#fff');
      $('.tell').css('color','#282B2B');
      $('.tell').css('transition','all 0.4s');
    },
    function(){
      $('.tell').css('background-color','#282B2B');
      $('.tell').css('color','#fff');
      $('.tell').css('transition','all 0.4s');
    }
  );

});
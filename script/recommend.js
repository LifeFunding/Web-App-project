$(document).ready(function(){
    $('#headerWrap #titleBox #title').click(function(){
        window.location.href="../html/home.html";
    });
    $('#headerWrap #titleBox #mypage').click(function(){
        window.location.href="../html/mypage.html";
    });
    $('#headerWrap #titleBox #login').click(function(){
        window.location.href="../html/login.html";
    });
    $('#headerWrap #titleBox #join').click(function(){
        window.location.href="../html/join.html";
    });
    $('#recommend #finish').click(function(){
        window.location.href="../html/home.html";
    });
    $('#recommend #sns #facebookIcon').click(function(){
        window.open("https://facebook.com");
    });
    $('#recommend #sns #twitterIcon').click(function(){
        window.open("https://twitter.com");
    });
    $('#recommend #sns #instagramIcon').click(function(){
        window.open("https://instagram.com");
    });
});
// JavaScript Document
$(document).ready(function() {
    $("#menu").click(function() {
        var $nav = $("#nav");
        $("#menu").toggleClass("active");
        if ($nav.css('display') === 'none') {
            $nav.fadeIn();
        } else {
            $nav.fadeOut();
        }
    });

    function setHomeBannerHeight() {
        var windowHeight = $(window).height();
        $('#in-index').height(windowHeight);
    }
    setHomeBannerHeight();
    $(window).resize(function() {
        setHomeBannerHeight();
    });
    $(".navM a,.indexBtn a").click(function() {
        var href = $(this).attr("href");
        var pos = $(href).offset().top;
        $("html,body").animate({
            scrollTop: pos
        }, 500);
        return false;
    });
    var url = window.location.toString();
    var id = url.split("#")[1];
    if (id) {
        var t = $("#" + id).offset().top;
        $("html,body").animate({
            scrollTop: t
        }, 500);
        return false;
    }
    //首页效果
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true,
        autoPlay: true,
        delayTime: 500
    });

    // 注册登录页
    function loginRegedit() {
        var bodyHeight = $(window).height();
        var menuHeight = $("#menu").height();
        $(".loginRegedit").height(bodyHeight - menuHeight);
    }
    loginRegedit();
    $(window).resize(function() {
        loginRegedit();
    });
});
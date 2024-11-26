jQuery( function( $ ){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    //「js-header-menu」クラスクリック時、「is-open」クラスの着脱を行う
    $(".js-header-menu").on("click", function(){
        $(this).toggleClass("is-open");
        $(".js-header").toggleClass("is-open");
        $(".js-sidebar").toggleClass("is-open");
        $("body").toggleClass("is-open");
    });

    //「js-sidebar-close」クラスクリック時、「is-open」クラスの削除を行う
    $(".js-sidebar-close").on("click", function(){
        //$(this).toggleClass("is-open");
        $(".js-header").removeClass("is-open");
        $(".js-sidebar").removeClass("is-open");
        $("body").removeClass("is-open");
    });

    //マスクエリアクリック時、「is-open」クラスの着脱を行う
    $(".c-mask--whole").on("click", function(){
        $(".js-header").removeClass("is-open");
        $(".js-sidebar").removeClass("is-open");
        $("body").removeClass("is-open");
    });

    //画面の横幅が変更された場合
    $(window).resize(function() {
        var width = $(window).width();  //画面幅を取得
        if(width > 1280) {  //画面幅がPCサイズ以上となった場合
            //各クラスに付与していた「is-open」クラスを削除する = 無条件でサイドバーを閉じる
            //$(this).remove("is-open");
            $(".js-header").removeClass("is-open");
            $(".l-sidebar").removeClass("is-open");
            $("body").removeClass("is-open");
        }
    });
});
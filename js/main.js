// ページがダウンロードされるのを待つ
window.onload = function(){

    /*やっている処理は下のハンバーガーの処理と同じ。こちらの方が読みやすいし管理しやすいらしい
     //-----------------------------------------------------------------------------
    //-------------------------ハンバーガーが押された時の処理-------------------------
    //-----------------------------------------------------------------------------
    document.getElementById("smartphone-menu-button").onclick = function () {
        //メニューの表示がされてなかったら、表示する
        var menu = document.getElementById("smartphone-menu-list");
        if (menu.style.display === "none"){
            menu.style.display = "block";
        }
        //メニューの表示がされてたら、表示しない
        else if (menu.style.display === "block"){
            menu.style.display = "none";
        }
    };
    */

    //-----------------------------------------------------------------------------
    //-------------------------ハンバーガーが押された時の処理-------------------------
    //-----------------------------------------------------------------------------
    var menuButton = document.getElementById("smartphone-menu-button");
    //メニューが表示されていないことを定義する
    var menuDisplayFlag = false;
    document.getElementById("smartphone-menu-button").onclick = function () {
        /*メニューの表示がされてなかったら、表示する*/
        if (menuDisplayFlag === false){
            document.getElementById("smartphone-menu-list").style.display = "block";
            menuDisplayFlag = true;
        }
        //メニューの表示がされてたら、表示しない
        else if (menuDisplayFlag === true){
            document.getElementById("smartphone-menu-list").style.display = "none";
            menuDisplayFlag = false;
        }

        //メニューのリストの中の一つの項目をクリックするとメニューが非表示になる
        var linkCount = document.getElementsByClassName("js-menu-button-click").length;
        for(var i = 0; i < linkCount; i++) {
            document.getElementsByClassName("js-menu-button-click")[i].onclick = function () {
                //smartphone-menu-listを非表示にする
                console.log(1);
                document.getElementById("smartphone-menu-list").style.display = "none";
            };
        }
    };

    //-----------------------------------------------------------------------------
    //--------------------------------言語切替の処理--------------------------------
    //-----------------------------------------------------------------------------
};











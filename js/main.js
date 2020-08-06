// ページがダウンロードされるのを待つ
window.onload = function(){

    //ページの「予約メール」欄以外のものがクリックされたら、
    window.document.getElementById("reservation-mail").onblur = function(){
        // ユーザーのメールアドレスを取得する
        var email = document.getElementById("reservation-mail").value;
        //　メールアドレスがメールアドレスの形が間違っているかを取得する
        var result = email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
        //もしも、メールアドレスの形が間違っていたら
        if(result === null){
            //　予約エラーを表示する
            document.getElementById("reservation-mail-error").style.display = "block";
        }else{
            // 間違っていなかったら、予約エラーを表示しない
            document.getElementById("reservation-mail-error").style.display = "none";
        }
    };

    //ページの「お名前」欄以外のものがクリックされたら、
    window.document.getElementById("reservation-name").onblur = function(){
        // ユーザーの名前を取得する
        var name = document.getElementById("reservation-name").value;
        //　名前の長さを計算する
        var result = name.length;
        //もしも、名前が10文字以上なら
        if(result > 10){
            //　予約エラーを表示する
            document.getElementById("reservation-name-error").style.display = "block";
        }else{
            // 間違っていなかったら、予約エラーを表示しない
            document.getElementById("reservation-name-error").style.display = "none";
        }
    };
};














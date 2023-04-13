// 選取 DOM
var regBtn = document.querySelector("#regBtn");
var url = "https://api.jsonbin.io/v3/b/641011eaebd26539d08e4fc8?meta=false";
var masterKey = "$2b$10$uAY63O5Fes1fCp6Ze59tL.vWS25IwEQ/eYlkKX/wfeG1Ca2q.yp2.";
var accessKey = "$2b$10$Ye7I7wEvKzOmjKnes94bXOoQOzmHrmpJ.aBqbytbPwfBJLhQIbXEa";




// 事件監聽
regBtn.addEventListener('click', reg);





function reg(e){
    e.preventDefault();
    var email = document.querySelector("#enterEmail").value;
    var pwd = document.querySelector("#enterPwd").value;
    var username = document.querySelector("#enterUsername").value;
    var checkPwd = document.querySelector("#enterCheckPwd").value;
    var data = JSON.parse(localStorage.getItem('account')) || [];
    var num = data.length;

    // 檢查空白欄位
    if(email === '' || pwd === '' || username === '' ||checkPwd === ''){
        alert('欄位不可空白！');
        return;
    }

    // 確認密碼正確
    if(pwd !== checkPwd){
        alert('請再次確認密碼！')
        return;
    }


    for(var i=0 ; i<num ; i++){
        if(data[i].email === email){
            alert('此電子郵件已註冊過');
            return;
        }
    }
    console.log('確認完畢');

    //註冊帳號
    var userInfo = {'email' : email, 'username' : username, 'pwd' : pwd};
    data.push(userInfo);
    localStorage.setItem('account', JSON.stringify(data));
    alert('註冊成功！');
    window.location.replace('index.html');
}
    



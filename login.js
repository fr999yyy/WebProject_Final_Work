
var loginBtn = document.querySelector('#loginBtn');
console.log(localStorage.getItem('account'));
loginBtn.addEventListener('click', login);
// localStorage.clear('account');
var data = JSON.parse(localStorage.getItem('account')) || [];
var num = data.length;
console.log(localStorage.getItem('account'));

function login(){
    var email = document.querySelector("#enterEmail").value;
    var pwd = document.querySelector("#enterPwd").value;
    if(email === '' || pwd === ''){
        alert('欄位不可空白！');
        return;
    }
    for(var i=0; i<num ; i++){
        if(data[i].email == email && data[i].pwd == pwd){
            alert('登入成功！');
            window.location.href = "todo.html?username="+data[i].username;
            return;
        }
    }
    alert('帳號或密碼錯誤！');
    return;
}
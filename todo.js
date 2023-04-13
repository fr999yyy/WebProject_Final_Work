// LI尾
var liEnd = '<button class="editBtn">editBtn<img src="edit.png" alt="" class="editicon" width="16" height="16"></button><button class="doneBtn">doneBtn<img src="done.png" alt="" class="doneicon" width="16" height="16"></button></li>'
var editNum;
var num;

//存取用戶資料
const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);
const username = urlParams.get('username');
// localStorage.clear(username+'dataArr');
console.log(listArr);
document.querySelector('.showUserID').innerHTML = '使用者：'+username;

// 登出
document.querySelector('.logoutBtn').addEventListener('click', logout);

// 載入資料 
if(document.querySelector(".editInput")){
    document.querySelector(".editInput").remove();
}
var addbtn = document.querySelector('.addBtn');
var doneBtn = document.querySelectorAll('.doneBtn');
var inbox = document.querySelector('.inbox');
var string = '';
var listArr = JSON.parse(localStorage.getItem(username+'dataArr')) || [];
updateList();

// 事件監聽
addbtn.addEventListener('click', add, false);
inbox.addEventListener('click', edit, false);
inbox.addEventListener('click', del, false);



function updateList(){
    var listLen = listArr.length;
    content = ''; 
    for(var i=0; i<listLen; i++){
        content += '<li class="todo" data-num="'+i+'">'+listArr[i]+liEnd;
    }
    inbox.innerHTML = content;
    // 自動延伸列表
    if(listArr.length > 12){
        document.querySelector('.todoWrap').style.height= 'auto';
    }
    else if(listArr.length <= 12){
    document.querySelector('.todoWrap').style.height= '560px';
}
    localStorage.setItem(username+'dataArr', JSON.stringify(listArr));
}

function add(){
    string = document.querySelector('.addString').value;
    if(string == ''){
        alert('請輸入文字！');
        return;
    }
    listArr.push(string);
    updateList();  
    document.querySelector(".addString").value = '';
}

function edit(e){
    if (e.target.classList.contains('editBtn')) { 
        num = e.target.parentNode.dataset.num;
        if(editNum == num ){
            var newEdit = document.querySelector(".editInput").value;
            listArr[num] = newEdit;
            updateList();
            editNum = undefined;
        }
        else if(editNum == undefined || editNum !== num){
            if(document.querySelector(".editInput")){
                document.querySelector(".editInput").remove();
            }
            editNum = e.target.parentNode.dataset.num; 
            document.querySelector('[data-num="'+editNum+'"]').innerHTML = '<input type="text" name="" id="" class="editInput" value="'+listArr[num]+'"></input>'+listArr[num]+liEnd;
        }

    }

}

function del(e){
    if (e.target.classList.contains('doneBtn')) { 
        if(document.querySelector(".editInput")){
            document.querySelector(".editInput").remove();
        }
        var num = e.target.parentNode.dataset.num; 
        listArr.splice(num, 1);
        updateList();
    }
}


setInterval(updateClock, 1000); // 時鐘運轉
setInterval()


function logout(){
    alert('登出成功！');
    window.location.replace('index.html');
}

function updateClock(){
    var time = document.querySelector(".time");
    var date = document.querySelector(".date") ;   
    const nd = new Date();
    const year = nd.getFullYear();
    const month = nd.getMonth() + 1;
    const day = nd.getDate();
    let hour = nd.getHours();
    let min = nd.getMinutes();
    min = min < 10 ? '0' + min : min;
    hour= hour < 10 ? '0' + hour : hour;
    time.innerHTML = hour + ':' + min;
    date.innerHTML = year + '/' + month + '/' + day;
}

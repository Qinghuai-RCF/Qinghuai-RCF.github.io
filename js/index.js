//在页面加载时隐藏其他列表
function hide() {
    document.getElementById('头像2').style.display = 'none';
    /* 功能选项.style.display = 'none'; */
}

//单击一个元素显示对应的div,其他div隐藏！！！
function show(id) {
    var divs = document.getElementsByName("头像")
   /*  var lis = document.getElementsByName("功能列表") */
    if (id == 1) {
        /* 功能选项.style.display = ''; */
        功能选项.style.paddingTop = '60px';
        功能选项.style.paddingLeft = '10px';
        功能选项.style.paddingRight = '10px';
        功能选项.style.paddingBottom = '10px';
        功能选项.style.right = '10px';
        功能选项.style.top = '10px';
        功能选项.style.width = '300px';
        功能选项.style.height = '160px';
        document.getElementById('头像2').style.display = '';
        document.getElementById('头像1').style.display = 'none';
    } else {
        /* 功能选项.style.display = 'none'; */
        功能选项.style.paddingTop = '0';
        功能选项.style.paddingLeft = '0';
        功能选项.style.paddingRight = '0';
        功能选项.style.paddingBottom = '0';
        功能选项.style.right = '20px';
        功能选项.style.top = '20px';
        功能选项.style.width = '50px';
        功能选项.style.height = '50px';
        document.getElementById('头像1').style.display = '';
        document.getElementById('头像2').style.display = 'none';
    }
}
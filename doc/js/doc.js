//在页面加载时隐藏其他列表
function hide() {
    document.getElementById('list1').style.background = 'rgb(213, 232, 255)';
    document.getElementById('list1').style.borderBottom = '2px solid #3589F3';
    document.getElementById('列表2').style.display = 'none';
    document.getElementById('列表3').style.display = 'none';
}

//单击一个元素显示对应的div,其他div隐藏！！！
function show(id) {
    var divs = document.getElementsByName("文档列表")
    var lis = document.getElementsByName("导航列表")
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id == "列表" + id) {
            divs[i].style.display = '';
            lis[i].style.borderBottom = '2px solid #3589F3';
            lis[i].style.background = 'rgb(213, 232, 255)';
        } else {
            divs[i].style.display = 'none';
            lis[i].style.borderBottom = '';
            lis[i].style.background = '';
        }
    }
}
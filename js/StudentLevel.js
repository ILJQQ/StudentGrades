/**
 * Created by huyiqing on 16/11/16.
 */
//获取输入框内容并判断内容给出回馈
function setLevel(){
    //申明变量为输入框变量赋值
    var name = document.getElementById('studentName').value;
    var grade = document.getElementById('studentGrade').value;
    var level='';
    var ifGood;
    var msg = '';

    //检测输入内容是否符合要求并在符合时给出回馈
    if(name.length == 0 || name.length > 15) {
        alert("姓名输入过长或者未输入请仔细检查哦!");
        init();
    } else if(grade<0 || grade>100 || grade == null){
            alert("分数输入错误!请输入0-100之间的数字");
            init();
    }else if(!isNaN(grade)) {
            //直接通过算法判断level简化代码省去了switch判断过程
            //parseInt(10-grade/10) + 1
            level = 10 - parseInt(grade/10);
            if (level == 0){
                level = 1;
            }
            //添加根据学生成绩level给出更加形象化的分区展示功能
            if(level <= 2){
                ifGood = "优秀";
            }else if(level <= 3){
                ifGood = "良好";
            }else if(level <=4){
                ifGood = "及格";
            }else{
                ifGood = "未能及格继续努力啊!"
            }
            msg = "学生:" + name + "的是成绩是" + grade + "分, 属于:" + level + "级, " + ifGood;
            var el = document.getElementById('result');
            if(ifGood == "未能及格继续努力啊!"){
                el.style.backgroundColor = '#ff0000';
            }else{
                el.style.backgroundColor = '#35b558';
            }
            el.innerHTML = msg;
    } else {
        alert("输入错误!")
    }
}

//初始化功能 initial
function init(){
    document.getElementById('studentName').value = "";
    document.getElementById('studentGrade').value = "";
    var el = document.getElementById('result');
    el.innerHTML = "";
}
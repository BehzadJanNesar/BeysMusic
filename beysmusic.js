// poster1
var like = 85
document.getElementById('like-number').innerHTML=like
var num = 1 
function onclicklike() {
    if (num == 1) {
        like+=1
        document.getElementById('like-number').innerHTML=like
        document.getElementById('unlike-icon').style.color="#f78da7"
        document.getElementById('unlike-icon').style.zIndex=3
        document.getElementById('like-icon').style.zIndex=1
        num=0
    }
    else {
        like-=1
        document.getElementById('like-number').innerHTML=like
        document.getElementById('like-icon').style.color="#9a9a9a"
        document.getElementById('like-icon').style.zIndex=4
        document.getElementById('unlike-icon').style.zIndex=1
        num = 1
    }
}


// poster2
var like2 = 46
document.getElementById('like-number-for-poster2').innerHTML=like2
var num2 = 0 
function onclicklike2() {
    if (num2 == 0) {
        like2+=1
        document.getElementById('like-number-for-poster2').innerHTML=like2
        document.getElementById('unlike-icon2').style.color="#f78da7"
        document.getElementById('unlike-icon2').style.zIndex=2
        document.getElementById('like-icon2').style.zIndex=1
        num2=1
    }
    else {
        like2-=1
        document.getElementById('like-number-for-poster2').innerHTML=like2
        document.getElementById('like-icon2').style.color="#9a9a9a"
        document.getElementById('like-icon2').style.zIndex=3
        document.getElementById('unlike-icon2').style.zIndex=1
        num2 = 0
    }
}

// poster3
var like3 = 25
document.getElementById('like-number-for-poster3').innerHTML=like3
var num3 = 0 
function onclicklike3() {
    if (num3 == 0) {
        like3+=1
        document.getElementById('like-number-for-poster3').innerHTML=like3
        document.getElementById('unlike-icon3').style.color="#f78da7"
        document.getElementById('unlike-icon3').style.zIndex=2
        document.getElementById('like-icon3').style.zIndex=1
        num3=1
    }
    else {
        like3-=1
        document.getElementById('like-number-for-poster3').innerHTML=like3
        document.getElementById('like-icon3').style.color="#9a9a9a"
        document.getElementById('like-icon3').style.zIndex=3
        document.getElementById('unlike-icon3').style.zIndex=1
        num3 = 0
    }
}

// poster4
var like4 = 35
document.getElementById('like-number-for-poster4').innerHTML=like4
var num4 = 1
function onclicklike4() {
    if (num4==1) {
        like4+=1
        document.getElementById('like-number-for-poster4').innerHTML=like4
        document.getElementById('unlike-icon4').style.color="#f78da7"
        document.getElementById('unlike-icon4').style.zIndex=2
        document.getElementById('like-icon4').style.zIndex=1
        num4 = 0
    }
    else {
        like4-=1
        document.getElementById('like-number-for-poster4').innerHTML=like4
        document.getElementById('like-icon4').style.color="#9a9a9a"
        document.getElementById('like-icon4').style.zIndex=2
        document.getElementById('unlike-icon4').style.zIndex=1
        num4 = 1
    }
}

// poster5
var like5 = 109
document.getElementById('like-number-for-poster5').innerHTML=like5
var num5 = 1
function onclicklike5() {
    if (num5==1) {
        like5+=1
        document.getElementById('like-number-for-poster5').innerHTML=like5
        document.getElementById('unlike-icon5').style.color="#f78da7"
        document.getElementById('unlike-icon5').style.zIndex=2
        document.getElementById('like-icon5').style.zIndex=1
        num5 = 0
    }
    else {
        like5-=1
        document.getElementById('like-number-for-poster5').innerHTML=like5
        document.getElementById('like-icon5').style.color="#9a9a9a"
        document.getElementById('like-icon5').style.zIndex=2
        document.getElementById('unlike-icon5').style.zIndex=1
        num5 = 1
    }
}

// poster6
var like6 = 85
document.getElementById('like-number-for-poster6').innerHTML=like6
var num6 = 1
function onclicklike6() {
    if (num6==1) {
        like6+=1
        document.getElementById('like-number-for-poster6').innerHTML=like6
        document.getElementById('unlike-icon6').style.color="#f78da7"
        document.getElementById('unlike-icon6').style.zIndex=2
        document.getElementById('like-icon6').style.zIndex=1
        num6 = 0
    }
    else {
        like6-=1
        document.getElementById('like-number-for-poster6').innerHTML=like6
        document.getElementById('like-icon6').style.color="#9a9a9a"
        document.getElementById('like-icon6').style.zIndex=2
        document.getElementById('unlike-icon6').style.zIndex=1
        num6 = 1
    }
}

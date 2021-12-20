function start(){
    document.getElementById('start').disabled = true;
    var pic_1 = document.getElementById('pic_1');
    var pic_2 = document.getElementById('pic_2');
    var pic_3 = document.getElementById('pic_3');
    var pic_4 = document.getElementById('pic_4');
    var pic_5 = document.getElementById('pic_5');
    var pic_6 = document.getElementById('pic_6');
    var pic_7 = document.getElementById('pic_7');
    var pic_8 = document.getElementById('pic_8');
    var pic_9 = document.getElementById('pic_9');
    var mas = [pic_1,pic_2,pic_3,pic_4,pic_5,pic_6,pic_7,pic_8,pic_9];
    let at_l4 = parseInt(localStorage.getItem('attemp_l4'))+1;
    localStorage.setItem('attemp_l4',at_l4);
    document.getElementById('cnt').innerHTML=0;
    document.getElementById('z').innerHTML=0;
    let time = 40;
    let time_interval = setInterval(updateCountdown,1000);
    function updateCountdown() {
        if (time > 0) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        time--;}
        if (time==0){
            document.getElementById("seconds").innerHTML=0;
            clearInterval(game);
            clearInterval(time_interval);
            open_form('Поздравляем!!!');
        }   
    }
    let n=0;
    let z = 0;
    let height = [0,0,0,0,0,0,0,0,0];
    function getRandomArbitrary(max,min){
        return Math.random()*(max-min)+min;
    }
    let game=setInterval(function(){
        let top,left;
        let cnt=0;
        for (let i=0;i<mas.length;i++){
            mas[i].style.opacity=1;
            mas[i].style.border='0px';
            height[i] = getRandomArbitrary(50,163);
            if (height[i]<100){
                cnt++;
                height[i]=50;
                mas[i].style.height=50+'px';
            }
            else{mas[i].style.height=height[i]+'px';}
            top = getRandomArbitrary(100,440);
            mas[i].style.top = top+'px';
            left = getRandomArbitrary(363,1100);
            mas[i].style.left = left+'px';
        
        }
        console.log(height);
        n+=cnt;
        document.getElementById('cnt').innerHTML=cnt;
        pic_1.onclick=function(){
            if(height[0]==50){
                pic_1.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_1.style.border='2px solid red';}
        }
        pic_2.onclick=function(){
            if(height[1]==50){
                pic_2.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_2.style.border='2px solid red';}
        }
        pic_3.onclick=function(){
            if(height[2]==50){
                pic_3.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_3.style.border='2px solid red';}
        }
        pic_4.onclick=function(){
            if(height[3]==50){
                pic_4.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_4.style.border='2px solid red';}
        }
        pic_5.onclick=function(){
            if(height[4]==50){
                pic_5.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_5.style.border='2px solid red';}
        }
        pic_6.onclick=function(){
            if(height[5]==50){
                pic_6.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_6.style.border='2px solid red';}
        }
        pic_7.onclick=function(){
            if(height[6]==50){
                pic_7.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_7.style.border='2px solid red';}
        }
        pic_8.onclick=function(){
            if(height[7]==50){
                pic_8.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_8.style.border='2px solid red';}
        }
        pic_9.onclick=function(){
            if(height[8]==50){
                pic_9.style.border = '2px solid green';
                z++;
                document.getElementById('z').innerHTML=z;
            }
            else{pic_9.style.border='2px solid red';}
        }
        

    },4000)
    function open_form(stroka){
        clearInterval(time_interval);
        var form = document.getElementById("end_form");
        
        form.style.display='block';
        document.getElementById('cnt_rc').innerHTML += n;
        document.getElementById('r_sc').innerHTML += z;
        if((n-z>=20) && z!=0){
            document.getElementById('res').innerHTML='Не плохо)'
            document.getElementById('sc').innerHTML += 20;
            localStorage.setItem('level_4',20);
        }
        else if(z==0){
            document.getElementById('res').innerHTML= "Вы проиграли(((";
            document.getElementById('sc').innerHTML += 0;
            localStorage.setItem('level_4',0);
        }
        else if((n-z>=15) && (n-z)<20){
            document.getElementById('res').innerHTML= "Хорошо сыграли!";
            document.getElementById('sc').innerHTML += 40;
            localStorage.setItem('level_4',40);
        }
        else if((n-z)<15 && (n-z)>=7 ){
            document.getElementById('res').innerHTML= "Хорошо сыграли!";
            document.getElementById('sc').innerHTML += 70;
            localStorage.setItem('level_4',70);
        }
        else if((n-z)<7 && (n-z)>0){
            document.getElementById('res').innerHTML= "Победа!!!";
            document.getElementById('sc').innerHTML += 90;
            localStorage.setItem('level_4',90);
        }
        else{
            document.getElementById('res').innerHTML= "Победа!!!";
            document.getElementById('sc').innerHTML += 100;
            localStorage.setItem('level_4',100);
        }
        
    }   
}
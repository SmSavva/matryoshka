function resize(){
        document.getElementById('start').disabled = true;
        var element = document.getElementById("pic");
        element.style.width = '5px';
        element.style.height = '165px';
        element.style.marginTop = '80%';
        element.style.marginLeft = '49%';
        let at_l1 = parseInt(localStorage.getItem('attemp_l1'))+1;
        localStorage.setItem('attemp_l1',at_l1);
        let time = 15;
        let time_interval = setInterval(updateCountdown, 1000);
        let wd = 0;
        let hg = 165;
        var id = setInterval(frame);
        let n = 0;
        let size = 211.50000000000085;
        function frame(){
            if (wd == 211.50000000000085 && hg == 400){
                wd = 0;
                hg = 165;
               frame();
            }
            else{
                wd = wd + 0.9;
                hg = hg + 1;
                console.log(wd, hg);
                element.style.width = wd + 'px';
                element.style.height = hg + 'px';
                pic.onclick = function(){
                    if (wd > size){
                        open_form('Вы проиграли!(');
                    }
                    else{
                        n++;
                        size = wd;
                        draw_contur(n, wd,hg);
                        if (n == 4){
                            open_form('Победа!!!');
                            
                        }
                        
                    }
                   
                }
            }
        }
       function draw_contur(n, wd_1, hg_1){
            idc = "cont_" + n;
            document.getElementById(idc).style.width = wd_1 + 25 + 'px';
            document.getElementById(idc).style.height = hg_1 + 'px';
            document.getElementById(idc).style.marginTop = '17%';
            document.getElementById(idc).style.marginLeft = '10.2%';
            document.getElementById(idc).style.visibility = "visible";
    
       }
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
            open_form('Время вышло!');
        }  
    }
    function open_form(stroka){
        clearInterval(time_interval);
        clearInterval(id);
        var form = document.getElementById("end_form");
        document.getElementById('res').innerHTML= stroka;
        form.style.display='block';
        if (stroka!='Победа!!!'){
           
            document.getElementById('sc').innerHTML+='-';
            
        }
        else{
            document.getElementById('sc').innerHTML +='50';
            localStorage.setItem('level_1', 50);
        }   
    }
}
function open_rules(){
    document.getElementById('modal_rules').style.visability="visible";
    document.getElementById('modal_rules').style.overflow="visible"
    document.getElementById('modal_rules').style.zIndex= 99;
}
function close_rules(){
    document.getElementById('modal_rules').style.visibility="hidden";
    document.getElementById('modal_rules').style.zIndex= -1;
}

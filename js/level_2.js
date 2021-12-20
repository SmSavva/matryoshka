// пространство, где изначально находятся картинки
const sektor_1 = document.querySelector('.pic-1');
const sektor_2 = document.querySelector('.pic-2');
const sektor_3 = document.querySelector('.pic-3');
const sektor_4 = document.querySelector('.pic-4');
const sektor_5 = document.querySelector('.pic-5');
const sektor_6 = document.querySelector('.pic-6');
const sektor_7 = document.querySelector('.pic-7');
const sektor_8 = document.querySelector('.pic-8');
const sektor_9 = document.querySelector('.pic-9');

//первая девятка 
const pic_1 = document.querySelector('#pic_1');//голубой 
const pic_2 = document.querySelector('#pic_2');//красный
const pic_3 = document.querySelector('#pic_3');//зеленый
const pic_4 = document.querySelector('#pic_4');//зеленый
const pic_5 = document.querySelector('#pic_5');//голубой
const pic_6 = document.querySelector('#pic_6');//красный
const pic_7 = document.querySelector('#pic_7');//красный
const pic_8 = document.querySelector('#pic_8');//зеленый
const pic_9 = document.querySelector('#pic_9');//голубой

// вторая девятка
const pic_1_2 = document.querySelector('#pic_1_2');//темно-зеленый
const pic_2_2 = document.querySelector('#pic_2_2');//желтый
const pic_3_2 = document.querySelector('#pic_3_2');//фиолетовый
const pic_4_2 = document.querySelector('#pic_4_2');//желтый
const pic_5_2 = document.querySelector('#pic_5_2');//фиолетовый
const pic_6_2 = document.querySelector('#pic_6_2');//темно-зеленый
const pic_7_2 = document.querySelector('#pic_7_2');//фиолетовый
const pic_8_2 = document.querySelector('#pic_8_2');//темно-зеленый
const pic_9_2 = document.querySelector('#pic_9_2');//желтый

const mas_pic = [pic_1,pic_2,pic_3,pic_4,pic_5,pic_6,pic_7,pic_8,pic_9];
const mas_pic_2 = [pic_1_2,pic_2_2,pic_3_2,pic_4_2,pic_5_2,pic_6_2,pic_7_2,pic_8_2,pic_9_2];
const sektors = [sektor_1,sektor_2,sektor_3, sektor_4,sektor_5,sektor_6,sektor_7,sektor_8,sektor_9];
function random_id(mas_pic){
    for(var j,x,i = mas_pic.length; i; j=parseInt(Math.random()*i),x=mas_pic[--i],mas_pic[i]=mas_pic[j], mas_pic[j]=x);
    return mas_pic;
}
const result_mas = random_id(mas_pic);
for(let i=0;i<result_mas.length;i++){
    sektors[i].appendChild(result_mas[i]);
}

function change(){
    // console.log(document.getElementById("pic_1").style.display)
    if (document.getElementById("pic_1").style.display != 'none'){
        document.getElementById('pic_1').style.display = 'none';
        document.getElementById('pic_1_2').style.display = "inline";
        document.getElementById('pic_2').style.display = 'none';
        document.getElementById('pic_2_2').style.display = 'inline';
        document.getElementById('pic_3').style.display = 'none';
        document.getElementById('pic_3_2').style.display = 'inline';
        document.getElementById('pic_4').style.display = 'none';
        document.getElementById('pic_4_2').style.display = 'inline';
        document.getElementById('pic_5').style.display = 'none';
        document.getElementById('pic_5_2').style.display = 'inline';
        document.getElementById('pic_6').style.display = 'none';
        document.getElementById('pic_6_2').style.display = 'inline';
        document.getElementById('pic_7').style.display = 'none';
        document.getElementById('pic_7_2').style.display = 'inline';
        document.getElementById('pic_8').style.display = 'none';
        document.getElementById('pic_8_2').style.display = 'inline';
        document.getElementById('pic_9').style.display = 'none';
        document.getElementById('pic_9_2').style.display = 'inline';
        document.getElementById('box_1').style.backgroundImage = "url('../img/Скачивайте\ Весенняя\ тема\ для\ пейзажа\ бесплатно.jpg')";
        document.getElementById('box_1').style.backgroundPosition ='50% 70%';
        document.getElementById('box_1').style.boxShadow='0 0 20px 0 rgb(0,132,90)';
        document.getElementById('box_2').style.backgroundImage = "url('../img/Meadow\ Field\ Grass\ Rural\ Background.jpg')";
        document.getElementById('box_2').style.backgroundPosition = '50% 100%';
        document.getElementById('box_2').style.boxShadow = '0 0 20px 0  rgb(227,157,0)';
        document.getElementById('box_3').style.backgroundImage = "url('../img/desktop_hd_png\ by\ Awsmd.png')";
        document.getElementById('box_3').style.backgroundPosition = '0% 50%';
        document.getElementById('box_3').style.boxShadow = '0 0 20px 0 rgb(152,74,135)';
        const result_mas = random_id(mas_pic);
        for(let i=0;i<result_mas.length;i++){
            sektors[i].appendChild(result_mas[i]);
        }
    }
    else{
        document.getElementById('pic_1_2').style.display = 'none';
        document.getElementById('pic_1').style.display = 'inline';
        document.getElementById('pic_2_2').style.display = 'none';
        document.getElementById('pic_2').style.display = 'inline';
        document.getElementById('pic_3_2').style.display = 'none';
        document.getElementById('pic_3').style.display = 'inline';
        document.getElementById('pic_4_2').style.display = 'none';
        document.getElementById('pic_4').style.display = 'inline';
        document.getElementById('pic_5_2').style.display = 'none';
        document.getElementById('pic_5').style.display = 'inline';
        document.getElementById('pic_6_2').style.display = 'none';
        document.getElementById('pic_6').style.display = 'inline';
        document.getElementById('pic_7_2').style.display = 'none';
        document.getElementById('pic_7').style.display = 'inline';
        document.getElementById('pic_8_2').style.display = 'none';
        document.getElementById('pic_8').style.display = 'inline';
        document.getElementById('pic_9_2').style.display = 'none';
        document.getElementById('pic_9').style.display = 'inline';
        document.getElementById('box_1').style.backgroundImage = "url('../img/Premium\ Vector\ _\ Spring\ landscape\ with\ flowers\ and\ grass.jpg')";
        document.getElementById('box_1').style.backgroundPosition='60% 100%';
        document.getElementById('box_1').style.boxShadow = '0 0 20px 0 rgb(224,12,19)';
        document.getElementById('box_2').style.backgroundImage = "url('../img/Расслабляющий\ плоский\ зимний\ пейзаж\ _\ Премиум\ векторы.jpg')";
        document.getElementById('box_2').style.boxShadow='0 0 20px 0 rgb(32,169,182)';
        document.getElementById('box_2').style.backgroundPosition ='50% 80%';
        document.getElementById('box_3').style.backgroundImage = "url('../img/ЕмельяноваТатьяна.jpg')";
        document.getElementById('box_3').style.boxShadow='0 0 20px 0 rgb(173,209,31)';
        document.getElementById('box_3').style.backgroundPosition ='50% 80%';
        const result_mas = random_id(mas_pic_2);
        for(let i=0;i<result_mas.length;i++){
            sektors[i].appendChild(result_mas[i]);
        }
    }
}

function start(){
    document.getElementById('start').disabled=true;
    document.getElementById('change').disabled=true;
    const box1 = document.querySelector('.box_1');
    const box2 = document.querySelector('.box_2');
    const box3 = document.querySelector('.box_3');
    let at_l2 = parseInt(localStorage.getItem('attemp_l2'))+1;
    localStorage.setItem('attemp_l2',at_l2);

    var area =[];
    area[0] = document.querySelector('.b11');
    area[1] = document.querySelector('.b12');
    area[2] = document.querySelector('.b13');
    area[3] = document.querySelector('.b21');
    area[4] = document.querySelector('.b22');
    area[5] = document.querySelector('.b23');
    area[6] = document.querySelector('.b31');
    area[7] = document.querySelector('.b32');
    area[8] = document.querySelector('.b33');

    
    for (let el of area){
        el.ondragover=allowDrop;
        el.ondrop = drop;
    }

    

    let time = 20;
    let time_interval = setInterval(updateCountdown, 1000);
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
    box1.ondragover = allowDrop;
    box2.ondragover = allowDrop;
    box3.ondragover = allowDrop;

    function allowDrop(event){
        if(event.target.id.includes("pic")==true) return true;
        event.preventDefault();
    }

    pic_1.ondragstart = drag;
    pic_2.ondragstart = drag;
    pic_3.ondragstart = drag;
    pic_4.ondragstart = drag;
    pic_5.ondragstart = drag;
    pic_6.ondragstart = drag;
    pic_7.ondragstart = drag;
    pic_8.ondragstart = drag;
    pic_9.ondragstart = drag;

    pic_1_2.ondragstart = drag;
    pic_2_2.ondragstart = drag;
    pic_3_2.ondragstart = drag;
    pic_4_2.ondragstart = drag;
    pic_5_2.ondragstart = drag;
    pic_6_2.ondragstart = drag;
    pic_7_2.ondragstart = drag;
    pic_8_2.ondragstart = drag;
    pic_9_2.ondragstart = drag;




    function drag(event){
        event.dataTransfer.setData('id',event.target.id);
    }
    // box1.ondrop = drop;
    // box2.ondrop = drop;
    // box3.ondrop = drop;

    function drop(event){
        let itemId = event.dataTransfer.getData('id');
        event.target.append(document.getElementById(itemId));
        console.log(event.target.classList);
        if ((event.target.classList.contains("b11") || event.target.classList.contains("b12")
        || event.target.classList.contains("b13")) && 
        (itemId!='pic_2' && itemId!='pic_6' && itemId!='pic_7'
         && itemId!='pic_1_2' && itemId!='pic_6_2' && itemId!='pic_8_2')){
            open_form('Вы проиграли');
        }
        else if ((event.target.classList.contains("b21") || event.target.classList.contains("b22") 
        || event.target.classList.contains("b23")) && 
        (itemId!='pic_1' && itemId!='pic_5' && itemId!='pic_9' &&
        itemId!='pic_2_2' && itemId!='pic_4_2' && itemId!='pic_9_2')){
            open_form('Вы проиграли');
        }
        else if ((event.target.classList.contains("b31") || event.target.classList.contains("b32")
        || event.target.classList.contains("b33")) && 
        (itemId!='pic_3' && itemId!='pic_4' && itemId!='pic_8' &&
        itemId!='pic_3_2' && itemId!='pic_5_2' && itemId!='pic_7_2')){
            open_form('Вы проиграли');
        }
        if ((area[0].childElementCount == 1 && area[1].childElementCount==1 && area[2].childElementCount==1) && 
        (area[3].childElementCount == 1 && area[4].childElementCount==1 && area[5].childElementCount==1) && 
        (area[6].childElementCount == 1 && area[7].childElementCount==1 && area[8].childElementCount==1)){
            open_form('Победа!!!');
        }
        
    }
    
    function open_form(stroka){
        clearInterval(time_interval);
        var form = document.getElementById("end_form");
        document.getElementById('res').innerHTML= stroka;
        form.style.display='block';
        if (stroka!='Победа!!!'){
        
            document.getElementById('sc').innerHTML+='-';
            box1.ondrop = false;
            box2.ondrop = false;
            box3.ondrop = false;
            
        }
        else{
            document.getElementById('sc').innerHTML +='50';
            localStorage.setItem('level_2', 50);
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

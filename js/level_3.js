const pic_1 = document.getElementById('pic_1');
const pic_2 = document.getElementById('pic_2');
const pic_3 = document.getElementById('pic_3');
const pic_4 = document.getElementById('pic_4');
const pic_5 = document.getElementById('pic_5');
const pic_6 = document.getElementById('pic_6');
const pic_7 = document.getElementById('pic_7');
const pic_8 = document.getElementById('pic_8');
const pic_9 = document.getElementById('pic_9');
const pic_10 = document.getElementById('pic_10');
const pic_11 = document.getElementById('pic_11');
const pic_12 = document.getElementById('pic_12');
const pic_13 = document.getElementById('pic_13');
const pic_14 = document.getElementById('pic_14');
const pic_15 = document.getElementById('pic_15');
const pic_16 = document.getElementById('pic_16');
const pic_17 = document.getElementById('pic_17');
const pic_18 = document.getElementById('pic_18');
const pic_19 = document.getElementById('pic_19');
const pic_20 = document.getElementById('pic_20');
const pic_21 = document.getElementById('pic_21');
const pic_22 = document.getElementById('pic_22');
const pic_23 = document.getElementById('pic_23');
const pic_24 = document.getElementById('pic_24');
const mas = [pic_1,pic_2,pic_3,pic_4,pic_5,pic_6,pic_7,pic_8,
             pic_9,pic_10,pic_11,pic_12,pic_13,pic_14,pic_15,pic_16,
             pic_17,pic_18,pic_19,pic_20,pic_21,pic_22,pic_23,pic_24];
const names = ["Варвара","Анна","Анастасия","Ульяна","Василиса","Мария","Лидия",
               "Александра","Пелагея","София","Евдокия","Злата","Серафима","Мирослава",
               "Вера","Любовь","Ирина","Ольга","Есения","Владислава","Людмила","Авдотья",
               "Забава","Любава", "Ярослава","Светлана","Алевтина","Алена","Антонина",
               "Фёкла","Прасковья","Устинья","Февронья","Ефросинья","Матрёна","Глафира",
               "Бажена","Белолюба","Белослава","Берислава","Борислава","Бояна","Братислава",
               "Ведана","Велена","Велеока","Велимира","Велислава","Венцеслава","Вестнина",
               "Владилена","Годана","Годислава","Голуба","Гордяна","Горислава","Грифина",
               "Дарислава","Даромила","Добрана","Добросвета","Домислава","Дружана","Дуня",
               "Едвига","Ерга","Ждана","Загорка","Збислава","Звенислава","Златоцвета","Краснослава",
               "Лагода","Ладимира","Ладослава","Ладимира","Марфа","Олислава","Родослава",
               "Отрада","Параскея","Перенеша","Перуника","Радимила","Радимира","Радоница"];
const rules = ["Выберите имена, в которых первая буква - гласная",
               "Выберите имена, в которых есть глухая согласная",
               "Выберите имена, которые состоят больше, чем из 6-ти букв"];
const cor_rules = [19,39,30];
function start(){
    document.getElementById('start').disabled=true;
    let at_l3 = parseInt(localStorage.getItem('attemp_l3'))+1;
    localStorage.setItem('attemp_l3',at_l3);
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
            open_form('Время вышло!');
        }   
    }
    let rule_id = Math.floor(Math.random()*rules.length);
    document.getElementById('rule').innerHTML = rules[rule_id];
    let correct_ans=0;
    let incorrect_ans=0;
    document.getElementById('correct').innerHTML = correct_ans;
    document.getElementById('incorrect').innerHTML = incorrect_ans;

    let game=setInterval(function(){
        var rand_id = Math.floor(Math.random()*mas.length);
        while(mas[rand_id].style.opacity!=0){
            rand_id = Math.floor(Math.random()*mas.length);
        }
        var element = mas[rand_id];
        element.style.border='0px solid black';

        let random_num=getRandomArbitrary(140,440);//высота

        let h = rand_id+1;
        var num_name = 'name_'+h;
        let random_name_id = Math.floor(Math.random()*names.length);
        var name_m = names[random_name_id];
        names.splice(random_name_id,1); 


        element.style.opacity='1';
        document.getElementById(num_name).innerHTML = name_m;
        element.style.top = random_num  + 'px';

        let str = Date.now();
        let timer = setInterval(function(){
            let timePassed = Date.now()-str;
            if(timePassed>=5200){
                clearInterval(timer);
                element.style.opacity='0';
                return;
            }
            draw(timePassed);
            element.onclick = function(){
                if(rule_id == 0){
                    function startsWithVowel(word){
                        return /[УЕАОЭЯИЮ]/i.test(word[0]);
                    }
                    if(startsWithVowel(name_m)==true){
                        element.style.border = '2px solid green';
                        correct_ans++;
                    }
                    else{
                        element.style.border = '2px solid red';
                        incorrect_ans++;
                    }
                    
                }
                else if (rule_id==1){
                    var voiceless = ["п","ф","к","т","ш","с","х","ц","ч","щ"]; //глухие согласные
                    function func(word){
                        for (let i=0;i<word.length;i++){
                            if(voiceless.indexOf(word[i].toLowerCase())!=-1)
                            {return voiceless.indexOf(word[i].toLowerCase());}
                        }
                        return -1;
                    }
                    if(func(name_m)!=-1){
                        element.style.border = '2px solid green';
                        correct_ans++;
                    }
                    else{
                        element.style.border = '2px solid red';
                        incorrect_ans++;
                    }
                }
                else if(rule_id==2){
                    if(name_m.length>6){
                    element.style.border = '2px solid green';
                    correct_ans++;}
                    else{
                        element.style.border = '2px solid red';
                        incorrect_ans++;
                    }
                }
                document.getElementById('correct').innerHTML = correct_ans;
                document.getElementById('incorrect').innerHTML = incorrect_ans;
                if (correct_ans==cor_rules[rule_id]){
                    clearInterval(game);
                    clearInterval(time_interval);
                    open_form('Победа!!!');
                }
            }
        },20);
        function draw(timePassed){
            element.style.left = timePassed/8+370+'px';
        }
        function getRandomArbitrary(max,min){
            return Math.random()*(max-min)+min;
        }
    },900);

    let main_score = 0; 
    function open_form(stroka){
        var form = document.getElementById("end_form");
        document.getElementById('res').innerHTML= stroka;
        form.style.display='block';
        if (correct_ans>=18 && incorrect_ans<=3){main_score=100;}
        else if (correct_ans<18 && correct_ans>=12){main_score=80;}
        else if (correct_ans<12 && correct_ans>=6){main_score=60;}
        else if (correct_ans<6 && incorrect_ans>5 && correct_ans!=0){main_score=40}
        else{main_score=0;}
        document.getElementById('rsc').innerHTML +=correct_ans;
        document.getElementById('wsc').innerHTML +=incorrect_ans;
        document.getElementById('sc').innerHTML +=main_score;
        localStorage.setItem('level_3', main_score);
    }   

}
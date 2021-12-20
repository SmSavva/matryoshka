var name_p = localStorage.getItem('name');
document.getElementById('name').innerHTML+= name_p;
var l1 = localStorage.getItem('level_1');
document.getElementById('l1').innerHTML+= l1;
var l1_attemp = localStorage.getItem('attemp_l1');
document.getElementById('l1_attemp').innerHTML+=l1_attemp;
var l2 = localStorage.getItem('level_2');
document.getElementById('l2').innerHTML+=l2;
var l2_attemp=localStorage.getItem('attemp_l2');
document.getElementById('l2_attemp').innerHTML+=l2_attemp;
var l3=localStorage.getItem('level_3');
document.getElementById('l3').innerHTML+=l3;
var l3_attemp = localStorage.getItem('attemp_l3');
document.getElementById('l3_attemp').innerHTML+=l3_attemp;
var l4 = localStorage.getItem('level_4');
document.getElementById('l4').innerHTML+=l4;
var l4_attemp = localStorage.getItem('attemp_l4');
document.getElementById('l4_attemp').innerHTML+=l4_attemp;
let sum =parseInt(localStorage.getItem('level_1'))+parseInt(localStorage.getItem('level_2'))+parseInt(localStorage.getItem('level_3'))+parseInt(localStorage.getItem('level_4'));
document.getElementById('sum').innerHTML+=sum;

var date = new Date();
var hrs = date.getHours();
var mins = date.getMinutes();
let data = name_p+" "+"\nРезультат: " 
+ sum + "\nУровень 1: " + l1  + "   Количество попыток: " + l1_attemp+
"\nУровень 2: " + l2+"   Количество попыток: "+l2_attemp
 + "\nУровень 3: " + l3+"   Количество попыток: "+l3_attemp
 +"\nУровень 4: "+l4+"   Количество попыток: " + l4_attemp;
let filename = name_p+"_"+date.getDay()+"_"+date.getMonth()+"_"+hrs+":"+mins+"_";
let type = "txt";
function save() {
    
    download(data, filename, type);

    function download(data, filename, type) {
        var file = new Blob([data], { type: type });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, filename);
        else {
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
}
function end_game(){
    localStorage.clear();       
}
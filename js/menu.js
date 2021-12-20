if(localStorage.getItem('name') == '') {localStorage.setItem("name",'Без имени');}
document.getElementById("name").innerHTML += localStorage.getItem('name');
document.getElementById('score').innerHTML +=parseInt(localStorage.getItem('level_1')) + parseInt(localStorage.getItem('level_2'))
+parseInt(localStorage.getItem('level_3'))+parseInt(localStorage.getItem('level_4'));

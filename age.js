
function area(){
    //alert("Button test");
    let birthday=parseFloat(document.getElementById("age").value);
  

    if (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('volume').innerHTML = 'Your age is: ' + age;
    }
}
;

  

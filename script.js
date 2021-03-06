$(document).ready(function() {
    //variabila in care se vor stoca raspunsurile alese
    var answers = {};
    //raspunsurile corecte la chestionar
    var raspCorecte = { "tab-1": "radio1a", "tab-2": "radio2b", "tab-3": "radio3b", "tab-4": "radio4b" };

    // Initiaza modal
    var sunModal = document.getElementById('sunModal');
    var planetModal = document.getElementById('planetModal');
    var sun = document.getElementById("sun");
    var saturn = document.getElementById("saturn");
    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var uranus = document.getElementById("uranus");
    var neptune = document.getElementById("neptune");


    // Initiaza variabila span care va inchide modalul
    var span = document.getElementsByClassName("close");

    // Adauga eveniment pentru deschiderea modalului Soare 
    sun.onclick = function() {
            sunModal.style.display = "block";
        }
        // Adauga eveniment pentru deschiderea modalului Saturn
    saturn.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section6]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Mercur
    mercury.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section1]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Venus
    venus.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section2]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Pamant
    earth.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section3]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Marte
    mars.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section4]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Jupiter
    jupiter.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section5]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Uranus
    uranus.onclick = function() {
            planetModal.style.display = "block";
            $('#planetModal li[data-section=section7]').click();
        }
        // Adauga eveniment pentru deschiderea modalului Neptun
    neptune.onclick = function() {
        planetModal.style.display = "block";
        $('#planetModal li[data-section=section8]').click();
    }

    // Adauga eveniment pentru inchiderea modalelor prin variabila span
    span[0].onclick = function() {
        sunModal.style.display = "none";
    }

    span[1].onclick = function() {
        planetModal.style.display = "none";
    }



    // Adauga eveniment pentru inchiderea modalului la apasarea unei zone exterioare acestuia
    window.onclick = function(event) {
        if (event.target == planetModal) {
            sunModal.style.display = "none";
        }
        if (event.target == planetModal) {
            planetModal.style.display = "none";
        }
    }

    //Schimbarea taburilor prin selectarea acestora
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    //Asignarea valorilor raspunsurilor alese in variabila answers
    $('.radio').click(function() {
        var clickedID = this.id;
        answers[$(this).parents('.current').attr('id')] = this.id;

    });

    //Schimbarea taburilor prin actionarea butonului NEXT
    $('.nextButton').click(function() {
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $($(this).parents('.tab-content').next('.tab-content')).addClass('current');
    });


    //Schimbarea taburilor prin actionarea butonului PREVIOUS
    $('.prevButton').click(function() {
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $($(this).parents('.tab-content').prev('.tab-content')).addClass('current');
    });


    //Evenimentul pentru actionarea butonului SUBMIT
    $('.submitButton').click(function() {

        //Variabila care retine numarul de raspunsuri alese
        var count = Object.keys(answers).length;
        //Variabila in care se va contoriza numarul de raspunsuri corecte alese
        var k = 0;

        //Transcrierea variabilelor cu raspunsurile corecte si raspunsurile alese din obiecte in siruri
        raspAlese = [];
        for (var i in answers) {
            raspAlese[i] = answers[i];
        }

        arrraspCorecte = [];
        for (var i in raspCorecte) {
            arrraspCorecte[i] = raspCorecte[i];
        }

        //In cazul in care s-a raspuns la toate intrebarile
        if (count == 4) {
            //Tranzitia catre tab5
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $($(this).parents('.tab-content').next('.tab-content')).addClass('current');
            //Crearea sirurilor in care se vor prelua informatiile din taburile precedente pentru a le afisa in tab5 - daca este cazul
            var intrebari = [];
            var strraspcor = [];
            var strraspales = [];
            for (i in raspAlese) {
                if (raspAlese[i] == arrraspCorecte[i]) k++;
                //Stocarea intrebarii, raspunsului corect si raspunsului ales de utilizator
                intrebari.push($("#" + i).children("h1").html());
                strraspcor.push(document.getElementById(raspCorecte[i] + 'Label').textContent);
                strraspales.push(document.getElementById(raspAlese[i] + 'Label').textContent);
            }
            $('#tab-5').append("<p>", k, " / 4 correct answers! </p>");
            var x = 0;

            //Afisarea intrebarii, raspunsului corect si raspunsului ales de utilizator (doar daca este diferit de cel corect)
            for (i in raspAlese) {
                $('#tab-5').append("<h1>", intrebari[x], "</h1><br>");
                if (raspAlese[i] == arrraspCorecte[i]) {
                    $('#tab-5').append('<input type="radio" style="color:green" checked="checked"/>', strraspales[x], "</label><br>");
                } else {
                    $('#tab-5').append('<input type="radio" checked="checked"/>', strraspcor[x], "</label><br>");
                    $('#tab-5').append('<input type="radio" />', strraspales[x], "</label><br>");
                }
                x++;
            }

        } else {
            window.alert("Not all questions have been answered!"); //Mesaj alerta in cazul in care nu s-a raspuns la toate intrebarile
        }
    });




    //Meniul vertical
    startList = function() {
        if (document.all && document.getElementById) {
            navRoot = document.getElementById("nav");
            for (i = 0; i < navRoot.childNodes.length; i++) {
                node = navRoot.childNodes[i];
                if (node.nodeName == "LI") {
                    node.onmouseover = function() {
                        this.className += " over";
                    }
                    node.onmouseout = function() {
                        this.className = this.className.replace(" over", "");
                    }
                }
            }
        }
    }
    window.onload = startList();

    //Corelarea sectiunilor din meniu
    $('ul.menu li').click(function() {
        var section_id = $(this).attr('data-section');

        $('ul.menu li').removeClass('current');
        $('.section-content').removeClass('current');

        $(this).addClass('current');
        $("#" + section_id).addClass('current');
    });

    //Eveniment pentru interactiunea cu utilizatorul - alegerea orbitei si a vitezei planetelor
    $('.apply').click(function() {
        var planet = document.getElementById($(this).attr('data-submit')); //variabila in care se stocheaza id ul planetei pe care se face click
        var orbit = $(this).siblings('.chooseOrbit').children('input[type=radio]:checked').attr('id'); //variabila in care se stocheaza  optiunea de schimbare a orbitei 
        var speed = $(this).siblings('.speed').val(); //variabila in care se stocheaza viteza introdusa de utilizator 

        $(planet).css('animation', orbit + ' ' + speed + 's linear infinite'); // modificarea codului css pentru efectuarea schimbarilor in baza datelor introduse

    });

});
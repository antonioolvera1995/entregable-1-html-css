        function navDark() {
            let sly = window.scrollY;
            let varHeader1;
            sly > 0 ? document.getElementById("id-header-1").className = "header-main-dark" : document.getElementById(
                "id-header-1").className = "header-main";

            if (sly > 0) {

                let change = document.getElementsByClassName("change-color");
                for (let i = 0; i < change.length; i++) {

                    change[i].classList.add("change-color-dark")
                }

            } else {

                let change = document.getElementsByClassName("change-color");

                for (let i = 0; i < change.length; i++) {

                    change[i].classList.remove("change-color-dark")
                }
            }

        }


        function menu() {
            let cros = document.getElementById("cros");
            let menu = document.getElementById("menu");
            cros.style.display = "flex";
            menu.style.display = "none";
            document.getElementsByClassName("div-phone-main")[0].style.display = "flex";

            document.getElementsByClassName("div-phone-main-2")[0].classList.remove("div-phone-main-2-reverse");
            document.getElementsByClassName("div-phone-main-2")[0].style.display = "flex";

        }


        function cros(){

            document.getElementsByClassName("div-phone-main-2")[0].classList.add("div-phone-main-2-reverse");

            setTimeout(function (){
                let cros = document.getElementById("cros");
                let menu = document.getElementById("menu");
                cros.style.display = "none";
                menu.style.display = "flex";
                document.getElementsByClassName("div-phone-main")[0].style.display = "none";
                document.getElementsByClassName("div-phone-main-2")[0].style.display = "none";
            }, 200); 
        }


      
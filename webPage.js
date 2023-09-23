document.addEventListener('DOMContentLoaded', function () {
    //ALL PAGES//
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.nav');
    let menuItem = document.querySelectorAll('.nav__link');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })


    menuItem.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })

    //PROJECTS PAGE//
    if (window.location.href.match(/\projects/)) {
        var danoneSection = document.querySelector('.danone_project-section')
        var danoneArrow = document.querySelector('.danoneArrow');

        danoneSection.addEventListener('click', function () {
            var danoneProjectContents = document.querySelectorAll('.danone-project-content');
            if (danoneArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < danoneProjectContents.length; i++) {
                    danoneProjectContents[i].style.display = 'none';
                }
                danoneArrow.classList.remove('arrow-up');
                danoneArrow.classList.add('arrow-down');
            } else if (danoneArrow.classList.contains('arrow-down')) {
                for (var i = 0; i < danoneProjectContents.length; i++) {
                    danoneProjectContents[i].style.display = '';
                }
                danoneArrow.classList.remove('arrow-down');
                danoneArrow.classList.add('arrow-up');

                //onclick scroll to top
                danoneSection.scrollIntoView({ behavior: 'smooth' });
            }
            //close virgin menu if open 
            closeVirginMenu()

            //close signify menu if open
            closeSignifyMenu()
        });


        //Signify accordion//
        var signfiySection = document.querySelector('.signify_project-section')
        var signifyArrow = document.querySelector('.signifyArrow');

        signfiySection.addEventListener('click', function () {
            var signifyProjectContents = document.querySelectorAll('.signify-project-content');
            if (signifyArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < signifyProjectContents.length; i++) {
                    signifyProjectContents[i].style.display = 'none';
                }
                signifyArrow.classList.remove('arrow-up');
                signifyArrow.classList.add('arrow-down');
            } else if (signifyArrow.classList.contains('arrow-down')) {
                for (var i = 0; i < signifyProjectContents.length; i++) {
                    signifyProjectContents[i].style.display = '';
                }
                signifyArrow.classList.remove('arrow-down');
                signifyArrow.classList.add('arrow-up');

                //onclick scroll to top
                signfiySection.scrollIntoView({ behavior: 'smooth' });
            }
            //close virgin menu if open 
            closeVirginMenu()

            //close danone menu if open
            closeDanoneMenu()
        });

        //Virgin accordion//
        var virginSection = document.querySelector('.virgin_project-section')
        var virginArrow = document.querySelector('.virginArrow');

        virginSection.addEventListener('click', function () {
            var virginProjectContents = document.querySelectorAll('.virgin-project-content');
            if (virginArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < virginProjectContents.length; i++) {
                    virginProjectContents[i].style.display = 'none';
                }
                virginArrow.classList.remove('arrow-up');
                virginArrow.classList.add('arrow-down');
            } else if (virginArrow.classList.contains('arrow-down')) {
                for (var i = 0; i < virginProjectContents.length; i++) {
                    virginProjectContents[i].style.display = '';
                }
                virginArrow.classList.remove('arrow-down');
                virginArrow.classList.add('arrow-up');

                //onclick scroll to top
                virginSection.scrollIntoView({ behavior: 'smooth' });
            }
            //close signify menu if open
            closeSignifyMenu()

            //close danone menu if open
            closeDanoneMenu()
        });

        //single menu function 
        //close virgin menu
        function closeVirginMenu() {
            var virginProjectContents = document.querySelectorAll('.virgin-project-content');
            if (virginArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < virginProjectContents.length; i++) {
                    virginProjectContents[i].style.display = 'none';
                }
                virginArrow.classList.remove('arrow-up');
                virginArrow.classList.add('arrow-down');
            }
        }

        //close Danone menu
        function closeDanoneMenu() {
            var danoneProjectContents = document.querySelectorAll('.danone-project-content');
            if (danoneArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < danoneProjectContents.length; i++) {
                    danoneProjectContents[i].style.display = 'none';
                }
                danoneArrow.classList.remove('arrow-up');
                danoneArrow.classList.add('arrow-down');
            }
        }

        //close signify menu
        function closeSignifyMenu() {
            var signifyProjectContents = document.querySelectorAll('.signify-project-content');
            if (signifyArrow.classList.contains('arrow-up')) {
                for (var i = 0; i < signifyProjectContents.length; i++) {
                    signifyProjectContents[i].style.display = 'none';
                }
                signifyArrow.classList.remove('arrow-up');
                signifyArrow.classList.add('arrow-down');
            }
        }
    }


    //CONTACT PAGE//
    if (document.getElementById("contact-form")) {
        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            // Create a mailto link
            var mailtoLink = "mailto:jamesnolan1@hotmail.com" +
                "?subject=" + encodeURIComponent("Contact Form Submission") +
                "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

            // Open the mailto link in a new window or tab
            window.open(mailtoLink, "_blank");

            // Clear the form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });
    }
})
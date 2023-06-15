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
    //Danone accordion//
    // var danoneArrow = document.querySelector('.danoneArrow');
    // if (danoneArrow) {
    //     danoneArrow.addEventListener('click', function () {
    //         if (danoneArrow && danoneArrow.classList.contains('arrow-up')) {
    //             document.querySelectorAll('.project-content')[1].style.display = 'none';
    //             document.querySelectorAll('.project-content')[2].style.display = 'none';
    //             document.querySelectorAll('.project-content')[3].style.display = 'none';
    //             danoneArrow.classList.remove('arrow-up');
    //             danoneArrow.classList.add('arrow-down');
    //         } else if (danoneArrow && danoneArrow.classList.contains('arrow-down')) {
    //             document.querySelectorAll('.project-content')[1].style.display = '';
    //             document.querySelectorAll('.project-content')[2].style.display = '';
    //             document.querySelectorAll('.project-content')[3].style.display = '';
    //             danoneArrow.classList.remove('arrow-down');
    //             danoneArrow.classList.add('arrow-up');
    //         }
    //     });
    // }

    var danoneArrow = document.querySelector('.danoneArrow');
    if (danoneArrow) {
        danoneArrow.addEventListener('click', function () {
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
            }
        });
    }

    //Signify accordion//
    // var signifyArrow = document.querySelector('.signifyArrow');
    // if (signifyArrow) {
    //     signifyArrow.addEventListener('click', function () {
    //         if (signifyArrow && signifyArrow.classList.contains('arrow-up')) {
    //             document.querySelectorAll('.project-content')[5].style.display = 'none';
    //             document.querySelectorAll('.project-content')[6].style.display = 'none';
    //             document.querySelectorAll('.project-content')[7].style.display = 'none';
    //             document.querySelectorAll('.project-content')[8].style.display = 'none';
    //             signifyArrow.classList.remove('arrow-up');
    //             signifyArrow.classList.add('arrow-down');
    //         } else if (signifyArrow && signifyArrow.classList.contains('arrow-down')) {
    //             document.querySelectorAll('.project-content')[5].style.display = '';
    //             document.querySelectorAll('.project-content')[6].style.display = '';
    //             document.querySelectorAll('.project-content')[7].style.display = '';
    //             document.querySelectorAll('.project-content')[8].style.display = '';
    //             signifyArrow.classList.remove('arrow-down');
    //             signifyArrow.classList.add('arrow-up');
    //         }
    //     });
    // }

    var signifyArrow = document.querySelector('.signifyArrow');
    if (signifyArrow) {
        signifyArrow.addEventListener('click', function () {
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
            }
        });
    }
    //Virgin accordion//
    // var virginArrow = document.querySelector('.virginArrow');
    //if (virginArrow) {
    //  virginArrow.addEventListener('click', function () {
    //    if (virginArrow && virginArrow.classList.contains('arrow-up')) {
    //      document.querySelectorAll('.project-content')[10].style.display = 'none';
    //    virginArrow.classList.remove('arrow-up');
    //  virginArrow.classList.add('arrow-down');
    // } else if (virginArrow && virginArrow.classList.contains('arrow-down')) {
    //   document.querySelectorAll('.project-content')[10].style.display = '';
    //  virginArrow.classList.remove('arrow-down');
    //  virginArrow.classList.add('arrow-up');
    // }
    // });
    // }

    var virginArrow = document.querySelector('.virginArrow');
    if (virginArrow) {
        virginArrow.addEventListener('click', function () {
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
            }
        });
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
/* =========================================
   NAQAA FOUNDATION - MAIN JAVASCRIPT FILE
   PART 3: INTERACTIVITY, VALIDATION & SEO
   ========================================= */


/* =========================================
   EMAILJS INITIALISATION
   ========================================= */

emailjs.init("OSPzgZVDHEVeH-Tsi");


document.addEventListener('DOMContentLoaded', () => {

    console.log('Naqaa Foundation Website Loaded');


    // =============================================
// ACCORDION (services.html)
// =============================================

const accordionBtns = document.querySelectorAll('.accordion-btn');


accordionBtns.forEach(btn => {


    btn.addEventListener('click', () => {


        const content = btn.nextElementSibling;


        // close other answers
        document.querySelectorAll('.accordion-content')
        .forEach(item => {


            if(item !== content){

                item.classList.remove('open');

            }


        });



        document.querySelectorAll('.accordion-btn')
        .forEach(button => {


            if(button !== btn){

                button.classList.remove('open');

            }


        });



        // open clicked answer

        content.classList.toggle('open');

        btn.classList.toggle('open');


    });


});



    // =============================================
    // 2. GALLERY LIGHTBOX
    // =============================================

    const galleryImgs = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');


    if(lightbox){

        galleryImgs.forEach(img=>{

            img.addEventListener('click',()=>{

                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;

                lightbox.classList.add('active');

            });

        });


        if(lightboxClose){

            lightboxClose.addEventListener('click',()=>{

                lightbox.classList.remove('active');

            });

        }


    }




    // =============================================
    // 3. SERVICE SEARCH
    // =============================================


    const searchInput = document.getElementById('serviceSearch');


    if(searchInput){


        searchInput.addEventListener('input',()=>{


            const query = searchInput.value.toLowerCase();


            document.querySelectorAll('.service-card')
            .forEach(card=>{


                const text = card.textContent.toLowerCase();


                card.style.display =
                text.includes(query)
                ? "block"
                : "none";


            });


        });


    }





    // =============================================
    // 4. LEAFLET MAP
    // =============================================


    if(document.getElementById('map')){


        const map = L.map('map')
        .setView([-33.9580,18.4735],14);


        L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        )
        .addTo(map);



        L.marker([-33.9580,18.4735])
        .addTo(map)
        .bindPopup(
        "Naqaa Foundation<br>Cape Town"
        );

    }






    // =============================================
    // 5. ENQUIRY FORM + EMAILJS
    // =============================================


    const enquiryForm = document.getElementById('enquiryForm');


    if(enquiryForm){



        enquiryForm.addEventListener('submit',function(e){


            e.preventDefault();



            clearErrors();



            const name =
            document.getElementById('enq-name');


            const email =
            document.getElementById('enq-email');


            const message =
            document.getElementById('enq-message');



            let valid=true;



            if(name.value.trim().length < 2){

                showError(
                'enq-name-error',
                'Please enter your full name'
                );

                valid=false;

            }




            if(!email.value.includes('@')){

                showError(
                'enq-email-error',
                'Enter a valid email'
                );

                valid=false;

            }




            if(message.value.trim().length < 10){


                showError(
                'enq-message-error',
                'Message must be at least 10 characters'
                );


                valid=false;

            }



            if(valid){


                emailjs.sendForm(

                "service_n6vo289",

                "template_8i749mz",

                enquiryForm

                )

                .then(()=>{


                    showResponse(
                    'enquiry-response',
                    'Thank you! Your enquiry has been sent successfully.'
                    );


                    enquiryForm.reset();


                })


                .catch(error=>{


                    console.log(error);


                    showResponse(
                    'enquiry-response',
                    'Error sending message. Please try again.'
                    );


                });



            }



        });



    }








    // =============================================
    // 6. SMOOTH SCROLL
    // =============================================


    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor=>{


        anchor.addEventListener('click',e=>{


            const target =
            document.querySelector(
            anchor.getAttribute('href')
            );


            if(target){


                e.preventDefault();


                target.scrollIntoView({
                    behavior:"smooth"
                });


            }


        });



    });





});





// =============================================
// HELPER FUNCTIONS
// =============================================



function showError(id,message){


    const element=document.getElementById(id);


    if(element){

        element.textContent=message;

        element.style.display="block";

    }


}




function clearErrors(){


document.querySelectorAll('.error-msg')
.forEach(e=>{


    e.textContent="";

    e.style.display="none";


});


}




function showResponse(id,message){


const element=document.getElementById(id);


if(element){


    element.textContent=message;


    element.style.display="block";


}


}




// =============================================
// CONDITIONAL ENQUIRY FIELDS
// =============================================


const enquiryType =
document.getElementById('enq-type');


const availabilityGroup =
document.getElementById('availability-group');


const amountGroup =
document.getElementById('amount-group');



if(enquiryType){


enquiryType.addEventListener('change',()=>{


const value=enquiryType.value;



if(availabilityGroup){

availabilityGroup.style.display =
value==="volunteer"
?"flex"
:"none";

}



if(amountGroup){

amountGroup.style.display =
(value==="sponsor" || value==="donation")
?"flex"
:"none";


}



});


}

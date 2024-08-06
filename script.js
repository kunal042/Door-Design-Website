        // Handle image selection in the main slider
        function handleImageSelection(img, sliderId) {
            const sliderImages = document.querySelectorAll(`#${sliderId} .img-thumbnail`);
            sliderImages.forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        }
    
        const slideContainer = document.querySelector(".slide-container");
    
        slideContainer.addEventListener("wheel", (event) => {
            event.preventDefault();
            slideContainer.scrollLeft += event.deltaY;
        });
    
        const imageSelect = document.querySelectorAll('.img-thumbnail');
        const selectInsertButton = document.getElementById('select-insert');
        const selectFrameButton = document.getElementById('select-frame');
        const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
        const secondSlider = document.getElementById('second-slider');
    
        let imageSelected = false;
    
        imageSelect.forEach(img => {
            img.addEventListener('click', () => {
                handleImageSelection(img, 'main-slider');
                selectFrameButton.style.display = 'none';
                selectInsertButton.style.display = 'inline-block';
                imageSelected = true;
            });
        });
    
        selectInsertButton.addEventListener('click', () => {
            if (imageSelected) {
                alertModal.show();
            } else {
                alert("Please Select the Door Type");
            }
        });
    
        // When clicking an image in the alert modal slider
        document.querySelectorAll('#alert-image-slider .img-thumbnail').forEach(img => {
            img.addEventListener('click', () => {
                handleImageSelection(img, 'alert-image-slider');
                secondSlider.style.display = 'block';
            });
        });
    
        // Handle image selection in the second slider
        document.querySelectorAll('#second-slider .img-thumbnail').forEach(img => {
            img.addEventListener('click', () => {
                handleImageSelection(img, 'second-slider');
            });
        });
    
        // Optionally, reset the second slider when the modal is shown
        document.getElementById('alertModal').addEventListener('shown.bs.modal', () => {
            secondSlider.style.display = 'none'; // Hide the second slider initially
        });
    
        // Reset the second slider when the modal is hidden
        document.getElementById('alertModal').addEventListener('hidden.bs.modal', () => {
            document.querySelectorAll('#second-slider .img-thumbnail').forEach(img => img.classList.remove('active'));
        });




        const selectButton = document.querySelector("#select-btn");

        const showHiddenContent = document.querySelector(".hidden-item");
        const alertBox = document.querySelector(".alert-box");
        const cartButton = document.querySelector(".cart-button")
        const showSelectButton = document.querySelector("#select-frame")
        const showinsertButton = document.querySelector("#select-insert")
        const doorPreview = document.querySelector(".door-preview")

        selectButton.addEventListener('click', () => {
            console.log("click");


            showHiddenContent.style.display = 'block';
           
            cartButton.style.display = 'block'
            showSelectButton.style.display = 'block'
            showinsertButton.style.display = 'none'
            doorPreview.style.display = 'none'
            

        });



    // Cart Section 


    const AddToCart = document.querySelector(".add-to-cart")

    AddToCart.addEventListener('click', ()=> {
        const CartSection = document.querySelector(".cart-section")

        CartSection.style.display = 'block'
        doorPreview.style.display = 'block'
        showHiddenContent.style.display = 'none'
        cartButton.style.display = 'none'


        showSelectButton.style.display = 'none'
        showinsertButton.style.display = 'block'
    })


    // Custome Model

    const selectModel = document.querySelector("#select-model")

    selectModel.addEventListener('click', () => {
        console.log("click");
        
     
        const alertModal2 = new bootstrap.Modal(document.getElementById('alertModal-section'));

        alertModal2.show()
        
    })



    const SelectFrame = document.querySelector("#select-frame")

    SelectFrame.addEventListener('click', ()=> {
        const alertModal3 = new bootstrap.Modal(document.getElementById('alertModal2-section'));

        console.log("click");
        

        alertModal3.show()

    })


    const frameButton = document.querySelector("#select-btn-frame")

    frameButton.addEventListener('click', ()=> {
        const frameStyle = document.querySelector(".frame")

        frameStyle.style.display = 'block'
    })

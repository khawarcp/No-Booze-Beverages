let product_variants = JSON.parse(document.getElementById('product-variant-json').textContent);
document.querySelectorAll('.product-form__input input[type=radio]').forEach((radio)=>{
    radio.addEventListener('change', ()=>{
        let selectedOptions = [];
        document.querySelectorAll('.product-form__input input[type=radio]:checked').forEach((radio)=>{
            selectedOptions.push(radio.value);
        })
        // console.log(selectedOptions)
        let matchedVariant = product_variants.find((variant) => {
            let pass = true;
            for(let i =0 ; i < selectedOptions.length; i++){
                if(selectedOptions.indexOf(variant.options[i]) === -1){
                  pass = false;
                  break;
                }  
            }
            return pass;
        })

        document.querySelectorAll('.prodSlider .owl-stage .owl-item img').forEach((item) => {
           
            if(item.src == matchedVariant.featured_image.src){                          
                let owl = $('.owl-carousel.prodSlider');
                owl.owlCarousel();
                let index = item.dataset.owlindex;
                // Go to the next item
                owl.trigger('to.owl.carousel', index)
            }
        })
});
});
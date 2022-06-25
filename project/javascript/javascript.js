function sheamowmepassword(){
    let inp1 = document.getElementById("password1").value;
    let inp2 = document.getElementById("password2").value;

    console.log(inp1, inp2);

    if(inp1 == inp2){
        window.alert(
            "პაროლები ემთხვევა ერთმანეთს"
        )
    }
    else{
        window.alert(
            "პაროლები არ ემთხვევა ერთმანეთს"
        )
    }
}

function messageboxshow(){
    document.getElementById("messagebox").style.display = "block";
}

function messageboxhide(){
    document.getElementById("messagebox").style.display = "none";
}


('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
var buscador = $("#table").DataTable();

const bbuscador = document.querySelector('#b-buscador');

bbuscador.style.display = 'none'

$("#input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    

    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300) 
        bbuscador.style.display = 'block';
    }else{
        $(".content-search").fadeIn(300)
        bbuscador.style.display = 'block';
    }
})


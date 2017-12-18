var contador = 0;

$(document).ready(function(){
    //modal ==========================================================================================
    var modalPrueba = $('.modal-prueba'),
    modalContainer = $('.modal-container'),
    modalBtn = $('.modal-btn'),
    modalClose = $('.modal-close');

    modalBtn.on('click', function(){
    modalContainer.toggleClass('modal--show');
  });
  
  modalPrueba.on('click', function(){
    modalContainer.toggleClass('modal--show');
  });
  
  modalClose.on('click', function(){
    modalContainer.removeClass('modal--show');
  });

  // Agregar =================================================================================================
  
  $("#agregar").on('click',function(){
    var name = $("#name").val();
    $('.name').val('');
    phone = $("#phone").val();
    $('.phone').val('');
    

    var contenido = $('#show-agregar');

    contenido.append("<div class='col s12 l12 xl12 pink lighten-5' id='box'>" + 
        "<h3 class='title'>" + name + "</h3>" + //no se porque no me resulta 
        "<i class='material-icons prefix Tiny'>phone</i>" + "<p class='subtitle'>" + phone + "</p>" +
        "<a class='waves-effect waves-light btn'>" +
        "<i class='material-icons remove'>" +'delete'+ "</i>" +
        "</a>" +
        "</div>");

    /* dejo en el interior llamado la función para borrar el contacto */
        eliminar();
     });
     
     
 // Eleminar =================================================================================================
    
     function eliminar(){

        $(".remove").on('click',function(){
            $(this).parent().parent().remove();
        });
     }

});


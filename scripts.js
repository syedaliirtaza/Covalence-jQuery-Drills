$(document).ready(function(){
    $('#btnSubmit').attr('disabled',true);
    $('<div id="headElements"></div>').insertAfter('#form');
    
    $('#formText').on('keyup',function(){
    if($('#formText').val() !== ''){
        $('#btnSubmit').attr('disabled',false);
    }    
    });


    $('#btnSubmit').click(function(){
        event.preventDefault();
        if($('#formText').val() !== ''){
           let $msg = $("#formText").val();
            $('#headElements').append('<h1 class="headings">'+ $msg +'</h1>' );
        }

        let colors = ['red','blue','green','yellow','brown'];

        
        const getRandomColor = () => {
            let randColor = colors[Math.floor(Math.random() * colors.length)];
            return randColor;
        }

        $('.headings').click(function(){
            let myRandomColor = getRandomColor();
            $(this).css('color', myRandomColor);
        });
        $('.headings').dblclick(function(){
            $(this).remove();
        });

    });
    
});

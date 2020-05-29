$(function(){
   function formulario(){

      $("form").submit(function(){
        
        var nome  = $("form").find($("input[type=text]")).val();
        var email  = $("form").find($("input[type=email]")).val();
        var tel = $("form").find($("input[type=tel]")).val();
        
         
      
     
        //CAMPO NOME

        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount ; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                }else{
                    CampoInvalido($("input[type=text]"));
                    return false;
                }
                
            }//for
        }else{
            CampoInvalido($("input[type=text]"));
            return false;
        }if(tel == false){
          CampoInvalido($("input[type=tel]"));
        }else if(email == false){
          CampoInvalido($("input[type=email]"));
          return false;
        }

        
        //VALIDANDO EMAIL

        
        if(email.match(/^([a-zA-Z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
          CampoInvalido($("input[type=email]"));
          return false;
        }else{
          console.log("email  certo")
          
        }

        // validando o campo Telefone
        
        
        var splitTel = tel.match(/^[0-9]{9}$/);
        if(tel ==  splitTel){
          
          
        }else{
          
          CampoInvalido($("input[type=tel]"));
          return false;
        }



        alert("Fomulario enviado com Sucesso!")
       
      })//submitForm
      

      ///////////
      function CampoInvalido(el){
        el.css("border", "1px solid red");
        el.val("Campo Invalido!");
      }

      function ResetarCampos(el){
        el.css("border", "1px solid #0078d7");
        el.val("");
      }

     $("input[type=text], input[type=email],input[type=tel]").focus(function(){
         ResetarCampos($(this));
         $(this).mouseout(function(){
            $(this).css("border","1px solid #cccccc")
         })
     })
    

    }formulario();
    
   






});//funcao jquery

        function calcula_imc(){
            
                var altura = document.imcForm.altura.value;
                var peso = document.imcForm.peso.value;
            
                if(document.imcForm.altura.value == "")
                    {
                    alert( "Preencha sua altura corretamente!" );
                    document.dados.tx_nome.focus();
                    return false;
                    }
                if(document.imcForm.peso.value == "")
                    {
                    alert( "Preencha seu peso corretamente!" );
                    document.dados.tx_nome.focus();
                    return false;
                    }
                
                var quadrado = (altura * altura);

                var calculo = (peso / quadrado);

                if(calculo<18.5){
                document.getElementById("resultado").innerHTML = "<h5>Você está magro !</h5></p>Seu IMC é " + calculo.toFixed(2) + "</p>";
                }
                else if(calculo>=18.5 && calculo<24.9){
                document.getElementById("resultado").innerHTML = "<h5>Você está normal !</h5></p>Seu IMC é " + calculo.toFixed(2) + "</p>";
                }
                else if(calculo>=25 && calculo<29.9) {
                document.getElementById("resultado").innerHTML = "<h5>Você está com sobre peso !</h5></p>Seu IMC é " + calculo.toFixed(2) + "</p>";
                }
                else if(calculo>=30 && calculo<39.9) {
                document.getElementById("resultado").innerHTML = "<h5>Você está com obesidade !</h5></p>Seu IMC é " + calculo.toFixed(2) + "</p>";
                }
                else if (calculo>40)
                document.getElementById("resultado").innerHTML = "<h5>Você está com obesidade grave !!!</h5><p>Seu IMC é " + calculo.toFixed(2) + "</p>";
        }

        function calcula_combustivel(){

                let gasolina = document.combustivelForm.gasolina.value;
                let alcool = document.combustivelForm.alcool.value;
                const calculo = (alcool / gasolina);
            
                if(document.combustivelForm.gasolina.value == "")
                    {
                    alert( "Preencha o preço da gasolina corretamente!" );
                    document.dados.tx_nome.focus();
                    return false;
                    }
                if(document.combustivelForm.alcool.value == "")
                    {
                    alert( "Preencha o preço do alcool corretamente!" );
                    document.dados.tx_nome.focus();
                    return false;
                    }
                
                if(calculo<0.7){
                   document.getElementById("resultado").innerHTML = "<strong>Alcool</strong> e mais vantajoso para abasteser.";
                   }else{
                   document.getElementById("resultado").innerHTML = "<strong>Gasolina</strong> e mais vantajoso para abasteser.";
                   }

                
        }

        function calcula_desconto(){

                        let valor = document.descontoForm.valor.value;
                        let desconto = document.descontoForm.desconto.value;
                        const calculo = (desconto * valor / 100);
                        
                        if(calculo>0){
                            document.getElementById("resultado").innerHTML = "Você economisou " + parseFloat(calculo.toFixed(2)).toLocaleString('pt-BR', {
                              currency: 'BRL',
                              style: 'currency',
                              minimumFractionDigits: 2
                            });
                           }else{
                           document.getElementById("resultado").innerHTML = "Você nao está lucrando.";
                           }
                        
        }

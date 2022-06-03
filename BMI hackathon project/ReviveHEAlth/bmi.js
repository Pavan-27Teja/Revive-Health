function send(){
    var Name= document.getElementById("Name").value;
    var Email= document.getElementById("Email").value;
    var age=document.getElementById("age").value;
    
    var weight= document.getElementById("weight").value;
    var feet= document.getElementById("feet").value;
    var inches= document.getElementById("inches").value;
    var hip=document.getElementById("hip").value;
    var heightcm=((feet*30.48) + (inches*2.54));
    var heightM = heightcm/100;
    var bai=hip/heightM*(heightM*1.5);
    var bfp=bai-18;
    var bmi = (weight / Math.pow( (heightcm/100), 2 ));
    console.log(bmi);

    
    
    
    
                if(bmi < 18.5){
                   // document.write(`<h2>Hello ${Name},<h2> <h3>Underweight</h3>
                    //<h3>Body fat ${bfp}%</h3>`);
                    if(document.getElementById('Male').checked==true){
                        var bmrM=(10*weight)+(6.25*heightcm)-(5*age)+5;
                        document.write(`<h2>Hello ${Name},<h2> <h3>Underweight</h3>
                        <h3>Body fat ${bfp}%</h3> ${bmrM}`);
                        d
                        }
                    else if(document.getElementById('Female').checked==true){
                        var bmrF=(10*weight)+(6.25*heightcm)-(5*age)-161;
                        document.write(`<h2>Hello ${Name},<h2> <h3>Underweight</h3>
                        <h3>Body fat ${bfp}%</h3> ${bmrF}`);
                            

                    }
                    
                            
                
                }
                else if( bmi >= 18.5 && bmi <= 24.9 ){
                   // 
                    if(document.getElementById('Male').checked==true){
                        var bmrM=(10*weight)+(6.25*heightcm)-(5*age)+5;
                        document.write(`<h2> Hello ${Name},</h2><h3>Ideal Weight</h3>Continue the Same Diet ${bmrM}`);
                        
                        
                        }
                    else if(document.getElementById('Female').checked==true){
                        var bmrF=(10*weight)+(6.25*heightcm)-(5*age)-161;
                        document.write(`<h2> Hello ${Name},</h2><h3>Ideal Weight</h3>Continue the Same Diet ${bmrF}`);
                       
                            

                    }
                    
                }
                else if( bmi >= 25.0 && bmi <= 39.9){
                    //
                    if(document.getElementById('Male').checked==true){
                        var bmrM=(10*weight)+(6.25*heightcm)-(5*age)+5;
                        document.write(`<h2>Hello ${Name},</h2><h3>OverWeight</h3><h3>Body fat ${bfp}%</h3>${bmrM} `);
                        
                        
                        }
                    else if(document.getElementById('Female').checked==true){
                        var bmrF=(10*weight)+(6.25*heightcm)-(5*age)-161;
                        document.write(`<h2>Hello ${Name},</h2><h3>OverWeight</h3><h3>Body fat ${bfp}%</h3> ${bmrF}`);
                       
                        

                    }
                    
                    
                }
                else{
                   // 
                    if(document.getElementById('Male').checked==true){
                        var bmrM=(10*weight)+(6.25*heightcm)-(5*age)+5;
                        document.write(`<h2>Hello ${Name},</h2><h3>Obesity<h3><br><h3>Body fat ${bfp}%</h3>Warning Please Maintain the proper Diet Plan Daily ${bmrM}`);   
                        
                        
                        }
                    else if(document.getElementById('Female').checked==true){
                        var bmrF=(10*weight)+(6.25*heightcm)-(5*age)-161;
                        document.write(`<h2>Hello ${Name},</h2><h3>Obesity<h3><br><h3>Body fat ${bfp}%</h3>Warning Please Maintain the proper Diet Plan Daily ${bmrF}`);   
                        
                        
                    }
                    
                    
                }
    }
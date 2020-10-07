let n;
let para = document.getElementById('result');

const calcul_nombre_pr = (n) => {
    let i,j,test=0; 
                                                                                  
    if(n===0 || n===1|| n<0){
        const newPara = document.createElement( "div" );                                                  
        newPara.textContent="Pas d'entiers premiers avant "+n;
        para.appendChild(newPara);                      
    }else{                                                 
        if(n >= 2){
            const newPara = document.createElement( "div" );                                                    
            newPara.textContent="2";
            para.appendChild(newPara);                                        
        }
        for(i=3 ; i<n ; i++){                                                   
            for(j=2 ; j<i ; j++){                                                
                if(i%j==0){
                    test=1;                                          
                }
                if(test != 0) break;
            }
            if(test == 0){   
                const newPara = document.createElement( "div" );                                                         
                newPara.textContent=i;
                para.appendChild(newPara);                                  
            }
            test=0;                                          
        }
    }
}

const input=document.getElementById('input');
var valeur_champ;
input.addEventListener('input', function(event) {
    valeur_champ = event.target.value; 
});


const button = document.getElementById('btn');
button.addEventListener('click', function(){
    para.innerHTML="";
    calcul_nombre_pr(valeur_champ);
});

    
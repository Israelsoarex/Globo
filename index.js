let dataIpt = document.querySelector("#dataIpt");
let btn = document.querySelector("#btn");
let tipo = document.querySelector("#tipo");
let slImg = document.querySelector('#slImg');
let slTitle = document.querySelector('#slTitle');
let slPara = document.querySelector('#slPara');
let slayer = document.querySelector("#slayer");


btn.addEventListener("click", ()=>{
    const inicial = new Date(dataIpt.value);
    const agora = new Date();
    const auxData = new Date();    
    let diferencaMili = inicial - agora;
    let diferencaDia = Math.ceil(diferencaMili / (1000*60*60*24));
    let diaControlado = diferencaDia + 30;
    switch (tipo.value) {
        case '10' :
 calAtbiotico(diferencaDia,agora,diferencaDia);
            break;
        case '30' : 
            
            break;
      }
    
})

function calAtbiotico(x,agora,diferencaDia) {
   slayer.style.display = "flex";
   let diaBiotico = diferencaDia + 10;
   console.log(diaBiotico)
   const auxData = new Date();
   auxData.setDate(diaBiotico + agora.getDate())
    if((diferencaDia*-1) <= 10) {
        console.log("ta de boa")
        slPara.innerText = `Do dia ${agora.getDate()-(diferencaDia*-1)} até o dia ${agora.getDate()} já se passaram-se ${diferencaDia*-1} dias. Essa receita é valida até o dia ${auxData.getDate()}/${auxData.getMonth().toString().padStart(2, '0')}/${auxData.getFullYear()}`;
        slImg.src = `IMG/right.svg`;
    }else {
        slPara.innerText = `Do dia ${agora.getDate()-(diferencaDia*-1)} até o dia ${agora.getDate()} já se passaram-se ${diferencaDia*-1} dias. Essa receita venceu dia ${auxData.getDate()}/${auxData.getMonth().toString().padStart(2, '0')}/${auxData.getFullYear()}`;
        slImg.src = `IMG/wrong.svg`;
    }
}

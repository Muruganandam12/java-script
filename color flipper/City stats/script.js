const button=document.querySelector('button')
//event listener
button.addEventListener('click',stats)

function stats(){
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population=0, literacyRate=0,language=''
    switch(city){
        case 'Chennai':
            population=4646732
            literacyRate=89.73
            language='Tamil'
            break
        case 'Mumbai':
            population=12442373
            literacyRate=89.20
            language='Marathi'
            break
        case 'Delhi':
            population=16787941
            literacyRate=84.20
            language='Hindi'
            break    
        case 'Pondicherry':
            population=146732
            literacyRate=90.73
            language='Tamil'
            break    

    }
    let text= `The Indian city of ${city} has a population ${population} 
    Language spoken ${language} and literacy rate is ${literacyRate}%`
     let resultdiv= document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML=text
}
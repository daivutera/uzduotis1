console.log("labas")
function getString(stringText){
   let newText=stringText.split(" ")
    let newWords=[]
    console.log(newText)
    for(let i=0; i<newText.length; i++){
        newWords.push(newText[i])
    }
    let finalWord=''
    newWords.map(word=>{
        
        finalWord+=word
    })
    console.log(finalWord)
    }
getString("laba diena")
module.exports = getString
//jei daug exportuoju, tai i objekta dedu kaip sarasa
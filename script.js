   // const url= ` https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

const input= document.getElementById("search")
const btn=document.getElementById("btn")


/* 
const getData= async (inputValue)=>{
       let data= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
       let jsonData = await data.json();
 */
/* 
       document.querySelector(".text").innerHTML=""
       let div=document.createElement("div");
      //  div.classList.add("detail");
       div.innerHTML=`  
       <h2> <b> Word : </b> <span>${jsonData[0].word} </span>  </h2>
       <p> <b>  PartOfSpeech :</b> <span> ${ jsonData[0].meanings[0].partOfSpeech} </span>  </p>
       
       <p> <b> Meaning :</b> <span> ${jsonData[0].meanings[0].definitions[0].definition } </span></p>
       <p><b> Example :</b> <span> ${jsonData[0].meanings[0].definitions[0].example } </span></p>
       <p><b> Synonyms :</b> <span> ${ jsonData[0].meanings[0].synonyms} </span></p>
       <p><b> Antonyms :</b> <span> ${ jsonData[0].meanings[0].antonyms} </span></p>

       <a href=${jsonData[0].sourceUrls[0]} target="_blank" id="link"> Read More</a>
       
       `;
       document.querySelector(".text").appendChild(div)
       console.log(jsonData);
       console.log(jsonData[0]) 
       console.log(jsonData[0].meanings[0].definitions[0].definition)
        
} 

btn.addEventListener("click",function(){
         const inputValue=input.value;
         if(inputValue == " "){
           alert("Sorry! first enter word")
         }else{
           getData(inputValue)
         }
        }); */


const getData= async(inputValue)=>{

  let data= await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
  let jsonData= await data.json();

 document.querySelector(".word").innerHTML=`${jsonData[0].word}`;
 document.querySelector(".speech").innerHTML=`${ jsonData[0].meanings[0].partOfSpeech}`
 document.querySelector(".meaning").innerHTML=`${jsonData[0].meanings[0].definitions[0].definition }  `;
 document.querySelector(".example").innerHTML=`${jsonData[0].meanings[0].definitions[0].example} `;
 document.querySelector(".synonym").innerHTML=`${ jsonData[0].meanings[0].synonyms} `;
 document.querySelector(".antonym").innerHTML=`${ jsonData[0].meanings[0].antonyms}`;

 let link=jsonData[0].sourceUrls[0];

 document.querySelector(".l").innerHTML=`<a href="${link}" id="link" target="_blank"> Read More</a>`



 console.log(jsonData);
 console.log(jsonData[0]) 
 console.log(jsonData[0].meanings[0].definitions[0].definition)
 console.log(jsonData[0].sourceUrls[0])
 
}

 

btn.addEventListener("click",function(){
       const inputValue=input.value;
       if(inputValue === " "){
         alert("Sorry! first enter word")
       }else{
         getData(inputValue);

       }
});























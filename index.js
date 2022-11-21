import dogs from "./data.js"



function nextPhoto(){
   
    if(dogs.length != 0){
        const firstItem = dogs.shift()
        return new PictureChange(firstItem)
    }


}

class PictureChange{
    constructor(data){
        Object.assign(this,data)
    }
    setSourceImage(){
        const {avatar,age,name,bio} = this

        const htmltag= `    
        <img id = "image" src="${avatar}" alt="Dog Image">
        <div class="imageText">
            <h3 id="dogName">${name},&nbsp</h3>
            <h3 id = "dogAge">${age}</h3>
        </div>
        <p class="explain" id="explain">${bio}</p>`

        return htmltag
        
        
    }
   
}

let currentObject = nextPhoto()
document.getElementById("mainImage").innerHTML = currentObject.setSourceImage()





    document.getElementById("likebtn").addEventListener("click",function(){
    document.getElementById("likelabel").style.display = "block"
    currentObject.hasBeenLiked = true        
    checkClicks()
    })

    document.getElementById("dislikebtn").addEventListener("click",function(){
        document.getElementById("dislikelable").style.display = "block"
        currentObject.hasBeenSwiped = true  
        checkClicks()
    })


 
function checkClicks(){

    if(currentObject.hasBeenLiked || currentObject.hasBeenSwiped){
        
        setTimeout(function(){    
            let nextObj = new PictureChange(nextPhoto())

            const nameproperty = nextObj.hasOwnProperty("name")

            if(nameproperty){
                console.log(nextObj)
                document.getElementById("mainImage").innerHTML =nextObj.setSourceImage()
                document.getElementById("likelabel").style.display = "none"
                document.getElementById("dislikelable").style.display = "none"
            }
             
            },1500);

            }
        
    
    }


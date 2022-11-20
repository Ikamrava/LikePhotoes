console.log("hello")

const dogs = [
    {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]



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
        document.getElementById("image").src = this.avatar
        
    }
   
}

const Rex = new PictureChange(nextPhoto())
Rex.setSourceImage()



document.addEventListener("click",function(e){
    const nextDog = nextPhoto()
    if(e.target.id === "likebtn"){
        document.getElementById("likelabel").classList.remove("hidden")

    }

    setTimeout(function(){
        if (nextDog){
            nextDog.
            setSourceImage()
            document.getElementById("likelabel").classList.add("hidden")
       }
       
    },1000);

            
                

        
        
})




  

import dogs from "./data.js";
import Profile from "./profiles.js";

let currentProfileIndex = 0
let currentProfile = new Profile(dogs[currentProfileIndex])

render(currentProfileIndex)

document.getElementById('action').addEventListener('click', (e) => {
    dogs[currentProfileIndex].hasBeenSwiped = true
    if (e.target.id === 'rejected') {
        document.getElementById('not-liked').classList.remove('hidden')
    } 
    if (e.target.id === 'approved') {
        dogs[currentProfileIndex].hasBeenLiked = true
        document.getElementById('liked').classList.remove('hidden')
    }
    currentProfileIndex++
    currentProfile = new Profile(dogs[currentProfileIndex])
    
    setTimeout(() =>{
        render(currentProfileIndex)
    }, 1500)  
})

function render (index) {
    if (index < dogs.length) {
        document.getElementById('profile').innerHTML = currentProfile.getProfileHtml()
    } else {
        document.getElementById('profile').innerHTML = `
        <div class="end-message">
            <p> No more profiles available.</p>
            <p> Please comeback tomorrow.</p>    
        </div>
        `
        console.log(dogs)
    }    
}





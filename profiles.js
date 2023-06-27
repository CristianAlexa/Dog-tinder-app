class Profile {
    constructor(data) {
        Object.assign(this, data)
    }
    getProfileHtml() {
        const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this;
        return `<div class="profile-image" style="background-image: url('${avatar}')">
                    <h1 class="profile-name">${name}, ${age}</h1>
                    <p class="profile-bio">${bio}</p>
                </div>
                <div class="over-image hidden" id="liked"><img src="images/like-image.png" alt=""></div>
                <div class="over-image hidden" id="not-liked"><img src="images/nope-image.png" alt=""></div>`
        }

    }

export default Profile

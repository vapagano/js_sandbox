class Github {
    constructor() {
        this.client_id = '2edc6033c7c97354e6e8' ;
        this.client_secret = '401d5b24383808b16f3175dfb3e6ca8defc22f75' ;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
             profile
        }
    }
}
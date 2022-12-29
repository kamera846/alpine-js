Alpine.data('auth', () => ({
    // Variables
    isLogedIn: false,
    baseUrl: 'file:///Users/rafliram/Documents/farcapital/Alpine%20Js/',
    email: '',
    password: '',

    // Function
    checkSession() {
        const token = localStorage.getItem('token')
        this.isLogedIn = token ? true : false

        if (this.isLogedIn) {
            // Fetch API Check Token

            if (token == true) { 
                return window.location.replace(this.baseUrl + 'index.html')
            }
        }
    },

    fetchLogin() {
        const params = {
            email: this.email,
            password: this.password,
        }

        // fetch api (Pura Pura)
        const token = JSON.stringify(params)

        // (Beneran)
        // Save LocalStorage
        localStorage.setItem('token', token)

        // Direct Page
        window.location.replace(this.baseUrl + 'index.html')

        // localStorage.setItem('email', this.email)
        // localStorage.setItem('password', this.password)

        // localStorage.removeItem('password')

        // localStorage.clear()
        // window.location.replace(this.baseUrl + 'index.html')

        // const urlTarget = localStorage.getItem('urlTarget')

        // if (urlTarget) {
        //     window.location.replace(urlTarget)
        //     localStorage.removeItem('urlTarget')
        // }
    },

    // getEmail() {
    //     return localStorage.getItem('email')
    // }

}))
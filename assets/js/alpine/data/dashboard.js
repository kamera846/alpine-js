Alpine.data('dashboard', () => ({
    // Variables
    title: 'Selamat Datang di Halaman Dashboard',
    isLogedIn: false,
    baseUrl: 'file:///Users/rafliram/Documents/farcapital/Alpine%20Js/',

    // Functions
    checkSession() {
        this.isLogedIn = localStorage.getItem('token') ? true : false

        // localStorage.setItem('urlTarget', window.location.href)

        if (!this.isLogedIn) return window.location.replace(this.baseUrl + 'pages/auth/index.html')
    },

    logout() {
        localStorage.clear()
        window.location.replace(this.baseUrl + 'pages/auth/index.html')
    }
}))
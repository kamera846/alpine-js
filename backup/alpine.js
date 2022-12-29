Alpine.data('data', () => ({
    open: true,
    generateHtml: '<strong>Bold</strong> <em>Italic</em> <u>Underline</u> <span>Normal</span>',
    name: '',
    isShow: false,
    isPassword: true,
    message: 'Halo',
    users: [],
    isLoading: false,

    // Function
    async fetchListUser() {
        this.isLoading = true

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(async (response) => {
        //         this.users = await response.json()
        //         this.isLoading = false
        //     })

        // const formData = new FormData()

        // formData.append('email', 'email@gmail.com')
        // formData.append('password', '123456')

        const formData = {
            'email': 'email@gmail.com',
            'password': '123456'
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'post',
            body: formData,
            headers: {
                'authorization': 'value',
            }
        })

        this.users = await response.json()
        this.isLoading = false
    }
    
}))

// Global Variable
Alpine.store('darkMode', {
    on: false,

    toggle() {
        this.on = !this.on
    }
})
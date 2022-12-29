Alpine.data('attributes', () => ({
    open: false,
    dataHTML: '<p><strong>Bold</strong> <em>Italic</em> <span>Normal</span></p>',
    inputName: '',
    initName: 'John',
    effect: 'Kosong',
    users: [
        {
            name: 'Fulan',
            gender: 'L',
            old: 10,
        },
        {
            name: 'John',
            gender: 'L',
            old: 18,
        },
        {
            name: 'Fulanah',
            gender: 'P',
            old: 20,
        },
        {
            name: 'Doe',
            gender: 'L',
            old: 15,
        },
    ]
}))
Alpine.store('darkMode', {
    on: false,

    toggle() {
        this.on = !this.on
    },
    alert(message) {
        alert(message)
    }
})
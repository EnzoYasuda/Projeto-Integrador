function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function sendHome() {
    location.replace("index.html")
}
function sendSearch() {
    location.replace("src/pages/search.html")
}
function sendReviews() {
    location.replace("src/pages/reviews.html")
}
function sendRandom() {
    location.replace("src/pages/random.html")
}
function sendGenre() {
    location.replace("src/pages/genre.html")
}
function SignUp() {
    location.replace("src/pages/signup.html")
}
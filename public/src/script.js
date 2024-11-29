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
    location.replace("pages/search.html")
}
function sendReviews() {
    location.replace("pages/reviews.html")
}
function sendRandom() {
    location.replace("pages/random.html")
}
function sendGenre() {
    location.replace("pages/Genre.html")
}
function SignUp() {
    location.replace("pages/signup.html")
}
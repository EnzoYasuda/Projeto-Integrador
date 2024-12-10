import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    },5000);
}
const signIn = document.getElementById('submit-login');
if(signIn) {
    signIn.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const auth = getAuth();
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('login is successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = 'src/pages/signup.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            if(errorCode === 'auth/invalid-credential'){
                showMessage('Incorrect Email or Password', 'signInMessage');
            }
            else{
                showMessage('Account does not Exist', 'signInMessage');
            }
        });
    });
} else {
    console.error('Login button not found!');
}

const signUp = document.getElementById('submit-signup');
if(signUp) {
    signUp.addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
    
        const auth = getAuth();
        const db = getFirestore();
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                username: username,
                email: email,
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef,userData)
            .then(() => {
                window.location.href = '../../index.html';
            })
            .catch((error) => {
                console.error("error writing document", error);
    
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            if(errorCode == 'auth/email-already-in-use'){
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            }
            else {
                showMessage('Unable to create User.', 'signUpMessage');
            }
        });
    });
} else {
    console.error('Sign up button not found!');
}
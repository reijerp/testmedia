function encrypt(text) {return btoa(text);}
async function checkLogin() {
    var usr = getCV("usr");
    var pswd = getCV("pswd");
    var encryptedUsername = encrypt(usr);
    var encryptedPassword = encrypt(pswd);
    try {
        const response = await fetch('http://127.0.0.1:5500/login/yourfile.txt');
        const fileContent = await response.text();
        const lines = fileContent.split('\n');
            for (const line of lines) {
                const fileData = line.split(' ');
                    if (encryptedUsername === fileData[0] && encryptedPassword === fileData[1]) {
                        alert('Login successful!');
                        return;
                        }
                    }
    
                alert('Login failed. Please check your username and password.');
                } catch (error) {
                console.error('Error reading file:', error);
                alert('An error occurred while reading the file.');
                }
            }
    
function getCV(cookieName) {
var name = cookieName + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var cookieArray = decodedCookie.split(';');                
for (var i = 0; i < cookieArray.length; i++) {
var cookie = cookieArray[i].trim();
if (cookie.indexOf(name) == 0) {
return cookie.substring(name.length, cookie.length);
}}                
return null;
}
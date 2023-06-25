/*
Edabit expert - of course at the more difficut levels 
I research google and chat gpt
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.
*/
const caesarCipher = (s, k) => {
    const alphabetSize = 26; // no of letters in the alphabet
    k = k %  alphabetSize;//ensure rotation factor is within alphbet size

    let encrypted = "";

    for(let i = 0; i < s.length; i++){
        const char = s[i];
    
    //check to see if the charater is a letter
    if(/[a-zA-Z]/.test(char)) {
        const isUpperCase = char ===char.toUpperCase();
        const baseCharCode = isUpperCase ? 65 : 97; //acsII code for 'A' or
        const charCode  = char.charCodeAt(0) - baseCharCode;//convert 0 - based
        const shiftedCharCode = (charCode + k) % alphabetSize;//apply rotation
        const shiftedChar = String.fromCharCode(shiftedCharCode + baseCharCode);

        encrypted += shiftedChar;
    }   else {
        encrypted += char;
    }
    }
    return encrypted;
    }

    //example outputs
    console.log(caesarCipher("middle-Outz", 2));//output: "okffng-Qwvb"
    console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));

    //I have no idea what the problem was or
    //what was being asked.
    //was able to solve it with chatgpt
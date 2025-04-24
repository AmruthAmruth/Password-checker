

function checkPasswordStrength(password) {
    const strengthCriteria = {
        length: password.length >= 8,        
        upperCase: /[A-Z]/.test(password),   
        lowerCase: /[a-z]/.test(password),   
        digits: /\d/.test(password),         
        specialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password), 
    };

    let strengthScore = 0;

   
    Object.values(strengthCriteria).forEach(isValid => {
        if (isValid) strengthScore++;
    });

    
    let strengthLevel = 'Weak';
    if (strengthScore === 5) {
        strengthLevel = 'Strong';
    } else if (strengthScore >= 3) {
        strengthLevel = 'Medium';
    }

    
    const feedback = [];

    if (!strengthCriteria.length) {
        feedback.push("Password should be at least 8 characters long.");
    }
    if (!strengthCriteria.upperCase) {
        feedback.push("Add at least one uppercase letter.");
    }
    if (!strengthCriteria.lowerCase) {
        feedback.push("Add at least one lowercase letter.");
    }
    if (!strengthCriteria.digits) {
        feedback.push("Add at least one digit.");
    }
    if (!strengthCriteria.specialChars) {
        feedback.push("Add at least one special character.");
    }

    return {
        strengthLevel,
        score: strengthScore,
        feedback: feedback.length > 0 ? feedback : ["Password is strong."]
    };
}



function generateStrongPassword(options) {
    const { length = 12, upperCase = true, lowerCase = true, digits = true, specialChars = true } = options;
    
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const specialCharsList = '!@#$%^&*(),.?":{}|<>';

    let characterPool = '';

    if (upperCase) characterPool += upperCaseChars;
    if (lowerCase) characterPool += lowerCaseChars;
    if (digits) characterPool += digitsChars;
    if (specialChars) characterPool += specialCharsList;

    
    if (characterPool === '') {
        return 'At least one option (uppercase, lowercase, digits, special characters) must be true.';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}


function suggestBetterPassword(password, count = 3) {
    const leetMap = { a: '@', e: '3', i: '1', o: '0', s: '$', l: '1', t: '7' };
    const suggestions = [];
  
    const randomSymbol = () => "!@#$%^&*()_+{}|:<>?".charAt(Math.floor(Math.random() * 20));
    const randomYear = () => 2000 + Math.floor(Math.random() * 25);
    const shuffle = str => [...str].sort(() => Math.random() - 0.5).join('');
  
    const toLeet = str =>
      str
        .split('')
        .map(c => (leetMap[c.toLowerCase()] || c))
        .map(c => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
        .join('');
  
    for (let i = 0; i < count; i++) {
      const base = toLeet(password);
      const extra = `${randomSymbol()}${randomYear()}`;
      suggestions.push(shuffle(base + extra));
    }
  
    return suggestions;
  }


  function generatePassphrase(wordCount = 4) {
    const wordlist = ['apple', 'sky', 'banana', 'dream', 'piano', 'orange', 'tiger', 'coffee', 'planet', 'wallet', 'dragon', 'river'];
    let passphrase = [];
    for (let i = 0; i < wordCount; i++) {
      const word = wordlist[Math.floor(Math.random() * wordlist.length)];
      passphrase.push(word);
    }
    return passphrase.join('-');
  }


  function calculateEntropy(password) {
   
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

   
    let possibleChars = '';
    if (/[a-z]/.test(password)) possibleChars += lowerCase;
    if (/[A-Z]/.test(password)) possibleChars += upperCase;
    if (/[0-9]/.test(password)) possibleChars += digits;
    if (/[^a-zA-Z0-9]/.test(password)) possibleChars += symbols;


    const N = possibleChars.length; 
    const L = password.length;      

    if (N === 0 || L === 0) return 0; 

 
    const entropy = Math.log2(Math.pow(N, L));
    return entropy;
}


module.exports = {
    checkPasswordStrength,
    generateStrongPassword,
    suggestBetterPassword,
    generatePassphrase,
    calculateEntropy
};
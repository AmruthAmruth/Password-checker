
# Passify - Password Utility Library

Welcome to **Passify**, a powerful collection of functions designed to help you manage and strengthen passwords. Whether you're building a secure application, testing password strength, or generating strong passwords, Passify has you covered.

## Features

Passify provides the following functionalities:

- **Check Password Strength**: Evaluate the strength of a password based on criteria like length, character variety, and special characters.
- **Generate Strong Password**: Create strong passwords with customizable options for length, uppercase, lowercase, digits, and special characters.
- **Suggest Better Passwords**: Generate variations of a given password, including 'leet' speak substitutions and random symbols to enhance password strength.
- **Generate Passphrase**: Generate easy-to-remember passphrases using random words from a predefined list.
- **Calculate Password Entropy**: Calculate the entropy of a password, providing a measure of how secure it is based on length and character variety.

## Installation

To install **Passify**, run the following command:

```bash
npm install passify
```

## Usage

### 1. Check Password Strength

This function checks the strength of a password and provides feedback on how to improve it.

#### Example:

```javascript
const { checkPasswordStrength } = require('passify');

const password = 'Passw0rd!';
const result = checkPasswordStrength(password);
console.log(result);
```

#### Output:

```json
{
  "strengthLevel": "Strong",
  "score": 5,
  "feedback": ["Password is strong."]
}
```

### 2. Generate Strong Password

Generates a strong, random password based on the specified options.

#### Example:

```javascript
const { generateStrongPassword } = require('passify');

const options = { length: 16, upperCase: true, digits: true, specialChars: true };
const strongPassword = generateStrongPassword(options);
console.log(strongPassword);
```

#### Output:

```text
A&z3yK@7gL3!BpQz
```

### 3. Suggest Better Password

Suggests better versions of a password by applying 'leet' speak, adding symbols, and shuffling characters.

#### Example:

```javascript
const { suggestBetterPassword } = require('passify');

const password = 'password123';
const suggestions = suggestBetterPassword(password);
console.log(suggestions);
```

#### Output:

```text
[
  'P@5sw0rD#11!0!7',
  'P@S5wOrD$221!',
  'P@ssw0rD1!@9#'
]
```

### 4. Generate Passphrase

Generates a passphrase using a list of predefined words.

#### Example:

```javascript
const { generatePassphrase } = require('passify');

const passphrase = generatePassphrase(5);
console.log(passphrase);
```

#### Output:

```text
tiger-planet-dream-coffee-orange
```

### 5. Calculate Password Entropy

Calculates the entropy of a password, which measures its randomness and strength.

#### Example:

```javascript
const { calculateEntropy } = require('passify');

const password = 'P@ssw0rD!';
const entropy = calculateEntropy(password);
console.log(entropy);
```

#### Output:

```text
72.995
```

## Contributing

We welcome contributions! If you'd like to improve or extend the functionality of this library, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Why Use Passify?

In today's digital age, securing passwords is crucial. **Passify** helps you:

- **Enforce Strong Passwords**: Ensure your users are creating strong, secure passwords with ease.
- **Generate Passwords on the Fly**: Quickly generate strong passwords or passphrases for your application or personal use.
- **Enhance Password Security**: Suggest better alternatives for weak or easily guessable passwords.
- **Evaluate Password Strength**: Check passwords for common weaknesses and provide users with actionable feedback.
- **Measure Password Entropy**: Understand how secure a password is and make informed decisions about its strength.

## Support

For support, feel free to open an issue in the GitHub repository, and we will get back to you as soon as possible.

---

**Stay secure. Stay strong!** 💪🔒



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


Usage
1. Check Password Strength
This function checks the strength of a password and provides feedback on how to improve it.

Example:

const { checkPasswordStrength } = require('passify');
const password = 'Passw0rd!';
const result = checkPasswordStrength(password);
console.log(result);

Output:

{
  "strengthLevel": "Strong",
  "score": 5,
  "feedback": ["Password is strong."]
}


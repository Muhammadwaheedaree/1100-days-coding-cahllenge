# Day 79: Authentication Basics and HTTP Basic Authentication

## First: Basics of Authentication

### What is Authentication?
Authentication is the process of verifying someone's identity, similar to showing a passport when boarding a plane. For computers, it usually involves entering a username and password. Authentication is not only for people; servers may need to authenticate each other to avoid malicious usage.

### How does Authentication Work?
There are several factors used for authentication:
- **Knowledge Factor**: Something you know (e.g., username/password, security codes)
- **Possession Factor**: Something you have (e.g., hard/soft tokens)
- **Qualities Factor**: Something you are (e.g., biometrics)

### Multifactor and Two-Factor Authentication
- **Multifactor Authentication (MFA)**: Uses more than one factor for authentication, making it more secure.
- **Two-Factor Authentication (2FA)**: A type of MFA with exactly two factors.

### Authentication vs. Authorization
- **Authentication**: Verifying identity (e.g., logging in with credentials).
- **Authorization**: Checking permissions (e.g., access control after logging in).

### Common Authentication Strategies
- Session-Based Authentication
- Token-Based Authentication
- JWT Authentication
- OAuth
- Single Sign-On (SSO)

## Second: HTTP Basic Authentication

### What is Basic Authentication?
Basic Authentication is a part of the HTTP specification, where credentials are sent as a base64-encoded string in the Authorization header.

### How does it Work?
1. **Initial Request**: The server checks for the Authorization header. If absent, it responds with `401 Unauthorized` and `WWW-Authenticate: Basic`.
2. **Browser Response**: The browser shows an authentication popup.
3. **User Input**: The user enters credentials, which are base64-encoded and sent in the Authorization header.
4. **Server Verification**: The server decodes and verifies the credentials.

### Example in Node.js
Here’s a simple example of implementing Basic Authentication in Node.js:
```javascript
// src/index.js
const express = require('express');
const authMiddleware = require('./auth');

const app = express();
const port = 3000;

// Basic authentication middleware
app.use(authMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
});

// src/auth.js
const base64 = require('base-64');

function decodeCredentials(authHeader) {
  // Decode base64 credentials
  const credentials = base64.decode(authHeader.split(' ')[1]);
  return credentials.split(':');
}

module.exports = function (req, res, next) {
  // Decode credentials
  const [username, password] = decodeCredentials(
    req.headers.authorization || ''
  );

  // Verify credentials
  if (username === 'admin' && password === 'admin') {
    return next();
  }

  // Respond with authentication header on failure
  res.set('WWW-Authenticate', 'Basic realm="user_pages"');
  res.status(401).send('Authentication required.');
};
```

**Article Sources**:
- [Authentication Basics](https://roadmap.sh/guides/basics-of-authentication)
- [HTTP Basic Authentication](https://roadmap.sh/guides/http-basic-authentication)
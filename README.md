# CPlusPlusCodeQuest

CPlusPlusCodeQuest is an educational platform designed to teach basic C++ programming skills through interactive coding challenges and tutorials. Built with the MERN stack, it offers a modern and engaging learning experience.

## Features

- **User Authentication**: Secure user registration and login.
- **Interactive Code Editor**: Write, run, and test C++ code directly in the browser.
- **Daily/Weekly Challenges**: Regular challenges to help users practice and improve their skills.
- **Progress Tracking**: Monitor your progress and see how much you've learned.
- **Dark Mode**: Toggle between light and dark modes for a better user experience.
- **Notifications**: Get notified about new challenges, achievements, and more.

## Tech Stack

- **Frontend**: React.js, Ace Editor
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/CPlusPlusCodeQuest.git
cd CPlusPlusCodeQuest
```

2. Install the dependencies for both the backend and frontend:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:

```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Usage

### User Authentication

- Register a new account or log in with an existing account.
- Once logged in, you will be redirected to your dashboard.

### Interactive Code Editor

- Navigate to the "Challenges" page.
- Select a challenge to start coding.
- Write and test your C++ code directly in the browser.

### Dark Mode

- Toggle dark mode from your profile page.

### Notifications

- Check the "Notifications" page for updates on new challenges and achievements.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in a user.

### User

- **GET /api/users/profile**: Get user profile information.
- **POST /api/users/darkmode**: Toggle dark mode.

### Challenges

- **GET /api/challenges**: Get a list of challenges.
- **GET /api/challenges/:id**: Get details of a specific challenge.
- **POST /api/challenges**: Create a new challenge (admin only).
- **PUT /api/challenges/:id**: Update a challenge (admin only).
- **DELETE /api/challenges/:id**: Delete a challenge (admin only).

### Notifications

- **GET /api/notifications**: Get user notifications.
- **POST /api/notifications/read/:id**: Mark a notification as read.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your fork and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to contact us at muhammadasimchattha@gmail.com.

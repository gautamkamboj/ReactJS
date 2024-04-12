# Code Pencil

Code Pencil is an online code compiler and collaborative coding platform inspired by CodePen. It allows users to write, edit, and share HTML, JavaScript, Python, and C++ code snippets in a collaborative environment. Users can also save their projects, authenticate using Firebase Authentication, and store project data in Firestore.

Check out the live project [here](https://code-pencil-bc16d.web.app/).

## Features

- Online code compiler supporting HTML, JavaScript, Python, and C++.
- Real-time collaboration on code projects.
- User authentication using Firebase Authentication.
- Saving and retrieving projects using Firestore.
- Editing feature for saved projects.
- Integration with the CodeJudge API for online code compilation and evaluation.
- Utilization of Redux for state management.
- Implementation of React Router DOM for navigation.
- Utilization of Context API for global state management.
- Responsive design for seamless use on various devices.

## Technologies Used

- React.js: Frontend framework for building user interfaces.
- Firebase: Platform for building web and mobile applications with real-time database and authentication services.
- Redux: State management library for JavaScript applications.
- React Router DOM: Declarative routing for React applications.
- CodeJudge API: Online code compilation and evaluation API.
- HTML/CSS: Standard markup and styling languages for web development.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/code-pencil.git


2. Navigate to the project directory:
cd code-pencil

3. Install dependencies:

npm install


4. Create a Firebase project and configure Firebase Authentication and Firestore.

5. Obtain API keys for CodeJudge API and Firebase.

6. Create a `.env` file at the root of your project and add the following environment variables:
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_CODEJUDGE_API_KEY=your-codejudge-api-key


7. Start the development server:
npm start

8. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- Sign up for an account or log in using your existing credentials.
- Create a new code project or load an existing one.
- Write, edit, and collaborate on code in real-time.
- Save your project to Firebase Firestore for future access.
- Compile and evaluate your code using the CodeJudge API.

## Acknowledgements

Special thanks to Vetrivel Ravi for the insightful tutorial series on YouTube, which served as a valuable reference during the development of this project.


## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is license free.
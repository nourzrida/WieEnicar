# WieEnicar

A React Native mobile application built with Expo to help users learn about harassment, recognize harmful behaviors, and discover practical ways to stay safe.

## Features

- User registration and login
- Password reset flow
- Guidance for women
- Information about different types of harassment
- Explanations of harasser behavior
- Practical steps to avoid harassment
- Educational articles, including online harassment awareness
- Android, iOS, and web support through Expo

## Tech Stack

- React Native
- Expo SDK 51
- React Navigation
- React Native Paper
- React Hook Form
- Axios
- React Native Gesture Handler

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or Yarn
- Expo CLI or access to `npx expo`
- Android Studio for Android development, or Xcode for iOS development

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/nourzrida/WieEnicar.git
cd WieEnicar
npm install
```

You can also use Yarn:

```bash
yarn install
```

### Run the application

Start the Expo development server:

```bash
npx expo start
```

Then use the Expo development tools to open the app on:

- An Android emulator or physical Android device
- An iOS simulator or physical iOS device
- A web browser

You can also use the package scripts directly:

```bash
npm run android
npm run ios
npm run web
```

## Project Structure

```text
.
├── app/                  # Screens and application modules
├── assets/               # Images, icons, and other static assets
├── App.jsx               # Application entry point and navigation
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
└── package.json          # Dependencies and scripts
```

## Navigation

The application currently includes screens for:

- Welcome/start screen
- Login
- Registration
- Password reset
- Home
- Women’s guidance
- Types of harassment
- Harasser behavior
- Steps to avoid harassment
- Articles
- Online harassment article

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

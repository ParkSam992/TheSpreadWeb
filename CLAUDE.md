# The Spread - Fantasy Football App

## Project Overview
The Spread is a cross-platform fantasy football application built with React Native and Expo. The app provides a responsive experience for both web and mobile platforms, allowing users to create leagues, manage teams, and compete in fantasy football.

## Technology Stack
- **Framework**: React Native with Expo
- **Navigation**: Expo Router (File-based routing system)
- **Styling**: React Native StyleSheet (converted from NativeWind due to babel conflicts)
- **Platform Support**: iOS, Android, Web
- **Language**: TypeScript

## Project Structure
```
TheSpreadWeb/
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx        # Root layout with responsive navigation
│   ├── index.tsx          # Home page with hero section
│   ├── leagues.tsx        # Leagues listing and management
│   ├── about.tsx          # About page with app information
│   └── login.tsx          # User authentication
├── components/
│   ├── Navigation.tsx     # Responsive navigation (top/bottom)
│   ├── Header.tsx         # Original header (replaced by Navigation)
│   └── LeagueCard.tsx     # League card component
├── assets/
│   └── images/            # App images and icons
└── constants/             # App constants and configurations
```

## Key Features Implemented

### 1. Responsive Navigation System
- **Desktop**: Top navigation bar with logo and menu items
- **Mobile**: Bottom tab navigation with icons and labels
- **Implementation**: Uses Expo Router with `router.push()` for navigation
- **Components**: `Navigation.tsx` handles both layouts automatically based on screen width
- **Layout**: Root layout in `app/_layout.tsx` manages navigation positioning
- **Navigation Items**: Home (/), Leagues (/leagues), About (/about), Login (/login)

### 2. Screen Structure
- **Home Page**: Hero section with app description and call-to-action
- **Leagues Page**: League creation and browsing functionality
- **About Page**: App information and feature descriptions
- **Login Page**: User authentication interface

### 3. Design System
- **Colors**: 
  - `darkGreen`: #003f2e (primary brand color)
  - `softGreen`: #f0f7f2 (light accent color)
- **Responsive Breakpoint**: 768px (mobile vs desktop)
- **Typography**: Consistent font weights and sizes across components

## Development Commands
```bash
# Start the development server
npm start

# Run on specific platforms
npm run ios
npm run android
npm run web

# Linting
npm run lint

# Reset project (if needed)
npm run reset-project
```

## File Navigation Quick Reference
- Root Layout Setup: `app/_layout.tsx:9-26`
- Navigation Logic: `components/Navigation.tsx:20-26`
- Home Hero Section: `app/index.tsx:20-50`
- Responsive Layout Logic: Check `useWindowDimensions()` usage in each component
- Navigation Routing: `components/Navigation.tsx:24-26` (uses `router.push()`)

## Development Notes
- **Navigation System**: Uses Expo Router's file-based routing instead of React Navigation
- **Entry Point**: `package.json` main field set to `"expo-router/entry"`
- **Root Layout**: `app/_layout.tsx` handles the overall app structure and navigation positioning
- **Responsive Design**: Uses `useWindowDimensions()` with 768px breakpoint for mobile/desktop detection
- **Styling**: Converted from NativeWind to React Native StyleSheet due to babel plugin conflicts
- **Mobile Navigation**: Bottom tab navigation positioned absolutely with proper z-index
- **Desktop Navigation**: Top navigation bar with logo, menu items, and login button
- All pages include proper padding for mobile bottom navigation
- Components follow consistent naming and structure patterns

## Next Steps for Development
1. Implement user authentication system
2. Add league creation and management features
3. Integrate real-time fantasy football data
4. Add player drafting functionality
5. Implement scoring and statistics tracking

## Git Status
- Currently on `claude` branch
- Recent commits: "remove unecessary", "Updates to make it look like image", "my testing"
- babel.config.js has been deleted from the project
- Navigation system working properly on both desktop and mobile
- Project uses Expo Router for file-based routing with React Native StyleSheet
# TGLOBAL Patient Management App

A React Native mobile application for managing patient records, appointments, and consultation notes. Built with TypeScript, following clean architecture principles and best practices.

##  Demo

**Loom Video**: [https://www.loom.com/share/3d38b541426d4c4baf22f3d3e34eb8ed]

##  Project Overview

This application is a faithful implementation of the provided Figma design, featuring:
- Patient list with filtering (All, Active, Pending, Past)
- Expandable patient cards showing detailed information
- Search functionality
- Consultation notes modal
- Bottom tab navigation
- Smooth animations and transitions

##  Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your physical device (iOS/Android)
- OR iOS Simulator (Mac only) / Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/au-lex/Patient-mgt-Mobile-App
cd Patient-mgt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the Expo development server:
```bash
npx expo start
# or
yarn start
```

4. Run on your preferred platform:
```bash
# iOS Simulator
Press 'i' in the terminal

# Android Emulator
Press 'a' in the terminal

# Physical Device
Scan the QR code with Expo Go app (Android) or Camera app (iOS)
```

##  Tech Stack

### Core
- **React Native** (via Expo SDK 54) - Cross-platform mobile framework
- **Expo** - Managed workflow for rapid development and easy deployment
- **TypeScript** - Type-safe development
- **React Navigation** (v6) - Navigation library for stack and tab navigation

### State Management
- **Zustand** - Lightweight state management solution
  - Chosen for its simplicity, minimal boilerplate, and excellent TypeScript support
  - Easy to integrate and scales well with growing applications

### UI & Styling
- **React Native StyleSheet** - Native styling approach
- **react-native-animatable** - Smooth animations for patient card expansions
- **@expo/vector-icons** - Icon library (Ionicons)
- **Expo Font** - Custom font loading
- **Expo Status Bar** - Status bar styling

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

##  Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Avatar.tsx
│   │   ├── SearchBar.tsx
│   │   └── TabBar.tsx
│   └── patients/
│       ├── PatientCard.tsx
│       ├── PatientDetailCard.tsx
│       └── ConsultationNoteCard.tsx
├── screens/
│   ├── PatientsScreen.tsx
│   ├── ScheduleScreen.tsx
│   ├── RecordsScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/
│   └── AppNavigator.tsx
├── store/
│   └── patientStore.ts
├── types/
│   └── index.ts
├── utils/
│   ├── colors.ts
│   ├── spacing.ts
│   └── font.ts
├── services/
│   └── api.ts
└── App.tsx
```

### Architecture Decisions

**Component Organization**
- **Common components**: Reusable UI elements (Avatar, SearchBar, etc.)
- **Feature components**: Domain specific components (PatientCard, ConsultationNoteCard)
- **Screen components**: Top level views that compose smaller components


**Styling Approach**
- Centralized constants for colors, spacing, and fonts
- StyleSheet for component level styling
- Consistent design tokens across the app

**Type Safety**
- Comprehensive TypeScript interfaces for all data models
- Strict type checking enabled
- No `any` types used

##  Design Implementation

### Figma Fidelity
- **Colors**: Exact color values extracted from Figma
- **Typography**: Font families, sizes, and weights match design specs
- **Spacing**: Consistent spacing system (8px base unit)
- **Layout**: Pixel-perfect implementation of all screens
- **Components**: All UI elements faithfully recreated


##  Edge Cases Handled

1. **Empty patient list**: Shows "No patients found" message
2. **No consultation notes**: Displays empty state in modal
3. **API errors**: Error boundary with retry button
4. **Loading states**: Skeleton screens or spinners
5. **Long patient names**: Text truncation with ellipsis
6. **Network issues**: Graceful error messages


### Why Expo?
I chose Expo managed workflow because:
1. **Faster development**: No need for Xcode/Android Studio setup
2. **Easy testing**: Instant preview on physical devices via Expo Go
3. **Built-in APIs**: Access to camera, notifications, fonts without linking
4. **OTA updates**: Push updates without app store review
5. **EAS Build**: Simple cloud-based builds for production apps
6. **Great DX**: Hot reload, error overlays, and debugging tools

### Why Zustand?
I chose Zustand over Redux or Context API because:
1. **Minimal boilerplate**: No providers, actions, or reducers needed
2. **TypeScript-first**: Excellent type inference
3. **Performance**: Only re-renders components that use changed state
4. **Developer experience**: Simple API, easy to debug
5. **Bundle size**: Lightweight (~1KB gzipped)

### Animation Choices
- Used `react-native-animatable` for declarative animations
- Chose fade effects for smooth, professional feel
- Optimized animation duration (200-300ms) for responsiveness

### Component Reusability
- All common UI elements (Avatar, SearchBar) are fully reusable
- Props are well-typed with TypeScript interfaces
- Components are designed to be composed together

## Author

**Your Name**
- GitHub: https://github.com/au-lex

## 📄 License

This project is for evaluation purposes as part of the TGLOBAL technical assessment.


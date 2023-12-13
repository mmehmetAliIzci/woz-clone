# Live Search Box - Step Wizard

[TRY AT https://woz-clone.vercel.app/](https://woz-clone.vercel.app/)
A clone of a website focusing on a "Live Search Box" and a multi-step wizard.

![Demo](./assets/demo.gif)

## Introduction

This project is centered around creating an exact replica of a specific feature from an existing website. The focus is on developing a live search box and a multi-step wizard, providing an intuitive and responsive user experience.

## Technologies Used

- Next.js for server-side rendering and enhanced page speed
- Emotion for styled components, enabling dynamic CSS
- React Select for advanced selection components
- Little State Machine for lightweight state management across steps
- Jest for testing and ensuring code reliability

## Project Background

Developed as part of a technical assessment, this project aims to replicate key features of the WOZ Check application. It demonstrates the ability to integrate a live search box, manage application state, and navigate through a series of steps efficiently.

## Features

- **Live Search Box**: Implemented with `react-select`, allowing users to search and select addresses dynamically.
- **Step Wizard**: Utilizes `little-state-machine` to manage the state across different steps, ensuring a smooth user flow.
- **Responsive Design**: Adapts to various screen sizes, providing an optimal user experience on any device.

## Thought Process and Development Strategy

### Implementation of Live Search Box

- The live search box was one of the most complex components, involving API integration for dynamic address lookup.
- Implemented debouncing to optimize search performance and reduce unnecessary API calls.
- Carefully designed UI to ensure a user-friendly experience during the address selection process.

### State Management in Multi-Step Flow

- Created a little state machine to manage the state transitions between steps in the wizard-like flow.
- This approach provided a structured yet flexible way to handle the application's state, making the code more maintainable and scalable.

## Future Improvements

- Incorporate additional interactive elements as per the original design.
- Further enhance SEO and performance metrics.
- Expand testing

## What I Learned

- **Efficient API Integration**: Mastered the implementation of a live search box, dealing with dynamic user inputs and API responses.
- **Advanced State Management**: Gained proficiency in using `little-state-machine` for managing the application's state across multiple steps.

## Initial Completion Date and Duration Spent

September 2023 - Approximately 15 hours spent

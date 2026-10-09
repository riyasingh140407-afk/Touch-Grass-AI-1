# 🌱 Touch Grass AI — Less Scrolling, More Living

**Touch Grass AI** is a nature-inspired web application designed to encourage people to spend less time on screens and more time exploring the real world. It helps users discover simple outdoor activities based on their mood, interests, and available time.

The project combines a clean, responsive interface with interactive features to make spending time outdoors fun, accessible, and rewarding.

> 🌿 Step outside. Explore nature. Reconnect with the world beyond your screen.

---

## 📌 Table of Contents

* [About the Project](#-about-the-project)
* [Problem Statement](#-problem-statement)
* [Our Solution](#-our-solution)
* [Features](#-features)
* [Demo Workflow](#-demo-workflow)
* [Technologies Used](#-technologies-used)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [How to Use](#-how-to-use)
* [Current Implementation](#-current-implementation)
* [Open-Source AI Roadmap](#-open-source-ai-roadmap)
* [Future Improvements](#-future-improvements)
* [Why Open Innovation Matters](#-why-open-innovation-matters)
* [Contributing](#-contributing)
* [License](#-license)
* [Author](#-author)

---

## 🌿 About the Project

In today's digital world, people often spend a significant amount of time using phones and computers. This can leave less time for outdoor activities, nature exploration, and real-world experiences.

Touch Grass AI aims to make getting outside easier by suggesting small, enjoyable activities that fit into everyday life.

Whether someone has 10 minutes for a short walk, wants to care for a plant, or feels curious about birds, the project provides a simple way to discover an outdoor challenge.

The project is inspired by the **"Touch Grass"** theme, which encourages people to disconnect from screens and reconnect with nature.

## 🎯 Problem Statement

Many people struggle to find simple ways to take breaks from their digital routines and spend more time outdoors.

Common challenges include:

* Not knowing what outdoor activity to try.
* Having limited free time.
* Feeling bored or stressed and wanting a change of environment.
* Finding it difficult to build consistent outdoor habits.
* Spending free time scrolling instead of exploring the world around them.

## 💡 Our Solution

Touch Grass AI provides a simple website where users select their mood, preferred activity, and available time to discover an outdoor mission.

The application makes outdoor exploration approachable through:

* Personalized activity suggestions.
* A simple and beginner-friendly interface.
* Completion rewards through nature points.
* A nature-inspired design that encourages users to take action.

The goal is to make the digital experience short and useful, encouraging users to spend more time enjoying the real world.

---

## ✨ Features

### 1. 🌤️ Mood-Based Activities

Users can select how they feel:

* 😐 Bored
* 😓 Stressed
* 😊 Happy
* ⚡ Energetic

The application suggests an activity corresponding to the selected mood.

### 2. 🍃 Multiple Outdoor Activities

Users can choose from different categories:

* 🚶 Nature Walk
* 🪴 Gardening
* 🐦 Birdwatching
* 📸 Nature Photography
* 🌎 Nature Exploration

### 3. ⏱️ Flexible Time Selection

Users can select the amount of time they have available:

* 10 minutes
* 20 minutes
* 30 minutes
* 60 minutes

### 4. 🎯 Outdoor Challenge Generator

The application generates an outdoor challenge based on the selected preferences. Each challenge encourages users to observe, explore, or interact with their surroundings.

### 5. 🏆 Nature Points System

Users receive 10 points when they mark a challenge as completed.

The points system adds a simple gamification element to encourage participation.

### 6. 🎨 Nature-Inspired UI

The website uses:

* Green and cream colour combinations.
* Simple layouts and readable typography.
* Rounded cards and interactive buttons.
* Responsive styling for smaller screens.

### 7. 📱 Responsive Design

The interface adjusts to different screen sizes, including desktop and mobile browsers.

---

## 🔄 Demo Workflow

1. Open the Touch Grass AI website.
2. Select your current mood.
3. Choose an outdoor activity.
4. Select your available time.
5. Click **Generate My Challenge**.
6. Read your outdoor mission.
7. Complete the activity in the real world.
8. Click **I Completed It!** to earn 10 nature points.

The website is designed to make choosing an activity quick, so users can spend less time on the screen and more time outdoors.

---

## 🛠️ Technologies Used

| Technology | Purpose                                                     |
| ---------- | ----------------------------------------------------------- |
| HTML5      | Structures the web pages and forms                          |
| CSS3       | Provides styling, layout, colours, and responsiveness       |
| JavaScript | Handles user interactions, challenge generation, and points |
| Git        | Version control                                             |
| GitHub     | Source code hosting and project collaboration               |

### Open-Source AI

The project is designed to support open-source AI integration.

A planned version will use:

* **Ollama** to run compatible open-weight language models locally.
* **Qwen or another compatible model** to generate outdoor challenges dynamically.
* **Node.js and Express** to connect the frontend with the local AI model.

**Current status:** The frontend prototype uses predefined JavaScript challenges. Real AI inference is not yet connected in this version.

---

## 📂 Project Structure

```text
touch-grass-ai/
│
├── index.html       # Main website structure
├── style.css        # Website styling and responsive design
├── script.js        # Challenge logic and points system
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the current version locally.

### Prerequisites

You need:

* A computer with a modern web browser.
* A code editor such as Visual Studio Code.
* The Live Server extension for Visual Studio Code (recommended).

### Installation

**Step 1: Clone the repository**

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/touch-grass-ai.git
```

**Step 2: Open the project folder**

```bash
cd touch-grass-ai
```

**Step 3: Open the project in VS Code**

```bash
code .
```

**Step 4: Run the website**

Open `index.html` with Live Server, or open the HTML file directly in your browser.

No backend or AI model installation is required for the current prototype.

---

## 🧭 How to Use

### Example

Suppose a user:

* Feels bored.
* Chooses Nature Walk.
* Has 20 minutes available.

The website suggests an activity such as:

> Take a refreshing walk. Notice five things around you that you have never paid attention to before.

After completing the activity, the user clicks the completion button and earns 10 nature points.

This example illustrates the current predefined challenge system.

---

## 📍 Current Implementation

The current prototype includes:

* Responsive website layout.
* Mood selection.
* Outdoor activity selection.
* Duration selection.
* Predefined challenge generation.
* Completion button.
* Nature points counter.

### Current Limitations

* Challenges are selected from predefined JavaScript suggestions rather than generated by an AI model.
* Points reset when the page is refreshed.
* Challenge completion is self-reported.
* The website does not currently use live weather or location data.
* No database or user account system is included.

These limitations provide opportunities for future development.

---

## 🤖 Open-Source AI Roadmap

The next stage is to connect the application to an open-weight language model using Ollama.

### Planned Architecture

```text
User Interface
   |
   v
HTML + CSS + JavaScript
   |
   v
Node.js + Express Backend
   |
   v
Ollama Local API
   |
   v
Open-Weight Language Model
   |
   v
Personalized Outdoor Challenge
```

### Planned AI Features

The AI-enabled version will aim to:

* Generate unique outdoor challenges dynamically.
* Adapt suggestions to the user's mood and preferred activity.
* Respect the user's available time.
* Offer new challenges rather than relying only on a fixed list.
* Run compatible models locally without requiring a paid AI API.

Local model execution can also help keep user preferences on the user's own computer.

Actual offline operation requires the model to be downloaded and the local AI service to be running.

---

## 🌍 Why Open Innovation Matters

Open innovation gives developers greater control over how AI applications are built and improved.

For Touch Grass AI, adopting open-weight models can offer several benefits:

**1. Privacy**

A locally running model can process preferences without sending them to an external AI provider.

**2. Flexibility**

Developers can experiment with different compatible models and customize prompts to improve outdoor recommendations.

**3. Accessibility**

After the required model has been downloaded, local inference can work without a continuous internet connection.

**4. Reduced API Costs**

Running a model locally avoids per-request fees from a hosted AI API, although hardware, electricity, and storage still have costs.

**5. Learning and Experimentation**

The project provides an opportunity to understand frontend development, model integration, local inference, and AI application architecture.

The intention is to use AI as a helpful tool that encourages real-world activities rather than increasing unnecessary screen time.

---

## 🔮 Future Improvements

Possible future features include:

* [ ] Real-time AI-generated outdoor challenges.
* [ ] Persistent nature points using browser storage.
* [ ] Daily challenges and streak tracking.
* [ ] Personal nature journal.
* [ ] Challenge categories based on weather.
* [ ] Garden planning assistant.
* [ ] Bird and plant identification using suitable image models.
* [ ] Optional outdoor activity history.
* [ ] Achievement badges and progress dashboard.
* [ ] Optional location-based suggestions with user permission.
* [ ] Accessibility improvements and additional languages.

---

## 🤝 Contributing

Contributions and suggestions are welcome!

To contribute:

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Test the website.
5. Submit a pull request describing your improvements.

You can contribute by improving the design, adding new outdoor challenges, improving accessibility, or helping integrate open-source AI.

---

## 📄 License

This project does not yet specify a repository license.

If you want others to reuse and modify your code, consider adding an open-source license such as the MIT License after choosing the terms you want to use.

Note that the license for the application code is separate from the license and terms of any AI model used in a future version.

---

## 👩‍💻 Author

**Project:** Touch Grass AI
**Theme:** Touch Grass — Open-Source AI
**Built with:** HTML, CSS, and JavaScript
**AI integration:** Planned

🌱 *Take a break from the screen. Step outside. Discover something new.*

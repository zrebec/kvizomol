# Kvizomol

**Kvizomol** is a simple web game designed to test your knowledge across various quiz topics. Leveraging modern web technologies (Vite, Vanilla JS, CSS), it provides a smooth and interactive gaming experience.
TODO (Upcoming Tasks)

## Overview
The current version of the application dynamically loads data from a JSON file, runs a visual countdown for each question, animates the display of possible answers, and automatically highlights the correct answer after the timer expires.

## Todo
[ ] Visual Feedback: After the timer runs out (or a user clicks an answer), the correct answer should visually "blink" to clearly highlight it for the user.
[ ] Dynamic Interval: The length of the answer animations should not be controlled by a fixed interval (e.g., 2 seconds) but should be derived from CSS properties for more flexible code.
[ ] Next Question: After the timer expires or an answer is clicked, a process should begin to load and display the next question from kviz.json.
# Cookie Clicker Game

## Overview

A simple game inspired by Cookie Clicker, where the player clicks a cookie to earn points and can purchase upgrades to increase their cookie production.

## Project Outline

### Style and Design

*   **Layout:** A two-column layout. The left column will feature the large cookie for clicking and the score. The right column will display the available upgrades.
*   **Colors:** A darker, textured background reminiscent of the original game. A golden-brown color scheme for the cookie and accents. A muted color palette for the UI elements.
*   **Fonts:** A playful, slightly stylized font for the main headings and a clean, readable font for the body text.
*   **Visuals:** A large, realistic cookie image for the main button. Icons for the different upgrades (auto-clicker, grandma, etc.). A news ticker at the top.
*   **Interactivity:** The cookie will have a subtle animation when clicked. Buttons will have a clear hover and active state.

### Features

*   **News Ticker:** A scrolling news ticker at the top of the screen, like in the original game.
*   **Cookie Clicking:** The player can click the main cookie to earn one cookie per click.
*   **Score & CPS Counter:** The total number of cookies and cookies per second are displayed and update in real-time.
*   **Upgrades:** The player can spend cookies to buy upgrades.
    *   **Auto-Clicker:** Generates a small number of cookies per second.
    *   **Grandma:** Generates a steady stream of cookies per second.
    *   **Factory:** Generates a large number of cookies per second.
    *   **Mine:** Generates a very large number of cookies per second.
    *   **Shipment:** Generates a massive number of cookies per second.
*   **Cost Increase:** The cost of upgrades increases with each purchase.

## Current Plan

1.  **Bug Fix:** Correct the event listeners for the upgrade buttons which were not being correctly targeted after the last design update.
2.  **HTML Structure:**
    *   Add a `div` for the news ticker.
    *   Add new `div` elements for the "Factory", "Mine", and "Shipment" upgrades.
3.  **CSS Styling:**
    *   Add styling for the new news ticker element.
4.  **JavaScript Logic:**
    *   Implement the logic for the news ticker, cycling through a list of messages.
    *   Add the new upgrades to the script, including variables for their cost, level, and CPS contribution.
    *   Create event listeners for the new upgrade buttons.
    *   Refactor the `setInterval` to a function that calculates the total Cookies Per Second (CPS) from all upgrades and updates the score and CPS display.

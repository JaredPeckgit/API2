# Frontend: Game Hub

## Overview
Game Hub is a front-end web application built with vanilla JavaScript, HTML, and CSS, leveraging Grid.js for dynamic data tables and Bootstrap for responsive styling and toast notifications. It enables users to browse, add, and edit video game records by interacting with a backend API. The app features a searchable, paginated game table and intuitive forms for adding and updating games, designed for simplicity and ease of use for game enthusiasts.

## Table of Contents
- [Installation & Setup](#installation--setup)
- [Usage Instructions](#usage-instructions)
- [API Integration](#api-integration)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)

## Installation & Setup

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox)
- An active internet connection (to fetch API data and CDN libraries)
- Optional: A local web server (e.g., Live Server extension for VS Code) for development

### Steps
1. Clone the repository:
   git clone https://github.com/JaredPeckgit/Web

2. Navigate to the project directory:

	cd cloned repo
Open `index.html` in a browser:


## Usage Instructions

Game Hub offers three main pages:

- **Home (`index.html`)**: Displays a table of all games with columns for ID, Title, Year, and Platform. Users can search, sort, or paginate through the table.
    
- **Add Game (`addGames.html`)**: Provides a form to input a game’s title, year, and platform, submitting it to create a new game.
    
- **Edit Game (`editGames.html`)**: Allows users to enter a game ID to fetch its details, edit the title, year, or platform, and update the record.
    

> Toast notifications provide feedback for actions (e.g., "Game Updated" or "Please fill in all fields").

### Screenshots

**Game table on the Home page:**  
![[Pasted image 20250413202236.png]]

**Add/Edit form:**  
![[Pasted image 20250413202256.png]]
![[Pasted image 20250413202315.png]]
## API Integration

The frontend communicates with a backend API at:  
`https://api-ih62.onrender.com/api/v1/games`


## End points used
Get all Games:

fetch("https://api-ih62.onrender.com/api/v1/games")

Post a new game:

fetch("https://api-ih62.onrender.com/api/v1/games", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New Game", year: 2023, platform: "PC" })
});


Get game by ID:
fetch("https://api-ih62.onrender.com/api/v1/games/1")



fetch("https://api-ih62.onrender.com/api/v1/games/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Updated Game", year: 2024, platform: "PS5" })
})


## Contributing Guidelines

To contribute:

1. Fork the repository.
    
2. Create a new branch:
git checkout -b feature/your-feature

Commit changes : git commit -m "Add your feature"

- Push to the branch:
    
    `git push origin feature/your-feature`
    
- Open a pull request.



### Coding Standards

- Use **2-space indentation** for JavaScript and HTML.
    
- Follow **Bootstrap’s class naming** for styling.
    
- Add **comments** for complex functions (e.g., API calls).
    
- Test **all form submissions and API interactions** locally.
    

## License

This project is licensed under the MIT License. 

MIT License

Copyright (c) [2025] Jared Peck


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

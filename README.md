# Notes App
This is an untitled bare-bones notes app built for testing purposes. It is a front-end only app powered by Vite. All note data is saved to local storage. 

## Key Features
A user can:
- See their notes on the homepage
- Add a note with a description
- Update a note 
- Delete a note
- Change the app's color palette


## Cloning the Repository to your local machine

### Prerequisites
Before you begin, ensure you have Node.js installed on your system. Version 18.17.0 or newer will work just fine.

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/nicogarbaccio/notes-app.git
cd notes-app
```

Once you've opened the repo, run the command `npm install` to install dependencies. You can use yarn as well. There are no environment variables required, and therefore once you have the dependencies installed, you can run the app as intended. 

To run the app, run the command `npm run dev`. This will start the app on http://localhost:5173/. 

## Running Cypress Tests (WIP)
Cypress is the end-to-end testing framework of choice for this app. It is a dependency in the package.json file, and therefore when installing all dependencies, Cypress will install as well. 

To open the Cypress test runner, either run the command `npx cypress open` or `npm run cy:open`. This will open the runner in a new window. Follow the prompts to find the tests. 
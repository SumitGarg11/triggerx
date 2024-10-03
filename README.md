<!-- # triggerx

# hooks
- npm init -y

# run 
- npx tsc --init  if you don't have install tsc globaly then first you can run the following commands
- sudo npm install -g typescript for (mac , Linux)
- npm install -g typescript (Windows)

# tsconfig.json
- outDir - ./dist
- rootDir - ./src

# mkdir src

# src
  |------ index.ts

# hooks handeler is your backend server 
# Setup HTTP in hooks Backend Server

# run the command 

# npm i express @types/express -->


# TriggerX

A brief description of your project, its purpose, and what problem it solves.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Hooks Handler](#hooks-handler)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is designed to [explain what the project does and why it matters]. It leverages TypeScript and Express to build a robust backend server that can handle various functionalities such as [mention key features].

## Installation

To get started with this project, you need to have Node.js and npm installed. Follow these steps:

1. **Clone the repository:**

   
  git clone  git@github.com:SumitGarg11/triggerx.git
  cd triggerx

2. **Initialize a new Folder hooks:**
   mkdir hooks
   
   npm init -y
3. **Install TypeScript globally (if not already installed):**
   For macOS and Linux:
   sudo npm install -g typescript
  
  For Windows:
  npm install -g typescript
4. **Initialize TypeScript configuration:**  
   npx tsc --init
5. **Setup**
  1.  **Configure TypeScript:**

      Update the tsconfig.json file to set the output and root directories:
  {
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
    }
  }
  2. **Create project directories:**

     **Create a src directory for your TypeScript files:**
      cd triggerx/hooks
      mkdir src
  3. **Create the main TypeScript file:**  
    **Inside the src directory, create an index.ts file:**
      touch src/index.ts
6. **Project Structure:**
     **project directory should look like this:**
project-root/
└── triggerx/
    └── hooks/
        ├── dist/                # Compiled output will go here
        ├── src/                 # Source files
        │   └── index.ts         # Main entry point
        ├── package.json         # Project metadata and dependencies
        └── tsconfig.json        # TypeScript configuration





   








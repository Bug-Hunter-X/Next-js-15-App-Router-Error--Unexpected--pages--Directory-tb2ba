# Next.js 15 App Router Migration Issue

This repository demonstrates a common error encountered when migrating or creating projects with Next.js 15 and its new App Router.  The error arises from attempting to use the traditional `pages` directory structure with the App Router, which expects a different file organization.  The `bug.js` file shows the problematic code. The `bugSolution.js` shows the correct approach.

## Problem

The Next.js 15 App Router introduces a significant change to how routing works.  If you use the old `pages` directory structure with the new router, you'll likely encounter a runtime error indicating that the 'pages' directory is not recognized or is in an unexpected location. This is because the App Router uses an `app` directory for routing instead of `pages`.

## Solution

The solution involves restructuring your project to use the `app` directory instead of `pages`.  This includes moving your page components and other relevant files into the newly created `app` directory and adapting your file structure to the App Router conventions.

## Setup

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies (if any).
4. Run `npm run dev` to start the development server (you'll need to adjust commands based on your `package.json`).

## Additional Information

More information about Next.js 15's App Router and the migration process is available in the official Next.js documentation.
# React Router v6 Nested Route Conflict with Wildcard Route

This repository demonstrates a common issue encountered when using nested routes in conjunction with a wildcard route ("/*") in React Router v6.  The wildcard route incorrectly intercepts requests intended for nested routes, preventing them from rendering.

The `App.js` file shows the problematic code.  `AppSolution.js` provides the corrected implementation.

## Problem

The issue arises because the wildcard route (`<Route path="/*" element={<NoMatch />} />`) is too broad. It matches any path, including those intended for nested routes.  This causes the `NoMatch` component to render instead of the expected nested component.

## Solution

The solution is to reorder the routes, placing the more specific routes before the wildcard route.  This ensures that the router matches the most specific path first.

## Setup

1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server. 

```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a test of Next.js 15's new features.</p>
    </div>
  );
}
```

This code produces a runtime error when using the new App Router in Next.js 15 if you have not properly configured your project. The error message usually involves `pages` not being a valid layout.  This happens because Next.js 15's App Router expects a specific project structure and file naming conventions, diverging from the older Pages Router.
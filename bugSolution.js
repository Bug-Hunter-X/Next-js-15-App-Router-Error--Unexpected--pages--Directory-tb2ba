```javascript
// app/page.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a test of Next.js 15's new App Router.</p>
    </div>
  );
}
```

This version uses the `app` directory structure as required by Next.js 15's App Router. The `page.js` file within the `app` directory will serve as the home page.  Ensure your `package.json` scripts are configured for the App Router. Note that the file name is `page.js` not `index.js` in the `app` directory.
# QuestionBank

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deploying to GitHub Pages

### Prerequisites

Install the GitHub Pages deployment tool globally:

```bash
npm install -g angular-cli-ghpages
```

### One-command deploy

```bash
npm run deploy
```

This builds the app for production with the correct base href and deploys to the `gh-pages` branch.

### Manual steps

1. **Build for production:**

   ```bash
   ng build --configuration production --base-href /question-set/
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npx angular-cli-ghpages --dir=dist/question-bank/browser
   ```

3. **Access the app at:**

   ```
   https://codespycode.github.io/question-set/
   ```

### How it works

- **Hash-based routing** (`/#/manage`, `/#/history`, etc.) avoids 404 errors on page refresh.
- A `404.html` fallback redirects any deep links back to the app.
- All asset paths are relative so they resolve correctly under the `/question-set/` subpath.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

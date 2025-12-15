# CSS Breakdown

An **interactive, visual learning platform** for understanding CSS fundamentals. This project breaks down core CSS concepts into digestible, hands-on modules with live previews and real-time experimentation.

## What You'll Learn

Explore CSS through interactive modules:

- **Intro**: Overview of CSS, browser differences, and core capabilities
- **Basics**: CSS units (px, em, rem, %, vw, vh) and the box model
- **Flex**: Master Flexbox layout with interactive controls
- **Grid**: Explore CSS Grid with dynamic configuration panels
- **Selectors**: Deep dive into CSS selectors, specificity, and combinators

Each module features:

- Live, editable examples
- Interactive control panels to tweak CSS properties in real-time
- Visual feedback to understand how changes affect layout and styling

## Prerequisites

Ensure you have **Node.js** installed ([download here](https://nodejs.org/)). pnpm will be installed alongside Node.js.

## Getting Started

### 1. Install pnpm (if you don't have it)

```bash
npm install -g pnpm
```

Verify installation:

```bash
pnpm --version
```

### 2. Clone the Repository

```bash
git clone https://github.com/Maenzaga/css-breakdown.git
cd css-breakdown
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run the Development Server

```bash
pnpm dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

### 5. Build for Production

```bash
pnpm build
```

The optimized build will be in the `dist/` directory.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS Modules** - Scoped styling
- **React Router** - Navigation between pages

## Project Structure

```
src/
├── pages/
│   ├── Intro/          # Introduction to CSS
│   ├── Basics/         # Units and box model
│   ├── Flex/           # Flexbox playground
│   ├── Grid/           # Grid playground
│   └── Selectors/      # Selector reference
├── App.tsx             # Main app component
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## Tips for Learning

1. **Play with controls**: Each module has interactive elements—experiment to see CSS behavior in real-time
2. **Inspect with DevTools**: Use your browser's DevTools to understand how CSS properties map to layout
3. **Reference the tables**: The Selectors page includes a quick reference table for common CSS patterns
4. **Hover and interact**: Many elements have interactive animations—hover to see effects

## License

MIT

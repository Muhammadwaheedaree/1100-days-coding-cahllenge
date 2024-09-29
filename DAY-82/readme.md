
## Day 82: Updating UI with JavaScript & Getting Started with React

### Overview

On Day 82 of my 100 Days of Code challenge, I focused on:
- Learning how to manipulate the DOM using JavaScript.
- Exploring **Imperative vs. Declarative Programming**.
- Getting started with **React** and learning how it simplifies UI development.
- Introducing **JSX** for writing UI components.

### Topics Covered
1. **Updating UI with JavaScript**  
   _[Read the full article on Updating UI with JavaScript](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript)_

2. **Getting Started with React**  
   _[Read the full article on Getting Started with React](https://nextjs.org/learn/react-foundations/getting-started-with-react)_

### Example Code

**JavaScript DOM Example:**
```html
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

**React JSX Example:**
```html
<script type="text/jsx">
  const domNode = document.getElementById("app");
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

### Learning Outcomes:
- **JavaScript DOM Manipulation**: Practiced using DOM methods like `getElementById()` and `createElement()`.
- **React & JSX**: Learned how to set up React, use ReactDOM, and write UI components with JSX.

---

Let me know if this works!
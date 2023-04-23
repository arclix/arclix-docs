---
sidebar_position: 4
---

# Example Component

For example consider that your React project uses `JavaScript` as template and `CSS` as Styling and we generate component using:

```bash
npx arclix@latest generate component Hero
```

or

```bash
npx arclix@latest g c Hero
```

Then the component generated will have the structure:

```
Hero
├── Hero.css
├── Hero.jsx
└── Hero.test.jsx
```

```css title="Hero.css"
// Type some stylings here
```

```jsx title="Hero.jsx"
import "./Hero.css";

const Hero = () => {
    return <>// Type content here</>;
};

export default Hero;
```

```jsx title="Hero.test.jsx"
import { render } from "@testing-library/react";
import Hero from "./Hero.jsx";

test("renders Hero component", () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText(/Hello, World!/i);
    expect(linkElement).toBeInTheDocument();
});
```

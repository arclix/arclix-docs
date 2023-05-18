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
├── Hero.tsx
└── Hero.test.tsx
```

```css title="Hero.css"
// Type some stylings here
```

```tsx title="Hero.tsx"
import "./Hero.css";

const Hero = () => {
    return <>// Type content here</>;
};

export default Hero;
```

```tsx title="Hero.test.tsx"
import { render } from "@testing-library/react";
import Hero from "./Hero.tsx";

test("renders Hero component", () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText(/Hello, World!/i);
    expect(linkElement).toBeInTheDocument();
});
```

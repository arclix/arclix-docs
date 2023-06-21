---
sidebar_position: 4
---

# Example Component

For example consider that your React project uses `TypeScript` as template and `CSS` as Styling and we generate component using:

```bash
npx arclix generate component Hero --addTest --addStory
```

or

```bash
npx arclix g c Hero --addTest --addStory
```

Then the component generated will have the structure:

```
Hero
├── Hero.css
├── Hero.tsx
├── Hero.stories.tsx
└── Hero.test.tsx
```

```css title="Hero.css"
// Type some stylings here
```

```tsx title="Hero.tsx"
import React from "react";
import "./Hero.css";

const Hero = () => {
    return <>// Type content here</>;
};

export default Hero;
```

```tsx title="Hero.stories.tsx"
import React from "react";
import Hero from "./Hero.tsx";

// type content here...
```

```tsx title="Hero.test.tsx"
import React from "react";
import Hero from "./Hero.tsx";

describe("Hero", () => {
    // write your tests here...
});
```

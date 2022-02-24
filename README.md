# use-helpers

Set of helper functions designed for use with Vue/React

## Install

```
npm install --save-dev @miclgael/use-helpers
```

## Usage example

```ts
import { useHelpers } from "@miclgael/use-helpers";
const { slugify } = useHelpers();

const slug = slugify("Stupidly long title with MIXed and special chars!@#$%");

console.log(slug); // "stupidly-long-title-with-mixed-and-special-chars"
```

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

## Patching

If you're me ([@miclgael](https://www.github.com/miclgael)) you can version bump on npm and github at the same time, with this command:

```
npm version [<newversion> | major | minor | patch] -m "chore: bump version to %s"
```

<details>
  <summary>Example</summary>

e.g.

```
npm version patch -m "chore: bump version to %s"
```

Will bump from `v0.0.1` to `v0.0.2`

more info at [npm version docs](https://docs.npmjs.com/cli/v8/commands/npm-version)

Note: `pre-version`, `version` and `post-version` scripts will also run.

</details>

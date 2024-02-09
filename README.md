# Notes

## Advanced Props

1. Discriminated Union Props
   1. `src/04-advanced-props/22-discriminated-union-props.problem.tsx`
   2. used for flexible component props
   3. opinion: should be used more often in react apps
2. Destructuring Discriminated Unions
   1. `src/04-advanced-props/23-destructuring-discriminated-unions.problem.tsx`
   2. multiple ways of doing this
      1. `if('title' in props)`
      2. if you separate the discriminator from the rest of what it is discriminating
         1. TS can't apply what it understands to the rest of the prop
      3. if keen on destructuring, destructure within the if/else scope
      4. opinion: just use high level props and `props.something`
3. Discriminated Union With Other Props
   1. `src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx`
   2. use intersection `&`
      1. be careful with perttier parens
         1. should be around union before intersection
         2. or break into separate types for cleaner readability
         3. opinion: break into separate types
4. Toggle Props
   1. `src/04-advanced-props/25-toggle-props.problem.tsx`
   2. discriminated unions but with boolean
   3. use disc union; split into 2 diff categories
      1. can make the discriminator optional in the secondary type(false variation)
5. Record Type for Empty Object
   1. `src/04-advanced-props/26-empty-object-type.explainer.tsx`
   2. `{}` represents anything with 0 or more properties
      1. to represent empty object: `Record<string, never>`
      2. to represent anything: `Record<string, unknown>`
6. Conditionally Require Props with Discriminated Unions
   1. `src/04-advanced-props/27-either-all-these-props-or-none.problem.tsx`
   2. `{}` is too permissive
      1. make keys optional and `undefined`
      2. `never` works too, but because it basically gets reduced to `undefined`
      3. a bit verbose, can be turned into a type helper
7. Type Def for a Mapped Component
   1. `/src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx`
   2. `ReactNode` doesn't represent a component but a member of jsx(what you can render)
   3. can use `(index: number) => ReactNode`
   4. can use `FC<number>`; basically an alias of the above
      1. get some extras too; displayName
   5. opinion: prefer the explicity of `(index: number) => ReactNode`
      1. helpful for forwardRef stuff
      2. `ReactNode` is how you type children anyways
8. Syncing Types without Manual Updates
   1. `src/04-advanced-props/29-variants-with-classnames.problem.tsx`
   2. this is what we use instead of enum
   3. `keyof typeof objectDictionary`
      1. `typeof` turns runtime object into a type
   4. allows for data structures that can be inferred all the way down
9. Autocompletion Quirk
   1.  `src/04-advanced-props/30-partial-autocomplete.problem.tsx`
   2.  make prop looser (allow any strings but autocomplete for known types)
   3.  `type LooseSize = Size | (string & {});`
       1.  ^???
       2.  intersecting with string overrides the types
       3.  wrapping with parens and intersect with {}
       4.  React does this for the `AriaRole` type
10. Extracting Keys and Values from a Type
    1.  `src/04-advanced-props/31-as-const.problem.ts`
    2.  `as const`
        1.  `Object.freeze` does this but is runtime
            1.  only works at top level
        2.  declare to TS that is will not change
    3.  index access types `TYPE[number]`, `TYPE[string]`
    4.  this is basically what we use as enum
11. Ensuring Correct Inference for Prop Types
    1.  `src/04-advanced-props/32-satisfies-vs-annotation-vs-as.problem.tsx`
    2.  `as const`
        1.  lacks error or autocomplete within the object
    3.  `as ComponentProps<"button">`
        1.  does the transformation but no validation on the props
    4.  `satisfies ComponentProps<"button">`
        1.  does not override the type
        2.  ensure object validates type
        3.  allows autocomplete
        4.  should not be the default/go to
12. Inference from a Single Source of Truth






<a href="https://totaltypescript.com/tutorials/react-with-typescript"><img src="https://res.cloudinary.com/total-typescript/image/upload/v1683647787/react-with-typescript_p2dgf5.png" alt="React with TypeScript, tutorial by Matt Pocock" /></a>

## Quickstart

Clone this repo or [open in Gitpod](https://gitpod.io/#https://github.com/total-typescript/react-typescript-tutorial).

```sh
# Installs all dependencies
npm install

# Asks you which exercise you'd like to run, and runs it
npm run exercise
```

## How to take the course

You'll notice that the course is split into exercises. Each exercise is split into a `*.problem` and a `*.solution`.

To take an exercise:

1. Run `npm run exercise`
2. Choose which exercise you'd like to run.

This course encourages **active, exploratory learning**. In the video, I'll explain a problem, and **you'll be asked to try to find a solution**. To attempt a solution, you'll need to:

1. Check out [TypeScript's docs](https://www.typescriptlang.org/docs/handbook/intro.html) or the [React TypeScript cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
1. Try to find something that looks relevant.
1. Give it a go to see if it solves the problem.

You'll know if you've succeeded because the tests will pass.

**If you succeed**, or **if you get stuck**, unpause the video and check out the `*.solution`. You can see if your solution is better or worse than mine!

## Acknowledgements

Say thanks to Matt on [Twitter](https://twitter.com/mattpocockuk) or by joining his [Discord](https://discord.gg/8S5ujhfTB3). Consider signing up to his [Total TypeScript course](https://totaltypescript.com).

## Reference

### `npm run exercise`

Alias: `npm run e`

Open a prompt for choosing which exercise you'd like to run.

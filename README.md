# Notes

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
3. Discriminated Union With Other Props
   1. `src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx`
   2. use intersection `&`
      1. be careful with perttier parens
         1. should be around union before intersection
         2. or break into separate types for cleaner readability





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

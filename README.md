# Bot Builder Project :: FrontEnd Technology Decission


## 1️⃣ For development environmentE & Building tool -> Vite VS Create React App (CRA) :: Why I prefere Vite

Create React App (CRA) has long been the go-to tool for most developers to scaffold React projects and set up a dev server. It offers a modern build setup with no configuration.

But, we see increased development and build time when the project size increases. This slow feedback loop affects developers’ productivity and happiness.

Unlike CRA, Vite does not build your entire application before serving, instead, it builds the application on demand. It also leverages the power of native ES modules, esbuild, and Rollup to improve development and build time.

Why prefer Vite over create-react-app?

1. Faster spin-up of the development server
2. Less waiting time for reflecting file updates
3. Improved build performance
4. Rich features: Vite provides out-of-the-box support for TypeScript, JSX, CSS, and more.

###### References :
- [Fore more detail let's check this article & Steps to migrate CRA to Vite]("https://semaphoreci.com/blog/vite").
- [Vite vs CRA]("https://www.linkedin.com/pulse/vite-vs-create-react-app-cra-abolfazl-haraini-avlne/).

=> Conclusion: I suggest Vite for sure

---

## 2️⃣ For UI Library Shadcn VS Radix UI :: I suggest Shadcn

1. Shadcn
It's another opensource ui library that is built on top of Radix ui.
It comes with a cli tool that enables us to installonly those components that we need.
Hence helps in optimizing our application.
- Accessible and customizable components that you can copy and paste into your apps.
- Free and open-source. So it can customize this  using tailwindcss to build your own component library.
- shadcn UI is an open source tool with 56.6K GitHub stars and 3k GitHub forks.

=>Who uses shadcn UI?
7 companies reportedly use shadcn UI in their tech stacks, including Vendit, WebStack, and tech.

=> shadcn UI's Features:
- Built with Radix UI and Tailwind CSS
- Accessible and customizable components
- Copy and paste into your apps
- Free and open-source

###### References :
- [Shadcn documentation](https://ui.shadcn.com/).
- [The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui).
- [How Shadcn-ui ACTUALLY Works](https://www.youtube.com/watch?v=AqmMx_JidGo).
- [The GOAT of React UI Libraries](https://www.youtube.com/watch?v=lQhzllnU6sE&t=27s).
- [shadcn/ui Blocks](https://www.youtube.com/watch?v=kgHzwb37LLE&t=41s&pp=ygUhVGhpcyBVSSBMaWJyYXJ5IEtlZXBzIENydXNoaW5nIEl0).

---

2. Radix UI Primitives
- It is a low-level UI component library with a focus on accessibility, customization and developer experience.
- You can use these components either as the base layer of your design system, or adopt them incrementally.
- Radix Primitives is a tool in the UI Components category of a tech stack.
- Radix Primitives is an open source tool with 14.2K GitHub stars and 674 GitHub forks.

  Who uses Radix Primitives?
  8 companies reportedly use Radix Primitives in their tech stacks, including flux, Front-End, and Mathpang.

  ###### References :
  - [ Radix UI  documentation](https://www.radix-ui.com/primitives/docs/overview/introduction).


3. Radix UI Themes
Radix Themes is a good attempt at abstracting away these low-level details, but doesn't enforce the usage of utility classes or any other styling solution. The documentation shows it being used with a vanilla CSS file for each component. According to @vladmoroz, you're meant to decide on your own styling solution. It also doesn't have some components that Radix UI has, like the Accordion component, date picker, date range, toast, Drawer, which is confusing.
  ###### References :
  - [ Radix UI Themes documentation](https://www.radix-ui.com/themes/docs/overview/getting-started).

---

## shadcn VS Radix UI  VS Radix UI Themes.

1. Component availability
2. Lightwieght
3. SDK requirements (react/angular/vue) > ts
4. Customization

| critiria                | shadcn         |  radix-UI |  radix-theme |
| ----------------------- | -------------- | --------  | ------------ |
| Lightwieght             | medium         | medium    |   large      |
| number of components    | large          | medium    |   medium     |
| variations in component | medium         | medium    |   large      |
| customization Styles    | Tailwind | var | tailwind  |   tailwind   |
| customization Effort    | medium         | hight     |   medium     |
| Source code & customize | Exist          | NO        |   NO         |
| performace              | high           | medium    |   medium     |
| learning curve          | medium         | high      |   medium     |
| JS framework            | React          | React     |  React       |
| TS                      | YES            | YES       |  YES         |



=> Conclusion:

I suggest to use shadcn as it provides you with re-usable components built on top of Radix UI and Tailwind CSS and It’s highly customizable unlike Radix and configures perfectly with Tailwind.
- I also  it's
- Also is not a package you can install, no need for npm install command. It does not add another dependency in your project. There’s no big 2mb installation. You install/fetch the component you need to use in your project. No need to install 200 components to use only 2.

- These components are brought in and become a part of your project and are configurable as per your needs. It’s like you designed those components yourself, You use npx to bring the Shadcn component you need, e.g. a button, alert dialog, etc.

Use npx to initialize the shadcn-ui and after a bit of configuration, you have to add particular components to use, like button.



---

## 3️⃣ Tailwind CSS used for customization Shadcn or Radix UI.

Tailwind CSS offers a fresh approach to styling web applications. The utility-first paradigm might require a mindset shift if you’re used to traditional CSS, but the benefits in terms of development speed, consistency, and maintainability are undeniable.

1. Speedy Development
2. Consistency.
3. Customizable.
4. Reduced CSS Bloat.
5. Responsiveness Made Easy.
6. Integration with Modern Tools.

References
- [Documentation](https://tailwindcss.com/)
- [Tailwind CSS Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw)
- [Tailwind Cheatsheet](https://tailwindcomponents.com/cheatsheet/)
- [Embracing the Utility-First Paradigm: Benefits of Tailwind CSS](https://medium.com/@ccsstudios/embracing-the-utility-first-paradigm-benefits-of-tailwind-css-47f7922cf3fa)
- [7 Reasons Why You Should Use Tailwind CSS Right Now](https://www.material-tailwind.com/blog/7-reasons-why-you-should-use-tailwind-css)

I suggest to use tailwindcss made it easy to learn & customization and has large community also to get more benifit from it if you have a design system and start to configuire tailwind with you system colors, font, themes & start to define component classes for you design system that will help you to uliminate repeating classes ad save your time and effort also to achive design consistency across your application.

---


## 4️⃣ For Global state library :  (I Recommend  Zustand)

I recommend to move from React Redux to Zustand, why that?

There are a few reasons why someone might consider moving from Redux to Zustand for managing state in a React app. Here are a few potential advantages of Zustand:

- Simplicity: Zustand is a very lightweight library, with a simple API and minimal boilerplate code. This can make it easier to learn and use, especially for smaller projects or teams.

- Performance: Zustand uses a reactive approach to updating the UI, which can result in better performance compared to Redux, especially in cases where the state updates frequently.

- Ease of testing: Zustand’s simpler API and lack of dependencies can make it easier to test state management logic.

- Conciseness: Because it is a smaller library, using Zustand can result in less boilerplate code in your application.

-> Of course, Redux is still a trendy and widely-used library, and it may be a better fit for some projects depending on the specific requirements and constraints. It’s important to carefully consider the trade-offs and choose the state management solution that works best for your project. Ultimately, the decision of which state management library to use will depend on the needs of your specific application.

References
- [Zustand documentation](https://zustand-demo.pmnd.rs/)
- [tutorial](https://youtu.be/fZPgBnL2x-Q)
- [Its Zustand Vs Redux!](https://medium.com/readytowork-org/its-zustand-vs-redux-8e24424df713)
- [Zustand vs. Redux: A Comprehensive Comparison in State Management](https://medium.com/@breakingbadjs/zustand-vs-redux-a-comprehensive-comparison-in-state-management-687a86156b14)


---

## 5️⃣ For data fetching, caching, synchronizing and updating server state  : (I Recommend  TanStack Query)

- TanStack Query is a library used for data retrieval and caching in modern web applications.
- It offers features such as data synchronization, caching, background updates and more.
- Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular
- Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code.
- It gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.
- It's also can used for deal with any APIS whatever REST OR graphQL.


References
- [TanStack Query documentation](https://tanstack.com/query/latest)
- [Why Should Use TanStack Query?
](https://medium.com/@eda.belge/why-should-use-tanstack-query-c1108a1dc798)

---

## 6️⃣ For handling forms and validation -> I recommend to use react-hook-form with zod validation schema

- React Hook Form is one such library that helps to manage complex forms.
- It has excellent performance, is super lightweight, has zero dependencies, can be easily integrated with different React UI frameworks like Material, Antd, and provides an intuitive API and excellent developer experience.

Zod is a schema validation library that makes it simple to define and validate data structures, Zod is a powerful option for TypeScript projects, leveraging type safety and robust validation capabilities.


References
- [react-hook-form documentation](https://react-hook-form.com/)
- [zod documentation](https://zod.dev/)
- [Handling Form Validations in React with React Hook Form and Zod
](https://olaishola.medium.com/handling-form-validations-in-react-with-react-hook-form-and-zod-18e070bbdda6)
- [Yup vs. Zod vs. Joi: A Comprehensive Comparison of JavaScript Validation Libraries](https://dev.to/gimnathperera/yup-vs-zod-vs-joi-a-comprehensive-comparison-of-javascript-validation-libraries-4mhi)

---

##  For Icons -> (I think lucide-react has all posibble icons we will need for bot builder)

lucide-react --> it's already used for shadcn
heroicon -> it's ha more powerful icons and can get any icon seperatly as svg or jsx file.
react-icons -> it's huge library that collect multiple icons packs inside it.


References
- [lucide-react documentation](https://lucide.dev/guide/packages/lucide-react)
- [heroicon documentation](https://heroicons.com/)
- [react-icons documentation](https://react-icons.github.io/react-icons/)

# Progressive Labs

# Development

- Create .env file getting reference from .env.example

## Install packages

```
yarn install
```

## Scripts

| Command        | Description                      |
| -------------- | -------------------------------- |
| `yarn start`     | start dev server                 |
| `yarn build`   | build for production             |
| `yarn preview` | locally preview production build |
| `yarn test` | locally test the test cases |

#### Naming convention guidelines

- Components are named with snake-case. Your Awesome Component will be named as `your-awesome-component`.
- We are trying to use less of `index.tsx` as it gets confusing while opening multiple tabs in your IDE.
- Typscript `ts` files are named with `snake-casing` convention as they are more readable.
- Variables are named with camel case.
- Interfaces and Class names are also snake cased.
- Globals are all `CAPITALIZED`.

#### The Folder Structure

- `app` contains app component and custom components for project.
- `assets` contains css, images, icons
- `module-name` contains pages within our system modules
- `utils` contains utility functions like `Contexts`
- `components` contains custom components built for project.
- `views` contains views that we see in our project.
- `hooks` contains necessary hooks we use in our project.
- `__tests__` contains necessary tests we cater in our project.

### Package Manager

> We use `yarn` as the package manager

### What this project contains

- [x] React with typescript support.
- [x] Folder structure using atomic design
- [x] [Vite](https://vitejs.dev/)
- [x] [Ant Design](https://ant.design/) Dependency (frontend library).
- [x] react-query and axios.

### Do you want to purpose something ?? Lets discuss on github discussion.

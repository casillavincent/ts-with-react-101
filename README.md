# React & TypeScript Template

## My Notes for React with TypeScript

> For Educational Purposes Only
> Refer to [this](https://github.com/typescript-cheatsheets/react) cheatsheet by @sw-yx for more information

---

<br markdown="1">
<br markdown="1">

# **Basics**

## 1. Adding Type to Props

```typescript
function Heading({ title }: { title: string }) {
   return <h1>{title}</h1>;
}
```

## 2. Anatomy

```typescript
// Anatomy
const Component = ({ deconstructedProp }: { deconstructedProp: type }): expectedReturnedType => {
   // implicit or explicit return here
};
```

> An example

```typescript
// DefaultProps
type defProps = {
   message: string;
};

const ChildComponent = ({ message }: defProps): JSX.Element => {
   return <p>{message}</p>;
};
```

# React Forms & User Input Practice Project

This project is a deep dive into mastering **Forms and User Input** in React. It serves as a practical playground to understand how to efficiently handle data submission, validation, and state management in modern web applications.

## 🎯 What We Learned

Throughout this project, we explored several key architectures for handling forms:

1.  **Controlled Components (State-based)**

    - Managing inputs via React `useState`.
    - Implementing Two-Way Binding.
    - Real-time validation on every keystroke.
    - Handling "touched" (onBlur) state for better UX.

2.  **Uncontrolled Components (Ref-based)**

    - Using `useRef` to extract values directly from the DOM.
    - Understanding the performance benefits of bypassing React re-renders.

3.  **Modern Native APIs**

    - Using the `FormData` API to extract data without managing individual state or refs.
    - `Object.fromEntries()` for clean data transformation.
    - Standard HTML validation props (`required`, `minLength`, `type="email"`).

4.  **Custom Hooks**
    - Refactoring repetitive logic into a reusable `useInput` hook.
    - Encapsulating change handlers, blur handlers, and validation logic.

> ## 🤖 AI-Assisted Learning
>
> This project was built with the assistance of advanced AI tools to ensure a deep understanding of **"Under the Hood"** concepts:
>
> - **Google Antigravity with Gemini 3**: Used as an intelligent pair programmer.
> - **Code Wiki**: Used to analyze the official React source code repositories to understand internal mechanisms like Event Bubbling, Synthetic Events, and Reconciliation.

## 📚 Course Context

This project is part of the **[React - The Complete Guide 2025 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=KEEPLEARNING)** course.

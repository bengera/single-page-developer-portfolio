# Frontend Mentor - Single page developer portfolio

This is a solution to the [Intro component with sign-up form on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
Quick Challenge to become more aquainted with forms and how validation works.

## The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page



  ### Screenshot

![](./screenshot.png)


### What I learned

The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

I also found out how to target the the svg fill property.

```css
text-decoration-thickness: 3px;
text-underline-offset: 8px;

svg:hover path {
    @media only screen and (min-width: $bp-desktop) {
        fill: #4EE1A0;     
    }
      
}
```

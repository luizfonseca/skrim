### In development

# How to use

- It will execute on the element that the breakpoint was defined (so, when `.element` reaches the breakpoint)
- `data-skrim-breakpoint` to define possible CSS based breakpoints
- `data-skrim-fn` function to call whenever the breakpoint occurs

```html
  <div class="column">
    <!-- it will change the .element color -->
    <div class="element" id="unique_element" 
        data-skrim-breakpoint="{offsetTop: '50%'}" data-skrim-fn="changeScreenColor">
      <h3>Building the bank of the future</h3>
    </div>
  </div>
  ```

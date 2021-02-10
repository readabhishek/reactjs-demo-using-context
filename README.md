# Demo to show use of context.Provider and context.Consumer
  
  This project shows how can we use 'context.Provider' to pass states/Props to children components in
  multiple level of hierarchy without the need to pass them as Props at every level.
  
  Here we are using 'context.Consumer' to receive the State/Props at child component.
<br>
  Note: using React Hook - 'useContext' we can eliminate the use of 'context.Consumer' and can grab
        the 'value' (state/Prop) passed by 'context.Provider' directly. It's much easier and neat.
<br><br>
        Check Project 'reactjs-test-project-use-context-reacthook' for more details.
        Also the link: https://reactjs.org/docs/hooks-reference.html#usecontext

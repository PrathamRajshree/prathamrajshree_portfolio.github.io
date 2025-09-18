<script>
  import { onMount } from 'svelte';
  import Typed from 'typed.js';

  let typedElement;

  onMount(() => {
    const options = {
      strings: ['build meaningful software.', 'solve complex problems.', 'explore new technologies.'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };
    new Typed(typedElement, options);
  });
</script>

<span bind:this={typedElement}></span>
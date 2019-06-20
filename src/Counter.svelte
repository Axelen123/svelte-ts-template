<script lang="ts">
  export let value = 0;
  export let step = 1;
</script>

<div>
  <slot>Default Counter</slot>
  <div>
    {value}
    <button on:click={() => (value += step)}>+</button>
    <button on:click={() => (value -= step)}>-</button>
  </div>
</div>

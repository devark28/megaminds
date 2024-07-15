<script>
  export let clips = [];
  export let animate = true;
  export let nocaption = false;

  // Imports
  import { parseStyles, repeatFunction } from "../utils";

  let currentWindow = clips.length === 0 ? -1 : 0;

  // Styles
  const windowStyles = {
    left: {
      transform: "translate(-8rem, 2rem) rotateZ(-12deg) scale(.85)",
      zIndex: 0,
    },
    center: {
      transform: "none",
      zIndex: 2,
      transform: "scale(1)",
      filter: "blur(0)",
      opacity: 1,
    },
    right: {
      transform: "translate(8rem, 2rem) rotateZ(12deg) scale(.85)",
      zIndex: 1,
    },
  };

  $: get_window_styles = (index) => {
    if (
      (currentWindow == 0 && index == clips.length - 1 && animate == true) ||
      index == currentWindow - 1
    ) {
      return parseStyles(windowStyles.left);
    } else if (
      (currentWindow == clips.length - 1 && index == 0 && animate == true) ||
      index == currentWindow + 1
    ) {
      return parseStyles(windowStyles.right);
    } else if (index == currentWindow) {
      return parseStyles(windowStyles.center);
    }
  };

  // timer interval
  if (animate == true) {
    const intervalId = repeatFunction(3000, () => {
      if (currentWindow < clips.length - 1) {
        currentWindow += 1;
      } else {
        currentWindow = 0;
      }
      // console.log("done", currentWindow);
    });
  }
</script>

<div class="container">
  <ul>
    {#each clips as clip, index}
      <li key={index}>
        <div
          style="
          background-image: url('{clip.src}');
          {get_window_styles(index)};"
        ></div>
        {#if (nocaption == undefined || nocaption == false) && index == currentWindow}
          <span>{clip.caption}</span>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
  }

  ul {
    position: relative;
    display: flex;
    padding: 0 calc(8% + calc(8% * 0.67));
  }

  li {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(22rem * 0.67);
    gap: 0.5rem;
  }

  li > div {
    display: flex;
    flex: 1;
    /* background-color: red; */
    justify-content: center;
    border-radius: calc(1.1rem * 0.67);
    min-width: 100%;
    min-height: calc(48rem * 0.67);
    background-position-x: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.7s;
    transform: scale(0.85);
    filter: "blur(0.3rem)";
    z-index: -1;
    opacity: 0.5;
  }

  li > span {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: calc(0.4rem * 0.67) 0;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
    color: #00796b;
  }
</style>

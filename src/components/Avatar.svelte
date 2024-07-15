<script>
  export let image;
  export let index = 0;
</script>

<div class="card">
  <!-- <img src={image} alt="#" class:hidden={image == undefined} /> -->
  <div
    class="img"
    style="background-image: url('{image}');animation-delay: {0.5 * (index + 1) / 4}s;"
    class:hidden={image == undefined}
  ></div>
  {#if image == undefined}
    <div class="logo" style="animation-delay: {0.5 * (index + 1) / 4}s;">Mega minds</div>
  {/if}
</div>

<style>
  .card {
    position: relative;
    overflow: hidden;
  }

  .card,
  .card > .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(11.2rem * 0.67);
    height: calc(12.5rem * 0.67);
    background-position: initial;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: calc(1.1rem * 0.67);
  }

  .card > .img,
  .logo {
    position: absolute;
    animation: 0.6s ease-in-out forwards dropIn;
    top: -100%;
  }

  .card::before {
    /* content: ""; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #009688;
    opacity: 30%;
  }

  .logo {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: calc(2.2rem * 0.67);
    font-weight: 500;
    font-family: Inter;
    color: #009688;
    text-align: center;
  }

  .hidden {
    display: none !important;
  }

  @keyframes dropIn {
    0% {
      top: -100%;
    }
    80% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
</style>

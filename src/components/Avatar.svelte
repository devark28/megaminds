<script>
  export let image;
</script>

<div class="card">
  <img src={image} alt="#" class:hidden={image == undefined} />
  {#if image == undefined}
    <div class="logo">Mega minds</div>
  {/if}
</div>

<style>
  .card {
    position: relative;
    overflow: hidden;
  }

  .card > img {
    /* filter: grayscale(100%); */
  }

  .card,
  .card > img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11.2rem;
    height: 12.5rem;
    background-color: #b2dfdb;
    border-radius: 1.1rem;
  }

  .card::before {
    content: "";
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
    font-size: 2.2rem;
    font-weight: 500;
    font-family: Inter;
    color: #009688;
    text-align: center;
  }

  .hidden {
    display: none !important;
  }
</style>

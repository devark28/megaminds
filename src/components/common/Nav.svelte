<div class="container">
  <nav>
    <div class="logo">Mega minds</div>
    <!-- <div class="menus"></div> -->
    <div class="spacer"></div>
  </nav>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
  }

  .container > nav {
    /* position: fixed; */
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
    /* background-color: rgba(255, 255, 255, 0.5); */
    padding: 0.5rem 0;
  }

  .logo {
    font-size: calc(2.2rem * 0.67);
    font-weight: 500;
    font-family: Inter;
    color: #009688;
  }

  .logo,
  .spacer {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
  }

  /* .menus {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    height: 100%;
  } */

  @media (max-width: 400px) {
    .logo {
      font-size: calc(2rem * 0.67);
      font-weight: 500;
    }
  }
</style>

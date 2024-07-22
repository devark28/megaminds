<script>
  import Avatar from "../Avatar.svelte";
</script>

<div class="container">
  <div class="implementations">
    <div class="card">
      Establishing a <span class="highlight">Learning hub</span> that teaches young girls activities such as
      hairdressing, cosmetology, and tailoring.
    </div>
    <div class="card">
        <span class="highlight">Takeaways and fliers</span> on sexual reproductive health after learning hub
      sessions.
    </div>
    <div class="card">
        <span class="highlight">Community outreach</span> to educate and sensitize parents that sexual education
      is a necessity.
    </div>
    <div class="card">
        <span class="highlight">Organizing talent shows</span> themed around a sexual health education topics.
    </div>
  </div>
  <div class="solution">
    <div>
      To Address the problem, we designed an initiative to provide young girls and
      women with reliable and easy to understand sexual health information.
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67) 0;
  }

  .implementations {
    display: grid;
    grid-template-columns: repeat(2, calc(minmax(30rem, 34rem) * 0.67));
    grid-template-rows: repeat(2, calc(minmax(14rem, 17rem) * 0.67));
    grid-column-gap: calc(2rem * 0.67);
    grid-row-gap: calc(1.5rem * 0.67);
    max-width: 50%;
  }

  .implementations > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(1.7rem * 0.67);
  }

  .card {
    background-color: #b2dfdb;
    color: #009688;
    border-radius: calc(1rem * 0.67);
    padding: calc(2rem * 0.67);
    font-size: calc(2rem * 0.67);
    font-weight: 500;
    font-family: Inter;
    display: inline;
  }

  .solution {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .solution > * {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(3rem * 0.67);
    font-weight: 500;
    width: 68%;
    height: calc(24rem * 0.67);
    border-radius: calc(1.1rem * 0.67);
    background-color: #b2dfdb;
    color: #00796b;
    padding: calc(3rem * 0.67);
  }

  .highlight {
    color: #fff;
    font: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  @media (max-width: 400px) {
    .container {
      padding: calc(0rem * 0.67) 0;
      flex-direction: column;
    }
    .implementations {
      display: flex;
      flex-direction: column;
    }
    .solution > * {
      font-size: calc(2.6rem * 0.67);
      width: 80%;
      /* height: calc(24rem * 0.67); */
      height: fit-content;
      border-radius: calc(0.6rem * 0.67);
      padding: calc(2rem * 0.67);
      background-color: transparent;
    }
  }
</style>

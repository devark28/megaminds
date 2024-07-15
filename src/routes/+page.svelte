<script>
  import Nav from "../components/common/Nav.svelte";

  import Hero from "../components/sections/Hero.svelte";
  import ChallengeOne from "../components/sections/ChallengeOne.svelte";
  import ChallengeTwo from "../components/sections/ChallengeTwo.svelte";
  import ChallengeThree from "../components/sections/ChallengeThree.svelte";
  import ChallengeFour from "../components/sections/ChallengeFour.svelte";
</script>

<div class="container">
  <Nav />
  <section>
    <Hero />
  </section>
  <section>
    <ChallengeOne />
  </section>
  <section>
    <ChallengeTwo />
  </section>
  <section>
    <ChallengeThree />
  </section>
  <section>
    <ChallengeFour />
  </section>
  <div class="keymap"></div>
</div>

<style>
  * {
    font-family: Inter;
    padding: 0;
    margin: 0;
    min-width: 0;
    box-sizing: border-box;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 4rem;
    height: 92vh;
  }

  section {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
  }

  .keymap {
    position: absolute;
    z-index: -1;
    right: 27%;
    top: 0;
    height: 510%;
    width: 6px;
    background: linear-gradient(to bottom, transparent 12%, #b2dfdb 0%);
  }
</style>

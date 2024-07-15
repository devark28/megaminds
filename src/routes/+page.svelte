<script>
  import Nav from "../components/common/Nav.svelte";

  import Hero from "../components/sections/Hero.svelte";
  import ChallengeOne from "../components/sections/ChallengeOne.svelte";
  import ChallengeTwo from "../components/sections/ChallengeTwo.svelte";
  import ChallengeThree from "../components/sections/ChallengeThree.svelte";
  import ChallengeFour from "../components/sections/ChallengeFour.svelte";
  import Key from "../components/Key.svelte";
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
  <div class="keymap">
    <Key num={1} txt="Challenge" offset={1} />
    <Key num={2} txt="Challenge" offset={1.85} />
    <Key num={3} txt="Challenge" offset={2.6} />
    <Key num={4} txt="Challenge" offset={3.4} />
  </div>
</div>

<style>
  * {
    font-family: Inter;
    padding: 0;
    margin: 0;
    min-width: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: calc(1.5rem * 0.67) calc(6rem * 0.67);
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
    top: 1%;
    height: 510%;
    width: calc(6px * 0.67);
    background: linear-gradient(to bottom, transparent 12%, #b2dfdb 0%);
  }
</style>

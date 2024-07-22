<script>
  import Nav from "../components/common/Nav.svelte";

  import Hero from "../components/sections/Hero.svelte";
  import ChallengeOne from "../components/sections/ChallengeOne.svelte";
  import ChallengeTwo from "../components/sections/ChallengeTwo.svelte";
  import ChallengeThree from "../components/sections/ChallengeThree.svelte";
  import ChallengeFour from "../components/sections/ChallengeFour.svelte";
  import ChallengeFive from "../components/sections/ChallengeFive.svelte";
  import ChallengeSix from "../components/sections/ChallengeSix.svelte";
  import KeyPoint from "../components/KeyPoint.svelte";
</script>

<div class="container">
  <Nav />
  <section>
    <Hero />
  </section>
  <section>
    <span class="subtitle">Passions alone and together</span>
    <ChallengeOne />
  </section>
  <section>
    <span class="subtitle">Great women of Mahama</span>
    <ChallengeTwo />
  </section>
  <section>
    <span class="subtitle">Striving for impact</span>
    <ChallengeThree />
  </section>
  <section>
    <span class="subtitle">Treasure hunt takeaways</span>
    <ChallengeFour />
  </section>
  <section>
    <span class="subtitle">How did we solve it?</span>
    <ChallengeFive />
  </section>
  <section>
    <ChallengeSix />
  </section>
  <div class="keymap">
    <KeyPoint
      num={1}
      txt="Challenge"
      subtxt="Passions alone and together"
      offset={0.85}
    />
    <KeyPoint
      num={2}
      txt="Challenge"
      subtxt="Great women of Mahama"
      offset={1.58}
    />
    <KeyPoint
      num={3}
      txt="Challenge"
      subtxt="Striving for impact"
      offset={2.2}
    />
    <KeyPoint
      num={4}
      txt="Challenge"
      subtxt="Treasure hunt takeaways"
      offset={2.85}
    />
    <!-- <KeyPoint
      num={5}
      txt="Challenge"
      subtxt="How did we solve it?"
      offset={3.5}
    /> -->
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
    height: 610%;
    width: calc(6px * 0.67);
    background: linear-gradient(
      to bottom,
      transparent 12%,
      #b2dfdb 0% 92%,
      transparent 12%
    );
  }

  .subtitle {
    display: none;
  }

  @media (max-width: 400px) {
    .container {
      padding: calc(1rem * 0.67) calc(3rem * 0.67);
      overflow-x: hidden;
    }
    .keymap {
      display: none;
    }
    section:nth-child(2) {
      min-height: 80vh;
      /* min-height: 150vh; */
    }
    section:nth-child(3) {
    }
    section:nth-child(4) {
      /* min-height: 80vh; */
      min-height: 160vh;
    }
    .subtitle {
      display: flex;
      font-weight: 500;
      font-size: 1.3rem;
      text-wrap: nowrap;
    }
  }

  /* @media (min-width: 1360px) {
    .container {
      padding: calc(2rem * 0.67) calc(15% * 0.67);
    }
  } */
</style>

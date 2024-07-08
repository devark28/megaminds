<script>
  import Nav from "../components/common/Nav.svelte";
  
  import Hero from "../components/sections/Hero.svelte";
  import ChallengeOne from "../components/sections/ChallengeOne.svelte";
  import ChallengeTwo from "../components/sections/ChallengeTwo.svelte";
  import ChallengeThree from "../components/sections/ChallengeThree.svelte";
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
    padding: 1.5rem 4rem;
    height: 92vh;
  }

  section {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
  }
</style>

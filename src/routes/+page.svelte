<script>
  import Hero from "../components/Hero.svelte";
  import Nav from "../components/common/Nav.svelte";
</script>

<div class="container">
  <Nav />
  <section>
    <Hero />
  </section>
</div>

<style>
  * {
    font-family: Inter;
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
  }
</style>

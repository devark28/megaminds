<script>
  import PhoneView from "../PhoneView.svelte";
  import KeyPoint from "../KeyPoint.svelte";

  $: currentClip = 0;

  const clips = [
    {
      src: "/images/WhatsApp Image (Natete).jpg",
      caption: "Natete",
      description: "I like learning different new things and improving on those I already know.",
    },
    {
      src: "/images/WhatsApp Image (Raissa).jpg",
      caption: "Raissa",
      description: "I fight for women empowerment as i believe there is still room for improvement.",
    },
    {
      src: "/images/WhatsApp Image (Akech1).jpg",
      caption: "Akech",
      description: "Booyah booyah boooyah booooo! Booyah booyah boooyah booooo! Booyah!",
    },
    {
      src: "/images/WhatsApp Image (Nise1).jpg",
      caption: "Nise",
      description: "I believe in innovative ideas to transform the community towards a sustainable future.",
    },
    {
      src: "/images/GoogleChat Image (Elvine1).jpg",
      caption: "Elvine",
      description: "I'm passionate about helping vulnerable people especially refugees and orphans.",
    },
    {
      src: "/images/WhatsApp Image (Bruce1).jpg",
      caption: "Bruce",
      description: "I aspire to building sustainable and maintainable computer systems.",
    },
  ];
</script>

<div class="container">
  <div class="challengers">
    <PhoneView {clips} onSlide={(index) => (currentClip = index)} />
  </div>
  <div class="description">
    <div class="wrapper">
      {#each clips as clip, index}
        <div class={currentClip == index ? "visible" : ""}>
          {clip.description}
        </div>
      {/each}
    </div>
  </div>
  <!-- <KeyPoint num="1" txt="Challenge" /> -->
</div>

<style>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: calc(2rem * 0.67) 0;
  }

  .challengers {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 4%;
  }

  .description {
    position: relative;
    display: flex;
    flex: 1;
    height: 100%;
  }

  .description > .wrapper {
    overflow: hidden;
    position: absolute;
    /* background: red; */
    left: -20%;
    bottom: 16%;
    width: 50%;
    height: 50%;
  }

  .description > .wrapper > div {
    position: absolute;
    bottom: 0;
    padding: 0.6rem 1rem;
    /* background: green; */
    max-width: 100%;
    transition: all 0.6s;
    left: 0;
    opacity: 0;
    display: flex;
    align-items: end;
    min-height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
    color: #00796b;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .visible {
    animation: slideIn 0.6s ease-in-out forwards;
  }
</style>

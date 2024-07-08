<script>
  import PhoneView from "../PhoneView.svelte";

  const clips = [
    { src: "/images/WhatsApp Image (Natete).jpg", caption: "Natete" },
    { src: "/images/WhatsApp Image (Raissa).jpg", caption: "Raissa" },
    { src: "/images/WhatsApp Image (Akech1).jpg", caption: "Akech" },
    { src: "/images/WhatsApp Image (Nise1).jpg", caption: "Nise" },
    { src: "/images/GoogleChat Image (Elvine1).jpg", caption: "Elvine" },
    { src: "/images/WhatsApp Image (Bruce1).jpg", caption: "Bruce" },
  ];
</script>

<div class="container">
  <div class="challengers">
    <PhoneView {clips} />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 2rem 0;
  }

  .challengers {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>

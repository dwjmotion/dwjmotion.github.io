// Video previews + click-to-load Bunny player, and the hero logo loop.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Videos: loop Bunny's muted preview while on screen; clicking play loads the full player.
  document.querySelectorAll("[data-video]").forEach((box) => {
    const preview = box.querySelector(".video__preview");
    const button = box.querySelector(".video__play");

    if (preview && !reduceMotion && "IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) preview.play().catch(() => {});
          else preview.pause();
        });
      }, { threshold: 0.25 }).observe(box);
    }

    button?.addEventListener("click", () => {
      const params = new URLSearchParams({ autoplay: "true", preload: "true", responsive: "true" });
      const iframe = document.createElement("iframe");
      iframe.src = `https://player.mediadelivery.net/embed/${box.dataset.library}/${box.dataset.id}?${params}`;
      iframe.title = box.dataset.title || "Video player";
      iframe.allow = "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      box.replaceChildren(iframe);
      iframe.focus();
    });
  });

  // Hero logo loop: only on devices that can hover, loaded after the page so it doesn't slow the first paint.
  const loop = document.querySelector(".hero__logo-loop");
  if (loop && !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const load = () => { loop.src = loop.dataset.src; };
    if (document.readyState === "complete") load();
    else window.addEventListener("load", load, { once: true });
  }
})();

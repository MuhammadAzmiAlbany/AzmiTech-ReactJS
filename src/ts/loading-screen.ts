(function (): void {
  const SPLASH_DURATION: number = 10;

  const splash: HTMLElement | null = document.getElementById('splash');
  if (!splash) return;

  setTimeout((): void => {
    splash.classList.add('hide');

    const onTransitionEnd = (): void => {
      splash.remove();
    };

    splash.addEventListener('transitionend', onTransitionEnd, { once: true });
  }, SPLASH_DURATION);
})();
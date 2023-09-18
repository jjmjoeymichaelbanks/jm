var Night = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(10, 10, 10, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(140, 140, 140, .3)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#aaaaaa`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(0, 0, 0, .6)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(26, 26, 26, .3)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(26,26,26, .4)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #262626`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(7,7,7,.9)`
  );
  /*
  if (backgroundImage[0].path != `Defaultjpg`)
    backgroundImage[0].path = `Default.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
  */
};

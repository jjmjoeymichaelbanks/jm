let Legacy = function () {
  display == `legacy`;
  _center.style.cssText = `justify-content:center !important`;
  _center.style.display = `inline-block`;
  _channel.style.height = `fit-content`;
  _channel.classList.remove(`flexbox`);
  _channel
    .querySelectorAll(
      `.item`
    )
      .forEach(
        (a) =>
          a.classList.remove(
            `flexbox`
          )
      );
  _channel
    .querySelectorAll(
      `.item`
    )
      .forEach(
        (a) =>
          a.style.width =
            `425px`
      );
  _xml.style.top = `60px`;

  if (
    document
      .body
        .contains(
          _center
            .querySelector(
              `.bottom`
            )
          )
  )
    _center.querySelector(`.bottom`).style.left = `0`;
}

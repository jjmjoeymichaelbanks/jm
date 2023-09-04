var Sticky = function (pubArray) {
  let maximum = 480;
  let newImg = new Image();
  newImg.setAttribute(
    `src`,
    pubArray.src
  );
  newImg.onload = function () {
      fetch(
        `${cors}${pubArray.src}`,
        {
          method: "GET",
          headers: {
            Origin: "*",
            Accept: "application/json",
            "X-Requested-With": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
      })
        .catch(
          (response) =>
            {
              while (
                _guide.lastChild
              )
                _guide.removeChild(_guide.lastChild);
              _guide.style.display = `none`;
              local = null;
              post = null;
            }
        );
          _guide
            .querySelector(`.img`)
              .setAttribute(
                `src`,
                pubArray.src
              );
          document.querySelector(`.sticky`).style.display = `block`;
          _guide.style.display = `flex`;
    }

    if (
      window.innerWidth <= 425
    ) {
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      _guide.querySelector(`.sticky .src`).style.display = `block`;
      _guide.querySelector(`.sticky .image`).style.margin = `0`;
      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxHeight = `65vh`
            );
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxWidth = `100vw`
            );
        _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
        _guide.querySelector(`.header`).style.width = `100vw`;


      }

      else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxHeight = `55vh`
            );
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxWidth = `100vw`
            );
      }
      _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
      _guide.querySelector(`.ago`).style.position = `relative`;
      _guide.querySelector(`.header`).style.backgroundColor =
        `var(--color-primary)`
      _guide.querySelector(`.header`).style.width = `100vw`;
      _guide.style.paddingTop = `40px`;

    }




      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth <= maximum
      )
        _guide.querySelector(`.sticky .image`).style.margin = `25px`;

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxHeight = `90vh`
            );
        _guide
          .querySelectorAll(
            `.img`
          )
           .forEach(
              (a) => a.style.maxWidth = `calc(100%)`
            );
          if (
          !youtubeMedia
        ) {
        _guide
          .querySelectorAll(
            `.img`
          )
           .forEach(
              (a) => a.style.maxWidth = `100%`
            );
        }
      }
      else if (
        newImg.naturalHeight >= newImg.naturalWidth
      ) {
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxHeight = `90vh`
            );
        _guide
          .querySelectorAll(
            `.img`
          )
            .forEach(
              (a) => a.style.maxWidth = `calc(55vw - 220px)`
            );
      }






      _guide
        .querySelector(
          `.img`
        )
          .setAttribute(
            `src`,
            pubArray.src
          );

      document.querySelector(`.sticky`).style.display = `block`;
      _guide.style.display = `flex`;

    if (
      showSplash
    )
      _check.style.display = `none`;
};

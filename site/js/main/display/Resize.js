window
  .addEventListener(
    'resize', (evt) =>
    {
      if (
        document
          .body
            .contains(
              _xml.querySelector(
                `.item`
              )
            )
      ) {

        if (
          window.innerWidth <= 1024 &&
          window.innerWidth <= 768
          ) {
          _display.style.display = `none`;
          display = `legacy`;
          Legacy();
        }

        else if (
          window.innerWidth >= 769
        ) {
            display = `flexBox`;
            var height = 0;
            var second = 0;
            var groups = 0;
            var column = _channel.querySelectorAll(`.item:nth-child(3n+1)`);
            for (
                let i = 0;
                i < column.length - 1;
                i++
            )
            height += column[i].clientHeight;
            var column = _channel.querySelectorAll(`.item:nth-child(3n+2)`);
            for (
                let i = 0;
                i < column.length - 1;
                i++
          )
            second += column[i].clientHeight;
            var column = _channel.querySelectorAll(`.item:nth-child(3n+3)`);
            for (
                let i = 0;
                i < column.length - 1;
                i++
            )
            groups += column[i].clientHeight;
            var max =
            Math.max(
                height,
                second,
                groups
            );
            var min =
                Math.min(
                height,
                second,
                groups
            );
            if (
                height == min
            )
            var min = `left:-210px;order:1`;
            else if (
                second == min
            )
            var min = `left:-210px;order:2`;
            else if (
                groups == min
            )
            var min = `left:-210px;order:3`;
          Flex()

        }

        else if (
          window.innerWidth >= 1280

        ) {
          _center.style.cssText = `display:inline-flex;width:0px;right:115px;`;
          _display.style.cssText = `display:inline-block;`;

        }

        else if (
          viewport[cycleViewport] == `legacy` &&
          window.innerWidth < 860
        )
          _display.style.display = `none`;

      }
    },
  {
    passive:
    true
  }
);

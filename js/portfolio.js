
    (() => {
      "use strict";

      const $ = (selector, context = document) =>
        context.querySelector(selector);

      const $$ = (selector, context = document) =>
        [...context.querySelectorAll(selector)];

      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        );

      /* =====================================================
         INTRO
         ===================================================== */

      const introOverlay =
        $("#intro-overlay");

      const introWordCycle =
        $("#introWordCycle");

      const introWords =
        $$("#introWordCycle .w");

      const siteContent =
        $("#site-content");

      let introFinished =
        false;

      function sizeIntroWords() {
        if (
          !introWordCycle ||
          !introWords.length
        ) {
          return;
        }

        let maxWidth =
          0;

        introWords.forEach(
          word => {
            maxWidth =
              Math.max(
                maxWidth,
                word.getBoundingClientRect().width
              );
          }
        );

        introWordCycle.style.width =
          `${Math.ceil(maxWidth) + 8}px`;
      }

      function finishIntro() {
        if (introFinished) {
          return;
        }

        introFinished =
          true;

        introOverlay
          ?.classList
          .add("expand");

        siteContent
          ?.classList
          .add("visible");

        document.body
          .classList
          .remove("intro-active");

        window.setTimeout(
          () => {
            if (introOverlay) {
              introOverlay.style.display =
                "none";
            }
          },
          reducedMotion.matches
            ? 0
            : 350
        );
      }

      function startIntro() {
        sizeIntroWords();

        if (
          reducedMotion.matches ||
          introWords.length < 3
        ) {
          finishIntro();

          return;
        }

        introWords[0]
          .classList
          .add("active");

        window.setTimeout(
          () => {
            introWords[0]
              .classList
              .remove("active");

            introWords[0]
              .classList
              .add("exit");

            introWords[1]
              .classList
              .add("active");
          },
          1200
        );

        window.setTimeout(
          () => {
            introWords[1]
              .classList
              .remove("active");

            introWords[1]
              .classList
              .add("exit");

            introWords[2]
              .classList
              .add("active");
          },
          2400
        );

        window.setTimeout(
          finishIntro,
          3800
        );
      }

      document.fonts
        ?.ready
        ?.then(sizeIntroWords);

      window.addEventListener(
        "resize",
        sizeIntroWords
      );

      startIntro();

      /* =====================================================
         NAV
         ===================================================== */

      $("#logoHome")
        ?.addEventListener(
          "click",
          event => {
            event.preventDefault();

            window.scrollTo({
              top: 0,

              behavior:
                reducedMotion.matches
                  ? "auto"
                  : "smooth"
            });
          }
        );

      /* =====================================================
         TEMA
         ===================================================== */

      const themeToggle =
        $("#themeToggle");

      const themeLabel =
        $("#themeLabel");

      function updateTheme() {
        const dark =
          document.documentElement
            .getAttribute("data-theme") ===
            "dark";

        if (themeLabel) {
          themeLabel.textContent =
            dark
              ? "Acolhedor"
              : "Sombrio";
        }
      }

      themeToggle
        ?.addEventListener(
          "click",
          () => {
            const dark =
              document.documentElement
                .getAttribute("data-theme") ===
                "dark";

            if (dark) {
              document.documentElement
                .removeAttribute(
                  "data-theme"
                );
            } else {
              document.documentElement
                .setAttribute(
                  "data-theme",
                  "dark"
                );
            }

            updateTheme();
          }
        );

      updateTheme();

      /* =====================================================
         HERO
         ===================================================== */

      const wfNavItems =
        $$(".wf-nav-item");

      const wfViews =
        $$(".wf-view");

      const wfWindow =
        $("#wfWindow");

      wfNavItems.forEach(
        item => {
          item.addEventListener(
            "click",
            event => {
              const tab =
                item.dataset.tab;

              wfNavItems.forEach(
                current => {
                  current
                    .classList
                    .toggle(
                      "active",
                      current === item
                    );
                }
              );

              wfViews.forEach(
                view => {
                  view
                    .classList
                    .toggle(
                      "active",
                      view.id ===
                        `view-${tab}`
                    );
                }
              );
            }
          );
        }
      );

      const wfSwitchMode =
        $("#wfSwitchMode");

      wfSwitchMode
        ?.addEventListener(
          "click",
          event => {
            event.stopPropagation();

            const dark =
              wfWindow?.getAttribute("data-wf-theme") ===
              "dark";

            if (wfWindow) {
              if (dark) {
                wfWindow.removeAttribute("data-wf-theme");
                wfSwitchMode.textContent = "modo app";
              } else {
                wfWindow.setAttribute("data-wf-theme", "dark");
                wfSwitchMode.textContent = "modo claro";
              }
            }
          }
        );

      let selectedColor =
        "#FB4617";

      const swatches =
        $$(".swatch");

      swatches.forEach(
        swatch => {
          swatch.addEventListener(
            "click",
            () => {
              swatches.forEach(
                item => {
                  item
                    .classList
                    .remove("active");
                }
              );

              swatch
                .classList
                .add("active");

              selectedColor =
                swatch.dataset.color || "";
            }
          );
        }
      );

      function contrastColor(hex) {
        if (!hex) {
          return "";
        }

        const clean =
          hex.replace("#", "");

        const r =
          parseInt(
            clean.slice(0, 2),
            16
          );

        const g =
          parseInt(
            clean.slice(2, 4),
            16
          );

        const b =
          parseInt(
            clean.slice(4, 6),
            16
          );

        const luminance =
          (
            r * 299 +
            g * 587 +
            b * 114
          ) / 1000;

        return luminance > 150
          ? "#111111"
          : "#FFFFFF";
      }

      $("#wfWindow")
        ?.addEventListener(
          "click",
          event => {
            const target =
              event.target.closest(
                ".wf-paintable"
              );

            if (!target) {
              return;
            }

            event.stopPropagation();

            if (!selectedColor) {
              target.style.backgroundColor =
                "";

              target.style.borderColor =
                "";

              target.style.color =
                "";

              $$("*", target)
                .forEach(
                  child => {
                    child.style.color =
                      "";
                  }
                );

              return;
            }

            const textColor =
              contrastColor(
                selectedColor
              );

            target.style.backgroundColor =
              selectedColor;

            target.style.borderColor =
              selectedColor;

            target.style.color =
              textColor;

            $$("*", target)
              .forEach(
                child => {
                  child.style.color =
                    textColor;
                }
              );
          }
        );

      $$(".wf-checkbox")
        .forEach(
          checkbox => {
            checkbox.addEventListener(
              "click",
              event => {
                checkbox.classList.toggle("checked");
                checkbox.textContent =
                  checkbox.classList.contains("checked")
                    ? "✓"
                    : "";
              }
            );
          }
        );

      $("#clearBtn")
        ?.addEventListener(
          "click",
          () => {
            $$(".wf-paintable")
              .forEach(
                element => {
                  element.style.backgroundColor =
                    "";

                  element.style.borderColor =
                    "";

                  element.style.color =
                    "";

                  $$("*", element)
                    .forEach(
                      child => {
                        child.style.color =
                          "";
                      }
                    );
                }
              );

            swatches.forEach(
              item => {
                item
                  .classList
                  .remove("active");
              }
            );

            const defaultSwatch =
              swatches.find(
                swatch =>
                  swatch.dataset.color ===
                  "#FB4617"
              );

            defaultSwatch
              ?.classList
              .add("active");

            selectedColor =
              "#FB4617";
          }
        );

      let deliveryCount =
        14;

      $("#wfMetricBtn")
        ?.addEventListener(
          "click",
          event => {
            event.stopPropagation();

            deliveryCount +=
              1;

            const counter =
              $("#wfCounter");

            if (counter) {
              counter.textContent =
                String(
                  deliveryCount
                );
            }
          }
        );

      /* =====================================================
         FERNANDO
         ===================================================== */

      const fernandoTabs =
        $$(".fernando-tab");

      const fernandoViews =
        $$(".fernando-view");

      fernandoTabs.forEach(
        tab => {
          tab.addEventListener(
            "click",
            () => {
              const target =
                tab.dataset
                  .fernandoTab;

              fernandoTabs.forEach(
                item => {
                  item
                    .classList
                    .toggle(
                      "active",
                      item === tab
                    );
                }
              );

              fernandoViews.forEach(
                view => {
                  view
                    .classList
                    .toggle(
                      "active",
                      view.dataset
                        .fernandoView ===
                        target
                    );
                }
              );
            }
          );
        }
      );

      /* =====================================================
         VOIT TABS
         ===================================================== */

      const voitTabs =
        $$(".voit-tab");

      const voitViews =
        $$(".voit-view");

      voitTabs.forEach(
        tab => {
          tab.addEventListener(
            "click",
            () => {
              const target =
                tab.dataset.voitTab;

              voitTabs.forEach(
                item => {
                  item
                    .classList
                    .toggle(
                      "active",
                      item === tab
                    );
                }
              );

              voitViews.forEach(
                view => {
                  view
                    .classList
                    .toggle(
                      "active",
                      view.dataset.voitView ===
                        target
                    );
                }
              );

              window.setTimeout(
                updateAllCarousels,
                20
              );
            }
          );
        }
      );

      /* =====================================================
         NOVO — CARROSSEL REUTILIZÁVEL
         VOIT + BRADUCA + AYMÉE
         ===================================================== */

      const carousels =
        $$("[data-carousel]");

      const carouselControllers =
        [];

      carousels.forEach(
        carousel => {
          const viewport =
            $(
              "[data-carousel-viewport]",
              carousel
            );

          const prevButton =
            $(
              "[data-carousel-prev]",
              carousel
            );

          const nextButton =
            $(
              "[data-carousel-next]",
              carousel
            );

          if (
            !viewport ||
            !prevButton ||
            !nextButton
          ) {
            return;
          }

          function getScrollAmount() {
            const firstItem =
              $(".strip-item", viewport);

            if (!firstItem) {
              return (
                viewport.clientWidth *
                0.75
              );
            }

            const styles =
              getComputedStyle(
                viewport
              );

            const gap =
              parseFloat(
                styles.columnGap ||
                styles.gap
              ) || 16;

            return (
              firstItem
                .getBoundingClientRect()
                .width +
              gap
            );
          }

          function updateArrows() {
            const maxScrollLeft =
              viewport.scrollWidth -
              viewport.clientWidth;

            const hasOverflow =
              maxScrollLeft > 4;

            prevButton
              .classList
              .toggle(
                "is-disabled",
                !hasOverflow
              );

            nextButton
              .classList
              .toggle(
                "is-disabled",
                !hasOverflow
              );

            prevButton.setAttribute(
              "aria-disabled",
              String(!hasOverflow)
            );

            nextButton.setAttribute(
              "aria-disabled",
              String(!hasOverflow)
            );
          }

          function move(direction) {
            const scrollAmount =
              getScrollAmount();

            const maxScrollLeft =
              viewport.scrollWidth -
              viewport.clientWidth;

            if (
              direction > 0 &&
              viewport.scrollLeft >=
                maxScrollLeft - 3
            ) {
              const firstItem =
                viewport.firstElementChild;

              if (firstItem) {
                viewport.appendChild(
                  firstItem
                );

                viewport.scrollLeft =
                  Math.max(
                    0,
                    viewport.scrollLeft -
                      scrollAmount
                  );
              }
            }

            if (
              direction < 0 &&
              viewport.scrollLeft <= 3
            ) {
              const lastItem =
                viewport.lastElementChild;

              if (lastItem) {
                viewport.insertBefore(
                  lastItem,
                  viewport.firstElementChild
                );

                viewport.scrollLeft +=
                  scrollAmount;
              }
            }

            viewport.scrollBy({
              left:
                scrollAmount *
                direction,

              behavior:
                reducedMotion.matches
                  ? "auto"
                  : "smooth"
            });
          }

          prevButton
            .addEventListener(
              "click",
              () => move(-1)
            );

          nextButton
            .addEventListener(
              "click",
              () => move(1)
            );

          viewport
            .addEventListener(
              "scroll",
              updateArrows,
              {
                passive: true
              }
            );

          $$("img", viewport)
            .forEach(
              image => {
                if (!image.complete) {
                  image.addEventListener(
                    "load",
                    updateArrows,
                    {
                      once: true
                    }
                  );
                }
              }
            );

          if (
            "ResizeObserver" in window
          ) {
            const resizeObserver =
              new ResizeObserver(
                updateArrows
              );

            resizeObserver.observe(
              viewport
            );
          }

          carouselControllers.push({
            update: updateArrows
          });

          updateArrows();
        }
      );

      function updateAllCarousels() {
        carouselControllers
          .forEach(
            controller => {
              controller.update();
            }
          );
      }

      window.addEventListener(
        "resize",
        updateAllCarousels
      );

      window.addEventListener(
        "load",
        updateAllCarousels
      );

      /* =====================================================
         MODAL
         ===================================================== */

      const imgModal =
        $("#imgModal");

      const imgTarget =
        $("#imgModalTarget");

      function openImage(image) {
        if (
          !imgModal ||
          !imgTarget
        ) {
          return;
        }

        imgTarget.src =
          image.currentSrc ||
          image.src;

        imgTarget.alt =
          image.alt || "";

        imgModal
          .classList
          .add("open");

        document.body
          .classList
          .add("locked");
      }

      function closeImage() {
        imgModal
          ?.classList
          .remove("open");

        document.body
          .classList
          .remove("locked");
      }

      $$(".js-lightbox-image")
        .forEach(
          image => {
            image.addEventListener(
              "click",
              () => {
                openImage(
                  image
                );
              }
            );
          }
        );

      $("#imgModalClose")
        ?.addEventListener(
          "click",
          closeImage
        );

      imgModal
        ?.addEventListener(
          "click",
          event => {
            if (
              event.target ===
              imgModal
            ) {
              closeImage();
            }
          }
        );

      document.addEventListener(
        "keydown",
        event => {
          if (
            event.key ===
            "Escape"
          ) {
            closeImage();
          }
        }
      );

      /* =====================================================
         RENATA
         ===================================================== */

      const RENATA_TOTAL_SLIDES =
        50;

      const RENATA_EXTENSIONS = [
        "png",
        "jpg",
        "jpeg",
        "webp"
      ];

      const renataMainSlide =
        $("#renataMainSlide");

      const renataCounter =
        $("#renataCounter");

      const renataPosition =
        $("#renataPosition");

      const renataStageNumber =
        $("#renataStageNumber");

      const renataProgress =
        $("#renataProgress");

      let renataIndex =
        0;

      const renataResolvedSources =
        new Map();

      function renataBasePath(
        index
      ) {
        return (
          "/img/img-renata/" +
          `renata-slide${index + 1}`
        );
      }

      function padSlideNumber(
        value
      ) {
        return String(value)
          .padStart(
            2,
            "0"
          );
      }

      function loadRenataImage(
        image,
        index,
        callback
      ) {
        const cached =
          renataResolvedSources.get(
            index
          );

        if (cached) {
          image.src =
            cached;

          callback?.(
            cached
          );

          return;
        }

        const base =
          renataBasePath(
            index
          );

        let extensionIndex =
          0;

        function tryNext() {
          if (
            extensionIndex >=
            RENATA_EXTENSIONS.length
          ) {
            callback?.(
              null
            );

            return;
          }

          const source =
            `${base}.${
              RENATA_EXTENSIONS[
                extensionIndex
              ]
            }`;

          extensionIndex +=
            1;

          image.onload =
            () => {
              renataResolvedSources.set(
                index,
                source
              );

              callback?.(
                source
              );
            };

          image.onerror =
            tryNext;

          image.src =
            source;
        }

        tryNext();
      }

      function setRenataSlide(
        nextIndex
      ) {
        if (
          !renataMainSlide
        ) {
          return;
        }

        renataIndex =
          (
            nextIndex +
            RENATA_TOTAL_SLIDES
          ) %
          RENATA_TOTAL_SLIDES;

        loadRenataImage(
          renataMainSlide,
          renataIndex
        );

        const current =
          padSlideNumber(
            renataIndex + 1
          );

        const total =
          padSlideNumber(
            RENATA_TOTAL_SLIDES
          );

        renataMainSlide.alt =
          `Renata Brandão — slide ${
            renataIndex + 1
          } de ${
            RENATA_TOTAL_SLIDES
          }`;

        if (renataCounter) {
          renataCounter.textContent =
            `${current} / ${total}`;
        }

        if (renataPosition) {
          renataPosition.textContent =
            `${current} / ${total}`;
        }

        if (renataStageNumber) {
          renataStageNumber.textContent =
            current;
        }

        if (renataProgress) {
          renataProgress.style.width =
            `${
              (
                (
                  renataIndex + 1
                ) /
                RENATA_TOTAL_SLIDES
              ) *
              100
            }%`;
        }
      }

      $("#renataPrev")
        ?.addEventListener(
          "click",
          () => {
            setRenataSlide(
              renataIndex - 1
            );
          }
        );

      $("#renataNext")
        ?.addEventListener(
          "click",
          () => {
            setRenataSlide(
              renataIndex + 1
            );
          }
        );

      $("#renataOpenSlide")
        ?.addEventListener(
          "click",
          () => {
            if (
              renataMainSlide
            ) {
              openImage(
                renataMainSlide
              );
            }
          }
        );

      renataMainSlide
        ?.addEventListener(
          "click",
          () => {
            openImage(
              renataMainSlide
            );
          }
        );

      setRenataSlide(
        0
      );

      const FA_DESKTOP_BASE_WIDTH =
        1440;

      function resizeFernandoFrame(
        viewport
      ) {
        if (!viewport) {
          return;
        }

        const canvas =
          $(
            ".fa-desktop-canvas",
            viewport
          );

        if (
          !canvas ||
          !viewport.clientWidth
        ) {
          return;
        }

        const scale =
          Math.min(
            1,
            viewport.clientWidth /
              FA_DESKTOP_BASE_WIDTH
          );

        canvas.style.transform =
          `scale(${scale})`;

        const sourceHeight =
          Number(
            viewport.dataset
              .faDesktopHeight ||
              620
          );

        viewport.style.height =
          `${Math.round(
            sourceHeight *
              scale
          )}px`;
      }

      function resizeFernandoFrames() {
        $$(".fa-desktop-viewport")
          .forEach(
            resizeFernandoFrame
          );
      }

      window.addEventListener(
        "load",
        resizeFernandoFrames
      );

      window.addEventListener(
        "resize",
        resizeFernandoFrames
      );

      if (
        "ResizeObserver" in window
      ) {
        const observer =
          new ResizeObserver(
            entries => {
              entries.forEach(
                entry => {
                  resizeFernandoFrame(
                    entry.target
                  );
                }
              );
            }
          );

        $$(".fa-desktop-viewport")
          .forEach(
            viewport => {
              observer.observe(
                viewport
              );
            }
          );
      }

      resizeFernandoFrames();

      const systemButtons =
        $$(".fa-system-btn");

      const systemPanels =
        $$(".fa-system-panel");

      systemButtons.forEach(
        button => {
          button.addEventListener(
            "click",
            () => {
              const target =
                button.dataset
                  .faSystem;

              systemButtons.forEach(
                item => {
                  item
                    .classList
                    .remove("active");
                }
              );

              button
                .classList
                .add("active");

              systemPanels.forEach(
                panel => {
                  panel
                    .classList
                    .toggle(
                      "active",
                      panel.dataset
                        .faSystemPanel ===
                        target
                    );
                }
              );
            }
          );
        }
      );


    })();
  
import html from "html-literal";

export default state => html`
  <section id="FastMuscleBuilding">
        <h1>Fast Muscle Building</h1>


        <div>
          <h3>Articles</h3>
          <p>
          <iframe id="wiki" width="100%" height="1000vw" src="https://en.wikipedia.org/wiki/${checkHoliday(
            state.holidays
          )}" frameborder="0" allowfullscreen></iframe>
      </iframe>
          </p>
        </div>

        <div>
        <h3>Recipes</h3>
        <!-- make printables -->
        <p>
        <iframe id="wiki" width="100%" height="1000vw" src="https://www.poetryfoundation.org/search?query=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
      </p>
        </div>

        <div>
        <h3>Shopping</h3>
        <!-- make sure it's muscle building -->
        <p>
        <iframe id="wiki" width="100%" height="1000vw" src="https://en.wikibooks.org/w/index.php?go=Go&search=${checkHoliday(
          state.holidays
        )}" frameborder="0" allowfullscreen></iframe>
        </p>

<h2>Cloud</h2>

</section>
`;


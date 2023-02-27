import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();

  afterRender(state);
}



function afterRender(state) {
  if (state.view === "FastMuscle Building") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      console.log(inputList.start.value);
      const [year, month, day] = inputList.start.value.split("-");
      axios
        .get(
          `https://gnews.io/api/v4/search?q=example&apikey=${process.env.GNEWS_API_KEY}`
        )
        .then(response => {
          console.log("response", response.data);
          store.Home.holidays = response.data.response.holidays;
          store.History.holidays = response.data.response.holidays;
          store.Music.holidays = response.data.response.holidays;
          router.navigate("/Home");
        })
        .catch(err => console.log(err));
    });
  }
  else if (state.view === "FatLossNow") {
    let holidayWiki = store.Home.holidays;
    return console.log("This is History" + holidayWiki);
  }
}

apikey = 'API_KEY';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    for (i = 0; i < articles.length; i++) {
      // articles[i].title
      console.log("Title: " + articles[i]['title']);
      // articles[i].description
      console.log("Description: " + articles[i]['description']);
      // You can replace {property} below with any of the article properties returned by the API.
      // articles[i].{property}
      // console.log(articles[i]['{property}']);

      // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
      break;
    }
  });



router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        console.log(store.Home.holidays);
        done();
        break;
      case "History":
        console.log(store.Home.holidays.name);
        done();
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

import html from "html-literal";

export default state => html`
  <section id="title">
        <h1>It's time to take charge of your Health</h1>
        <p>What is you BMI?
      </p>
      <!-- Input BMI here -->
      Also, make BMI calculator with height and weight to compute BMI
      <div>
          <h3>Motivational Quotes</h3>
          <!-- Sliding motivational quotes about change -->
            <p>


      <h2>Cloud</h2>
  </section>
`;

function inputBMI(BMI) {
  if (BMI > [25]) {
    return window.location.replace("http://stackoverflow.com")
  } else if (BMI <= [24.9]) {
    return window.location.replace("http://stackoverflow.com")
  }
}

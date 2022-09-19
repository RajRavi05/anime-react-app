import Container from "../UI/Container";
import Title from "../UI/Title";

import "./HomePageStyles.css";
import SeriesList from "./SeriesList";

function HomePage(props) {
  return (
    <section className="series-section">
      <Container>
        <Title title={"Top List"} />
        <SeriesList allList={props} />
      </Container>
    </section>
  );
}

export default HomePage;

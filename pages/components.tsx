import ArrowNext from '../components/ArrowNext';
import ButtonNext from '../components/Button';
import CategoryButton from '../components/CategoryButton';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LikeDisable from '../components/LikeDisable';
import LikeEnable from '../components/LikeEnable';
import Person from '../components/Person';
import Searcher from '../components/Searcher';
import SliderCards from '../components/SliderCards';

export default function Components() {
  return (
    <>
      <h1>Components</h1>
      <ArrowNext />
      <ButtonNext text="prueba" />
      <EventCard />
      <Header />
      <Footer />
      <LikeDisable />
      <LikeEnable />
      <Person />
      <Searcher />
      <CategoryButton text="test" />
      <SliderCards />
    </>
  );
}

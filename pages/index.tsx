import Head from 'next/head';
import ArrowNext from '../components/ArrowNext';
import ButtonNext from '../components/ButtonNext';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LikeDisable from '../components/LikeDisable';
import LikeEnable from '../components/LikeEnable';
import NavBar from '../components/NavBar';
import Person from '../components/Person';
import Profile from '../components/Profile';
import Searcher from '../components/Searcher';
import StoreAndBrands from '../components/StoreAndBrands';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <main className="bg-white ">
        <Profile />
        <h1>Home1</h1>
        <ArrowNext />
        <ButtonNext />
        <EventCard />
        <LikeDisable />
        <LikeEnable />
        <NavBar />
        <Person />
        <Searcher />
        <StoreAndBrands />
      </main>
      <Footer />
    </>
  );
}

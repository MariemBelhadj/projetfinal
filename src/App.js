import './App.css';
import './components/nav.css'
import Main from './components/Main';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import MovieDetail from './components/MovieDetail';
import Search from './components/Search';
import { useState } from 'react'
import Kids from './components/Kids';
import Popular from './components/Popular';
import Drama from './components/Drama';
import Action from './components/Action';



function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'A Bug s Life',
      image: './images/name5.jpg',
      detail: 'A misfit ant, looking for "warriors" to save her colony from greedy grasshoppers, recruits a group of insects who turn out to be an inept circus troupe.',
      rate: 4,
      Trailer: 'https://www.youtube.com/embed/mE35XQFxbeo',
      category: 'kids'

    },
    {
      id: 2,
      title: 'Almost Famous',
      image: './images/16.jpg',
      detail: 'It tells the story of a teenage journalist writing for Rolling Stone magazine in the early 1970s, his touring with the fictitious rock band Stillwater, and his efforts to get his first cover story published. The film is semi-autobiographical, as Crowe himself was a teenage writer for Rolling Stone.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/_qW9wqUI4Lg',
      category: 'Drama'

    },
    {
      id: 3,
      title: 'Andor',
      image: './images/17.jpg',
      detail: 'Andor is an American live-action television series created by Tony Gilroy. She is part of the Star Wars universe. It is a prequel to the film Rogue One (2016), the first installment of the films released under the A Star Wars Story banner (it will be followed by Solo in 2018).',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/cKOegEuCcfw',
      category: 'action'

    },
    {
      id: 4,
      title: 'Finding Nemo',
      image: './images/name6.jpg',
      detail: 'It tells the story of an overprotective clownfish named Marlin who, along with a regal blue tang named Dory, searches for his missing son Nemo. Along the way, Marlin learns to take risks and comes to terms with Nemo taking care of himself.',
      rate: 2,
      Trailer: 'https://www.youtube.com/embed/UDEGqKJVt9k',
      category: 'kids'

    },
    {
      id: 5,
      title: 'HALLOWEEN ENDS',
      image: './images/name10.jpg',
      detail: 'The film revolves around Corey Cunningham, a young man who falls in love with Laurie Strode s granddaughter while a series of events, including crossing paths with Michael Myers, upend his life and render him a murderous outcast.',
      rate: 2,
      Trailer: 'https://www.youtube.com/embed/s0vtbxLa-N8',
      category: 'popular'

    },
    
    {
      id: 6,
      title: 'Frozen',
      image: './images/name7.jpg',
      detail: 'Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven and sets off on an epic journey to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/moSFlvxnbgk',
      category: 'kids'

    },
    {
      id: 7,
      title: 'Toy Story (1995)',
      image: './images/name8.jpg',
      detail: 'the secret life of toys  when people are not around. When Buzz Lightyear, a space-ranger, takes Woody s place as Andy s favorite toy, Woody doesn t like the situation and gets into a fight with Buzz.',
      rate: 4,
      Trailer: 'https://www.youtube.com/embed/81dWdeDjfC4',
      category: 'kids'

    },
    {
      id: 8,
      title: 'House of Gucci',
      image: './images/name4.jpg',
      detail: 'House of Gucci, ou La Saga Gucci au Québec, est un drame biographique américain réalisé par Ridley Scott, sorti en 2021. Adapté du livre The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed écrit par Sara Gay Forden en 2000 le film revient sur l assassinat de Maurizio Gucci en 19951,2.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/pGi3Bgn7U5U',
      category: 'popular'

    },
    {
      id: 9,
      title: 'A Star Is Born',
      image: './images/name14.jpg',
      detail: 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral. Seasoned musician Jackson Maine (Bradley Cooper) discovers-and falls in love with-struggling artist Ally (Gaga).',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/nSbzyEJ8X9E',
      category: 'Drama'

    },
    {
      id: 10,
      title: 'Encanto',
      image: './images/name9.jpg',
      detail: 'Encanto is the first Disney animated film in which the choreographers participated in the project from beginning to end, adding to the songs, characters and story, music and dance being at the center of Colombian daily life..',
      rate: 3,
      Trailer: 'https://www.youtube.com/embed/EtZGiM99YHw',
      category: 'kids'

    },
   

    {
      id: 11,
      title: 'Smile',
      image: './images/name11.jpg',
      detail: 'It stars Sosie Bacon as a therapist who, after witnessing the bizarre suicide of a patient, goes through increasingly disturbing and daunting experiences, leading her to believe what she is experiencing is supernatural.',
      rate: 4,
      Trailer: 'https://www.youtube.com/embed/-8d987Wtkxs',
      category: 'popular'

    },
    
   
    
    {
      id: 12,
      title: 'Atonement ',
      image: './images/name15.jpg',
      detail: 'Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister s lover of a crime he did not commit.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/mmU9izTJ3BQ',
      category: 'Drama'

    },
    {
      id: 13,
      title: 'Almost Famous',
      image: './images/16.jpg',
      detail: 'It tells the story of a teenage journalist writing for Rolling Stone magazine in the early 1970s, his touring with the fictitious rock band Stillwater, and his efforts to get his first cover story published. The film is semi-autobiographical, as Crowe himself was a teenage writer for Rolling Stone.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/_qW9wqUI4Lg',
      category: 'Drama'

    },
    
    {
      id: 14,
      title: 'Black Adam',
      image: './images/name18.jpg',
      detail: 'Dwayne Johnson as Teth-Adam / Black Adam: An antihero from Kahndaq who was imprisoned for 5,000 years. Similar to the superhero Shazam, he has had bestowed upon him the powers of various Egyptian gods from the ancient wizard of the same name. Johnson previously portrayed the character in Shazam!',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/mkomfZHG5q4',
      category: 'action'

    },
    {
      id: 15,
      title: 'TERRIFIER 2',
      image: './images/name12.jpg',
      detail: 'After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night..',
      rate: 4,
      Trailer: 'https://www.youtube.com/embed/d4m9WCxb-J8',
      category: 'popular'

    },
    {
      id: 16,
      title: 'HELLRAISER',
      image: './images/name13.jpg',
      detail: 'Hellraiser is a series of British horror films inspired by a short novel by Clive Barker: Hellraiser. They stage the Cenobites, infernal creatures led by Pinhead and followers of a sado-masochism between sexual enjoyment and sadistic torture..',
      rate: 4,
      Trailer: 'https://www.youtube.com/embed/oUlgwJNdu2I',
      category: 'popular'

    },
    {
      id: 17,
      title: 'See',
      image: './images/name19.jpg',
      detail: 'Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins are born with sight.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/7Rg0y7NT1gU',
      category: 'action'

    },
    {
      id: 18,
      title: 'Lou',
      image: './images/name20.jpg',
      detail: 'Plot. In 1986, on an island in Washington, Lou, a loner living with her dog Jax, goes to the village to buy some supplies. She talks to the sheriff about her arthritis and he tells her a copper bracelet could help her condition. A mother, Hannah, plays hide-and-seek with her young daughter, Vee, outside their home.',
      rate: 5,
      Trailer: 'https://www.youtube.com/embed/QILhvR4QPsQ',
      category: 'action'

    }
    
  ])

  const [ratingSearch, setRatingSearch] = useState(0)
  const [searchWord, setSearchWord] = useState('');
  const handleSearch = (e) => setSearchWord(e.target.value);
  return (
    <div>

      <BrowserRouter>
        <Search
          handleSearch={handleSearch}
          setRatingSearch={setRatingSearch}
          ratingSearch={ratingSearch}
        />
        <Routes>
          <Route exact path="/" element={<Main movies={movies} setMovies={setMovies} searchWord={searchWord} ratingSearch={ratingSearch} />} />
          <Route path='/kids' element={<Kids movies={movies.filter(e => e.category == 'kids')} />} />
          <Route path='/Popular' element={<Popular movies={movies.filter(e => e.category == 'popular')} />} />
          <Route path='/Drama' element={<Drama movies={movies.filter(e => e.category == 'Drama')} />} />
          <Route path='/Action' element={<Action movies={movies.filter(e => e.category == 'action')} />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
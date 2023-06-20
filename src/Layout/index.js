import React, { useState , useEffect } from "react";
import { Link , Switch , Route , useHistory } from "react-router-dom"
import { listDecks , deleteDeck } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "../Study-Page/Study"
import CreateDeck from "../Deck/CreateDeck";
import DeckPage from "../Decks/DeckPage";
import EditDeck from "../Deck/EditDeck";
import AddCards from "../Cards/AddCards";
import EditCard from "../Cards/EditCard";

/* TODO: Implement the screen starting here */

function Layout() {
  const [decks, setDecks] = useState([]);
  const [cards , setCards ] = useState([])
  const history = useHistory();

  useEffect(() => {
    listDecks().then(data => {
      setDecks(data)
      setCards(data.cards)
    });
  }, [])


  function deleteHandler(deckId) {
    deleteDeck(deckId)
      .then(() => {
        const updatedDecks = decks.filter((deck) => deck.id !== deckId);
        setDecks(updatedDecks);
        history.push("/")
      })
      .catch((error) => {
        // Handle any error that occurred during deletion
        console.log(error);
      });
  }


  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Link to="/decks/new" className="btn btn-secondary"><span className="oi oi-plus"></span>Create Deck</Link>
                {decks.map((deck) => 
                <div className="border border-dark mt-3 p-3">
                  <p>{deck.cards ? deck.cards.length : 0 } cards</p>
                  <h3>{deck.name}</h3>
                  <p>{deck.description}</p>
                  <Link to={`/decks/${deck.id}`} className="btn btn-secondary m-2"><span className="oi oi-eye"></span>View</Link>
                  <Link to={`/decks/${deck.id}/study`} className="btn btn-primary m-2"><span className="oi oi-book"></span>Study</Link>
                  <button className="btn btn-danger m-2" onClick={() => deleteHandler(deck.id)}><span className="oi oi-trash"></span></button>
                </div>)}
          </div>
        </Route>
        <Route path="/decks/:deckId/study">
            <Study />
        </Route>
        <Route path="/decks/new">
          <CreateDeck setDecks={setDecks} decks={decks}/>
        </Route>
        <Route path="/decks/:deckId" exact>
          <DeckPage setDecks={setDecks}/>
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck decks={decks} setDecks={setDecks}/>
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCards decks={decks} setDecks={setDecks} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard decks={decks} setDecks={setDecks} cards={cards} setCards={setCards}/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
import React, { useState , useEffect } from "react";
import { Link , Switch , Route } from "react-router-dom"
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "../Study-Page/Study"
import CreateDeck from "../CreateDeck/CreateDeck";
import DeckPage from "../Decks/DeckPage";
import EditDeck from "../EditDeck/EditDeck";

/* TODO: Implement the screen starting here */

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then(data => setDecks(data));
  }, [])


  console.log(decks)
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Link to="/decks/new" className="btn btn-secondary">+Create Deck</Link>
                {decks.map((deck) => 
                <div className="border border-dark mt-3 p-3">
                  <p>{deck.cards ? deck.cards.length : 0 } cards</p>
                  <h3>{deck.name}</h3>
                  <p>{deck.description}</p>
                  <Link to={`/decks/${deck.id}`} className="btn btn-secondary m-2">View</Link>
                  <Link to={`/decks/${deck.id}/study`} className="btn btn-primary m-2">Study</Link>
                  <button className="btn btn-danger m-2">delete</button>
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
          <DeckPage />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;

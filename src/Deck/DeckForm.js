import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DeckForm({initialFormData , headerText , submitHandler}){
    const [formData , setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData(initialFormData)
    }, [initialFormData])

    const handleInput = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        submitHandler(formData);
        setFormData({ ...formData });
      }

    return (
        <form onSubmit={handleFormSubmit} className="d-flex flex-column m-5">
            <h3>{headerText}</h3>
            <div>
                <label htmlFor="name" className="mt-3">Name</label>
                <input 
                type="text" name="name" id="name" spellCheck="true" placeholder={formData.name === "" ? "Deck Name" : formData.name} value={formData.name} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <label htmlFor="description" className="mt-3">Description</label>
                <textarea 
                row="5" col="40" spellCheck="true" placeholder="Brief description of the deck" 
                name="description" id="description" value={formData.description} onChange={handleInput} className="w-100 p-2"
                />
            </div>
            <div>
                <Link to="/" className="btn btn-secondary m-2 p-2">Cancel</Link>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default DeckForm;
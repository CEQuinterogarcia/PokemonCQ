
import './about.styles.css';

function About() {
   
   
     return (
        <div class="containernew">
    <h1>Create a New Pokémon</h1>
    <form id="pokemonForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="type">Type:</label>
        <input type="text" id="type" name="type" required/>
      </div>
      <div class="form-group">
        <label for="power">Power:</label>
        <input type="number" id="power" name="power" required/>
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="url" id="image" name="image" required/>
      </div>
      <button type="submit">Create Pokémon</button>
    </form>
  </div> 


       ); 
 }
 
 export default About;



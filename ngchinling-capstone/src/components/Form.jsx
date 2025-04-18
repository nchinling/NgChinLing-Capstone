import './styles/Form.css'

function Form() {
    return (
        <form className="form">
          <label>
            <input type="text" placeholder="Stock Symbol" name="stockSymbol"  required />
          </label>
    
          <label>
            <input type="text" placeholder="Quantity" name="quantity" required />
          </label>
    
          <label>
            <input type="text" placeholder="Purchase Price" name="purchasePrice" required />
          </label>
    
          <button type="submit">Add Stock</button>
        </form>
      );
    }


export default Form;



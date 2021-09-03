import React,{useState} from 'react'
import './FruitCards.css'
import './Modal.css'




export const FruitCards =(props)=>{   
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };

      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return(
    <div className='card-container'>
        
        <img onClick={toggleModal} alt="fruits" src={`https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${props.result.name.toLowerCase()}.png`} />
        <h1>{props.result.name}</h1>
        <button onClick={toggleModal} className="btn-modal">
        Details
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Details</h2>
            {props.result.name}
            <ul>
            <li>Genus: {props.result.genus}</li>
            
            <li>Name: {props.result.name}</li>
            
            <li>Family: {props.result.family}</li>
            
            <li>Order: {props.result.order}</li>
            
            <li>Carbohydrates{props.result.nutritions.carbohydrates}</li>
            
            <li>Protein: {props.result.nutritions.protein}</li>
            
            <li>Fat: {props.result.nutritions.fat}</li>
            
            <li>Calories: {props.result.nutritions.calories}</li>
            
            <li>Sugar: {props.result.nutritions.sugar}</li>
            
        </ul>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}     
    </div>
    )
}
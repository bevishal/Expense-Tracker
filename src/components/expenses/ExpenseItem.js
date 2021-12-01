//import React, { useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import '../CSS/ExpenseItem.css'




const ExpenseItem = (props) => {
    return (
      <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
      </li>
    );
  }
  
  export default ExpenseItem;





// function ExpenseItem(props) {

//     //const [title, setTitle] = useState(props.title);

//     //const title = props.title;

//     // const onClickHandler = () => {
//     //     setTitle('Updated!!!');
//     //     console.log('clicked!!!!')
//     //}
   
//     return (
//         <Card className="expense-item">
//             <ExpenseDate date={props.date}/>
//             <div className='expense-item__description'>
//                 <h2>{title}</h2>
//             </div>
//             <div className='expense-item__price'>{props.amount}
//             </div>
//             {/* <button onClick={onClickHandler}>Change Title</button> */}
//         </Card>
//     )
// }

// export default ExpenseItem;
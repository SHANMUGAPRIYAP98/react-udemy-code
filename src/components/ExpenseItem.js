import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
export default function ExpenseItem(props) {

 
  return (
    <div className="expense-item">
      <div>
       <ExpenseDate cal ={props.date} />
       
        </div>
      <div className='expense-item__description'>
        <h4>{props.title }</h4>
        <div className='expense-item__price'>Rs. {props.amount}</div>
      </div>
    </div>
  );
}

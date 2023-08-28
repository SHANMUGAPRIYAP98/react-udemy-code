export default function ExpenseDate(props){
    const month= props.cal.toLocaleString('en-US',{month:'long'});
    const day= props.cal.toLocaleString('en-US',{day:'2-digit'});
    const year= props.cal.getFullYear();
    return (
        <div>
             <div>
          {month}
          </div>
          <div>
          {day}
          </div>
          <div>
            {year}
          </div>
        </div>
    )
}
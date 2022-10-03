
import DatePicker from "react-datepicker";
export const Datepicker = (props) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
      {...props}
        className="form-control"
        // selected={startDate}
        // onChange={(date) => {setStartDate(date);setOkr(a=>({...a,validity:date}))}}
        //FORMATO DATA
        dateFormat="dd/MM/yyyy"
      />
    );
  };
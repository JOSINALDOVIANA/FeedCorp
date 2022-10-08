
import DatePicker, {registerLocale} from "react-datepicker";
import BR from "date-fns/locale/pt-BR";
registerLocale("pt-br", BR);

export const Datepicker = (props) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
      {...props}
        className="form-control"
        //FORMATO DATA
        dateFormat="dd/MM/yyyy"
        locale="pt-br"
      />
    );
  };
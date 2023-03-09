import { format, compareAsc } from 'date-fns'
import { fi } from 'date-fns/locale'

const DateHeader = () =>{
  return (
    <div>
      <h1>{format(new Date(), 'cccc', {locale: fi})}</h1>
      <h3>{format(new Date(), 'P', {locale: fi})}</h3>
    </div>
  )
}

export default DateHeader
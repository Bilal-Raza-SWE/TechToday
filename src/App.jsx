import Search from "./components/Search"
import News from "./components/News"
import Pagination from "./components/Pagination"
import {useContext} from 'react'
import { AppContext } from './Context'

export default function App() {
  const data = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to the TechToday. ❤{data}❤</h1>
      <Search />
      <News />
      <Pagination />
    </div>
  )
}

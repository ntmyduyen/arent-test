import Footer from "@components/Footer"
import Header from "@components/Header"
import ScrollToTop from "@components/ScrollToTop"
import { useId } from "react"
import { Profiler } from "react"
import { Outlet } from "react-router-dom"

const App = () => {
  const id = useId()

  const handleRender= (...props) => {
    console.log(props)
  }

  return <Profiler id={id} onRender={handleRender}>
    <Header />
    <Outlet />
    <Footer />
    <ScrollToTop />
  </Profiler>
}

export default App
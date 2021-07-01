import React from 'react'
import Header from './Header'
import Game from './Game'
import '../css/app.css';


export default function App() {

  return (
    <div>
      <Header />
      <Game />
    </div>
  )
}



// With React hooks. It will wait 5s and then render this component.

// import React from 'react'

// const DeleayComponent = () => {
//   const [show, setShow] = React.useState(false)

//   React.useEffect(() => {
//     setTimeout(() => {
//       setShow(true)
//     }, 5000)
//   }, [show])

//   if (!show) return null

//   return <>OK, Render</>
// }

// export default DeleayComponent
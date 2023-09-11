import {} from 'react'
import Corinthians1 from './assets/1.jpg'
import Corinthians2 from './assets/2.jpg'
import Corinthians3 from './assets/3.jpg'
import Corinthians4 from './assets/4.jpg'

function Produtos(){
  return(
    <>
     <div className="produtos-container">
      <div className="produto">
        <h1>CORINTHIANS</h1>
        <img src={Corinthians1} alt="" />
      </div>
      <div className="produto">
        <h1>CORINTHIANS</h1>
        <img src={Corinthians2} alt="" />
      </div>
      <div className="produto">
        <h1>CORINTHIANS</h1>
        <img src={Corinthians3} alt="" />
      </div>
      <div className="produto">
        <h1>CORINTHIANS</h1>
        <img src={Corinthians4} alt="" />
      </div>
     </div>
    </>
  )
}
export default Produtos
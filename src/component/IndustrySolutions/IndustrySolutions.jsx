import "./IndustrySolutions.css"

// Import images
import agrblock from '../../assets/agr-c.png'
import energyblock from '../../assets/energy-c.png'
import mfcblock from '../../assets/mfc-c.png'
import finblock from '../../assets/fin-c.png'
import govtblock from '../../assets/govt-c.png'
import reactEstblock from '../../assets/real-c.png'
// import productBgblock from '../../assets/productBg.jpg'

const IndustrySolutions = () => {
  return (
    <div
      className="industry-wrapper industry-solutions"
      style={{
        // backgroundImage: `url(${productBgblock})`,
      }}
    >
       {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{color:'var(--primary-color)'}} >
            Solutions for <span className="" style={{color:'var(--accent-color)'}}>Every Industry</span>
          </h1>
          <p className="text-dark fs-6">
            Deliver solutions to every single industry need to fit to every industry
            <br />
            business challenges.
          </p>
        </div>
      <div className="industry-grid">
        {/* Row 1 */}
        <div className="card left"><img src={energyblock} alt="" /></div>
        <div className="card right"><img src={mfcblock} alt="" /></div>
        
        

        {/* Row 2 */}
        <div className="card left"><img src={agrblock} alt="" /></div>
        <div className="card right"><img src={finblock} alt="" /></div>

        {/* Row 3 */}
        <div className="card left"><img src={reactEstblock} alt="" /></div>
        <div className="card right"><img src={govtblock} alt="" /></div>
        
      </div>
    </div>
  )
}

export default IndustrySolutions

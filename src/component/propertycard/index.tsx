import Button from "../button"
import AppsProperty from "./appsproperty";


const Property = () => {
  
  const handleClick = () => {}

  return (
    <div className="max-w-lg flex flex-col rounded-xl border border-cardgray-60 bg-cardgray-95 p-10 m-auto gap-8">
      <img src="/images/property.png" alt="" className="rounded-sm" />
      <div className="flex flex-col text-white gap-7"> 
      <div>
      <h3 className="text-2xl font-semibold">Seaside Serenity Villa</h3>
      <p className="text-lg text-cardgray-60">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <span><a>Read More</a></span></p>
      </div>
      <AppsProperty bedroom={4} bathroom={3} type="Appartment" />
      <div className="flex justify-between">
        <div >
            <p className="text-lg text-cardgray-60 font-medium">Price</p>
            <p className="text-2xl font-semibold">$550,000</p>
        </div>
        <Button onClick={handleClick} variant="primary" sizevar="large">
        View Property Details
      </Button>
      </div> 
      </div>
    </div>
  )
}

export default Property

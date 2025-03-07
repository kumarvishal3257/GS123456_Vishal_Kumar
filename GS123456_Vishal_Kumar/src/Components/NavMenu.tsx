
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faShapes, faChartColumn, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NavMenu = () => {
    const [bgColor, setBgColor] = useState({
        store: "",
        sku: "",
        planning: "",
        charts: ""
    })

    const handleDivClick = (key: string) => {
        setBgColor({
            store: key === 'store' ? 'bg-gray-300' : '',
            sku: key === 'sku' ? 'bg-gray-300' : '',
            planning: key === 'planning' ? 'bg-gray-300' : '',
            charts: key === 'charts' ? 'bg-gray-300' : ''
        });
    };

  return (
    <div className='flex flex-col fixed top-14 z-60 left-0 h-[100%] bg-white shadow-md'>
      <div className={`flex gap-3 p-2 pr-4 items-center cursor-pointer ${bgColor.store ? bgColor.store : 'bg-white'}`} onClick={() => handleDivClick('store')} >
        <FontAwesomeIcon icon={faShop} />
        <p>Store</p>
      </div>
      <div className={`flex gap-3 p-2 pr-4 items-center cursor-pointer ${bgColor.sku ? bgColor.sku : 'bg-white'}`} onClick={() => handleDivClick('sku')}>
      <FontAwesomeIcon icon={faShapes} />
      <p>SKU</p>
      </div>
      <div className={`flex gap-3 p-2 pr-4 items-center cursor-pointer ${bgColor.planning ? bgColor.planning : 'bg-white'}`} onClick={() => handleDivClick('planning')}>
      <FontAwesomeIcon icon={faChartColumn} />
        <p>Planning</p>
      </div>
      <div className={`flex gap-3 p-2 pr-4 items-center cursor-pointer ${bgColor.charts ? bgColor.charts : 'bg-white'}`} onClick={() => handleDivClick('charts')}>
      <FontAwesomeIcon icon={faChartSimple} />
      <p>Charts</p>
      </div>
    </div>
  );
}

export default NavMenu
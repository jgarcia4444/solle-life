import React, {useState} from 'react';

import HealthTabs from './HealthTabs';

const Health = () => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <div id="health" className="w-full mt-20">
            <h2 className="text-white text-6xl font-bold text-left">Health</h2>
            <HealthTabs selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex}/>
            {/* <HealthCards selectedTabIndex={selectedTabIndex} /> */}
        </div>
    )
}

export default Health;
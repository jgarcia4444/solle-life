import React from 'react'

const HealthTabs = ({selectedTabIndex, setSelectedTabIndex}) => {

    let tabs = ["Adaptogens", "Mind-Body Health", "Personal Development", "Nutrition & Fitness"];

    const selectedTab = tabIndex => {
        if (tabIndex === selectedTabIndex) {
            return "text-white bg-lime-600";
        } else {
            return "text-lime-600";
        }
    }

    const renderTabs = () => {
        return tabs.map((text, i) => <div onClick={() => setSelectedTabIndex(i)} key={`${i}-${text}`} className={` ${selectedTab(i)} w-1/4 py-1 text-lg hover:cursor-pointer border-2 border-white transition-all`}>{text}</div>)
    }

    return (
        <div className="tabsRow w-full flex flex-row justify-center mt-8 border-2 rounded border-white">   
            {renderTabs()}
        </div>
    )
};

export default HealthTabs;
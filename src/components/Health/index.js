import React, {useState} from 'react';

import HealthTabs from './HealthTabs';
import HealthCard from './HeathCard';

const Health = () => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    let cardsInfo = [
        {tabIndex: 0, title: "Ashwaganda the Powerful Adaptogen", text: "Ashwagandha is an ancient medicinal herb that has been used for centuries in Ayurvedic medicine, which is the traditional system of medicine in India that has been traced back to 6,000 BC. ", img: ""},
        {tabIndex: 0, title: "Yerba Matte - 5 Reasons to Take This Adaptogen", text: "Yerba mate is a popular beverage in South and Central America, made from the leaves and stems of the Ilex paraguariensis plant. It has been used for centuries but is becoming increasingly popular due to its amazing health benefits.", img: ""},
        {tabIndex: 0, title: "Holy Basil - A Powerful Adaptogen", text: "Holy basil or tulsi, also known as Ocimum tenuiflorum or Ocimum sanctum, is an aromatic shrub in the Lamiaceae basil plant family.", img: ""},
        {tabIndex: 1, title: "Benefits of a detox cleanse", text: "", img: ""},
        {tabIndex: 1, title: "Reindeer Lichen - A Plant Source for Vitamin D", text: "", img: ""},
        {tabIndex: 1, title: "Our Dedication to Quality", text: "", img: ""},
        {tabIndex: 2, title: "The Power of Body Language", text: "", img: ""},
        {tabIndex: 2, title: "Overcoming Barriers to Success", text: "", img: ""},
        {tabIndex: 2, title: "Setting and Achieving Goals", text: "", img: ""},
        {tabIndex: 3, title: "Red Beetroot - My favorite side dish", text: "", img: ""},
        {tabIndex: 3, title: "It's Time to Talk About Thyme", text: "", img: ""},
        {tabIndex: 3, title: "Why You Should Be Taking These 10 Mushrooms", text: "", img: ""},
    ];

    const renderHealthCards = () => {
        let filteredInfo = cardsInfo.filter(cardInfo => cardInfo.tabIndex === selectedTabIndex);
        return filteredInfo.map((filteredCardInfo, i) => <HealthCard key={`${i}-${filteredCardInfo.title}`} cardInfo={filteredCardInfo} />);
    }

    return (
        <div id="health" className="w-full mt-20">
            <h2 className="text-white text-6xl font-bold text-left">Health</h2>
            <HealthTabs selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex}/>
            <div className="w-full flex flex-row flex-wrap justify-center">
                {renderHealthCards()}
            </div>
        </div>
    )
}

export default Health;
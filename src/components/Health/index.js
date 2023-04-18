import React, {useState} from 'react';

import HealthTabs from './HealthTabs';
import HealthCard from './HeathCard';

import healthCardImages from '../../config/healthCardImages';

const Health = () => {

    const {ashwagandha, yerbaMatte, holyBasil} = healthCardImages;

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    let cardsInfo = [
        {tabIndex: 0, title: "Ashwaganda the Powerful Adaptogen", text: "Ashwagandha is an ancient medicinal herb that has been used for centuries in Ayurvedic medicine, which is the traditional system of medicine in India that has been traced back to 6,000 BC. ", img: ashwagandha},
        {tabIndex: 0, title: "Yerba Matte - 5 Reasons to Take This Adaptogen", text: "Yerba mate is a popular beverage in South and Central America, made from the leaves and stems of the Ilex paraguariensis plant. It has been used for centuries but is becoming increasingly popular due to its amazing health benefits.", img: yerbaMatte},
        {tabIndex: 0, title: "Holy Basil - A Powerful Adaptogen", text: "Holy basil or tulsi, also known as Ocimum tenuiflorum or Ocimum sanctum, is an aromatic shrub in the Lamiaceae basil plant family.", img: holyBasil},
        {tabIndex: 1, title: "Benefits of a detox cleanse", text: "Our bodies can use a little bit of a deep cleanse every now and again as well. Most people in the health world call this a detox cleanse.", img: ""},
        {tabIndex: 1, title: "Reindeer Lichen - A Plant Source for Vitamin D", text: "It helps support our bones and muscles, keep our immune system healthy, regulate hormones, and even protect against certain diseases.", img: ""},
        {tabIndex: 1, title: "Our Dedication to Quality", text: "Here at Solle Naturals, we want to provide you with the highest quality products available. Each raw ingredient we receive is tested to make sure it has everything we expect and has nothing we don't.", img: ""},
        {tabIndex: 2, title: "The Power of Body Language", text: "Do you ever catch yourself slouching? Or maybe catch yourself making a really funny face? Or maybe even catch yourself making a fist when you feel angry?", img: ""},
        {tabIndex: 2, title: "Overcoming Barriers to Success", text: "There are any number of people who have already created success, both in terms of business and in terms of self-care and health. They share what worked for them over and over in a generous way.", img: ""},
        {tabIndex: 2, title: "Setting and Achieving Goals", text: "If you were to walk up to any person on the street and ask them if they have goals, almost everyone would certainly say yes. In fact, if you were to inquire about what these goals are, many would probably list off similar objectives:", img: ""},
        {tabIndex: 3, title: "Red Beetroot - My favorite side dish", text: "I love red beets.  For the past few years I’ve been growing them in my garden and enjoying the greens in salads and the beet itself cut into cubes, boiled, and then mixed with a little butter and salt. ", img: ""},
        {tabIndex: 3, title: "It's Time to Talk About Thyme", text: "Thyme is a popular herb that has been used for centuries to add flavor to food and treat medical conditions. It's an incredibly versatile herb, with many health benefits that make it worth adding to your diet.", img: ""},
        {tabIndex: 3, title: "Why You Should Be Taking These 10 Mushrooms", text: "Are you looking for a way to improve your health and well-being? If so, you may want to consider mushrooms. Yes, that's right, mushrooms!", img: ""},
    ];

    const renderHealthCards = () => {
        let filteredInfo = cardsInfo.filter(cardInfo => cardInfo.tabIndex === selectedTabIndex);
        return filteredInfo.map((filteredCardInfo, i) => <HealthCard key={`${i}-${filteredCardInfo.title}`} cardInfo={filteredCardInfo} />);
    }

    return (
        <div id="health" className="w-full mt-20">
            <h2 className="text-white text-6xl font-bold text-left">Health</h2>
            <HealthTabs selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex}/>
            <div className="w-full flex flex-row flex-wrap justify-center mt-8">
                {renderHealthCards()}
            </div>
        </div>
    )
}

export default Health;
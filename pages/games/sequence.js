import NavigationBar from "../../components/NavigationBar";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import ImageGrid from "../../components/ImageGrid";




function Card({ path, cardType, onCardClick, clicked }) {
    const [isClicked, setIsClicked] = useState(clicked || false);
    const handleClick = () => {
        console.log("got here")
        setIsClicked(!isClicked);
        onCardClick();
    };

    const cardStyle = {
        border: isClicked ? '2px solid red' : 'none',
    };

    return (
        <div className="card" onClick={handleClick} style={cardStyle}>
            <Image className={cardType} src={path} alt={cardType} width={50} height={70} onClick={onCardClick} />
        </div>
    );
}

const sequenceRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5px'
};

export default function Game() {
    function handleCardClick(i) {
        console.log("clicked " + i);


    }

    return (
        <>
            <NavigationBar />
            <Head>
                <title>Sequence</title>
            </Head>
            <div>
                <h1>
                    Sequence

                </h1>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-back4.png" cardType="wildcard" onCardClick={() => handleCardClick("wildcard")} />
                    <Card path="/images/cards/card-diamonds-6.png" cardType="6d" onCardClick={() => handleCardClick("6d")} />
                    <Card path="/images/cards/card-diamonds-7.png" cardType="7d" onCardClick={() => handleCardClick("7d")} />
                    <Card path="/images/cards/card-diamonds-8.png" cardType="8d" onCardClick={() => handleCardClick("8d")} />
                    <Card path="/images/cards/card-diamonds-9.png" cardType="9d" onCardClick={() => handleCardClick("9d")} />
                    <Card path="/images/cards/card-diamonds-10.png" cardType="10d" onCardClick={() => handleCardClick("10d")} />
                    <Card path="/images/cards/card-diamonds-12.png" cardType="qd" onCardClick={() => handleCardClick("qd")} />
                    <Card path="/images/cards/card-diamonds-13.png" cardType="kd" onCardClick={() => handleCardClick("kd")} />
                    <Card path="/images/cards/card-diamonds-1.png" cardType="ad" onCardClick={() => handleCardClick("ad")} />
                    <Card path="/images/cards/card-back4.png" cardType="wildcard" onCardClick={() => handleCardClick("wildcard")} />
                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-diamonds-5.png" cardType="5d" onCardClick={() => handleCardClick("5d")} />
                    <Card path="/images/cards/card-hearts-3.png" cardType="3h" onCardClick={() => handleCardClick("3h")} />
                    <Card path="/images/cards/card-spades-2.png" cardType="2h" onCardClick={() => handleCardClick("2h")} />
                    <Card path="/images/cards/card-spades-3.png" cardType="2s" onCardClick={() => handleCardClick("2s")} />
                    <Card path="/images/cards/card-spades-3.png" cardType="3s" onCardClick={() => handleCardClick("3s")} />
                    <Card path="/images/cards/card-spades-4.png" cardType="4s" onCardClick={() => handleCardClick("4s")} />
                    <Card path="/images/cards/card-spades-5.png" cardType="5s" onCardClick={() => handleCardClick("5s")} />
                    <Card path="/images/cards/card-spades-6.png" cardType="6s" onCardClick={() => handleCardClick("6s")} />
                    <Card path="/images/cards/card-spades-7.png" cardType="7s" onCardClick={() => handleCardClick("7s")} />
                    <Card path="/images/cards/card-clubs-1.png" cardType="ac" onCardClick={() => handleCardClick("ac")} />
                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-diamonds-4.png" cardType="4d" onCardClick={() => handleCardClick("4d")} />
                    <Card path="/images/cards/card-hearts-4.png" cardType="4h" onCardClick={() => handleCardClick("4h")} />
                    <Card path="/images/cards/card-diamonds-13.png" cardType="kd" onCardClick={() => handleCardClick("kd")} />
                    <Card path="/images/cards/card-diamonds-1.png" cardType="ad" onCardClick={() => handleCardClick("ad")} />
                    <Card path="/images/cards/card-clubs-1.png" cardType="ac" onCardClick={() => handleCardClick("ac")} />
                    <Card path="/images/cards/card-clubs-13.png" cardType="kc" onCardClick={() => handleCardClick("kc")} />
                    <Card path="/images/cards/card-clubs-12.png" cardType="qc" onCardClick={() => handleCardClick("qc")} />
                    <Card path="/images/cards/card-clubs-10.png" cardType="10c" onCardClick={() => handleCardClick("10c")} />
                    <Card path="/images/cards/card-spades-8.png" cardType="8s" onCardClick={() => handleCardClick("8s")} />
                    <Card path="/images/cards/card-clubs-13.png" cardType="kc" onCardClick={() => handleCardClick("kc")} />
                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-diamonds-3.png" cardType="3d" onCardClick={() => handleCardClick("3d")} />
                    <Card path="/images/cards/card-diamonds-5.png" cardType="5d" onCardClick={() => handleCardClick("5d")} />
                    <Card path="/images/cards/card-diamonds-12.png" cardType="qd" onCardClick={() => handleCardClick("qd")} />
                    <Card path="/images/cards/card-hearts-12.png" cardType="qh" onCardClick={() => handleCardClick("qh")} />
                    <Card path="/images/cards/card-hearts-10.png" cardType="10h" onCardClick={() => handleCardClick("10h")} />
                    <Card path="/images/cards/card-hearts-9.png" cardType="9h" onCardClick={() => handleCardClick("9h")} />
                    <Card path="/images/cards/card-hearts-8.png" cardType="8h" onCardClick={() => handleCardClick("8h")} />
                    <Card path="/images/cards/card-clubs-9.png" cardType="9c" onCardClick={() => handleCardClick("9c")} />
                    <Card path="/images/cards/card-spades-9.png" cardType="9s" onCardClick={() => handleCardClick("9s")} />
                    <Card path="/images/cards/card-clubs-12.png" cardType="qc" onCardClick={() => handleCardClick("qc")} />
                </div>

                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-diamonds-2.png" cardType="2d" onCardClick={() => handleCardClick("2d")} />
                    <Card path="/images/cards/card-hearts-6.png" cardType="6h" onCardClick={() => handleCardClick("6h")} />
                    <Card path="/images/cards/card-diamonds-10.png" cardType="10d" onCardClick={() => handleCardClick("10d")} />
                    <Card path="/images/cards/card-hearts-13.png" cardType="kh" onCardClick={() => handleCardClick("kh")} />
                    <Card path="/images/cards/card-hearts-3.png" cardType="3h" onCardClick={() => handleCardClick("3h")} />
                    <Card path="/images/cards/card-hearts-2.png" cardType="2h" onCardClick={() => handleCardClick("2h")} />
                    <Card path="/images/cards/card-hearts-7.png" cardType="7h" onCardClick={() => handleCardClick("7h")} />
                    <Card path="/images/cards/card-clubs-8.png" cardType="8c" onCardClick={() => handleCardClick("8c")} />
                    <Card path="/images/cards/card-spades-10.png" cardType="10s" onCardClick={() => handleCardClick("10s")} />
                    <Card path="/images/cards/card-clubs-10.png" cardType="10c" onCardClick={() => handleCardClick("10c")} />
                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-diamonds-1.png" cardType="as" onCardClick={() => handleCardClick("as")} />
                    <Card path="/images/cards/card-hearts-7.png" cardType="7h" onCardClick={() => handleCardClick("7h")} />
                    <Card path="/images/cards/card-diamonds-9.png" cardType="9d" onCardClick={() => handleCardClick("9d")} />
                    <Card path="/images/cards/card-hearts-1.png" cardType="ah" onCardClick={() => handleCardClick("ah")} />
                    <Card path="/images/cards/card-hearts-4.png" cardType="4h" onCardClick={() => handleCardClick("4h")} />
                    <Card path="/images/cards/card-hearts-5.png" cardType="5h" onCardClick={() => handleCardClick("5h")} />
                    <Card path="/images/cards/card-hearts-6.png" cardType="6h" onCardClick={() => handleCardClick("6h")} />
                    <Card path="/images/cards/card-clubs-7.png" cardType="7c" onCardClick={() => handleCardClick("7c")} />
                    <Card path="/images/cards/card-spades-12.png" cardType="qs" onCardClick={() => handleCardClick("qs")} />
                    <Card path="/images/cards/card-clubs-9.png" cardType="9c" onCardClick={() => handleCardClick("9c")} />

                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-spades-13.png" cardType="ks" onCardClick={() => handleCardClick("ks")} />
                    <Card path="/images/cards/card-hearts-8.png" cardType="8h" onCardClick={() => handleCardClick("8h")} />
                    <Card path="/images/cards/card-diamonds-8.png" cardType="8d" onCardClick={() => handleCardClick("8d")} />
                    <Card path="/images/cards/card-clubs-2.png" cardType="2c" onCardClick={() => handleCardClick("2c")} />
                    <Card path="/images/cards/card-clubs-3.png" cardType="3c" onCardClick={() => handleCardClick("3c")} />
                    <Card path="/images/cards/card-clubs-4.png" cardType="4c" onCardClick={() => handleCardClick("4c")} />
                    <Card path="/images/cards/card-clubs-5.png" cardType="5c" onCardClick={() => handleCardClick("5c")} />
                    <Card path="/images/cards/card-clubs-6.png" cardType="6c" onCardClick={() => handleCardClick("6c")} />
                    <Card path="/images/cards/card-spades-13.png" cardType="ks" onCardClick={() => handleCardClick("ks")} />
                    <Card path="/images/cards/card-clubs-8.png" cardType="8c" onCardClick={() => handleCardClick("8c")} />

                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-spades-12.png" cardType="qs" onCardClick={() => handleCardClick("qs")} />
                    <Card path="/images/cards/card-hearts-9.png" cardType="9h" onCardClick={() => handleCardClick("9h")} />
                    <Card path="/images/cards/card-diamonds-7.png" cardType="7d" onCardClick={() => handleCardClick("7d")} />
                    <Card path="/images/cards/card-diamonds-6.png" cardType="6d" onCardClick={() => handleCardClick("6d")} />
                    <Card path="/images/cards/card-diamonds-5.png" cardType="5d" onCardClick={() => handleCardClick("5d")} />
                    <Card path="/images/cards/card-diamonds-4.png" cardType="4d" onCardClick={() => handleCardClick("4d")} />
                    <Card path="/images/cards/card-diamonds-3.png" cardType="3d" onCardClick={() => handleCardClick("3d")} />
                    <Card path="/images/cards/card-diamonds-2.png" cardType="2d" onCardClick={() => handleCardClick("2d")} />
                    <Card path="/images/cards/card-spades-1.png" cardType="as" onCardClick={() => handleCardClick("as")} />
                    <Card path="/images/cards/card-clubs-7.png" cardType="7c" onCardClick={() => handleCardClick("7c")} />

                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-spades-10.png" cardType="10s" onCardClick={() => handleCardClick("10s")} />
                    <Card path="/images/cards/card-hearts-10.png" cardType="10h" onCardClick={() => handleCardClick("10h")} />
                    <Card path="/images/cards/card-hearts-12.png" cardType="qh" onCardClick={() => handleCardClick("qh")} />
                    <Card path="/images/cards/card-hearts-13.png" cardType="kh" onCardClick={() => handleCardClick("kh")} />
                    <Card path="/images/cards/card-hearts-1.png" cardType="ah" onCardClick={() => handleCardClick("ah")} />
                    <Card path="/images/cards/card-clubs-2.png" cardType="2c" onCardClick={() => handleCardClick("2c")} />
                    <Card path="/images/cards/card-clubs-3.png" cardType="3c" onCardClick={() => handleCardClick("3c")} />
                    <Card path="/images/cards/card-clubs-4.png" cardType="4c" onCardClick={() => handleCardClick("4c")} />
                    <Card path="/images/cards/card-clubs-5.png" cardType="5c" onCardClick={() => handleCardClick("5c")} />
                    <Card path="/images/cards/card-clubs-6.png" cardType="6c" onCardClick={() => handleCardClick("6c")} />

                </div>
                <div className="sequence-row" style={{ display: 'flex', gap: '5px', margin: '5px' }}>
                    <Card path="/images/cards/card-back4.png" cardType="wildcard" onCardClick={() => handleCardClick("wildcard")} />
                    <Card path="/images/cards/card-spades-9.png" cardType="9s" onCardClick={() => handleCardClick("9s")} />
                    <Card path="/images/cards/card-spades-8.png" cardType="8s" onCardClick={() => handleCardClick("8s")} />
                    <Card path="/images/cards/card-spades-7.png" cardType="7s" onCardClick={() => handleCardClick("7s")} />
                    <Card path="/images/cards/card-spades-6.png" cardType="6s" onCardClick={() => handleCardClick("6s")} />
                    <Card path="/images/cards/card-spades-5.png" cardType="5s" onCardClick={() => handleCardClick("5s")} />
                    <Card path="/images/cards/card-spades-4.png" cardType="4s" onCardClick={() => handleCardClick("4s")} />
                    <Card path="/images/cards/card-spades-3.png" cardType="3s" onCardClick={() => handleCardClick("3s")} />
                    <Card path="/images/cards/card-spades-2.png" cardType="2s" onCardClick={() => handleCardClick("2s")} />
                    <Card path="/images/cards/card-back4.png" cardType="wildcard" onCardClick={() => handleCardClick("wildcard")} />

                </div>

            </div>

        </>


    );
}

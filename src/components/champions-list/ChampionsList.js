import React, {useState, useEffect} from 'react';
import RacesList from '../races-list/RacesList';
import './ChampionsList.css'

function ChampionsList(props) {

    let [racesWinners, setRacesWinners] = useState([]);

    let [showRaces, setShowRaces] = useState(false);

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/${props.year}/results/1.json`, {
            method: 'get'
        })
            .then(response => response.json())
            .then((data) => {
                const {MRData: {RaceTable: {Races}}} = data;
                setRacesWinners(racesWinners => racesWinners = Races);
            })
    }, []);

    const showRaceWinners = () => setShowRaces(showRaces => showRaces = !showRaces);

    return (
            <>
                <tr className="table-row" onClick={showRaceWinners}>
                    <td className="table-cell">Season: {props.year}</td>
                    <td className="table-cell">Champion: {props.champion}</td>
                </tr>
                {showRaces ? <RacesList racesWinners={racesWinners} champion={props.champion}/> : null}
            </>
        );

}

export default ChampionsList;
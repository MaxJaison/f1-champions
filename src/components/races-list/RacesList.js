import React from 'react';
import './RacesList.css'

function RacesList(props) {
    return (
        <>
            {
                props.racesWinners.map(race => {
                   const {Results: [{Driver}]} = race;
                   const raceWinner = `${Driver.givenName} ${Driver.familyName}`;
                   const isHighlightRow = raceWinner === props.champion;
                   return (
                       <tr style={isHighlightRow ? {backgroundColor: 'yellow'} : null}>
                           <td className="table-sub-cell">Race: {race.raceName}</td>
                           <td className="table-sub-cell">Winner: {raceWinner}</td>
                       </tr>
                   )
                })
            }
        </>
    )
}


export default RacesList;
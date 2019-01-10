import React, {useEffect, useState} from 'react';
import ChampionsList from "../champions-list/ChampionsList";
import TableHeader from "../table-header/TableHeader";

function Table() {

    let [isLoading, setIsLoading] = useState(true);

    let [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetch('http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55', {
            method: 'get'
        })
            .then(response => response.json())
            .then((data) => {
                setIsLoading(isLoading => isLoading = false);
                const {MRData: {StandingsTable: {StandingsLists}}} = data;
                setSeasons(seasons => seasons = StandingsLists)
            })
    }, []);

    return (
        <>
            {
                isLoading ?
                    'Loading F1 results...'
                    :
                    <table border="2" style={{borderCollapse:'collapse', padding: '10px', width: '550px'}}>
                        <tbody>
                        <TableHeader/>
                        {
                            seasons.map((year, index) => {
                                const {season, DriverStandings: [{Driver}]} = year;
                                const champion = `${Driver.givenName} ${Driver.familyName}`;

                                return <ChampionsList
                                    key={index}
                                    year={season}
                                    champion={champion}/>
                            })
                        }
                        </tbody>
                    </table>
            }
        </>
    );

}

export default Table;

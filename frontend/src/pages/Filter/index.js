import { useState, useEffect } from "react";

import Card from "../../Components/Card"
import Container from "../../Components/Container";
import Wrapper from "../../Components/Wrapper";
import { api, baseAccess } from "../../services/api";

const local = {
    "Milwaukee": "Milwaukee",
    "Dubuque": "Dubuque",
    "London": "London",
}

const Filter = () => {
    const [dataList, setDataList] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [dataNoFilter, setDataNoFilter] = useState([])

    useEffect(() => {
        const getItems = async () => {
            let response = await api.get("/random/200", baseAccess);

            if(response){
                setDataList(response.data);
                setDataNoFilter(response.data);
            }
        };

        getItems();
    }, []);

    const handleFilter = (value) => {

        if(value === local[value]){
            let inFilter = dataList.filter(response => response.city === local[value]);
            return [...dataFilter, ...inFilter];
        }
        else{
            return dataList;
        }
    }

    const handleResetFilter = () => {
        if(dataList.length < 200){
            setDataList(dataNoFilter);
        }
    }

    return (
        <Container>
            <select onChange={(e) => setDataList(handleFilter( e.target.value))}>
                <option value="">Select a City</option>
                <option value="Milwaukee" >Milwaukee</option>
                <option value="Dubuque">Dubuque</option>
                <option value="London">London</option>
            </select>
            <button onClick={handleResetFilter}>Reset filter</button>
            <Wrapper>
                {dataList.map((data, key) => {
                    return (
                        <Card key={key}
                            name={data.name} city={data.city}
                            state={data.state} address={data.address}
                        />
                    );
                })
                }
            </Wrapper>
        </Container>
    );

};

export default Filter;
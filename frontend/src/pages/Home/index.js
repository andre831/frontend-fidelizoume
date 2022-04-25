import { useState, useEffect } from "react";

import Card from "../../Components/Card"
import Container from "../../Components/Container";
import Wrapper from "../../Components/Wrapper";
import { api, baseAccess } from "../../services/api";

const Home = () => {
    const [dataList, setDataList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getItems = async () => {
            const response = await api.get("/random/200", baseAccess);
            
            if(response){
                setDataList(response.data);
            }

        };

        getItems();
    }, []);

    const searchInLower = search.toLowerCase();

    const searchToName = !search
        ? dataList
        : dataList.filter(item =>
            item.name.toLowerCase()
                .includes(searchInLower)
        );

    return (
        <Container>
            <label>
                Search: 
                <input type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
            </label>
            <Wrapper>
                {searchToName == false  
                ? <h2>Not found</h2> 
                : searchToName.map((data, key) => {
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

export default Home;
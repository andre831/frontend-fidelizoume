import { ContainerCard, CardContent, 
    CardContentHead, CardTitle, 
    CardContentBody, CardContentList, 
    CardListUl, CardListLi} from "./style";

function Card(props) {

    return (
        <ContainerCard bgColorCard={`#fff`}>
            <CardContent>
                <CardContentHead>
                    <CardTitle>{props.name}</CardTitle>
                </CardContentHead>
                <CardContentBody>
                    <CardContentList>
                        <CardListUl>
                            <CardListLi>City: {props.city}</CardListLi>
                            <CardListLi>State: {props.state}</CardListLi>
                            <CardListLi>Address: {props.address}</CardListLi>
                        </CardListUl>
                    </CardContentList>
                </CardContentBody>
            </CardContent>
        </ContainerCard>
    );
}

export default Card;
import styled from "styled-components";

const ContainerCard = styled.div`
    margin: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    width: 350px;
    height: 480px;
    border-radius: 5px;
    box-shadow: 1px 1px 8px #bababa;
    background-color: ${ props => props.bgColorCard };
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;
    text-align: center;
`;

const CardContentHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ffaa00;
    width: 280px;
    height: 120px;
`

const CardTitle = styled.div`
    padding: 10px;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #000;
`

const CardContentBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
`;

const CardContentList = styled.div`
    display: flex;
    justify-content: center;
`;

const CardListUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    list-style: none;
`;

const CardListLi = styled.li`
    height: 30px;
    padding: 5px;
    font-size: 1rem;
    letter-spacing: 2px;
    color: #000;
    
`;

export { ContainerCard, CardContent, 
    CardContentHead, CardTitle, 
    CardContentBody, CardContentList, 
    CardListUl, CardListLi };
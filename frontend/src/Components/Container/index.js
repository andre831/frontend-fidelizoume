import ContainerField from './style';

const Container = ( props ) =>{
    return(
        <ContainerField>
            {props.children}
        </ContainerField>
    );
};

export default Container;
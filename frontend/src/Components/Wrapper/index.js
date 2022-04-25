import WrapperField from './style';

const Wrapper = ( props ) =>{
    return(
        <WrapperField>
            {props.children}
        </WrapperField>
    );
};

export default Wrapper;
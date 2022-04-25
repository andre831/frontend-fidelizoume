import styled from 'styled-components';

const NavbarHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${ props => props.bgColor };
`;

const NavbarNav = styled.nav`
    display: flex;
    padding: 5px 15px;
    justify-content: space-between;
    align-items: center;
`;

const NavBarContainerLogo = styled.div`
    a{
        padding: 10px;
        text-decoration: none;

        h2{
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            transition: .2s;
            &:hover{
                color: #b9e895; 
            }

            span{
                color: #b9e895;
            }
        }
    }
`;

const NavBarContainerLinks = styled.div`
    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;

        li{
            margin: 0 10px;

            a{  
                padding: 6px;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 2px;
                color: #fff;
                transition: .4s ease;
                
                &:hover{
                    box-shadow: 0 5px 0 #fff;
                }
            }
        }
    }
`;

export {
    NavbarHeader,
    NavbarNav,
    NavBarContainerLogo,
    NavBarContainerLinks,
};
import Styled from "styled-components";

const StyledPage = Styled.div`
.HeaderContainer {
    background-color: #32a852;
    color: white;
    padding: 0;
    margin: 0;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
}
.Logo {
    width: 50%;
    h1 {
        margin: 0;
        padding-top: 4%;
        padding-left: 4%;
        display: flex;
        justify-content: left;
       
    }
}
.Navigation {
    display: flex;
    justify-content: center;
    width: 30%;
    margin-top: 2%;
    a {
        
        color: black;
        padding-top: 3%;
        padding-right: 3%;
        padding-left: 3%;
        font-weight: 300;
        &:hover {
            border-radius: 1px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
            background-color: black;
            color: white;
            font-weight: 2000;
        }
    }
}
.TextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000000;
}
.TextTitle {
    font-size: 2rem;
    padding-top: 6%;
    color: #7d7a19;
}
.TextParagraph {
    font-weight: 600;
    text-align: center;
    color: #e9ecf2;
    span {
        color: green;
        &:hover {
            font-weight: 1000;
            cursor: pointer;
        }
    }
}
`;

export default StyledPage;
import styled from 'styled-components';

export const InputDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(210,8%,95%);

    @media screen and (min-width: 817px) {
        flex-direction: row;
        gap:20px
    }

    > div:nth-child(2) {
        width: 100%;
        max-width: 460px;
    }
`

export const Icon = styled.p`
    display: ${(props) => props.mobile ? 'block' : 'none'};
    margin-bottom: 16px;
    text-align: center;

   @media screen and (min-width: 641px) {
        display: ${(props) => props.mobile ? 'none' : 'block'}
   }
`

export const Contents = styled.div`
    box-sizing: border-box;
    padding: 16px;
    color: #232629;

    @media screen and (min-width: 641px) {
        max-width: 450px;
    }

    h2{
        font-size: 22px;
        margin-bottom: 8px;

        @media screen and (min-width: 641px) {
            font-size: 27px;
            font-weight: 600;
        }

        @media screen and (min-width: 817px) {
            font-size: 27px;
        }
    }
    h3{
        margin-bottom: 18px;
        font-size: 17.6px;
        line-height: 22px;

        @media screen and (min-width: 641px) {
            margin-bottom: 19px;
            font-size: 19px;
        }
    }
    p{
        margin-bottom: 14.3px;
        font-size: 14.3px;

        @media screen and (min-width: 641px) {
            font-size: 15px;
            margin-bottom: 19px;
        }

        &:last-child{
            margin-bottom: 0;
        }
        > span{
            color: #0074cc;
        }
    }
`
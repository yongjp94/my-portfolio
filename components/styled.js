import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 768px;
    width: 100%;
    margin: auto;
    padding-left: 16px;
    padding-right: 16px;


    @media screen and (min-width: 1440px) {
        max-width: 1080px;
    }

    h1 {
        font-size: 72px;
        width: 100%;
        margin-bottom: 8px;
        @media screen and (max-width: 425px) {
            font-size: 56px;
        }
    }

    h1::before {
        font-size: 48px;
        content: "I'm";
        @media screen and (max-width: 425px) {
            display: none;
        }
    }

    h2 {
        font-size: 40px;
        margin-top: 8px;
        align-self: flex-end;
        margin-right: 24px;
        @media screen and (max-width: 425px) {
            font-size: 32px;
        }
    }

    h3 {
        margin-bottom: 8px;
    }

    a {
        color: blue;
        text-decoration: underline;
    }

    p, span {
        line-height: 22px;
    }
`

export const Section = styled.div`
    padding-bottom: 38px;
    padding-top: 38px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    p {
        line-height: 22px;
    }

    h3 {
        font-size: 32px;
        margin-bottom: 16px;
    }

    h4 {
        font-size: 24px;
        margin-top: 8px;
        margin-bottom: 4px;
        font-style: oblique;
    }

    h5 {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 4px;
        margin-top: 4px;
    }

    .item {
        margin-bottom: 48px;

        > h6 {
            margin-top: 8px;
            margin-bottom: 4px;
            font-size: 16px;
            font-weight: normal;
            font-style: italic;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin: 0;
    }

    .subheader {
        display: flex;
        align-items: baseline;
        padding-top: 8px;
        padding-bottom: 8px;

        span {
            color: rgba(0, 0, 0, 0.6);
            padding-left: 16px;
            font-style: oblique;
        }
    }

    .description {
        li {
            padding-bottom: 14px;
            line-height: 22px;
        }

        ol {
            list-style-type: lower-alpha;
            li {
                padding-top: 4px;
                padding-bottom: 4px;
            }
        }
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    h3 {
        margin-bottom: 16px;
    }

    ul {
        list-style-position: inside;
        padding: 0;
        margin-top: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin: 0;
    }

    img {
        padding-top: 4px;
        margin-right: 8px;
    }
`

export const TopButton = styled.button`
    position: fixed;
    right: 2em;
    bottom: 2em;
    border: 1px black solid;
    background-color: white;
    width: 40px;
    height: 40px;
    ${props => props.hidden ? 'display: none;' : ''}
`;
import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 20rem;

  section {
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    padding: 0 1rem;

    h1 {
      color: ${(props) => props.theme.colors.color5};
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: ${(props) => props.theme.colors.color3};
      font-size: 2.5rem;
      margin-bottom: 7rem;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 0.5rem;
        width: 12rem;
        background: ${(props) => props.theme.colors.color4};
        bottom: -1.5rem;
        left: 0;
      }
    }

    section {
      form {
        background: ${(props) => props.theme.colors.color2};
        padding: 2rem;
        width: 50%;
        margin-bottom: 10rem;

        label {
          display: block;
          color: ${(props) => props.theme.colors.color5};
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          text-align: left;
        }

        input,
        textarea {
          border: none;
          background: ${(props) => props.theme.colors.color3};
          color: ${(props) => props.theme.colors.color5};
          font-size: 1.4rem;
          margin-bottom: 1rem;
          padding: 0.7rem;
          width: 100%;
        }

        textarea {
          min-height: 13rem;
        }

        button {
          font-size: 1.5rem;
          border: none;
          color: ${(props) => props.theme.colors.color2};
          background: ${(props) => props.theme.colors.color5};
          text-decoration: none;
          text-transform: uppercase;
          padding: 0.5rem 2rem;
          transition: all 0.4s;
          display: block;
          margin-left: auto;

          &:hover {
            color: ${(props) => props.theme.colors.color5};
            background: ${(props) => props.theme.colors.color3};
          }
        }

        p {
          font-size: 1.5rem;
          color: ${(props) => props.theme.colors.color5};
          display: block;
          text-align: right;
        }
      }
    }

    footer {
      h1 {
        font-size: 1.3rem;
        font-weight: normal;
        text-align: center;
        margin-bottom: 4rem;
      }
    }
  }
`;

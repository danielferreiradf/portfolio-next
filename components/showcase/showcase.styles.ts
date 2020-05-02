import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  margin-top: 5rem;

  section {
    height: 70rem;
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    div {
      margin-right: 3.5rem;

      h1 {
        font-size: 6.5rem;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.color5};
        margin-bottom: -1rem;
        font-weight: normal;
      }

      h2 {
        font-size: 3.5rem;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.color3};
        font-weight: normal;
        margin-bottom: 3rem;
        transition: transform 0.6s;

        &:hover {
          transform: translateX(1rem);
        }
      }

      a {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.color5};
        background: ${(props) => props.theme.colors.color4};
        text-decoration: none;
        text-transform: uppercase;
        padding: 1rem;
        transition: all 0.4s;

        &:hover {
          background: ${(props) => props.theme.colors.color3};
        }
      }

      div {
        display: flex;
        margin-top: 3.5rem;

        a {
          all: unset;
          cursor: pointer;
          margin-right: 4rem;
          background: none;

          &:hover {
            background: none;
          }

          img {
            height: 3.5rem;
            width: 3.5rem;
            transition: all 0.3s;

            &:hover {
              filter: brightness(50%);
            }
          }
        }
      }
    }

    div:nth-child(2) {
      margin-left: 3.5rem;
      position: relative;
      transition: all 0.3s;

      img {
        width: 27rem;
        transition: all 0.3s;

        &:hover {
          transform: translateY(-1rem);
        }
      }

      &:after {
        position: absolute;
        content: "";
        background: ${(props) => props.theme.colors.color3};
        display: block;
        height: 27rem;
        width: 27rem;
        top: 1.5rem;
        left: 1.5rem;
        transition: all 0.7s;
        z-index: -1;
      }

      &:hover {
        &:after {
          top: -2.5rem;
          left: -1.5rem;
        }
      }
    }
  }
`;

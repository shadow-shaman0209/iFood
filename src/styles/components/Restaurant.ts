import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 0;
  min-width: 280px;

  & + & {
    margin-left: 5px;
  }

  div {
    display: flex;
    align-items: center;

    padding: 16px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
    transition: 0.3s all;

    &:hover {
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.7);
    }

    border-radius: 4px;

    main {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      h5 {
        font-size: 0.875em;
        color: #3e3e3e;
        margin-bottom: 5px;
        line-height: 0.875rem;
        font-weight: 600;
        height: 18px;
      }

      span {
        font-weight: 300;
        color: #717171;
        font-size: 0.875rem;
        line-height: 0.9375rem;
        display: flex;

        svg {
          margin-right: 5px;
        }

        .starred {
          color: #e7a74e;
        }

        & + span {
          margin-top: 10px;
        }
      }
    }

    img {
      height: 54px;
      width: 54px;
      border-radius: 5px;
      object-fit: contain;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;
  min-width: 350px;

  section {
    padding-top: 0 !important;

    div {
      display: flex;
      align-items: center;

      h4 {
        font-size: 1rem;
        font-weight: 300;
        color: rgb(62, 62, 62);
      }

      svg {
        :first-child  {
          margin-right: 5px;
        }

        :last-child  {
          margin-left: 5px;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 30px;
  }
`;
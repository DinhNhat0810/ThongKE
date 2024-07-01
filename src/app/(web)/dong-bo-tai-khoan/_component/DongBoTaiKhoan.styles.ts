import { BlockWrapStyles } from "@/styles/global/default";
import styled from "styled-components";

export const DashBoardWrap = styled.div`
  ${BlockWrapStyles}

  .content-area__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    & > h3 {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .form-capmoi {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    .form-capmoi__left > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    & > div {
      width: 48%;

      & > p {
        font-size: 14px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.gray700};
        margin-bottom: 8px;
      }

      & > div {
        margin-bottom: 0;
      }
    }
  }
`;

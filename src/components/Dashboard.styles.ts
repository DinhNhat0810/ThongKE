import { BlockWrapStyles } from "@/styles/global/default";
import { media } from "@/styles/theme/theme";
import styled from "styled-components";

export const DashBoardWrap = styled.div`
  ${BlockWrapStyles}
  min-height: 800px;

  .tab2-content {
    .tab2-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }

    .tab2-content-item {
      display: flex;
      align-items: center;
      margin-left: 16px;

      .tab2-content-item-label {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        margin-right: 16px;
      }

      .tab2-content-item-value {
        font-size: 20px;
        font-weight: 600;
        color: #000;
      }
    }
  }

  .tab1-content {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .tab1-content-item {
      width: 30%;
      padding: 8px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 1px solid #f0f0f0;
      margin-bottom: 36px;
      padding: 16px;

      ${media.md`
        width: 48%;
      `}

      .tab1-content-item-label {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }

      .tab1-content-item-value {
        font-size: 24px;
        font-weight: 600;
        color: #000;
      }
    }
  }
`;

import { media } from "@/styles/theme/theme";
import styled from "styled-components";

export const LoginWrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.slate};

  div {
    position: relative;

    .login-form__img {
      position: absolute;
      z-index: 1;
      opacity: 0.5;

      ${media.sm`
        display: none;
      `}

      &.login-form__img-left {
        left: -80px;
        top: -60px;
      }

      &.login-form__img-right {
        right: -80px;
        bottom: -60px;
        transform: rotate(180deg);
      }
    }

    .login-form {
      width: 400px;
      background-color: ${(props) => props.theme.colors.white};
      padding: 36px 32px;
      position: relative;
      z-index: 10;
      box-shadow: 0 0 20px 0 rgb(2 84 230 / 20%);
      border-radius: 4px;

      ${media.sm`
        width: 90%;
        margin: 0 auto;
      `}

      button {
        width: 100%;
        margin-top: 24px;
        height: 40px;
      }

      &__wellcome {
        font-size: 20px;
        margin-bottom: 8px;
        color: #0254e6ad;
        font-weight: 600;
        text-align: center;
        letter-spacing: 2px;
      }

      &__wellcome-sub {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 24px;
        text-align: center;
      }

      &__logo {
        font-size: 40px;
        font-weight: 600;
        text-align: center;
      }
    }
  }
`;

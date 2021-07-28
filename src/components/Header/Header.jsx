/** @jsxImportSource @emotion/react */
import { Search, SpeakerNotes, Menu } from "@material-ui/icons";

import * as S from "./styles";

const Header = () => {
  return (
    <div css={S.headerContainerCss}>
      <div css={S.headerContentContainer}>
        <div css={S.logoContainer}>
          <SpeakerNotes css={S.iconNewsCss} />
        </div>
        <div css={S.headerContentCss}>
          <a href="#" css={S.activeHref}>
            Europa > Deutschland
          </a>
          <a href="#">Afrika</a>
          <a href="#">Amerika</a>
          <a href="#">Asien</a>
          <a href="#">Australien</a>
          <a href="#">Europa</a>
        </div>
        <div css={S.headerContentCss}>
          <a href="#">Internationale Ausgabe +</a>
          <Search css={S.iconHeaderCss} />
          <Menu css={S.iconHeaderCss} />
        </div>
      </div>
    </div>
  );
};

export default Header;

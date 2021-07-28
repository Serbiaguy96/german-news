/** @jsxImportSource @emotion/react */
import React from "react";

import * as S from "./styles";

const StepHeading = ({ step, linkText }) => {
  return (
    <div css={S.headingContainerCss}>
      Schritt {step}:  <a href="/#">{linkText}</a>
    </div>
  );
};

export default StepHeading;

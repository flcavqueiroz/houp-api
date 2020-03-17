import React from "react";
import { IconButton, SvgIcon, Hidden } from "@material-ui/core";

interface Props {
  className: string;
  style: React.CSSProperties;
  mStyle: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC<Props> = ({ className, onClick, style, mStyle }) => {
  return (
    <Hidden smDown>
      <IconButton
        disableFocusRipple
        disableRipple
        disableTouchRipple
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: -100,
          fontSize: 60,

          ...style,
          ...mStyle
        }}
      >
        <SvgIcon
          width="38.422"
          height="73"
          fontSize="inherit"
          viewBox="0 0 38.422 73"
        >
          <path
            d="M6.423,74a1.921,1.921,0,0,1-1.36-3.277L38.282,37.5,5.062,4.281A1.921,1.921,0,1,1,7.779,1.564l34.58,34.58a1.921,1.921,0,0,1,0,2.716L7.779,73.441A1.913,1.913,0,0,1,6.419,74Z"
            transform="translate(-4.5 -1.002)"
            style={{
              transform: "scaleX(-1) translateX(-100%)"
            }}
            fill="#00A290"
          />
        </SvgIcon>
      </IconButton>
    </Hidden>
  );
};

export default PrevArrow;

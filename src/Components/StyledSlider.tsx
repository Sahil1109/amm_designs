import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Slider  from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import theme from "../Theme/Theme";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 280 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));
interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const YearSlider = withStyles({
  root: {
    // color: "#10c71c",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    // backgroundColor: "#10c71c",
    border: "2px solid `${theme.primary}`",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
})(Slider);

export default function StyledSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <YearSlider
        valueLabelDisplay="auto"
        aria-label="year slider"
        defaultValue={25}
        min={10}
        max={30}
      />
      <div className={classes.margin} />
    </div>
  );
}

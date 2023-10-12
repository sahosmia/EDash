import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Progressbar({ percentage, color }) {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      minValue={1}
      maxValue={100}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "round",

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.9,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `${color}`,
        color: `${color}`,
        textColor: `${color}`,
      })}
    />
  );
}

export default Progressbar;

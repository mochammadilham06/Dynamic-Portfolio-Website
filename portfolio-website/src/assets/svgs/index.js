export default function LoadingSvg() {
  return (
    <svg
      style={{ margin: "auto", background: "none" }}
      width="271"
      height="271"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="0"
        fill="none"
        stroke="#1d3f72"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="0"
        fill="none"
        stroke="#5699d2"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}

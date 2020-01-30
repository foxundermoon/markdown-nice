import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M468.476145 981.886592a36.654263 36.654263 0 0 0 0-5.459146 38.993897 38.993897 0 0 0 0-7.798779 38.993897 38.993897 0 0 0 0-7.798779l-77.987793-155.975587a38.993897 38.993897 0 0 0-69.409136 35.094507l46.792676 94.36523A325.988975 325.988975 0 0 1 78.53718 585.708603a38.993897 38.993897 0 0 0-77.987793 0A408.656036 408.656036 0 0 0 434.161516 1014.641465a38.214019 38.214019 0 0 0 16.377437 0h4.679267l7.018902-5.459146 6.239023-12.478047a37.434141 37.434141 0 0 0 0-7.018901 38.214019 38.214019 0 0 0 0-7.798779zM650.967581 84.247093a325.988975 325.988975 0 0 1 290.11459 346.265802 38.993897 38.993897 0 0 0 77.987793 0A408.656036 408.656036 0 0 0 585.457835 0.800155h-15.597559l-6.239023 7.798779-7.018902 4.679268-3.899389 6.239023A37.434141 37.434141 0 0 0 546.463938 26.536126a38.214019 38.214019 0 0 0 0 7.79878 36.654263 36.654263 0 0 0 0 5.459145 38.993897 38.993897 0 0 0 0 7.79878 38.993897 38.993897 0 0 0 0 7.798779l77.987793 155.975586a38.993897 38.993897 0 0 0 69.409136-35.094507zM863.094378 702.690292a155.975586 155.975586 0 0 0-77.987793 21.836583V586.488481a38.993897 38.993897 0 0 0-77.987793 0v389.938965a38.993897 38.993897 0 0 0 77.987793 15.597559 155.975586 155.975586 0 0 0 77.987793 23.396338 155.975586 155.975586 0 0 0 0-311.951173z m0 233.96338a77.987793 77.987793 0 1 1 77.987793-77.987793 77.987793 77.987793 0 0 1-77.987793 77.987793zM44.222551 78.787948h311.951172a38.993897 38.993897 0 0 0 0-77.987793h-311.951172a38.993897 38.993897 0 0 0 0 77.987793zM44.222551 234.763534h311.951172a38.993897 38.993897 0 0 0 0-77.987793h-311.951172a38.993897 38.993897 0 0 0 0 77.987793zM44.222551 390.73912h233.963379a38.993897 38.993897 0 0 0 0-77.987793h-233.963379a38.993897 38.993897 0 0 0 0 77.987793z"
      fill={fill}
      p-id="578"
    />
  </svg>
);
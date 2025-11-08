import React from 'react';

const steps = [
  "Download",
  "Booking",
  "Pay",
  "Unlock",
  "Store luggage",
  "Enjoy"
];

const getLabelCoordinates = (index, radius = 160, center = { x: 175, y: 175 }) => {
  const angleDeg = index * (360 / steps.length) - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = center.x + radius * Math.cos(angleRad);
  const y = center.y + radius * Math.sin(angleRad);
  return { x, y };
};

const CircularFlow = () => {
  return (
    <div className="flex justify-center items-center">
      <svg width="500" height="500" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
        {/* Dashed circle with exact 250px diameter */}
        <circle
          cx="175"
          cy="175"
          r="125"
          stroke="#18ee18"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
        />

        {/* Rotating red dot */}
        <g>
          <circle cx="300" cy="175" r="10" fill="red" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 175 175"
            to="360 175 175"
            dur="7s"
            repeatCount="indefinite"
          />
        </g>

        {/* Labels */}
        {steps.map((step, i) => {
          const { x, y } = getLabelCoordinates(i);

          if (step === "Store luggage") {
            return (
              <text key={step} x={x} y={y - 10} textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000">
                <tspan x={x} dy="0">Store</tspan>
                <tspan x={x} dy="18">luggage</tspan>
              </text>
            );
          }

          return (
            <text
              key={step}
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="#000"
            >
              {step}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default CircularFlow;
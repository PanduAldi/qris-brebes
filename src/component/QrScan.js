import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function QrScan()
{
  const [data, setData] = React.useState("Not Found");
  const [show, setShow] = React.useState(false);
  return (
    <div className="container mt-4">
      <button onClick={() => setShow((st) => !st)}>Toggle</button>
      {show ? (
        <div style={{ maxWidth: 400 }}>
          <BarcodeScannerComponent
            width="100%"
            height="100%"
            onUpdate={(err, result) => {
              if (result) setData(result.getText());
              else setData("Not Found");
            }}
          />
          {console.log("rendering")}
          <p>{data}</p>
        </div>
      ) : null}
    </div>
  );
}
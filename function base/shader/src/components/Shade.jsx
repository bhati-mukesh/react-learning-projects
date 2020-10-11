import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Shade({ shadeColor, onColorCopy }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let interval;
    if (copied) {
      interval = setInterval(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [copied]);

  const onCopied = () => {
    setCopied(true);
    onColorCopy();
  };
  return (
    <CopyToClipboard
      text={shadeColor}
      onCopy={() => {
        onCopied();
      }}
    >
      <div className="shade" style={{ backgroundColor: shadeColor }}>
        {copied ? (
          <span className="copied">Copied!</span>
        ) : (
          <span>{shadeColor}</span>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default Shade;

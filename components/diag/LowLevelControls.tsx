import React from "react";

interface LowLevelControlsProps {
  autonomousStatus: string;
  manualModeStatus: string;
  hardwareModeStatus: string;
}

const LowLevelControls: React.FC<LowLevelControlsProps> = ({
  autonomousStatus,
  manualModeStatus,
  hardwareModeStatus,
}) => {
  return (
    <div className="voltage-current-container">
      <div className="car-container2">
        <img src="/images/Car image.svg" alt="Car" />
      </div>
      <div className="status-charge">
        <div className="panel-title">Low Level Controls</div>
        <br></br>
        <div className="control-item">
          <span className="control-label">Autonomous</span>
          <br></br>
          <span className="control-status">{autonomousStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Manual Mode</span>
          <span className="control-status">{manualModeStatus}</span>
        </div>
        <div className="control-item">
          <span className="control-label">Hardware Mode</span>
          <span className="control-status">{hardwareModeStatus}</span>
        </div>
        <p className="control-hint">Click to switch modes</p>
        <div className="status-charge-line"></div>
      </div>
    </div>
  );
};

export default LowLevelControls;

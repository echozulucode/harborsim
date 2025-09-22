import React, { useEffect, useMemo, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaCog } from "react-icons/fa";
import { SpinCog } from "./SpinCog";
import VfdButton from './VfdButton';
import StatusIndicator from './StatusIndicator';
import ReadoutCard from './ReadoutCard';

export default function VfdDashboard() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFaulted, setIsFaulted] = useState(false);
  const [freqRef, setFreqRef] = useState(45.0); // Hz
  const [outFreq, setOutFreq] = useState(0.0); // Hz

  const rpm = useMemo(() => Math.round((outFreq / 60) * 1800), [outFreq]);

  useEffect(() => {
    const dt = 0.05;
    const accelHzPerSec = 10;
    const step = accelHzPerSec * dt;

    const id = setInterval(() => {
      setOutFreq((prev) => {
        if (isFaulted) return 0;
        const target = isRunning ? freqRef : 0;
        if (Math.abs(prev - target) <= step) return Number(target.toFixed(1));
        return prev + Math.sign(target - prev) * step;
      });
    }, dt * 1000);
    return () => clearInterval(id);
  }, [isRunning, isFaulted, freqRef]);

  const normalizedRef = (val: number) => Math.min(60, Math.max(0, Number.isFinite(val) ? val : 0));

  const onRun = () => {
    if (isFaulted || isRunning) return;
    setIsRunning(true);
  };

  const onStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
  };

  const onFaultReset = () => {
    setIsFaulted(false);
    setIsRunning(false);
    setOutFreq(0);
  };

  useEffect(() => {
    if (isRunning && freqRef > 58) {
      setIsFaulted(true);
      setIsRunning(false);
    }
  }, [isRunning, freqRef]);

  const formatHz = (val: number) => val.toFixed(1);

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 font-sans bg-white text-[#333]">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
          {/* VFD Panel */}
          <section className="font-bold">
            <h2 className="text-lg tracking-wider text-zinc-700 mb-2">VARIABLE FREQUENCY DRIVE</h2>
                      <div className="bg-[#fbfbfb] p-5 rounded-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),0_1px_1px_white] border border-zinc-400/50">
                        
                        {/* Core Controls Group */}
                        <div className="border border-zinc-400/80 shadow-inner rounded p-3 bg-zinc-300/30">
                          {/* LCD Display */}
                          <div className="bg-[#9EB3B3] p-4 rounded text-center shadow-inner border-t border-white/50 border-l border-white/50">
                            <div className="font-mono text-6xl text-zinc-800 tracking-wider">
                              {formatHz(outFreq)}
                            </div>
                            <div className="text-2xl text-zinc-700 tracking-widest mt-1">
                              {isFaulted ? "FAULT" : isRunning ? "RUNNING" : "STOPPED"}
                            </div>
                          </div>
            
                                        {/* Buttons */}
                                        <div className="grid grid-cols-3 gap-3 mt-4">
                                          <VfdButton onClick={onRun} disabled={isFaulted || isRunning} className="bg-green-600 text-white">RUN</VfdButton>
                                          <VfdButton onClick={onStop} disabled={isFaulted || !isRunning} className="bg-gray-700 text-white">STOP</VfdButton>
                                          <VfdButton onClick={onFaultReset} disabled={!isFaulted} className="bg-black  text-white col-start-3 text-xs">FAULT RESET</VfdButton>
                                        </div>                        </div>
            
                        {/* Frequency Reference Slider */}
                        <div className="mt-6">                <h3 className="text-center text-md tracking-wider text-zinc-600 mb-2">FREQUENCY REFERENCE</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={60}
                    step={0.1}
                    value={freqRef}
                    onChange={(e) => setFreqRef(normalizedRef(parseFloat(e.target.value)))}
                    className="w-full h-2 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                    aria-label="Frequency Reference Slider"
                  />
                  <div className="font-mono text-2xl text-zinc-800 w-24 text-right">{formatHz(freqRef)} Hz</div>
                </div>
              </div>
              
              {/* Status Indicators */}
              <div className="mt-6 pt-4 border-t border-zinc-400/60 grid grid-cols-2 items-center gap-4">
                  <StatusIndicator icon={<FaCheckCircle />} label="RUNNING" active={isRunning} color="text-green-600" />
                  <div className="h-8 w-px bg-zinc-400/60 justify-self-end"></div>
                  <StatusIndicator icon={<FaTimesCircle />} label="FAULT" active={isFaulted} color="text-red-600" />
              </div>
            </div>
          </section>

          {/* Motor Readouts & Graphic */}
          <section className="flex flex-col justify-between gap-8">
              <ReadoutCard label="OUTPUT FREQUENCY" value={`${formatHz(outFreq)} Hz`} />
              
              <div className="text-center text-zinc-500">
                  <SpinCog outFreq={outFreq / 16} />
              </div>

              <ReadoutCard label="MOTOR RPM" value={rpm.toString()} />
          </section>

        </div>
      </div>
    </div>
  );
}
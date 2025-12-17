"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./not-found.module.css";
import Icon from "./components/svg/Icon";
import SupportWidget from "@/app/components/supportWidget/SupportWidget";

export default function NotFoundComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Keep track if ?support=bug is active
  const [supportActive, setSupportActive] = useState(
    searchParams.get("support") === "bug"
  );

  // Countdown timer
  const [seconds, setSeconds] = useState(10);
  const timerRef = useRef(null);

  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState([{ id: 1, top: "50%", left: "50%" }]);
  const maxBalls = 10;
  const [gameSpeed, setGameSpeed] = useState(1000);
  const gameIntervalRef = useRef(null);

  // Countdown effect
  useEffect(() => {
    if (gameStarted) return;

    timerRef.current = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        router.back();
      }
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [seconds, gameStarted, router]);

  // Move balls
  useEffect(() => {
    if (!gameStarted || gamePaused) return;

    gameIntervalRef.current = setInterval(() => {
      setBalls((prev) =>
        prev.map((b) => ({
          ...b,
          top: Math.random() * 80 + 10 + "%",
          left: Math.random() * 80 + 10 + "%",
        }))
      );
    }, gameSpeed);

    return () => clearInterval(gameIntervalRef.current);
  }, [gameStarted, gamePaused, gameSpeed]);

  // Speed-up triggers
  useEffect(() => {
    if (!gameStarted) return;
    const thresholds = [5, 10, 50, 100, 200, 500];
    thresholds.forEach((level) => {
      if (score === level) {
        setGameSpeed((prev) => Math.max(200, prev - 100));
      }
    });
  }, [score, gameStarted]);

  const handleStart = () => {
    setScore(0);
    setBalls([{ id: 1, top: "50%", left: "50%" }]);
    setGameSpeed(1000);
    setGameStarted(true);
    setGamePaused(false);
  };

  const handlePauseResume = () => {
    setGamePaused((prev) => !prev);
  };

  const handleAddBall = () => {
    setBalls((prev) =>
      prev.length < maxBalls
        ? [
            ...prev,
            {
              id: Date.now(),
              top: Math.random() * 80 + 10 + "%",
              left: Math.random() * 80 + 10 + "%",
            },
          ]
        : prev
    );
  };

  const handleRemoveBall = () => {
    setBalls((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  // Toggle ?support=bug without reload
  const handleReportClick = () => {
    const url = new URL(window.location.href);
    if (!supportActive) {
      url.searchParams.set("support", "bug");
    } else {
      url.searchParams.delete("support");
    }
    window.history.replaceState({}, "", url.toString());
    setSupportActive(!supportActive);
  };

  return (
    <>
      <Suspense fallback={null}>
        <SupportWidget />
      </Suspense>
      <div className={styles.pageLayout}>
        <h1 className={styles.title}>404 | Something Unexpected Happened</h1>

        {/* Countdown */}
        <div className={styles.countdownContainer}>
          <span className={styles.countdownText}>
            {gameStarted
              ? gamePaused
                ? "Game Paused..."
                : "Game in Progress..."
              : `Redirecting in ${seconds} sec`}
          </span>
          {!gameStarted && (
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${(seconds / 10) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Game Section */}
        <div className={styles.gameControls}>
          {!gameStarted ? (
            <button className={styles.startButton} onClick={handleStart}>
              Start Game 🎮
            </button>
          ) : (
            <>
              <div className={styles.score}>Score: {score}</div>
              <div className={styles.gameContainer}>
                {balls.map((ball) => (
                  <div
                    key={ball.id}
                    className={styles.dot}
                    style={{ top: ball.top, left: ball.left }}
                    onClick={() => setScore((prev) => Math.min(prev + 1, 999))}
                  ></div>
                ))}
              </div>
              <div className={styles.gameBtns}>
                <button onClick={handlePauseResume}>
                  {gamePaused ? "▶ Resume" : "⏸ Pause"}
                </button>
                <button onClick={handleAddBall}>+ Ball</button>
                {balls.length > 1 && (
                  <button onClick={handleRemoveBall}>- Ball</button>
                )}
                <button onClick={() => setGameStarted(false)}>⏹ Stop</button>
              </div>
            </>
          )}
        </div>

        {/* Bottom Actions */}
        <div className={styles.actions}>
          <Link href="/">
            <button className={styles.homeButton}>
              <Icon name="ArrowIcon" size={20} /> Home
            </button>
          </Link>
          <button className={styles.reportButton} onClick={handleReportClick}>
            Report an Issue
          </button>
        </div>
      </div>
    </>
  );
}

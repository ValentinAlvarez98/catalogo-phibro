import { useEffect, useRef, useCallback } from "react"

export const useAudio = () => {
      const flipSound = useRef<HTMLAudioElement | null>(null);
      const matchSound = useRef<HTMLAudioElement | null>(null);
      const incorrectSound = useRef<HTMLAudioElement | null>(null);
      const victorySound = useRef<HTMLAudioElement | null>(null);
      const defeatSound = useRef<HTMLAudioElement | null>(null);
      const backgroundMusic = useRef<HTMLAudioElement | null>(null);
      const tictac = useRef<HTMLAudioElement | null>(null);

      useEffect(() => {
            flipSound.current = new Audio('/audio/flip.mp3');
            matchSound.current = new Audio('/audio/match.mp3');
            incorrectSound.current = new Audio('/audio/incorrect.mp3');
            victorySound.current = new Audio('/audio/victory.mp3');
            defeatSound.current = new Audio('/audio/defeat.mp3');
            backgroundMusic.current = new Audio('/audio/background.mp3');
            tictac.current = new Audio('/audio/tictac.mp3');

            if (backgroundMusic.current) {
                  backgroundMusic.current.loop = true;
                  backgroundMusic.current.volume = 0.05;
            }


            return () => {
                  [flipSound, matchSound, incorrectSound, victorySound, defeatSound, backgroundMusic].forEach(ref => {
                        if (ref.current) {
                              ref.current.pause();
                              ref.current = null;
                        }
                  });
            };
      }, [])

      const playBackgroundMusic = useCallback(() => {
            if (backgroundMusic.current && backgroundMusic.current.paused) {
                  backgroundMusic.current.play().catch(error => {
                        console.error('Error playing background music:', error);
                  });
            }
      }, []);

      const playSound = useCallback((sound: HTMLAudioElement | null) => {
            if (sound) {
                  sound.currentTime = 0;
                  sound.play().catch(error => {
                        console.error('Error playing sound:', error);
                  });
            }
      }, []);

      const playFlipSound = useCallback(() => {
            if (flipSound.current) {
                  flipSound.current.volume = 1;
                  playSound(flipSound.current);
            }
      }, [playSound]);
      const playMatchSound = useCallback(() => playSound(matchSound.current), [playSound]);
      const playIncorrectSound = useCallback(() => playSound(incorrectSound.current), [playSound]);
      const playVictorySound = useCallback(() => playSound(victorySound.current), [playSound]);
      const playDefeatSound = useCallback(() => playSound(defeatSound.current), [playSound]);
      const playTictac = useCallback(() => playSound(tictac.current), [playSound]);

      const stopBackgroundMusic = useCallback(() => {
            if (backgroundMusic.current) {
                  backgroundMusic.current.pause();
                  backgroundMusic.current.currentTime = 0;
            }
      }, []);

      const stopTictac = useCallback(() => {
            if (tictac.current) {
                  tictac.current.pause();
                  tictac.current.currentTime = 0;
            }
      }, []);

      return {
            playBackgroundMusic,
            playFlipSound,
            playMatchSound,
            playIncorrectSound,
            playVictorySound,
            playDefeatSound,
            playTictac,
            stopBackgroundMusic,
            stopTictac,
      };
}
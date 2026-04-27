import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene0 } from './video_scenes/Scene0';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';
import { Scene8 } from './video_scenes/Scene8';
import { Scene9 } from './video_scenes/Scene9';
import { Scene10 } from './video_scenes/Scene10';
import { Scene11 } from './video_scenes/Scene11';
import { Scene12 } from './video_scenes/Scene12';
import { Scene13 } from './video_scenes/Scene13';

const SCENE_DURATIONS = {
  scene0: 4500,
  scene1: 4500,
  scene2: 4000,
  scene3: 4500,
  scene4: 6500,
  scene5: 4000,
  scene6: 5000,
  scene7: 5500,
  scene8: 4500,
  scene9: 6000,
  scene10: 5000,
  scene11: 4500,
  scene12: 6500,
  scene13: 5000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative bg-[#020617] flex items-center justify-center"
      style={{ aspectRatio: '16 / 9' }}
    >
      <div
        className="w-full h-full overflow-hidden relative bg-[#020617]"
      >
        <AnimatePresence initial={false} mode="sync">
          {currentScene === 0 && <Scene0 key="scene0" />}
          {currentScene === 1 && <Scene1 key="scene1" />}
          {currentScene === 2 && <Scene2 key="scene2" />}
          {currentScene === 3 && <Scene3 key="scene3" />}
          {currentScene === 4 && <Scene4 key="scene4" />}
          {currentScene === 5 && <Scene5 key="scene5" />}
          {currentScene === 6 && <Scene6 key="scene6" />}
          {currentScene === 7 && <Scene7 key="scene7" />}
          {currentScene === 8 && <Scene8 key="scene8" />}
          {currentScene === 9 && <Scene9 key="scene9" />}
          {currentScene === 10 && <Scene10 key="scene10" />}
          {currentScene === 11 && <Scene11 key="scene11" />}
          {currentScene === 12 && <Scene12 key="scene12" />}
          {currentScene === 13 && <Scene13 key="scene13" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

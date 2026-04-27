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

const SCENE_DURATIONS = {
  scene0: 4500,
  scene1: 4500,
  scene2: 4000,
  scene3: 4500,
  scene4: 6500,
  scene5: 4000,
  scene6: 5000,
  scene7: 5500,
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
        <AnimatePresence mode="wait">
          {currentScene === 0 && <Scene0 key="scene0" />}
          {currentScene === 1 && <Scene1 key="scene1" />}
          {currentScene === 2 && <Scene2 key="scene2" />}
          {currentScene === 3 && <Scene3 key="scene3" />}
          {currentScene === 4 && <Scene4 key="scene4" />}
          {currentScene === 5 && <Scene5 key="scene5" />}
          {currentScene === 6 && <Scene6 key="scene6" />}
          {currentScene === 7 && <Scene7 key="scene7" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

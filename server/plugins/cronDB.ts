import { useScheduler } from '#scheduler';
import { renderDB } from '../utils/renderDB';

export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const scheduler = useScheduler();
  renderDB();

  scheduler
    .run(() => {
      renderDB();
    })
    .hourly();
}

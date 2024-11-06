import { CheckmarkCircleSharp, CloseCircleOutline } from '@vicons/ionicons5';
import { Trash } from '@vicons/tabler';

export { default as OmsIbtn } from './src/IconButton.vue';

/**
 * @description 预设button
 */
export const btnAttr = {
  delete: {
    type: 'error',
    strong: true,
    tertiary: true,
    icon: Trash,
  },
  agree: {
    type: 'success',
    strong: true,
    tertiary: true,
    icon: CheckmarkCircleSharp,
  },
  disagree: {
    type: 'error',
    strong: true,
    tertiary: true,
    icon: CloseCircleOutline,
  },
};

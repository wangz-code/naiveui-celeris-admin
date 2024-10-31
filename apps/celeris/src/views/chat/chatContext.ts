import type { Ref } from 'vue';
import { createInjectionKey } from '#/utils';
import type { Assistant } from '#/views/chat/components/AssistantSidebar/types';

export interface ChatContextInjectionKey {
  selectedAssistantRef: Ref<Assistant>;
}

export const chatContextInjectionKey = createInjectionKey<ChatContextInjectionKey>('chatContext');

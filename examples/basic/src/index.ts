// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Vue-Lynx SFC demo entry.
 *
 * Validates the full SFC pipeline:
 *   .vue file → @vue/compiler-dom → template render function
 *   → vue-lynx nodeOps → ops buffer → callLepusMethod
 *   → Main Thread applyOps → PAPI → native render
 *
 * SFC features exercised (see App.vue / Counter.vue):
 *   - <script setup> + defineProps / defineEmits
 *   - {{ interpolation }}
 *   - :style / dynamic binding
 *   - v-if / v-else
 *   - v-show
 *   - v-for
 *   - @tap event
 *   - child component reference
 */

import { createApp } from 'vue-lynx';

import App from './App.vue';

const app = createApp(App);
app.mount();

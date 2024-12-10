<!--
 * @Author: wangqz
 * @Date: 2024-12-10
 * @LastEditTime: 2024-12-10
 * @Description: content
-->
<style scoped>
.row-margin {
  width: 42px;
}
.min-num-input {
  width: 30px;
}
.b-primary {
  border: 1px var(--primary-color) solid;
}
</style>
<template>
  <n-card :id="table.uuid" size="small" class="b-primary" hoverable>
    <n-flex :size="[2, 5]">
      <div>
        <n-input v-model:value="table.table.tittle" size="small" style="width: 110px">
          <template #prefix>
            <n-icon size="20" color="var(--primary-color)">
              <Tabler3DCubeSphere />
            </n-icon>
          </template>
        </n-input>
      </div>
      <n-flex size="small" justify="space-around">
        <div>
          <n-popover trigger="hover">
            <template #trigger>
              <n-input-group>
                <n-input-group-label size="small">表间距</n-input-group-label>
                <n-input-number v-for="(_, mIdx) in table.margin" v-model:value="table.margin[mIdx]" size="small" class="row-margin" :show-button="false" />
              </n-input-group>
            </template>
            <span>左 上 右 下</span>
          </n-popover>
        </div>
        <n-select size="small" style="width: 80px" v-model:value="table.layout" :options="layoutOptions" />
        <n-button size="small" @click="addTableCol(table.table)">+列</n-button>
        <n-button size="small" @click="addTableRow(table.table)">+行</n-button>
        <n-dropdown trigger="hover" :options="makeOpt(table.table)" @select="addTableRow(table.table, $event)">
          <n-button size="small">复制x行</n-button>
        </n-dropdown>
        <n-button size="small" @click="remove()">删表</n-button>
      </n-flex>
    </n-flex>
    <n-flex class="m-b-xs m-t-xs" :size="[3, 0]">
      <div v-for="(w, wIdx) in table.table.widths">
        <n-popover trigger="hover">
          <template #trigger>
            <n-input-group>
              <n-input-group-label size="tiny"> 列{{ wIdx + 1 }} </n-input-group-label>
              <n-input-group-label size="tiny">
                <span v-if="table.table.widths[wIdx] == '*'">填充</span>
                <span v-else-if="table.table.widths[wIdx] == 'auto'">自动</span>
                <span v-else> {{ table.table.widths[wIdx] }}</span>
              </n-input-group-label>
            </n-input-group>
          </template>
          列宽:
          <n-button-group size="tiny">
            <n-button @click="table.table.widths[wIdx] = 'auto'"> 自动 </n-button>
            <n-button @click="table.table.widths[wIdx] = '*'"> 填充 </n-button>
            <n-input-number v-model:value="table.table.widths[wIdx] as number" size="tiny" placeholder="宽度" style="width: 45px" :show-button="false" />
          </n-button-group>
        </n-popover>
      </div>
    </n-flex>
    <div style="max-width: 675px">
      <n-tabs size="small" type="line" animated v-model:value="table.table.tabs">
        <n-tab-pane v-for="(cols, colsIdx) in table.table.body" :key="colsIdx" :name="colsIdx" :tab="colsIdx + 1 + '行'">
          <div>
            <n-list>
              <n-card size="small">
                <template #header>
                  <n-flex justify="space-between" :size="[5, 0]">
                    <div>
                      <n-tag :bordered="false" type="info" size="small"> 第 {{ colsIdx + 1 }} 行</n-tag>
                    </div>
                    <n-flex>
                      <n-button size="tiny" @click="batRowAction(table.table, colsIdx, 'cleanBorder')"> 批量去边框 </n-button>
                      <n-button size="tiny" @click="batRowAction(table.table, colsIdx, 'addBold')"> 批量加粗 </n-button>
                      <n-button size="tiny" @click="removeRow(table.table, colsIdx)">
                        <template #icon>
                          <n-icon :component="Trash"></n-icon>
                        </template>
                        删行
                      </n-button>
                    </n-flex>
                  </n-flex>
                </template>
                <div v-for="(col, colIdx) in cols" :key="colIdx">
                  <n-list-item v-if="col.show == undefined || col.show">
                    <template #prefix>
                      <n-tag :bordered="false" type="default" size="small"> {{ colIdx + 1 }}列</n-tag>
                    </template>
                    <div>
                      <div v-if="col.image != undefined">
                        <n-flex justify="space-between" align="end">
                          <div>
                            <n-input type="text" v-model:value="col.src" size="small" />
                          </div>
                          <n-flex align="end">
                            <div>
                              <img :src="col.src" width="50" />
                            </div>
                            <n-button-group>
                              <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                            </n-button-group>
                            <div>
                              <n-input-group>
                                <n-input-group-label size="tiny">宽高</n-input-group-label>
                                <n-input-number v-model:value="col.width" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                <n-input-number v-model:value="col.height" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                              </n-input-group>
                            </div>
                          </n-flex>
                        </n-flex>
                      </div>
                      <div v-if="col.text != undefined">
                        <n-flex justify="space-between">
                          <div>
                            <n-input v-model:value="col.text" size="small" type="text" placeholder="请输入" />
                          </div>
                          <n-flex>
                            <n-checkbox v-model:checked="col.bold">粗体</n-checkbox>
                            <n-button-group>
                              <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                            </n-button-group>
                            <div>
                              <n-input-group>
                                <n-input-group-label size="tiny">字体</n-input-group-label>
                                <n-input-number v-model:value="col.fontSize" size="tiny" placeholder="字体大小" style="width: 70px" />
                              </n-input-group>
                            </div>
                          </n-flex>
                        </n-flex>
                      </div>
                      <div v-if="col.qr != undefined">
                        <n-flex justify="space-between" align="end">
                          <div>
                            <n-input type="text" size="small" v-model:value="col.qr" />
                          </div>
                          <n-flex align="end">
                            <vue-qrcode :value="col.qr" :options="{ width: 50 }"></vue-qrcode>
                            <n-button-group>
                              <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                            </n-button-group>
                            <div>
                              <n-input-group>
                                <n-input-group-label size="tiny">宽高</n-input-group-label>
                                <n-input-number v-model:value="col.fit" size="tiny" placeholder="尺寸" style="width: 80px" />
                              </n-input-group>
                            </div>
                          </n-flex>
                        </n-flex>
                      </div>
                      <div v-if="col.columns != undefined">
                        <n-card size="small">
                          <div>
                            <n-flex justify="space-between" size="small">
                              <div>
                                <n-tag :bordered="false" type="info" size="small">组合</n-tag>
                              </div>
                              <n-flex size="small" justify="space-around">
                                <div>
                                  <n-checkbox v-model:checked="col.bold">粗体</n-checkbox>
                                </div>
                                <div>
                                  <n-button-group>
                                    <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                                    <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                                    <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                                  </n-button-group>
                                </div>
                                <div>
                                  <n-input-group>
                                    <n-input-group-label size="tiny">字体</n-input-group-label>
                                    <n-input-number v-model:value="col.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                  </n-input-group>
                                </div>
                                <div>
                                  <n-button size="tiny" @click="col.columns = []">清空</n-button>
                                </div>
                                <div>
                                  <n-button size="tiny" @click="addText(col.columns)">增加一条</n-button>
                                </div>
                              </n-flex>
                            </n-flex>
                          </div>
                          <div v-for="(column, coIdx) in col.columns" class="m-t-xs">
                            <div v-if="column.text != undefined">
                              <n-flex justify="space-between">
                                <div>
                                  <n-input v-model:value="column.text" size="small" type="text" placeholder="请输入" />
                                </div>
                                <n-flex>
                                  <n-checkbox v-model:checked="column.bold">粗体</n-checkbox>
                                  <n-button-group>
                                    <n-button size="tiny" :type="column.alignment == 'left' ? 'primary' : 'default'" @click="column.alignment = 'left'"> 左 </n-button>
                                    <n-button size="tiny" :type="column.alignment == 'center' ? 'primary' : 'default'" @click="column.alignment = 'center'"> 中 </n-button>
                                    <n-button size="tiny" :type="column.alignment == 'right' ? 'primary' : 'default'" @click="column.alignment = 'right'"> 右 </n-button>
                                  </n-button-group>
                                  <div>
                                    <n-input-group>
                                      <n-input-group-label size="tiny">字体</n-input-group-label>
                                      <n-input-number v-model:value="column.fontSize" size="tiny" placeholder="字体大小" style="width: 70px" />
                                    </n-input-group>
                                  </div>
                                </n-flex>
                              </n-flex>
                            </div>
                            <div v-if="column.svg != undefined">
                              <n-flex justify="space-between" align="end">
                                <div>
                                  <n-input type="text" v-model:value="column.svg" size="small" />
                                </div>
                                <n-flex align="end">
                                  <n-button-group>
                                    <n-button size="tiny" :type="column.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                                    <n-button size="tiny" :type="column.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                                    <n-button size="tiny" :type="column.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                                  </n-button-group>
                                  <div>
                                    <n-input-group>
                                      <n-input-group-label size="tiny">宽高</n-input-group-label>
                                      <n-input-number v-model:value="column.width" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                      <n-input-number v-model:value="column.height" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                    </n-input-group>
                                  </div>
                                </n-flex>
                              </n-flex>
                            </div>
                            <n-popselect @update:value="setColType($event, col.columns, coIdx)" :options="columnColTypeOpts" trigger="hover">
                              <n-button size="tiny">切换</n-button>
                            </n-popselect>
                            <n-button size="tiny" @click="col.columns.splice(coIdx, 1)">移除</n-button>
                          </div>
                        </n-card>
                      </div>
                      <div v-if="col.svg != undefined">
                        <n-flex justify="space-between" align="end">
                          <div>
                            <n-input type="text" v-model:value="col.svg" size="small" />
                          </div>
                          <n-flex align="end">
                            <div>
                              <!-- <img :src="col.src" width="50" /> -->
                            </div>
                            <n-button-group>
                              <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                              <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                            </n-button-group>
                            <div>
                              <n-input-group>
                                <n-input-group-label size="tiny">宽高</n-input-group-label>
                                <n-input-number v-model:value="col.width" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                                <n-input-number v-model:value="col.height" size="tiny" placeholder="尺寸" style="width: 40px" :show-button="false" />
                              </n-input-group>
                            </div>
                          </n-flex>
                        </n-flex>
                      </div>
                      <div v-if="col.ol != undefined">
                        <n-card size="small">
                          <div>
                            <n-flex justify="space-between" :size="[5, 0]">
                              <div>
                                <!-- <n-tag :bordered="false" type="info" size="small"> 列表</n-tag> -->
                              </div>
                              <n-flex size="small" justify="space-around">
                                <div>
                                  <n-select size="tiny" style="width: 80px" v-model:value="col.type" :options="listTypeOptions" />
                                </div>
                                <div>
                                  <n-popover trigger="hover" v-if="col.type != 'none'">
                                    <template #trigger>
                                      <n-button size="tiny"> 分割符{{ col.separator }} </n-button>
                                    </template>
                                    <n-button-group size="small">
                                      <n-button @click="col.separator = ['(', ')']" @blur="preview"> (1.) </n-button>
                                      <n-button @click="col.separator = ')'" @blur="preview"> 1.) </n-button>
                                      <n-input v-model:value="col.separator" size="tiny" @blur="preview" placeholder="输入" style="width: 50px" />
                                    </n-button-group>
                                  </n-popover>
                                </div>
                                <div>
                                  <n-checkbox v-model:checked="col.bold">粗体</n-checkbox>
                                </div>
                                <div>
                                  <n-button-group>
                                    <n-button size="tiny" :type="col.alignment == 'left' ? 'primary' : 'default'" @click="col.alignment = 'left'"> 左 </n-button>
                                    <n-button size="tiny" :type="col.alignment == 'center' ? 'primary' : 'default'" @click="col.alignment = 'center'"> 中 </n-button>
                                    <n-button size="tiny" :type="col.alignment == 'right' ? 'primary' : 'default'" @click="col.alignment = 'right'"> 右 </n-button>
                                  </n-button-group>
                                </div>
                                <div>
                                  <n-input-group>
                                    <n-input-group-label size="tiny">字体</n-input-group-label>
                                    <n-input-number v-model:value="col.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                  </n-input-group>
                                </div>
                                <div>
                                  <n-button size="tiny" @click="col.ol = []">清空</n-button>
                                </div>
                                <div>
                                  <n-button size="tiny" @click="col.ol.push('')">增加一条</n-button>
                                </div>
                              </n-flex>
                            </n-flex>
                          </div>
                          <n-list>
                            <n-list-item v-for="(ol, olIdx) in col.ol">
                              <template #prefix>
                                <n-badge type="info" :value="olIdx + 1" :max="15" />
                              </template>
                              <div class="m-b-1">
                                <n-input v-if="isString(ol)" type="textarea" rows="2" v-model:value="col.ol[olIdx]"></n-input>
                                <n-flex v-if="ol.text != undefined" justify="space-between">
                                  <div>
                                    <n-input v-model:value="ol.text" size="small" type="text" placeholder="请输入" />
                                  </div>
                                  <n-flex>
                                    <n-checkbox v-model:checked="ol.bold">粗体</n-checkbox>
                                    <n-button-group>
                                      <n-button size="tiny" :type="ol.alignment == 'left' ? 'primary' : 'default'" @click="ol.alignment = 'left'"> 左 </n-button>
                                      <n-button size="tiny" :type="ol.alignment == 'center' ? 'primary' : 'default'" @click="ol.alignment = 'center'"> 中 </n-button>
                                      <n-button size="tiny" :type="ol.alignment == 'right' ? 'primary' : 'default'" @click="ol.alignment = 'right'"> 右 </n-button>
                                    </n-button-group>
                                    <div>
                                      <n-input-group>
                                        <n-input-group-label size="tiny">字体</n-input-group-label>
                                        <n-input-number v-model:value="ol.fontSize" size="tiny" placeholder="字体大小" style="width: 80px" />
                                      </n-input-group>
                                    </div>
                                    <div>
                                      <n-popover trigger="hover">
                                        <template #trigger>
                                          <n-input-group>
                                            <n-input-group-label size="tiny">间距</n-input-group-label>
                                            <n-input-number v-model:value="ol.margin[0]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                            <n-input-number v-model:value="ol.margin[1]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                            <n-input-number v-model:value="ol.margin[2]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                            <n-input-number v-model:value="ol.margin[3]" size="tiny" placeholder="0" style="width: 40px" :show-button="false" />
                                          </n-input-group>
                                        </template>
                                        <span>左 上 右 下</span>
                                      </n-popover>
                                    </div>
                                  </n-flex>
                                </n-flex>
                                <n-flex v-if="ol.qr != undefined" justify="space-between" align="end">
                                  <div>
                                    <n-input type="text" size="small" v-model:value="ol.qr" />
                                  </div>
                                  <n-flex align="end">
                                    <vue-qrcode :value="col.qr" :options="{ width: 50 }"></vue-qrcode>
                                    <n-button-group>
                                      <n-button size="tiny" :type="ol.alignment == 'left' ? 'primary' : 'default'" @click="ol.alignment = 'left'"> 左 </n-button>
                                      <n-button size="tiny" :type="ol.alignment == 'center' ? 'primary' : 'default'" @click="ol.alignment = 'center'"> 中 </n-button>
                                      <n-button size="tiny" :type="ol.alignment == 'right' ? 'primary' : 'default'" @click="ol.alignment = 'right'"> 右 </n-button>
                                    </n-button-group>
                                    <div>
                                      <n-input-group>
                                        <n-input-group-label size="tiny">宽高</n-input-group-label>
                                        <n-input-number v-model:value="ol.fit" size="tiny" placeholder="尺寸" style="width: 80px" />
                                      </n-input-group>
                                    </div>
                                  </n-flex>
                                </n-flex>
                              </div>
                              <n-flex :size="[5, 0]">
                                <n-popselect @update:value="setColType($event, col.ol, olIdx)" :options="listColTypeOpts" trigger="hover">
                                  <n-button size="tiny">切换</n-button>
                                </n-popselect>

                                <n-button size="tiny" @click="col.ol.splice(olIdx, 1)">移除</n-button>
                              </n-flex>
                            </n-list-item>
                          </n-list>
                        </n-card>
                      </div>
                    </div>
                    <n-flex :size="[5, 2]" class="m-t-xs">
                      <n-popselect @update:value="setColType($event, cols, colIdx)" :options="options" trigger="hover">
                        <n-button size="tiny">切换</n-button>
                      </n-popselect>
                      <div>
                        <n-input-group>
                          <n-input-group-label size="tiny">跨列</n-input-group-label>
                          <n-input-number
                            v-model:value="col.colSpan"
                            :max="cols.length"
                            :min="1"
                            :show-button="false"
                            size="tiny"
                            placeholder="0"
                            class="min-num-input"
                            @update-value="setColSpan($event, cols, colIdx)"
                          />
                        </n-input-group>
                      </div>
                      <div>
                        <n-input-group>
                          <n-input-group-label size="tiny">跨行</n-input-group-label>
                          <n-input-number v-model:value="col.rowSpan" :max="table.table.body.length" :min="1" :show-button="false" class="min-num-input" size="tiny" />
                        </n-input-group>
                      </div>
                      <div>
                        <n-input-group>
                          <n-input-group-label size="tiny">行高</n-input-group-label>
                          <n-input-number v-model:value="col.lineHeight" size="tiny" placeholder="" class="min-num-input" :show-button="false" />
                        </n-input-group>
                      </div>
                      <div>
                        <n-popover trigger="hover">
                          <template #trigger>
                            <n-input-group>
                              <n-input-group-label size="tiny">列间距</n-input-group-label>
                              <n-input-number v-for="(_, colIdx) in col.margin" v-model:value="col.margin[colIdx]" size="tiny" style="width: 40px" :show-button="false" />
                            </n-input-group>
                          </template>
                          <span>左 上 右 下</span>
                        </n-popover>
                      </div>
                      <div>
                        <n-popover trigger="hover">
                          <template #trigger>
                            <n-button size="tiny">边框</n-button>
                          </template>
                          <n-flex :size="[5, 0]">
                            自定义:<n-checkbox v-for="(_, bIndex) in col.border" v-model:checked="col.border[bIndex]" @update-checked="preview">
                              {{ position[bIndex] }}
                            </n-checkbox>
                          </n-flex>
                          <n-flex :size="[5, 0]">
                            仅保留:
                            <n-button size="tiny" @click="setBorder('lr', col)">左右</n-button>
                            <n-button size="tiny" @click="setBorder('tb', col)">上下</n-button>
                          </n-flex>
                        </n-popover>
                      </div>
                      <n-button size="tiny" @click="removeCol(table.table, colIdx)">删列</n-button>
                    </n-flex>
                    <n-divider style="margin: 0.5rem 0px" />
                  </n-list-item>
                </div>
              </n-card>
            </n-list>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { Tabler3DCubeSphere, Trash } from '@vicons/tabler';
import { cloneDeep, isNumber, isObject, isString } from 'lodash-es';
import { NInput } from 'naive-ui';
import { getDoc, logo, mergeDoc, preview } from './mix';
import { TableCol, TableData } from './type';
import VueQrcode from '@chenfengyuan/vue-qrcode';
const emit = defineEmits(['update']);
const { value: table } = defineProps<{ value: TableCol }>();
watch(
  () => table,
  () => preview(),
  { deep: true },
);

const options = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '图片',
    value: 'image',
  },
  {
    label: '二维码',
    value: 'qr',
  },
  {
    label: '有序列表',
    value: 'ol',
  },
  {
    label: '图标',
    value: 'svg',
  },
  {
    label: '组合',
    value: 'columns',
  },
];
const columnColTypeOpts = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '图标',
    value: 'svg',
  },
];
const listColTypeOpts = [
  {
    label: '文本',
    value: 'text',
  },
  {
    label: '二维码',
    value: 'qr',
  },
];
const layoutOptions = [
  {
    label: '全框',
    value: '',
  },
  {
    label: '无框',
    value: 'noBorders',
  },
  {
    label: '细线',
    value: 'lightHorizontalLines',
  },
];
const listTypeOptions = [
  {
    label: '无序',
    value: 'none',
  },
  {
    label: '数字',
    value: '',
  },
  {
    label: 'abc',
    value: 'lower-alpha',
  },
  {
    label: 'ABC',
    value: 'upper-alpha',
  },
];
const colPub = () => {
  return {
    alignment: 'center',
    bold: false,
    colSpan: 1,
    rowSpan: 1,
    margin: [0, 0, 0, 0],
    border: [true, true, true, true],
  };
};
const textPub = () => {
  return {
    fontSize: 10,
    ...colPub(),
  };
};
const position = ['左', '上', '右', '下'];
const setColType = (type: 'text' | 'image' | 'qr', cols: any[], colsIdx: number) => {
  const item = {
    text: { ...textPub(), text: '文本' },
    image: {
      ...colPub(),
      image: 'logo',
      src: logo.value,
      width: 50,
      height: 50,
    },
    qr: { qr: '二维码', fit: 80, ...colPub() },
    ol: {
      ...textPub(),
      ol: ['列表内容。'],
      alignment: 'left',
      type: '',
    },
    svg: {
      svg: '',
      alignment: 'center',
      width: 20,
      height: 20,
    },
    columns: {
      ...colPub(),
      columns: [
        { ...textPub(), text: '文本' },
        { ...textPub(), text: '文本' },
      ],
    },
  };
  cols[colsIdx] = item[type];
};

const addText = (coloum: any[]) => {
  coloum.push({ ...textPub(), text: '文本' });
};

const remove = () => {
  const content = getDoc().content;
  const idx = content.findIndex((item) => item.uuid == table.uuid);
  if (idx != -1) {
    content.splice(idx, 1);
    mergeDoc({ content });
  }
};

const removeRow = (table: TableData, idx: number) => {
  table.body.splice(idx, 1);
  table.tabs = idx - 1 > 0 ? idx - 1 : 0;
  if (!table.body.length) table.widths = [];
};
const batRowAction = (table: TableData, idx: number, action: 'cleanBorder' | 'addBold') => {
  const cols = table.body[idx];
  for (const col of cols) {
    if (action == 'addBold') col.bold = true;
    if (action == 'cleanBorder') col.border = [false, false, false, false];
  }
};

const removeCol = (table: TableData, idx: number) => {
  for (const b of table.body) {
    b.splice(idx, 1);
  }
  if (table.body.length) {
    table.widths = new Array(table.body[0].length).fill('*');
    return;
  }
  table.widths = [];
};

const addTableCol = (table: TableData) => {
  for (const col of table.body) {
    col.push({ text: '文本', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 });
  }
  table.widths.push('*');
};

const addTableRow = (table: TableData, copyIdx?: number) => {
  nextTick(() => {
    table.tabs = table.body.length - 1;
  });
  if (table.body.length) {
    if (isNumber(copyIdx)) {
      table.body.push(cloneDeep(table.body[copyIdx]));
      return;
    }
    const row = new Array(table.body[0].length).fill(0).map(() => ({ text: '', alignment: 'center', fontSize: 10, bold: false, margin: [0, 0, 0, 0], colSpan: 1, rowSpan: 1 }));
    table.body.push(row);
    return;
  }
  table.body = [
    [
      { text: '', ...textPub() },
      { text: '', ...textPub() },
      { text: '', ...textPub() },
      { text: '', ...textPub() },
    ],
  ];
  table.widths = ['*', '*', '*', '*'];
};

const makeOpt = (table: TableData) => {
  const opt = [];
  for (let i = 0; i < table.body.length; i++) {
    opt.push({
      label: `第${i + 1}行`,
      key: i,
    });
  }
  return opt;
};

const setColSpan = (colSpan: number | null, cols: any[], idx: number) => {
  if (colSpan == null) return;
  for (let i = idx; i <= cols.length; i++) {
    if (isObject(cols[i])) cols[i].show = true;
  }
  if (colSpan == 1) return;
  for (let i = 1 + idx; i <= colSpan + idx - 1; i++) {
    if (isObject(cols[i])) cols[i].show = false;
  }
};

const setBorder = (type: 'lr' | 'tb', table: TableData) => {
  if (type == 'lr') table.border = [true, false, true, false];
  if (type == 'tb') table.border = [false, true, false, true];
};
</script>

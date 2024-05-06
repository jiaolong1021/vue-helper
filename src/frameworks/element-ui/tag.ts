export default (tabSize: string) => {
  return {
    "el-row": `<el-row>
${tabSize}<el-col :span="$1">$2</el-col>
</el-row>`,
"el-col": `<el-col :span="$1">$2</el-col>`,
"el-button": `<el-button type="$1">$2</el-button>`,
"el-radio": `<el-radio label="$1">$2</el-radio>`,
"el-radio-group": `<el-radio-group v-model="$1">
${tabSize}<el-radio label="$2">$3</el-radio>$4
</el-radio-group>`,
"el-radio-button": `<el-radio-button label="$1">$2</el-radio-button>`,
"el-checkbox": `<el-checkbox label="$1">$2</el-checkbox>`,
"el-checkbox-group": `<el-checkbox-group v-model="$1">
${tabSize}<el-checkbox label="$2">$3</el-checkbox>
</el-checkbox-group>`,
"el-checkbox-button": `<el-checkbox-button label="$1">$2</el-checkbox-button>`,
"el-input": `<el-input v-model="$1" placeholder="$2">$3</el-input>`,
"el-autocomplete": `<el-autocomplete v-model="$1" placeholder="$2">$3</el-autocomplete>`,
"el-input-number": `<el-input-number v-model="$1" placeholder="$2">$3</el-input-number>`,
"el-select": `<el-select v-model="$1" placeholder="$2">
${tabSize}<el-option :label="$3" :value="$4"></el-option>$5
</el-select>`,
"el-option": `<el-option :label="$1" :value="$2">$3</el-option>`,
"el-option-group": `<el-option-group v-for="$1" :key="$2">
<el-option :label="$3" :value="$4"></el-option>$5
</el-option-group>`,
"el-cascader": `<el-cascader :options="$1" v-model="$2">$3</el-cascader>`,
"el-switch": `<el-switch v-model="$1">$2</el-switch>`,
"el-slider": `<el-slider v-model="$1">$2</el-slider>`,
"el-time-select": `<el-time-select v-model="$1" placeholder="$2">$3</el-time-select>`,
"el-time-picker": `<el-time-picker v-model="$1" placeholder="$2">$3</el-time-picker>`,
"el-date-picker": `<el-date-picker v-model="$1" placeholder="$2">$3</el-date-picker>`,
"el-upload": `<el-upload action="$1">
${tabSize}<el-button type="$2">$3</el-button>
</el-upload>`,
"el-rate": `<el-rate v-model="$1">$2</el-rate>`,
"el-color-picker": `<el-color-picker v-model="$1">$2</el-color-picker>`,
"el-transfer": `<el-transfer v-model="$1" :data="$2">$3</el-transfer>`,
"el-form": `<el-form :model="$1">
${tabSize}<el-form-item label="$2">$3</el-form-item>$4
</el-form>`,
"el-form-item": `<el-form-item label="$1">$2</el-form-item>`,
"el-table": `<el-table :data="$1">
${tabSize}<el-table-column label="$2">$3</el-table-column>$4
</el-table>`,
"el-table-column": `<el-table-column label="$1">$2</el-table-column>`,
"el-tag": `<el-tag type="$1">$2</el-tag>`,
"el-progress": `<el-progress percentage="$1">$2</el-progress>`,
"el-tree": `<el-tree :data="$1">$2</el-tree>`,
"el-pagination": `<el-pagination :total="$1" :current-page="$2" :page-size="$3" @current-change="$4" layout="$5">$6</el-pagination>`,
"el-badge": `<el-badge value="$1">$2</el-badge>`,
"el-alert": `<el-alert type="$1" title="$2">$3</el-alert>`,
"el-menu": `<el-menu default-active="$1">
${tabSize}<el-submenu index="$2">
${tabSize}${tabSize}<el-menu-item index="$3">$4</el-menu-item>
${tabSize}</el-submenu>
${tabSize}<el-menu-item index="$5">$6</el-menu-item>$7
</el-menu>`,
"el-submenu": `<el-submenu index="$1">
${tabSize}<el-menu-item index="$2">$3</el-menu-item>$4
</el-submenu>`,
"el-menu-item-group": `<el-menu-item-group>
${tabSize}<el-menu-item index="$1">$2</el-menu-item>$3
</el-menu-item-group>`,
"el-menu-item": `<el-menu-item index=""></el-menu-item>`,
"el-tabs": `<el-tabs>
${tabSize}<el-tab-pane>$1</el-tab-pane>$2
</el-tabs>`,
"el-tab-pane": `<el-tab-pane>$1</el-tab-pane>`,
"el-breadcrumb": `<el-breadcrumb separator="$1">
${tabSize}<el-breadcrumb-item>$2</el-breadcrumb-item>$3
</el-breadcrumb>`,
"el-breadcrumb-item":`<el-breadcrumb-item></el-breadcrumb-item>`,
"el-dropdown": `<el-dropdown>
${tabSize}<el-dropdown-menu>$1</el-dropdown-menu>$2
</el-dropdown>`,
"el-dropdown-menu": `<el-dropdown-menu></el-dropdown-menu>`,
"el-steps": `<el-steps :space="$1" :active="$2">
${tabSize}<el-step title="$3">$4</el-step>$5
</el-steps>`,
"el-step": `<el-step title="$1">$2</el-step>`,
"el-dialog": `<el-dialog title="$1">$2</el-dialog>`,
"el-tooltip": `<el-tooltip content="$1" placement="$2">$3</el-tooltip>`,
"el-popover": `<el-popover placement="$1">$2</el-popover>`,
"el-card": `<el-card>$1</el-card>`,
"el-carousel": `<el-carousel>
${tabSize}<el-carousel-item>$1</el-carousel-item>
</el-carousel>`,
"el-carousel-item": `<el-carousel-item>$1</el-carousel-item>`,
"el-collapse": `<el-collapse>
${tabSize}<el-collapse-item name="$1" title="$2">$3</el-collapse-item>$4
</el-collapse>`,
"el-collapse-item": `<el-collapse-item name="$1" title="$2">$3</el-collapse-item>`,
"el-timeline": `<el-timeline>$1</el-timeline>`,
"el-timeline-item": `<el-timeline-item>$1</el-timeline-item>`,
"el-divider": `<el-divider>$1</el-divider>`,
"el-calendar": `<el-calendar>$1</el-calendar>`,
"el-image": `<el-image>$1</el-image>`,
"el-backtop": `<el-backtop>$1</el-backtop>`,
"el-drawer": `<el-drawer>$1</el-drawer>`
  }
}
<template>
    <label
        class="ly-radio--info"
        :class="[
        { 'is-disabled': disabled },
        { 'is-checked': model == label }
    ]"
        role="radio"
        :aria-checked="model == label"
        :aria-disabled="disabled"
        @keydown.space.stop.prevent="model = disabled ? model : label"
    >
        <span class="ly-radio--like-input">
          <span class="ly-radio--label" :class="{
            'is-disabled': disabled,
            'is-checked': model == label
          }"></span>
          <input
              ref="radio"
              class="ly-radio--input"
              :value="label"
              type="radio"
              aria-hidden="true"
              v-model="model"
              @change="handleChange"
              :name="name"
              :disabled="disabled"
          >
        </span>
        <span class="ly-radio--span" :class="{
            'is-disabled--span': disabled,
            'is-checked--span': model == label
          }" @keydown.stop>
          <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
    import Dispatch from '../../../unit/dispatch';

    export default {
        name: 'ly-radio',
        mixins: [Dispatch],

        props: {
            value: {},
            label: {},
            disabled: Boolean,
            name: String,
            size: String
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                    this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
                }
            },

        },

        methods: {
            handleChange() {
                this.$nextTick(() => {
                    this.$emit('change', this.model);
                });
            }
        }
    };
</script>
<style scoped lang="scss">
    @import "index.scss";
</style>

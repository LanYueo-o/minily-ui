<template>
    <div class="ly-time-picker">
        <ly-select :placeholder="placeholder" :disabled="disabled" :clearable="clearable">
            <ly-option
                v-for="(item,index) in options"
                :key="index"
                :label="item.label"
                :value="item.value"
            ></ly-option>
        </ly-select>
    </div>
</template>

<script>
    import LySelect from '../select/select'
    import LyOption from '../select/option'
    export default {
        name: "ly-time-picker",
        components:{
            LySelect,
            LyOption
        },
        props:{
            value: String,
            pickerOptions: {
                type: Object,
                default : ()=> {}
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: String,
            clearable: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                options: []
            }
        },
        created() {
            if(JSON.stringify(this.pickerOptions) !== undefined) this.initDate();
        },
        methods:{
            initDate(){
                let start = this.pickerOptions.start;
                let step = this.pickerOptions.step;
                let end = this.pickerOptions.end;

                let _s = Number(start.split(':')[0]);
                let _t = Number(step);
                if(_t !== 10 && _t !== 20 && _t !== 30){
                    _t = 10;
                }
                let _e = Number(end.split(':')[0]);

                let _i = 1;
                let _ys = 60 / _t;

                let label,value;

                for(_s;_s < _e;_s++){

                    // _i++;

                    if(_i * _t < 60){
                        value = _s;
                        label =  _i * _t < 10 ? `0${ _i * _t }` : `${ _i * _t }`;

                        for(let i = 1;i <= _ys;i++){

                            let _label;
                            if(i * label >= 60){
                                _label = '00';
                                value++
                            }else {
                                _label = i * label;
                            }

                            let param_data = {
                                label: value < 10 ? `0${ value }:${ _label }` : `${ value }:${ _label }`,
                                value: value < 10 ? `0${ value }:${ _label }` : `${ value }:${ _label }`
                            }
                            this.options.push(param_data)
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "index";
</style>

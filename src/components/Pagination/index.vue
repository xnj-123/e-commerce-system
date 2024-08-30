<template>
    <div class="pagination">
        <button :disabled="pageNo==1" @click="pageChange(pageNo-1)">上一页</button>
        <button v-if="startNumAndendNum.start >= 2" @click="pageChange(1)" :class="{active:pageNo==1}">1</button>
        <button v-if="startNumAndendNum.start > 2">···</button>

        <button v-for="(num, index) in startNumAndendNum.end" v-if="num >= startNumAndendNum.start" @click="pageChange(num)" :class="{active:pageNo==num}">{{ num }}</button>

        <button v-if="startNumAndendNum.end < totalpage - 1">···</button>

        <button v-if="startNumAndendNum.end < totalpage"  @click="pageChange(totalpage)" :class="{active:pageNo==totalpage}">{{ totalpage }}</button>

        <button :disabled="pageNo==totalpage" @click="pageChange(pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共{{ total }}条</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ['pageNo', 'pageSize', 'total', 'continus'],
    computed: {
        totalpage() {
            return Math.ceil(this.total / this.pageSize);
        },
        startNumAndendNum() {
            const { pageNo, continus, totalpage } = this;
            let start = 0, end = 0;
            if (continus > totalpage) {
                start = 1;
                end = totalpage;
            } else {
                start = pageNo - parseInt(continus / 2);
                end = pageNo + parseInt(continus / 2);
                if (start < 1) {
                    start = 1;
                    end = continus;
                } else if (end > totalpage) {
                    end = totalpage;
                    start = totalpage - continus + 1;
                }
            }
            return { start, end };
        }
    },
    methods:{
        pageChange(pageNo){
            this.$emit('changePage',pageNo);
        }
    }
    
}
</script>

<style lang="less" scoped>
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>
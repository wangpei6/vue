<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2019-10-02 17:25 </div>
                    <div class="cmt-body">
                        锄禾日当午
                    </div>
                
            </div>
             <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2019-10-02 17:25 </div>
                    <div class="cmt-body">
                        锄禾日当午
                    </div>
                
            </div>
             <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户：匿名用户 发表时间：2019-10-02 17:25 </div>
                    <div class="cmt-body">
                        锄禾日当午
                    </div>
                
            </div>
        </div>
         <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            comment:[],
            pageIndex:1
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){
            this.$http.get('api/getcomments/'+this.id+'?pageIndex='+this.pageIndex).then(result=>{
                if(result.body.status==0){
                    this.comment = result.body.message
                }else{
                    Toast("评论获取失败!")
                }
            })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 18px;
}
textarea{
    margin: 0;
}
.cmt-list{
    margin: 5px 0;
    .cmt-title{
        display: flex;font-size: 12px;
        justify-content: space-between;
        line-height: 30px;
        background-color: cadetblue;
    }
    .cmt-body{
        text-indent: 2em;
        line-height: 35px;
        font-size: 13px;
    }
}
</style>
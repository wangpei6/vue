<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | dateFormat}}</span>
                                <span>点击:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newslist:[]

        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status ==0){
                    this.newslist = result.body.message;
                }else{
                    Toast("新闻列表请求失败!!!")
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.mui-table-view{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        color: mediumblue;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
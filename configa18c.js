var config={
	//下载地址
	"down_url":"",
	//首页地址
	"home_url":"",
	//代理连接
	"agent_url":"",
	//客服连接
	"kefu_url":"",
};
$(function(){
	$(".down_url").attr("href",config.down_url);
	$(".home_url").attr("href",config.home_url);
	$(".agent_url").attr("href",config.agent_url);
	$(".kefu_url").attr("href",config.kefu_url);
});
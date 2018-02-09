<template>
<div class='left-tab'>
<div class="main_left" id="leftmenu-container">
        <div class="simplesidenav-nav simplesidenav-nav-close" id="js-size-left-nav">
            <div class="simplesidenav-nav-normal">
                <div class="simplesidenav-nav-links">
                    <a href="http://longzhu.com/channels/all" class="simplesidenav-nav-link">
                        <i class="simplesidenav-nav-links-live">
                        </i>
                        全部直播
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a href="http://longzhu.com/channels" class="simplesidenav-nav-link">
                        <i class="simplesidenav-nav-links-type">
                        </i>
                        全部分类
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a href="javascript:;" class="simplesidenav-nav-link simplesidenav-nav-myfeed" x-action="dingyue">
                        <i class="simplesidenav-nav-links-feed">
                        </i>
                        我的关注
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                     <a href="http://yoyo.longzhu.com" class="simplesidenav-nav-link simplesidenav-nav-show">
                        <i class="simplesidenav-nav-links-show">
                        </i>
                        龙珠秀场
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                    <a href="http://longzhu.com/topic/ranking?from=left" class="simplesidenav-nav-link simplesidenav-nav-rank">
                        <i class="simplesidenav-nav-links-rank ">
                        </i>
                        排行榜
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                    <a href="http://family.longzhu.com/" class="simplesidenav-nav-link simplesidenav-nav-guild">
                        <i class="simplesidenav-nav-links-guild">
                        </i>
                        公会
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                </div>
                <div class="simplesidenav-nav-tabs">
                    <a href="javascript:;" class="simplesidenav-nav-tab simplesidenav-nav-info simplesidenav-nav-tab-sel" data-tab="programa">
                        栏目
                    </a>
                    <a href="javascript:;" class="simplesidenav-nav-tab simplesidenav-nav-info" data-tab="recommend">
                        推荐
                    </a>
                </div>
                <div class="simplesidenav-recruit">
                    <a href="javascript:;" class="simplesidenav-nav-con-link" x-action="zhibo">
                        <i class="simplesidenav-nav-con-link-icon simplesidenav-nav-con-link-icon-live">
                        </i>
                        我要直播
                    </a>
                    <div class="simplesidenav-nav-help-center">
                        <a href="http://support.qq.com/discuss/1006_1.shtml" target="_blank" style="display: none">
                            用户反馈
                        </a>
                        <a href="http://longzhu.com/faq?from=left" target="_blank">
                            用户帮助
                        </a>
                        <a href="javascript:;" x-action="kefu" id="js-online-service">
                            在线客服
                        </a>
                    </div>
                </div>

                <div class="simplesidenav-nav-cons">
                    <div class="simplesidenav-nav-cons-scroll scroll" id="simplesidenav-nav-cons-scroll">
                        <div class="simplesidenav-nav-cons-scroll-container" id="simplesidenav-nav-cons-scroll-container">
                            <div class="simplesidenav-nav-con simplesidenav-nav-con-sel" style="display: block;" data-content="programa" id="js-left-menu-channel">
                            </div>
                            <div class="simplesidenav-nav-con simplesidenav-nav-con-feeds" style="display: block;" data-content="recommend">
                                <div class="simplesidenav-nav-con-myloves">
                                    <h2 class="simplesidenav-nav-con-myloves-title">
                                        <i class="simplesidenav-nav-con-myloves-icon">
                                        </i>
                                        我爱看的
                                    </h2>
                                    <ul class="simplesidenav-nav-pops" id="js-left-menu-mylike">
                                    </ul>

                                    <div class="simplesidenav-nav-con-line">
                                    </div>
                                </div>
                                <div class="simplesidenav-nav-con-populars">
                                    <h2 class="simplesidenav-nav-con-myloves-title">
                                        <i class="simplesidenav-nav-con-myloves-icon">
                                        </i>
                                        大家都爱看
                                    </h2>
                                    <ul class="simplesidenav-nav-pops" id="js-left-menu-alllike">
                                    </ul>

                                    <div class="simplesidenav-nav-con-line">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplesidenav-nav-cons-scroll-bar scroll-bar" id="simplesidenav-nav-cons-scroll-bar">
                        <div class="simplesidenav-nav-cons-scroll-thumb scroll-thumb" id="simplesidenav-nav-cons-scroll-thumb">
                        </div>
                    </div>
                </div>
            </div>
            <div class="simplesidenav-nav-small" >
                <div class="simplesidenav-nav-con" >
                    <a class="simplesidenav-nav-con-tab simplesidenav-nav-con-tab-feedback" style="display: none"
                        target="_blank" href="/help/kefuzhongxin" >
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-feedback">
                        </i>
                        反馈
                    </a>
                    <a class="simplesidenav-nav-con-tab simplesidenav-nav-con-tab-help" target="_blank"
                        href="/help/usersguan" style="display: none">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-help">
                        </i>
                        帮助
                    </a>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/topic/ranking?from=left" target="_blank">
                     <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-ranking"></i>排行榜
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                    <a class="simplesidenav-nav-con-tab" href="http://family.longzhu.com/" target="_blank">
                     <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-guild"></i>公会
                    </a>
                    <div class="simplesidenav-nav-con-line"></div>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/channels/hot?from=left" target="_blank">
                     <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-hot"></i>热播
                    </a>
                     <div class="simplesidenav-nav-con-line"></div>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/channels?from=left">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-games">
                        </i>
                        游戏
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/channels/belle?from=left">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-show">
                        </i>
                        女神
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/channels/hwzb?from=left">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-outdoor">
                        </i>
                        随拍
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a class="simplesidenav-nav-con-tab" href="http://yoyo.longzhu.com/?from=left">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-dialect">
                        </i>
                        秀场
                    </a>
                    <div class="simplesidenav-nav-con-line">
                    </div>
                    <a class="simplesidenav-nav-con-tab" target="_blank" href="http://music.longzhu.com/?from=left">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-music">
                        </i>
                        音乐
                    </a>
                    <div class="simplesidenav-nav-con-line" style="display: none"></div>
                    <a class="simplesidenav-nav-con-tab" href="http://longzhu.com/channels/lzyl" style="display: none">
                        <i class="simplesidenav-nav-con-tab-icon simplesidenav-nav-con-tab-icon-play">
                        </i>
                        娱乐
                    </a>
                    <div class="simplesidenav-nav-con-line"  style="display: none">
                    </div>
                </div>
            </div>
            <a class="simplesidenav-nav-btn" id="simplesidenav-nav-btn" href="javascript:;">
                <i class="simplesidenav-nav-btn-arrow">
                </i>
            </a>
        </div>
</div>
<div class="tencent-popup">
    <div class="tencent-popup-warp">
        <div>
            <div class="tencent-popup-close"></div>
            <div class="tencent-popup-qr1">
                <div class="tencent-popup-qr1-img"></div>
                <div class="tencent-popup-qr1-text">
                    <span></span>微信客服号
                </div>
            </div>
        <div class="tencent-popup-qr2">
            <div class="tencent-popup-qr2-img"></div>
            <div class="tencent-popup-qr2-text">
                <span></span>QQ客服号
            </div>
        </div>
            <div class="tencent-popup-footer">
                <div class="tencent-popup-footer-img"></div>
                <div class="tencent-popup-footer-text">
                    <div>
                        手机一扫<span>啥都有！</span>
                    </div>
                    <div>
                        <span>客服小龙</span>在这里等你哦！
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>
<style>
  .left-tab{height: 100%;}
  .leftTab{float: left;width:80px;height: 100%;background: #000000;color: #ffffff}
  .left-nav,.left-nav ul{width: 100%}
  .left-nav ul li{width: 100%;height: 80px;line-height: 80px;text-align: center}
</style>

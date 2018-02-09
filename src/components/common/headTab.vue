<template>
  
<div id="js-size-header" class="topbar">
    <div class="topbar-inner">
        <div class="topbar-left">
             <div class="topbar-logo">
                  <a class="topbar-logo-link" href="http://longzhu.com/?from=rmlogo">
                        <img class="topbar-logo-image topbar-longzhu-logo-image async-image" src="http://r.plures.net/plu/images/small-longzhu-logo.png" width="93" height="32" />
                  </a>
             </div>
             <div class="topbar-nav">
                    <a class="topbar-nav-text" href="http://longzhu.com/?from=rmindex">首页 </a>
             </div>
             <div class="topbar-nav">
                    <a class="topbar-nav-text" href="http://longzhu.com/channels/all?from=rmlive">直播</a>
             </div>
             <div id="topbar-game-menu" class="topbar-menus topbar-menu">
                    <a href="http://longzhu.com/games/?from=topbarallgames" class="topbar-menu-text">分类<i class="topbar-menu-arrow"></i></a>
                    <div   class="topbar-menucard">
                      <div class="topbar-menucard-content" style="overflow: visible; display: block;">
                          <div class="topbar-pane-header">热门游戏</div>
                          <div class="topbar-pane-list">
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/wzry?from=rmgame">王者荣耀</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/hwzb?from=rmgame">美女</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/lol?from=rmgame">英雄联盟</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/cf?from=rmgame">穿越火线</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/dnf?from=rmgame">地下城与勇士</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/nz?from=rmgame">逆战</a>
                              <div class="clear"></div>
                          </div>
                          <div class="topbar-pane-divider"></div>
                          <div class="topbar-pane-header">玩家关注</div>
                          <div class="topbar-pane-list">
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/ow?from=rmgame">守望先锋</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/qqdzz?from=rmgame">球球大作战</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/hwzb?from=rmgame">随拍美女</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/wzry?from=rmgame">王者荣耀</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/nba2k?from=rmgame">NBA2KOL</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/cos?from=rmgame">英魂之刃</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/speed?from=rmgame">QQ飞车</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/mgames?from=rmgame">手机游戏</a>
                              <a class="topbar-pane-listitem" href="http://longzhu.com/channels/djzjjj?from=rmgame">单机&amp;主机</a>
                              <div class="clear"></div>
                          </div>
                          <div class="clear"></div>
                          <a class="topbar-pane-button" href="http://longzhu.com/games/?from=rmallgames">全部分类</a>
                      </div>
                    </div>
             </div>
             <div class="topbar-nav">
                    <a class="topbar-nav-text topbar-nav-text-hover" id="js-beaury-url" data-href="http://yoyo.longzhu.com/?from=rmyoyo">美女</a>
             </div>
             <div class="topbar-nav">
                <a class="topbar-nav-text topbar-nav-shop-hover" href="http://sports.longzhu.com/?from=rmsport" target="_blank">体育</a> 
              </div>
 
             <div class="topbar-nav">
                    <a class="topbar-nav-text topbar-nav-shop-hover" href="http://longzhu.com/mall/vip/?from=rmshop" target="_blank">商城</a>
             </div>
        </div>
        <ul class="topbar-right clearfix">
            <li id="topbar-feed-menu" class="topbar-feed" style="display: none">
                <a href="javascript:;" class="topbar-r-sub">
                    <i class="ico-head ico-feed"></i>
                    <span>关注</span>
                    <i class="ico-dot"></i>
                </a>
                <i class="topbar-line"></i>
                <div class="topbar-history-menucard">
                  <i class="topbar-userinfo-arrow"></i>
                  <div class="topbar-menucard-content">
                    <div id="follow-nodata" style="display: none">
                         <div class="topbar-history-empty">目前您还没有关注的主播~</div>
                          <div class="topbar-feed-bottom">
                            <a href="http://longzhu.com/channels/all?from=topbarfeedempty" class="topbar-feed-bottom-link" target="_blank">去随便逛逛</a>
                          </div>
                    </div>
                    <div  id="follow-has" style="display: none;background:#fff;">
                    </div>  
                  </div>
                </div>           
            </li>
            <li class="topbar-history">
                <a href="javascript:;" class="topbar-r-sub" id="js-history-btn">
                    <i class="ico-head ico-history"></i>
                    <span>历史</span>
                </a>
                <i class="topbar-line"></i>
                <div class="topbar-history-menucard" id="js-topbar-history">
                    <i class="topbar-userinfo-arrow"></i>
                    <div class="topbar-menucard-content" style="overflow: visible;">
                      <div class="js-history-null" style="display: none">
                           <div class="topbar-history-empty">还没有任何观看记录~</div>
                            <div class="topbar-feed-bottom">
                              <a href="http://longzhu.com/channels/all?from=undefinedhistoryempty" class="topbar-feed-bottom-link" target="_blank">去随便逛逛</a>
                            </div>
                      </div>
                      <div class="js-history-list" style="display: none">
                       
                      </div>
                  
                  </div>
                </div>
            </li>
            <li id="topbar-download" class="topbar-download">
                <a href="javascript:;" class="topbar-r-sub">
                    <i class="ico-head ico-down"></i>
                    <span>下载</span>
                </a>
                <i class="topbar-line"></i>        
                <div class="topbar-menucard-app">
                  <i class="topbar-userinfo-arrow"></i>
                  <div class="topbar-menucard-content" style="overflow: hidden;">
                    <div class="topbar-download-content">
                      <a href="http://longzhu.com/app/download?from=rmappdownload" target="_blank">APP下载</a>
                      <a href="http://longzhu.com/haibo?from=rmappdownload" target="_blank">直播工具下载</a>
                    </div>
                  </div>
                </div>
            </li>
            <li id="js-header-login" class="topbar-login">
                <!--未登录-->
                <div id="js-unlogin-panel " class="topbar-qq-icon js-unlogin-panel" style="display: block">
                    <span class="js-login-btn">登录</span>｜<span class="js-login-btn">注册</span>
                </div>
                <!--登录-->
                <div id="topbar-user-menu" class="topbar-user-menu topbar-menu js-login-panel" style="display: none">
                    <div class="topbar-menu-text">
                        <i class="user-lv" style="margin-top:3px;"><img  class="js-user-level"></i>
                        <a href="http://longzhu.com/mall/vip" target="_blank">
                            <i class="user-vip-lvl user-vip-lvl-0 js-user-vip"></i>
                        </a>
                        <a href="http://i.longzhu.com/?from=rmusername" target="_blank">
                            <span class="topbar-username js-user-alias"></span>
                            <i class="topbar-menu-arrow"></i>
                      
                        </a>
                        <div class="topbar-user-menucard top-new-menucard">
                            <i class="topbar-userinfo-arrow"></i>
                            <div class="topbar-menucard-content">
                                <div class="topbar-usercard">
                                    <a href="http://i.longzhu.com?from=fiusercenter " class="topbar-usercenter-nav" target="_blank" >个人中心</a>
                                    <img class="topbar-useravatar js-user-avatar" width="50" height="50">
                                    <i class="user-lv"><img  class="js-user-level" ></i>
                                    <div class="usercard-exp-bar">
                                        <i class="topbar-userexp js-user-exp-bar" style="width: 0px"></i>
                                    </div>
                                    <a class="topbar-userhelp" href="http://longzhu.com/faq?from=fifaq" title="什么是等级?" target="_blank">?</a>
                                    <a href="http://longzhu.com/mall/vip" target="_blank"><i class="user-vip-lvl user-vip-lvl-0 js-user-vip"></i></a>
                                    <div class="topbar-userexp-detail">
                                        您距下一级还差<span class="topbar-userexp-num js-user-exp-diff">0</span>经验值   
                                    </div>
                                    <div class="topbar-user-"></div>
                                    <div class="topbar-user-information">
                                      <div class="topbar-user-top">
                                          <div class="usercard-group">
                                              <span class="usercard-label">龙币:</span>
                                              <span class="usercard-text usercard-yc js-tools-coin">0</span>
                                          </div>
                                          <div class="usercard-group">
                                              <span class="usercard-label">龙豆:</span>
                                              <span class="usercard-text usercard-bc  js-tools-bean">0</span>
                                          </div>                                        
                                        </div>                                      
                                        <div class="beans">
                                           <div class="usercard-group">
                                              <span class="usercard-label">仙豆:</span>
                                              <span class="usercard-text usercard-yc js-fairy-bean">0</span>
                                          </div> 
                                        </div>
                                        <span class="topchange">
                                          <a class="usercard-recharge" href="http://i.longzhu.com/RechargeYuanBao?from=rmcharge" target="_blank">充值</a>
                                          <a class="usercard-recharge js-bean-exchange">兑换</a>
                                        </span>
                                    </div>
                                    <div class="topbar-user-footer">
                                        <a class="topbar-usercenter-link" href="http://longzhu.com/recruit/my?from=fimyroom" target="_blank" >我的房间
                                        </a>
                                        <a class="topbar-mail" href="http://i.longzhu.com/MyMail" target="_blank">站内信</a>
                                        <span class="mystery js-hide-btn" style="display: none;"><b class="mystery-open js-hide-icon"></b><i>隐身模式</i></span>
                                        <div  class="topbar-logout-button js-logout-btn">退出</div>
                                    </div>
                                </div>
                            </div>
                            <div class="topbar-usercard-arrow"></div>
                        </div>
                        
                    </div>
                </div>
            
          </li>
        </ul>
        <div class="topbar-center">
            <div class="topbar-sub-nav">
                <!-- <div class="topbar-divider">|</div>
                <div class="topbar-nav topbar-subnav">
                    <a href="http://music.longzhu.com/?from=rmmusic" target="_blank" class="topbar-nav-text">音乐</a>
                </div>
                <div class="topbar-nav topbar-subnav">
                    <a href="http://v.longzhu.com/?from=rmvideo" target="_blank" class="topbar-nav-text">视频</a>
                </div>
                <div class="topbar-nav topbar-subnav">
                    <a href="http://g.longzhu.com/?from=rmyeyou" target="_blank" class="topbar-nav-text">页游</a>
                </div> -->
            </div>
            <div  id="js-n-i-search">
           <form class="topbar-search" id="searchForm" action="http://longzhu.com/search">
                <div id="topbar-searchbox" class="topbar-searchbox topbar-box">
                     <input id="js-search-txt" name="q" class="topbar-search-input label-input-label" label="搜房间/主播" autocomplete="off" placeholder="搜房间/主播" aria-label="搜房间/主播" />
                     <input class="topbar-search-button" type="submit" value="" onclick="return searchSubmit();"/>
           
                </div>
           </form>
              
         </div>

 

         <div id="topbar-subnavs" style="display: none"></div>
        </div>
    </div>
     <i class="topbar-border"></i>
     <i class="topbar-background"></i>
</div>


</template>
<style>
  .tabs{
    height: 40px;background: #000000;color: #ffffff;
  }
  .tabs .row{
    text-align: center;line-height: 40px;
  }
  .tabs .row div{
    cursor: pointer;
  }
</style>

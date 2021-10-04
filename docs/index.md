---
home: true
heroImage: https://image.gaoajia.com/2021/10/04/4dff1f5801bba.png
heroText: GiWiFi使用文档
tagline: 🚀一个非官方GWiFi校园网使用帮助文档
actionText: 快速开始 →
actionLink: /pages/52d5c3/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 洛理专属
    details: 本文档适合洛理学子参阅，内容仅针对使用校园网过程中出现的各种问题，给予相应的处理方式
  - title: 站长寄语
    details: 站长缺乏艺术细胞，所以这里没有华丽的词藻，只愿用拙劣的文笔，撰写内心最真诚的想法和建议
  - title: 沉浸阅读
    details: 专为阅读设计的UI，配合多种颜色模式、可关闭的侧边栏和导航栏，带给你一种沉浸式阅读体验

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

## 



## :email:联系小编<Badge text="功能性建议 or 致命性错误" type="warning"/>

- WeChat or QQ: <a :href="qqUrl" class='qq'>AjiaErin</a>
- Email:  <a href="mailto:icpove@gmail.com">icpove@gmail.com</a>
- Telegram：<a href="https://t.me/AjiaErin/">icpove</a>



## 📝许可证
[MIT](https://github.com/gaoajia/GiWiFi-Wiki/blob/master/LICENSE)

Copyright (c) 2021 AjiaErin


<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=2949970175&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=2949970175&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'icpove.me' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:gaoajia/GiWiFi-Wiki.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://gaoajia:${GITHUB_TOKEN}@github.com/gaoajia/GiWiFi-Wiki.git
  git config --global user.name "gaoajia"
  git config --global user.email "gaoajia@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
echo 'giwifi.iluoli.ren' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
   codingUrl=git@e.coding.net:cloudbase-100012776940/giwifi-wiki/GiWiFi-Wiki.git
else
   codingUrl=https://cloudbase-100012776940:${CODING_TOKEN}@e.coding.net/cloudbase-100012776940/giwifi-wiki/GiWiFi-Wiki.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist
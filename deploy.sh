rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:fjliang56/HZW-UI-website.git &&
git push -f -u origin master &&
cd -
echo https://fjliang56.github.io/HZW-UI-website/index.html#/ 
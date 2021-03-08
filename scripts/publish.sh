#!/usr/bin/env sh

REPO_URL=`git remote get-url origin`

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd site/.vuepress/dist

# Configure Github Pages
echo "autonomous-data.noeldemartin.com" > CNAME
touch .nojekyll

# create repository
git init
git add -A
git commit -m 'deploy'

# push updates
git push $REPO_URL master:gh-pages --force

cd -

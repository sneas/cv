#!/bin/sh

echo "GH_NAME $GH_NAME"
echo "GH_EMAIL $GH_EMAIL"

git --version

[ ! -z "$GH_NAME" ] && git config --global user.name $GH_NAME
[ ! -z "$GH_EMAIL" ] && git config --global user.email $GH_EMAIL

npm run gh

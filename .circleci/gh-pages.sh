#!/bin/sh

[ ! -z "$GH_NAME" ] && git config user.email $GH_NAME
[ ! -z "$GH_EMAIL" ] && git config user.email $GH_EMAIL

npm run gh

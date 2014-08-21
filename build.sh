#!/bin/sh
mkdir -p build/web
cp -R web/* build/web
cd build/web
npm install
echo TARGET:build/web

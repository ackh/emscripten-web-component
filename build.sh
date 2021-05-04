#!/bin/bash

target_folder=bin/

mkdir -p $target_folder

export EMCC_CLOSURE_ARGS="--externs color-triangle-externs.js"

emcc \
ColorTriangle.cpp \
-I./ \
-std=c++17 \
-s TOTAL_MEMORY=16MB \
-s ALLOW_MEMORY_GROWTH=1 \
-s WASM=1 \
-s MODULARIZE=1 \
-s EXPORT_NAME=createModule \
-v \
--bind \
--closure 1 \
--extern-post-js color-triangle-post.js \
-O3 \
-o ${target_folder}color-triangle.js

cp color-triangle.html $target_folder/index.html

#!/usr/bin/env bash

find ./lib -name *.d.ts -exec rm {} \;
npx tsc
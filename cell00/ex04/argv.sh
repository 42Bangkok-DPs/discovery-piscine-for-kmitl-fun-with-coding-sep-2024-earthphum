#!/bin/bash

# Check if arguments are passed
if [ $# -eq 0 ]; then
  echo "No arguments provided."
else
  # Display up to 3 arguments on separate lines, ignore the rest
  [ -n "$1" ] && echo "$1"
  [ -n "$2" ] && echo "$2"
  [ -n "$3" ] && echo "$3"
fi


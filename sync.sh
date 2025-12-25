#!/bin/bash
while true; do
  # Check if there are any changes
  if [[ -n $(git status -s) ]]; then
    echo "Change detected! Syncing to GitHub..."
    git add .
    git commit -m "Auto-sync: $(date)"
    git push
    echo "Done. Waiting for next change..."
  fi
  sleep 30  # Checks for changes every 30 seconds
done


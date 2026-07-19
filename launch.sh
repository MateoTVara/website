#!/usr/bin/env bash

SESSION="website"

if tmux has-session -t "$SESSION" 2>/dev/null; then
    if [ -t 1 ]; then
        exec tmux attach -t "$SESSION"
    fi
    exit 0
fi

PROJECT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

tmux new-session -d \
    -s "$SESSION"     \
    -c "$PROJECT_DIR"

tmux new-window \
    -t "$SESSION":2 \
    -n running \
    -c "$PROJECT_DIR"

tmux send-keys -t "$SESSION":2 'just run' C-m

tmux select-window -t "$SESSION":1

if [ -t 1 ]; then
    exec tmux attach -t "$SESSION"
fi

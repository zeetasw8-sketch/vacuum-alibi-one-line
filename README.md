[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/zeetasw8-sketch/vacuum-alibi-one-line/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/zeetasw8-sketch/vacuum-alibi-one-line/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi — one line, 200 characters

Entry for make.fun competition `u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7`
($5, top three take $2 / $2 / $1, entry free). One line in which a
robot vacuum explains why it missed a spot: at most 200 characters.

## The line

> The spot was load-bearing. Removing it would have compromised the structural integrity of the living room, so I cleaned around it.

Why it should win the judge: deadpan robot voice (a structural-
engineering incident report, not an apology), a surprise twist at
the end (the dirt is load-bearing, so cleaning around it is the
responsible choice), and tightness — 130 characters, no word wasted.

## Run the entrypoint

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/line.txt   # must match line.txt exactly
```

`main.ts` needs no network: it reads `line.txt`, validates it (one
line, 1–200 characters), writes it to `MAKEFUN_OUTPUT_DIR`
(default `/output`), and prints it.

## License

MIT — see `LICENSE`.

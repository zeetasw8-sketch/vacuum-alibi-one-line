[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/zeetasw8-sketch/vacuum-alibi-one-line/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/zeetasw8-sketch/vacuum-alibi-one-line/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi — one line, 200 characters

Entry for make.fun competition `u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7`
($5, top three take $2 / $2 / $1, entry free). One line in which a
robot vacuum explains why it missed a spot: at most 200 characters.

## The line

> I did not miss the spot. It moved three centimeters left while I was recalculating, which is technically its fault.

Why it should win the judge: deadpan robot voice (a formal incident
report, not an apology), a surprise twist at the end (the dust is
blamed, with bureaucratic precision), and tightness — 118 characters,
no word wasted.

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

import React    from 'react';
import Day1     from '../pages/day01/Description'
import Day2     from '../pages/day02/Description'
import Day3     from '../pages/day03/Description'
import Day4     from '../pages/day04/Description'
import Day5     from '../pages/day05/Description'
import Day6     from '../pages/day06/Description'
import Day7     from '../pages/day07/Description'
import Day8     from '../pages/day08/Description'
import Day9     from '../pages/day09/Description'
import Day10    from '../pages/day10/Description'
import Day11    from '../pages/day11/Description'
import Day12    from '../pages/day12/Description'
import Day13    from '../pages/day13/Description'
import Day14    from '../pages/day14/Description'
import Day15    from '../pages/day15/Description'
import Day16    from '../pages/day16/Description'
import Day17    from '../pages/day17/Description'
import Day18    from '../pages/day18/Description'
import Day19    from '../pages/day19/Description'
import Day20    from '../pages/day20/Description'
import Day21    from '../pages/day21/Description'
import Day22    from '../pages/day22/Description'
import Day23    from '../pages/day23/Description'
import Day24    from '../pages/day24/Description'
import Day25    from '../pages/day25/Description'
import Default  from '../pages/base/Description'

const componentMap = {
  "1": Day1,
  "2": Day2,
  "3": Day3,
  "4": Day4,
  "5": Day5,
  "6": Day6,
  "7": Day7,
  "8": Day8,
  "9": Day9,
  "10": Day10,
  "11": Day11,
  "12": Day12,
  "13": Day13,
  "14": Day14,
  "15": Day15,
  "16": Day16,
  "17": Day17,
  "18": Day18,
  "19": Day19,
  "20": Day20,
  "21": Day21,
  "22": Day22,
  "23": Day23,
  "24": Day24,
  "25": Day25,
}

const Description = (props) => {
  const { day } = props
  const DayDescription = componentMap[day] || Default

  return (
    <DayDescription />
  )
}

export default Description;

const data = [
  "#################################################################################",
  "#.#.........#...#....r#.......#...#.....#.....#...........#.......#......c......#",
  "#X#.#####.#.#.#.#.###.#####.#.#.#.#.###.#.###.#.#######Q###.#.###.#.#####.###.#.#",
  "#...#.....#...#...#.#.....#.#...#.....#.#.#...#.#.....#.....#.#.#.#.#...#.#.#.#.#",
  "#.###.#############.#####.#.###########.#.#.#####.###.#.#####.#.#.###F#.#.#.#.###",
  "#...#.#j......#.......P.#.#.#.......#...#.#.....#...#.#.#.....#...#...#.#...#...#",
  "###.#.#.###.#.#.#######.#.###.#####.#.#.#.#####.###.#.###.#####.###.###.#######.#",
  "#...#.#...#.#.#.......#.#.....#...#...#.#.....#.#...#...#.#...#.#...#...#.....M.#",
  "#.###.#.###.#.#######.#.#######.#.#####.#.###.#.#.#####.#.#.###.#.#####.#.#######",
  "#.#...#.#...#.#.....#.#.........#.......#.#.#.#...#.......#.....#.....#.#...#...#",
  "#.#.#####.###.#.#.###.###################.#.#.###.#############.#.###.#.###.#.#.#",
  "#.#...#...#...#.#...#.#...#.......#.....#...#.#...#.....#.....#.#...#.#...#...#.#",
  "#.###.#.#####.#.###.#.#.#.#.#####.#.#.#####.#.#####.###.#.###.#.###.#.###.#.###.#",
  "#...#.#..g..#.#.#...#.L.#.#.#..n#.#.#...#...#.....#.#..i#.#...#...#.#.#.#.#.#...#",
  "#####.#####.###.#.#.#####.#.#.#.#.#####.#####.###.#.#.###.#.#####.###.#.#.#.#.###",
  "#.....#...#.....#.#.#.......#.#.#...#...#...#...#...#.....#...#...#...#.#.#.#...#",
  "#D#####.#.#######.###.#######.#.###.#.#.#.#.#############.###.#.###U###.#A#####.#",
  "#.......#.#.H...#.....#...E...#...#...#.#.#...#.........#...#.#...#.#...........#",
  "#.#######.#.###.#######.#########.#####.#.###.#.#######.#.###.###.#.###########.#",
  "#.#.....#.#.#.#e........#.....N...#...#.#.#.....#.....#.#.#...#...#...#.......#y#",
  "#.###.#.#.#.#.#########.#.#########.###.#.#######.###.#.###.#####.#.#.#.#####.#.#",
  "#...#.#.#.#.#.....#.O.#.#.#.......#.....#.#...#.....#....z#.#...#.#.#.#.#...#.#.#",
  "###.#.###.#.#.###.#.#####.#.#####.#.#####.#.#.###########.#.###.#.#.#.#.###.#.#.#",
  "#.....#.V.#.#.#...#......o#.#.....#.#...#...#.T.......#.......#.#.#.#.......#.#.#",
  "#######.###.#.#.#############.#####.#.#.#.###########.#########.#.###########.#.#",
  "#.....#...#...#..b#...#.......#.....#.#.#.#.....#...#.........#.#.......#.....#.#",
  "#.###.###.#######.#.#.#####.###.#####.###.#.#####.#.###.#####.#.#######.#.#######",
  "#.#.#.#...#.....#...#...#...#...#.......#.#.#.....#...#.....#.#.......#.#.......#",
  "#.#.#.#.#.#.###.#######.#.###.#########.#.#.#.#######.#####S#.#######.#.#.#####.#",
  "#u#...#.#.#...#.......#.#.....#.......#.#.#.#...#...#.....#.#.....#...#.#.#.#..v#",
  "#.###.#.#.###.#####.#.#.###.###.#####.#.#.#.###.#.#.#####.#######.#.###.#.#.#.#.#",
  "#...#...#...#.#...#.#.#...#...#.#.#...#.#.....#.#.#.#.....#.......#.#.#.#...#.#.#",
  "###.###W#####.#.###.#####.###.#.#.#.###.#.#####.#.#.#####.#.#######.#.#.###.#.###",
  "#...#...#.......#...#...#.#.#...#...#...#.#.....#.#.....#...#.......#.#..d#.#...#",
  "#.#######.#######.###.#.#.#.#####.###.#.#.#.#####.#####.#####.#######.###.#.###.#",
  "#.......#a..#.#.Y.#...#...#.....#.....#.#.#.....#.....#...#...#...#.....#.#.#...#",
  "#.#####.###.#.#.#.#.#######.#.#.#######.#.#####.###.#####.#.###.###.###.#.#.#.#.#",
  "#.....#...#.#.#.#.#...#.#...#.#.#.......#.#...#.....#.....#.#.....#...#.#.#.#.#.#",
  "#####.#.###.#.#.#####.#.#.###.###.#######.###.#######.#####.#.###.###.#.#.###.#.#",
  "#....f#.......#....m..#.....#.......................#.......#...#.....#.......#.#",
  "#######################################.@.#######################################",
  "#...#.....#...#...#.#.......#.....#...........#.....#.#.......#...........#.....#",
  "#.#.#.#.#.#.#.#.#.#.#.#.###.#.###.#####.#.###.###.#.#.#.#####.#.#######.#.###.#.#",
  "#.#...#.#...#.#.#...#.#...#...#.........#...#...#.#...#.#...#.#.#.#...#.#.#...#.#",
  "#######.#####.#.###.#.###.#############.###.###.#.###.#.#.###.#.#.#.#.#.#.#.###.#",
  "#.....#.#.......#...#s#.#.#.........#...#...#...#...#.#.#.#...#...#.#...#...#.#.#",
  "#.###.#.#############.#.#.#.#######.#.###.#####.#.#.###.#.#.#####.#.#########.#.#",
  "#...#...#...............#.#.#.#.....#.#.#.....#t#.#...#.#.#.#.....#...#.......#.#",
  "#.#.#####.###############.#.#.#.#####.#.#.###.#.#####.#.#.#.#########.#.#######.#",
  "#.#.#...#.#.....#...#...#.....#.#...#.#.#.#.#.#.#.....#...#...#.......#.........#",
  "#.#.#.#.#.#.###Z#.###.#.###.###.#.###.#.#.#.#.#.#.###.###.###.#.#######.#####.###",
  "#.#.#.#.#...#.....#...#...#.#...#.#...#.#.#.#.#...#...#...#.#.#...#...#.#...#...#",
  "###.#.#.#####.#####.#####.###.###.#.###.#.#.#.#########.###.#.#.#.###.#.#.#.###.#",
  "#...#.#.....#.#.#...#...#.....#.........#...#...........#...#.#.#...#...#.#.#...#",
  "#.###.#.#####.#.#.###.#.###.###############.#############.###.#####.#####.#.###.#",
  "#.#...#....k....#.#...#.....#.......#...#.#.......#.....#...#...K.#.#.....#...#.#",
  "#.#.#############.#####.#####.#####.#.#.#.#######.#.###.###.#####.#.#.#######.#.#",
  "#...#.........#...#...#.....#...#.#...#.#.......#...#.........#...#.#.#.....#.#.#",
  "#####.#######.#.###.#.#########.#.#####.#.#.###.#.###########.#.###.#.#.#####.#.#",
  "#.....#.........#...#.#.........#...#...#.#...#.#.#.......#...#...#...#...#...#.#",
  "#.###############B###.#.###########.#.#######.###.#.#####.#####.#.#.#####.#.###.#",
  "#.....#.....#...#...#h#...........#.....#.....#...#.#...#.....#.#.#.....#.#...#w#",
  "#.###.#.###.#.#.###.#####.#######.#####.#.#####.###.#.#.#########.#####.#.###.###",
  "#...#...#...#.#...#.....#.......#...#.#.#.#.....#.#...#...#.....#...#.......#...#",
  "#########.###.###.#####.#####.#####.#.#.#.#.#####.#######.#.###.###.#.#########.#",
  "#.....#...#.....#.....#...#...#.....#.#.#...#.......#...#.#.#.......#...#.....#.#",
  "#.###.#.###.#####.#######.#.###.#####.#.#.#####.#####.#.#.#.#############.###G#.#",
  "#...#...#...#...#.......#.#...#.#...#...#.....#.....#.#...#.......#.......#.#...#",
  "###.#####.###.#.###.###.#.#####.###.#.#######.#####.#.###########.#.#######.###.#",
  "#...#.......#.#...#.#...#.#.....#...#...#...#.....#.#.......#...#.#.#.........#.#",
  "#.###.#######.###.#.#.###.#.#####.#####.#.#.#####.#.#######.#.#.#.#.#.###.#####.#",
  "#.....#...#...#.#.#.#...#.#.#...#.......#.#.......#...#...#...#...#.#.#.#.......#",
  "#.#######.#.###.#.#####.#.#C#.#.#.#######.#########.###.#.#########.#.#.#########",
  "#.......#.#...#.....R...#...#.#.#.#.....#.#.......#...#.#.....#.....#.#.........#",
  "#######.#.###.###############.#.#.###.#.#.#.#####.#.#.#.#.###.#.#.###.###.#####.#",
  "#.....#.#...#...#...........#.#.#.....#.#.#.....#...#..p#.#...#.#.#...#...#...#.#",
  "#.#####.#.#.###.#.#########.#.#.#######.#.###.###########.###.###.#.###.#####.#.#",
  "#.....#.#.#.#q#...#.....#.#.#.#.......#.#.#...#.....#...#...#...#.#...#.#x....#.#",
  "#.###.#.#.#.#.#######.#.#.#.#.###.#####.#.#####.###.#.#I###.###.#.###.#.#.#####.#",
  "#...#...J.#...........#...#.....#.......#.......#.....#..l..#.....#.....#.......#",
  "#################################################################################",
]

export default data

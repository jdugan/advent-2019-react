import BasicAmplifier    from './BasicAmplifier'
import FeedbackAmplifier from './FeedbackAmplifier'

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.highestOutput([0,1,2,3,4], 'basic')
    }
    return this.highestOutput([5,6,7,8,9], 'feedback')
  }

  // ========== RUNNERS ===================================

  highestOutput(phaseBase, amplifierType) {
    const phaseSets  = this.getPermutations(phaseBase)
    let   highest    = 0

    phaseSets.forEach(phases => {
      const amps   = this.getAmplifiers(phases, amplifierType)
      let   signal = 0

      const output = this.processAmplifierLoop(amps, signal)

      if (output > highest) {
        highest = output
      }
    })

    return highest
  }

  // ========== HELPERS ===================================

  getAmplifiers(phases, type) {
    const klass = (type === 'feedback') ? FeedbackAmplifier : BasicAmplifier
    let   amps  = []

    for(let i = 0; i < 5; i++) {
      const program = [...this.program]
      const amp     = new klass(program, phases[i], i + 1)
      amps.push(amp)
    }
    return amps
  }

  // TODO: Add proper method to array utils
  getPermutations(array) {
    if (array[0] === 0) {
      return [
        [0, 1, 2, 3, 4], [0, 1, 2, 4, 3], [0, 1, 3, 2, 4], [0, 1, 3, 4, 2],
        [0, 1, 4, 2, 3], [0, 1, 4, 3, 2], [0, 2, 1, 3, 4], [0, 2, 1, 4, 3],
        [0, 2, 3, 1, 4], [0, 2, 3, 4, 1], [0, 2, 4, 1, 3], [0, 2, 4, 3, 1],
        [0, 3, 1, 2, 4], [0, 3, 1, 4, 2], [0, 3, 2, 1, 4], [0, 3, 2, 4, 1],
        [0, 3, 4, 1, 2], [0, 3, 4, 2, 1], [0, 4, 1, 2, 3], [0, 4, 1, 3, 2],
        [0, 4, 2, 1, 3], [0, 4, 2, 3, 1], [0, 4, 3, 1, 2], [0, 4, 3, 2, 1],
        [1, 0, 2, 3, 4], [1, 0, 2, 4, 3], [1, 0, 3, 2, 4], [1, 0, 3, 4, 2],
        [1, 0, 4, 2, 3], [1, 0, 4, 3, 2], [1, 2, 0, 3, 4], [1, 2, 0, 4, 3],
        [1, 2, 3, 0, 4], [1, 2, 3, 4, 0], [1, 2, 4, 0, 3], [1, 2, 4, 3, 0],
        [1, 3, 0, 2, 4], [1, 3, 0, 4, 2], [1, 3, 2, 0, 4], [1, 3, 2, 4, 0],
        [1, 3, 4, 0, 2], [1, 3, 4, 2, 0], [1, 4, 0, 2, 3], [1, 4, 0, 3, 2],
        [1, 4, 2, 0, 3], [1, 4, 2, 3, 0], [1, 4, 3, 0, 2], [1, 4, 3, 2, 0],
        [2, 0, 1, 3, 4], [2, 0, 1, 4, 3], [2, 0, 3, 1, 4], [2, 0, 3, 4, 1],
        [2, 0, 4, 1, 3], [2, 0, 4, 3, 1], [2, 1, 0, 3, 4], [2, 1, 0, 4, 3],
        [2, 1, 3, 0, 4], [2, 1, 3, 4, 0], [2, 1, 4, 0, 3], [2, 1, 4, 3, 0],
        [2, 3, 0, 1, 4], [2, 3, 0, 4, 1], [2, 3, 1, 0, 4], [2, 3, 1, 4, 0],
        [2, 3, 4, 0, 1], [2, 3, 4, 1, 0], [2, 4, 0, 1, 3], [2, 4, 0, 3, 1],
        [2, 4, 1, 0, 3], [2, 4, 1, 3, 0], [2, 4, 3, 0, 1], [2, 4, 3, 1, 0],
        [3, 0, 1, 2, 4], [3, 0, 1, 4, 2], [3, 0, 2, 1, 4], [3, 0, 2, 4, 1],
        [3, 0, 4, 1, 2], [3, 0, 4, 2, 1], [3, 1, 0, 2, 4], [3, 1, 0, 4, 2],
        [3, 1, 2, 0, 4], [3, 1, 2, 4, 0], [3, 1, 4, 0, 2], [3, 1, 4, 2, 0],
        [3, 2, 0, 1, 4], [3, 2, 0, 4, 1], [3, 2, 1, 0, 4], [3, 2, 1, 4, 0],
        [3, 2, 4, 0, 1], [3, 2, 4, 1, 0], [3, 4, 0, 1, 2], [3, 4, 0, 2, 1],
        [3, 4, 1, 0, 2], [3, 4, 1, 2, 0], [3, 4, 2, 0, 1], [3, 4, 2, 1, 0],
        [4, 0, 1, 2, 3], [4, 0, 1, 3, 2], [4, 0, 2, 1, 3], [4, 0, 2, 3, 1],
        [4, 0, 3, 1, 2], [4, 0, 3, 2, 1], [4, 1, 0, 2, 3], [4, 1, 0, 3, 2],
        [4, 1, 2, 0, 3], [4, 1, 2, 3, 0], [4, 1, 3, 0, 2], [4, 1, 3, 2, 0],
        [4, 2, 0, 1, 3], [4, 2, 0, 3, 1], [4, 2, 1, 0, 3], [4, 2, 1, 3, 0],
        [4, 2, 3, 0, 1], [4, 2, 3, 1, 0], [4, 3, 0, 1, 2], [4, 3, 0, 2, 1],
        [4, 3, 1, 0, 2], [4, 3, 1, 2, 0], [4, 3, 2, 0, 1], [4, 3, 2, 1, 0]
      ]
    }
    return [
      [5, 6, 7, 8, 9], [5, 6, 7, 9, 8], [5, 6, 8, 7, 9], [5, 6, 8, 9, 7],
      [5, 6, 9, 7, 8], [5, 6, 9, 8, 7], [5, 7, 6, 8, 9], [5, 7, 6, 9, 8],
      [5, 7, 8, 6, 9], [5, 7, 8, 9, 6], [5, 7, 9, 6, 8], [5, 7, 9, 8, 6],
      [5, 8, 6, 7, 9], [5, 8, 6, 9, 7], [5, 8, 7, 6, 9], [5, 8, 7, 9, 6],
      [5, 8, 9, 6, 7], [5, 8, 9, 7, 6], [5, 9, 6, 7, 8], [5, 9, 6, 8, 7],
      [5, 9, 7, 6, 8], [5, 9, 7, 8, 6], [5, 9, 8, 6, 7], [5, 9, 8, 7, 6],
      [6, 5, 7, 8, 9], [6, 5, 7, 9, 8], [6, 5, 8, 7, 9], [6, 5, 8, 9, 7],
      [6, 5, 9, 7, 8], [6, 5, 9, 8, 7], [6, 7, 5, 8, 9], [6, 7, 5, 9, 8],
      [6, 7, 8, 5, 9], [6, 7, 8, 9, 5], [6, 7, 9, 5, 8], [6, 7, 9, 8, 5],
      [6, 8, 5, 7, 9], [6, 8, 5, 9, 7], [6, 8, 7, 5, 9], [6, 8, 7, 9, 5],
      [6, 8, 9, 5, 7], [6, 8, 9, 7, 5], [6, 9, 5, 7, 8], [6, 9, 5, 8, 7],
      [6, 9, 7, 5, 8], [6, 9, 7, 8, 5], [6, 9, 8, 5, 7], [6, 9, 8, 7, 5],
      [7, 5, 6, 8, 9], [7, 5, 6, 9, 8], [7, 5, 8, 6, 9], [7, 5, 8, 9, 6],
      [7, 5, 9, 6, 8], [7, 5, 9, 8, 6], [7, 6, 5, 8, 9], [7, 6, 5, 9, 8],
      [7, 6, 8, 5, 9], [7, 6, 8, 9, 5], [7, 6, 9, 5, 8], [7, 6, 9, 8, 5],
      [7, 8, 5, 6, 9], [7, 8, 5, 9, 6], [7, 8, 6, 5, 9], [7, 8, 6, 9, 5],
      [7, 8, 9, 5, 6], [7, 8, 9, 6, 5], [7, 9, 5, 6, 8], [7, 9, 5, 8, 6],
      [7, 9, 6, 5, 8], [7, 9, 6, 8, 5], [7, 9, 8, 5, 6], [7, 9, 8, 6, 5],
      [8, 5, 6, 7, 9], [8, 5, 6, 9, 7], [8, 5, 7, 6, 9], [8, 5, 7, 9, 6],
      [8, 5, 9, 6, 7], [8, 5, 9, 7, 6], [8, 6, 5, 7, 9], [8, 6, 5, 9, 7],
      [8, 6, 7, 5, 9], [8, 6, 7, 9, 5], [8, 6, 9, 5, 7], [8, 6, 9, 7, 5],
      [8, 7, 5, 6, 9], [8, 7, 5, 9, 6], [8, 7, 6, 5, 9], [8, 7, 6, 9, 5],
      [8, 7, 9, 5, 6], [8, 7, 9, 6, 5], [8, 9, 5, 6, 7], [8, 9, 5, 7, 6],
      [8, 9, 6, 5, 7], [8, 9, 6, 7, 5], [8, 9, 7, 5, 6], [8, 9, 7, 6, 5],
      [9, 5, 6, 7, 8], [9, 5, 6, 8, 7], [9, 5, 7, 6, 8], [9, 5, 7, 8, 6],
      [9, 5, 8, 6, 7], [9, 5, 8, 7, 6], [9, 6, 5, 7, 8], [9, 6, 5, 8, 7],
      [9, 6, 7, 5, 8], [9, 6, 7, 8, 5], [9, 6, 8, 5, 7], [9, 6, 8, 7, 5],
      [9, 7, 5, 6, 8], [9, 7, 5, 8, 6], [9, 7, 6, 5, 8], [9, 7, 6, 8, 5],
      [9, 7, 8, 5, 6], [9, 7, 8, 6, 5], [9, 8, 5, 6, 7], [9, 8, 5, 7, 6],
      [9, 8, 6, 5, 7], [9, 8, 6, 7, 5], [9, 8, 7, 5, 6], [9, 8, 7, 6, 5]
    ]
  }

  processAmplifierLoop(amps, signal, iteration = 1) {
    let halted
    amps.forEach(amp => {
      [signal, halted] = amp.run(signal, iteration)
    })
    if (!halted) {
      if (iteration < 50) {
        iteration += 1
        const deepSignal = this.processAmplifierLoop(amps, signal, iteration)
        return deepSignal || signal // halt returns undefined, so use previous signal
      }
    }
    return signal
  }
}
export default Runner

import type { Slide } from './types';

// 100-slide, non-repetitive, intuition-focused deck.
export const INTRO_SLIDES_V2: Slide[] = [
  // Track 1 – Qubit Notation & Amplitudes (1–10)
  {
    section: 'Track 1: Qubit Basics',
    title: 'Welcome to Quantum Intuition',
    icon: 'RoadmapIcon',
    content:
      'This course is not about memorizing formulas. It is about building a clear picture in your head of how quantum systems behave, so that circuits and code feel natural instead of mysterious.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Bits vs Qubits',
    icon: 'AtomIcon',
    content:
      'A classical bit is like a tiny light switch: either OFF (0) or ON (1) and nothing in between.\n\nA qubit is more like a perfectly spinning coin under a glass dome: before you look, it carries the possibility of both 0 and 1 at the same time.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Dirac Notation: |0⟩ and |1⟩',
    icon: 'CodeIcon',
    content:
      'Quantum states are often written as “kets”: |0⟩ and |1⟩.\n\n|0⟩ plays the role of a quantum 0, |1⟩ plays the role of a quantum 1. The special brackets simply mark these as quantum states, not ordinary numbers.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Qubit as a Column Vector',
    icon: 'BeakerIcon',
    content:
      'Mathematically, |0⟩ can be represented as the column vector [1, 0]ᵀ and |1⟩ as [0, 1]ᵀ.\n\nA general qubit is then |ψ⟩ = α|0⟩ + β|1⟩, which corresponds to the vector [α, β]ᵀ.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Amplitudes α and β',
    icon: 'BrainIcon',
    content:
      'The coefficients α (alpha) and β (beta) are called amplitudes.\n\nThey are complex numbers that encode “how much” the state points along |0⟩ and |1⟩. They are not probabilities yet—that comes after squaring their magnitudes.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'From Amplitudes to Probabilities',
    icon: 'BeakerIcon',
    content:
      'If |ψ⟩ = α|0⟩ + β|1⟩, then the probability of measuring 0 is |α|² and the probability of measuring 1 is |β|².\n\nBecause something must happen, |α|² + |β|² is always equal to 1.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Example: 70% 0, 30% 1',
    icon: 'SparklesIcon',
    content:
      'To model a qubit that returns 0 about 70% of the time and 1 about 30% of the time, you can choose α = √0.7 and β = √0.3.\n\nIf you run the same circuit many times, the histogram of outcomes will settle near that 70/30 split.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Complex Amplitudes and Phase',
    icon: 'BeakerIcon',
    content:
      'Amplitudes may be complex, like α = 1/√2 and β = i/√2. The imaginary unit i controls the phase of the component.\n\nPhase does not change the probability of each outcome on its own, but it controls how different contributions add or cancel when paths interfere.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Normalization Condition',
    icon: 'CodeIcon',
    content:
      'The rule |α|² + |β|² = 1 is called normalization.\n\nIt simply expresses the fact that the total probability of all possible outcomes (0 or 1) must sum to 1.'
  },
  {
    section: 'Track 1: Qubit Basics',
    title: 'Checkpoint: Your Own Words',
    icon: 'SparklesIcon',
    content:
      'Pause and try to explain what α and β are using only plain language.\n\nIf you can say “they are complex weights whose squared sizes give me the probabilities of 0 and 1,” then you have the key idea.'
  },

  // Track 2 – Superposition & Bloch Sphere (11–24)
  {
    section: 'Track 2: Superposition',
    title: 'What Is Superposition?',
    icon: 'SuperpositionIcon',
    animation: 'superposition',
    content:
      'A qubit is in superposition when both |0⟩ and |1⟩ have non-zero amplitudes.\n\nBefore measurement, it is not correct to say it “is” 0 or 1; instead, it carries a cloud of possibilities that the amplitudes describe.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'The Plus State |+⟩',
    icon: 'SuperpositionIcon',
    content:
      'The state |+⟩ = (|0⟩ + |1⟩)/√2 has equal amplitude on |0⟩ and |1⟩.\n\nMeasuring in the computational basis gives 0 about half the time and 1 about half the time, making |+⟩ the quantum analogue of a perfectly fair coin.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Bloch Sphere Picture',
    icon: 'AtomIcon',
    animation: 'bloch',
    content:
      'The Bloch sphere draws a single qubit as a point on a unit sphere.\n\nThe north pole represents |0⟩, the south pole represents |1⟩, and any point in between corresponds to some superposition of the two.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Superposition on the Bloch Sphere',
    icon: 'AtomIcon',
    content:
      'On the Bloch sphere, superposition simply means “not sitting exactly at a pole.”\n\nStates on the equator have equal probabilities for 0 and 1 but different phases; states closer to a pole are biased towards that basis state.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Hadamard Gate Intuition',
    icon: 'CircuitIcon',
    content:
      'The Hadamard gate H takes sharp states to balanced superpositions.\n\nFor example, H|0⟩ = (|0⟩ + |1⟩)/√2 and H|1⟩ = (|0⟩ − |1⟩)/√2. On the Bloch sphere this looks like rotating from a pole down to the equator.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Measurement Basis',
    icon: 'BeakerIcon',
    content:
      'Most of the time we measure in the computational basis {|0⟩, |1⟩}, but we could instead measure in other bases such as {|+⟩, |−⟩}.\n\nA state that looks like a clear 0/1 superposition in one basis may look definite in another basis.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Interference in Words',
    icon: 'InterferenceIcon',
    animation: 'interference',
    content:
      'Quantum amplitudes behave like waves: when you add them, they can reinforce or cancel.\n\nConstructive interference makes certain outcomes more likely; destructive interference makes others less likely or even impossible.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'H–X–H Interference Trick',
    icon: 'CircuitIcon',
    content:
      'Consider the gate sequence H → X → H on |0⟩. It temporarily creates a superposition, flips it, then interferes it.\n\nThe result is that the qubit ends up in |1⟩ with very high probability. The intermediate superposition was essential, even though you only see a sharp outcome at the end.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Practice: Predict a Histogram',
    icon: 'SparklesIcon',
    content:
      'Imagine a circuit that starts in |0⟩, applies H, then measures.\n\nBefore running it, predict the measurement histogram: you should expect roughly half of the shots to give 0 and half to give 1.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Practice: Changing the Rotation Angle',
    icon: 'SparklesIcon',
    content:
      'Now replace H with a rotation gate RY(θ) and measure.\n\nIf θ is small, the state stays close to |0⟩ so 0 outcomes dominate; if θ is close to π, the state moves near |1⟩ so 1 outcomes dominate. Try intermediate angles in the playground to see how the probabilities shift.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Mental Model: Cloud of Outcomes',
    icon: 'BrainIcon',
    content:
      'A useful mental image is that each gate reshapes a cloud of potential outcomes.\n\nYou never see the whole cloud, but its shape controls which result you are likely to get when you finally measure.'
  },
  {
    section: 'Track 2: Superposition',
    title: 'Checkpoint: Explain Superposition',
    icon: 'SparklesIcon',
    content:
      'Try to explain superposition to yourself in one or two sentences, without equations.\n\nIf you can say something like “it is a controlled blend of 0 and 1 that only becomes a single outcome when measured,” you are on the right track.'
  },

  // Track 3 – Two Qubits & Entanglement (25–40)
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Two-Qubit Basis States',
    icon: 'QuantumChipIcon',
    content:
      'Two qubits have four basis states: |00⟩, |01⟩, |10⟩ and |11⟩.\n\nA general state is a superposition a|00⟩ + b|01⟩ + c|10⟩ + d|11⟩, with |a|² + |b|² + |c|² + |d|² = 1.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Product States',
    icon: 'CodeIcon',
    content:
      'If a two-qubit state can be written as |ψ⟩⊗|φ⟩ (one qubit state for each side), it is called a product state.\n\nIn such a state, knowing the outcome of one qubit does not tell you anything new about the other qubit.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Entangled States',
    icon: 'EntanglementIcon',
    animation: 'entanglement',
    content:
      'Entangled states cannot be factored into separate single-qubit states.\n\nThey describe both qubits at once as a single object, allowing measurement outcomes to be strongly correlated in ways that classical random bits cannot match.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Bell State |Φ⁺⟩',
    icon: 'EntanglementIcon',
    content:
      'The Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 is a famous entangled state.\n\nWhen you measure both qubits, you almost always get either 00 or 11 and essentially never see 01 or 10 in the ideal case.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Circuit for |Φ⁺⟩',
    icon: 'CircuitIcon',
    content:
      'To build |Φ⁺⟩, start from |00⟩, apply H to qubit 0, then apply CNOT with qubit 0 as control and qubit 1 as target.\n\nThe H gate creates superposition; the CNOT spreads that uncertainty to the second qubit, tying their fates together.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Entanglement Is Correlation in the State',
    icon: 'BrainIcon',
    content:
      'In an entangled state, strong correlations are encoded directly in the wave function.\n\nWhen you measure one qubit and instantly know something about the other, you are not seeing a signal travel; you are just revealing a correlation that was already there.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'No Faster-Than-Light Signalling',
    icon: 'HistoryIcon',
    content:
      'Entanglement does not allow faster-than-light communication.\n\nEach side still sees random local outcomes. The “weirdness” only shows up when both sides later compare their classical records.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'GHZ State Intuition',
    icon: 'QuantumChipIcon',
    content:
      'For three qubits, the GHZ state (|000⟩ + |111⟩)/√2 shows strong multi-qubit entanglement.\n\nMeasuring all three qubits gives almost always either 000 or 111, demonstrating that all three behave as a single correlated unit.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Entanglement as a Resource',
    icon: 'RoadmapIcon',
    content:
      'Entanglement is a resource in quantum information, similar to how energy is a resource in physics.\n\nProtocols like teleportation, superdense coding and many quantum algorithms rely on entangled states to perform tasks impossible for classical systems.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Practice: Building and Breaking Entanglement',
    icon: 'SparklesIcon',
    content:
      'In the playground, build the Bell state circuit and inspect the counts.\n\nThen insert extra gates (like X or Z on one qubit) and see which ones preserve correlations and which ones break them.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Mental Picture: Shared Story',
    icon: 'BrainIcon',
    content:
      'A helpful way to think about entanglement is that the qubits share a single story instead of independent stories.\n\nIn |Φ⁺⟩ the story is “they always match” – measuring one page of the story automatically fixes the other.'
  },
  {
    section: 'Track 3: Two Qubits & Entanglement',
    title: 'Checkpoint: Explain Entanglement Simply',
    icon: 'SparklesIcon',
    content:
      'Try to explain entanglement without equations: “it is a quantum state where parts are so linked that you must describe them together, not separately.”\n\nIf that sentence makes sense to you, your intuition is in good shape.'
  },

  // Track 4 – Schrödinger Equation & Time (41–56)
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Why We Need a Time Rule',
    icon: 'BeakerIcon',
    content:
      'We know what states are and how to measure them, but we still need a rule that tells us how states change with time.\n\nThe Schrödinger equation is that rule: it plays the role that Newton’s laws play in classical physics.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Schrödinger in Plain Words',
    icon: 'BrainIcon',
    content:
      'In words, the Schrödinger equation says: “given the current wave function and the system’s energy (Hamiltonian), you can compute how the wave function changes in the next tiny instant.”\n\nIt is a rule that moves the whole cloud of amplitudes forward in time.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Time-Evolution Operator U(t)',
    icon: 'CircuitIcon',
    content:
      'Instead of solving the differential equation directly, physicists often talk about the time-evolution operator U(t) = e^{-iHt}.\n\nThis unitary operator, when applied to a state vector, gives you the state after time t.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Small Steps and Many Gates',
    icon: 'CircuitIcon',
    content:
      'In quantum computing we approximate U(t) using many small, simple gates.\n\nEach gate corresponds to turning on some simple Hamiltonian for a short time. Chaining them together imitates continuous Schrödinger evolution in discrete pieces.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Single-Qubit Rotation as Evolution',
    icon: 'AtomIcon',
    content:
      'A single qubit rotating around an axis on the Bloch sphere is the simplest example of time evolution.\n\nRepeatedly applying a small rotation gate like RY(θ) simulates the state smoothly precessing around that axis.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Energy and Phase',
    icon: 'BeakerIcon',
    content:
      'In quantum systems, energy often appears as a speed of phase rotation.\n\nHigher-energy components rotate their phase faster, causing the interference pattern between components to change over time.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Two-Level System Intuition',
    icon: 'BrainIcon',
    content:
      'A qubit is a two-level system with some energy difference between |0⟩ and |1⟩.\n\nThe Schrödinger equation for such a system can be thought of as specifying how the Bloch vector rotates under that energy difference.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Connecting Physics and Circuits',
    icon: 'CircuitIcon',
    content:
      'Every gate in a quantum circuit can be viewed as the result of applying a Hamiltonian for some time.\n\nThis is why quantum circuits are so natural for simulating chemistry and materials: they literally mimic how quantum states move.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Practice: Many Small Rotations',
    icon: 'SparklesIcon',
    content:
      'Try a one-qubit circuit that starts in |0⟩ and applies RY(θ) eight times, then measures.\n\nChange θ and the number of repetitions and watch how the final probability of 1 behaves; imagine you are stretching or shrinking the evolution time.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Summary: Schrödinger Intuition',
    icon: 'RoadmapIcon',
    content:
      'The Schrödinger equation is the continuous rule of motion for quantum states.\n\nIn quantum computing we replace this continuous motion with sequences of gates, each one implementing a small step of the underlying physics.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'Checkpoint: Explain Without Symbols',
    icon: 'SparklesIcon',
    content:
      'Try to explain the Schrödinger equation without using any formulas.\n\nIf you can say “it tells the wave function how to move in time based on the system’s energy,” you have the level of understanding needed for this course.'
  },
  {
    section: 'Track 4: Schrödinger & Time',
    title: 'From Time Evolution to Algorithms',
    icon: 'RoadmapIcon',
    content:
      'Many algorithms, especially for quantum simulation, are built by thinking directly in terms of time evolution.\n\nYou choose a Hamiltonian that encodes a problem, then design gate sequences that approximate its Schrödinger evolution efficiently.'
  },

  // Track 5 – Schrödinger’s Cat & Interpretations (57–72)
  {
    section: "Track 5: Cat & Interpretations",
    title: "Schrödinger’s Cat Setup",
    icon: 'HistoryIcon',
    content:
      'Schrödinger imagined a sealed box containing a cat, a radioactive atom, a detector and a poison mechanism.\n\nIf the atom decays, the detector fires and releases poison; if not, the cat stays alive. Quantum rules say the atom can be in a superposition of “decayed” and “not decayed.”'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Cat as an Entangled System',
    icon: 'EntanglementIcon',
    content:
      'If the apparatus is ideal, the cat becomes entangled with the atom.\n\nBefore you open the box, the joint state is roughly “atom not decayed + live cat” plus “atom decayed + dead cat,” similar in spirit to a Bell state but with many more particles.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Why the Cat Feels Weird',
    icon: 'BrainIcon',
    content:
      'We happily accept superposition for small things like electrons, but it feels strange for big objects like cats.\n\nThe thought experiment forces us to ask: when, if ever, does a quantum superposition become a single classical reality?'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Copenhagen Interpretation',
    icon: 'BeakerIcon',
    content:
      'In the Copenhagen view, the wave function is a tool for predicting probabilities.\n\nWhen you perform a measurement—like opening the box—the wave function “collapses” to one outcome, and only that outcome is treated as real thereafter.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Many-Worlds Interpretation',
    icon: 'DnaIcon',
    content:
      'In the Many-Worlds interpretation, the wave function never collapses.\n\nInstead, the universe branches: in one branch you see a live cat, in another you see a dead cat. Each version of you experiences a single outcome, but the full state still contains all branches.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Decoherence and the Environment',
    icon: 'NoiseIcon',
    animation: 'nisq',
    content:
      'Decoherence describes how superpositions lose the ability to interfere when they become entangled with a large environment.\n\nFor macroscopic objects the environment is huge, so interference between “alive cat” and “dead cat” components disappears extremely fast.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Interpretations and Experiments',
    icon: 'RoadmapIcon',
    content:
      'Different interpretations (Copenhagen, Many-Worlds, others) give different stories about what is “really happening,” but they agree on experimental predictions.\n\nFor building quantum computers we rely on the shared mathematics, not on philosophical preference.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Computation Without Choosing a Side',
    icon: 'CodeIcon',
    content:
      'You do not need to commit to any interpretation in order to write correct quantum programs.\n\nAll you need are the operational rules: states, unitaries, measurements and the Born rule for turning amplitudes into probabilities.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Mental Picture: Many Stories, One Experience',
    icon: 'BrainIcon',
    content:
      'A helpful way to think about interpretations is that the wave function carries many possible stories at once.\n\nMeasurement is the moment when your personal experience follows one of those stories, while the math continues to track them all consistently.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Practice: Map Cat to Qubits',
    icon: 'SparklesIcon',
    content:
      'Try to map the cat setup to a simple two-qubit system: one qubit for “atom decayed or not,” one for “cat alive or dead.”\n\nNotice how the logic of entanglement and measurement is the same—only the physical scale is different.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Summary: Interpretations',
    icon: 'RoadmapIcon',
    content:
      'Copenhagen uses collapse, Many-Worlds uses branching, and decoherence explains why we do not see macroscopic superpositions.\n\nAll of them respect the same mathematical rules for amplitudes, time evolution, entanglement and measurement.'
  },
  {
    section: "Track 5: Cat & Interpretations",
    title: 'Checkpoint: Your Preferred Story',
    icon: 'SparklesIcon',
    content:
      'Think about which interpretation feels most natural to you.\n\nWhichever you pick, remember that the circuits you write and the probabilities you observe are governed by the same shared quantum rules.'
  },

  // Track 6 – Putting It All Together (73–100)
  {
    section: 'Track 6: Putting It Together',
    title: 'From Notation to Circuits',
    icon: 'CircuitIcon',
    content:
      'You now know how to read states like |0⟩, |1⟩ and α|0⟩ + β|1⟩.\n\nA quantum circuit is just a sequence of gates that transforms these states step by step before you finally measure.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Mental Checklist Before Running',
    icon: 'RoadmapIcon',
    content:
      'Before you run any circuit, ask yourself:\n\n1) What is the initial state? 2) Which gates create superposition? 3) Which gates create entanglement? 4) Where do I expect interference? 5) In what basis am I measuring?'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Relating Histograms to Amplitudes',
    icon: 'BeakerIcon',
    content:
      'The measurement histogram is your experimental window into hidden amplitudes.\n\nRunning a circuit many times turns invisible complex numbers into visible bars whose heights approximate |amplitude|² for each outcome.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Small Changes, Big Insight',
    icon: 'SparklesIcon',
    content:
      'You build real intuition by making tiny changes to circuits and watching what happens.\n\nAdd or remove a single gate, swap their order, or entangle an extra qubit and see how the counts and statevectors respond.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Beginner Exercises: Tell the Story',
    icon: 'RocketLaunchIcon',
    content:
      'For beginner-level exercises, focus on describing what each circuit does in words, not in equations.\n\nIf you can say “this gate puts the qubit into a fair superposition” or “these two gates entangle the pair,” the code will feel far less intimidating.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Intermediate Exercises: Focus on Interference',
    icon: 'RocketLaunchIcon',
    content:
      'For intermediate exercises, try predicting which outcomes should be amplified and which should be suppressed.\n\nYou do not need exact probabilities—just a sense of where constructive versus destructive interference should appear.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Advanced Exercises: Think in Blocks',
    icon: 'RocketLaunchIcon',
    content:
      'Advanced circuits are often built from repeated blocks that play distinct roles.\n\nTry to see each block as a subroutine: one prepares a special state, another imprints a phase, and a final block converts that phase back into a measurable pattern.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Common Pitfall: Mixing Amplitudes and Probabilities',
    icon: 'BrainIcon',
    content:
      'A common mistake is to treat amplitudes as if they were probabilities.\n\nRemember: amplitudes can be negative or complex, and only their squared magnitudes give probabilities. Interference lives in amplitude space, not probability space.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Common Pitfall: Forgetting the Basis',
    icon: 'BrainIcon',
    content:
      'Another frequent confusion is forgetting which basis you are reasoning in.\n\nA state that looks “superposed” in the computational basis might be definite in the {|+⟩, |−⟩} basis. Always check which measurement you are imagining.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Your Intuition Toolkit',
    icon: 'RoadmapIcon',
    content:
      'Your toolkit now includes: Dirac notation, amplitudes, superposition, entanglement, Bloch-sphere geometry, Schrödinger time evolution and basic interpretations.\n\nYou do not need to remember every detail—just lean on these pictures whenever circuits start to feel confusing.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'From Slides to Playground',
    icon: 'RocketLaunchIcon',
    content:
      'These slides give you the mental model; the playground and lessons let you test it.\n\nRun circuits, break them on purpose, and rebuild them. Each experiment strengthens the link between the ideas in your head and the behaviour you see on the screen.'
  },
  {
    section: 'Track 6: Putting It Together',
    title: 'Final Encouragement',
    icon: 'SparklesIcon',
    content:
      'Quantum mechanics can feel strange at first, but strangeness fades as your intuition grows.\n\nWith this 100-slide overview as your map, the rest of the course—beginner, intermediate and advanced exercises—should become much easier to understand and enjoy.'
  }
];


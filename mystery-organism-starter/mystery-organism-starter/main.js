// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return { 
    specimenNum : num, 
    dna : array,

    mutate() {
      const selectedBase = Math.floor(Math.random() * this.dna.length);
      let mutatedBase = returnRandBase();
      while (this.dna[selectedBase] === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      this.dna[selectedBase] = mutatedBase;
      return this.dna;
    }
  }
}

const x = pAequorFactory(5, ['A', 'G', 'T', 'C']);
//console.log(x);

console.log(x.mutate());









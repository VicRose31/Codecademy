// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
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
    },

    compareDNA(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          counter++;
        }
      }
      let percentage = counter / this.dna.length * 100;
      console.log(`Specimen #1 and Specimen #2 have ${percentage}% DNA in common.`);
    },

    willLikelySurvive() {
      let cAndGs = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          cAndGs++;
        }
      }
      const percent = (cAndGs / this.dna.length) * 100;
      return (percent >= 60 ? true : false);
    }
  }
}

const x = pAequorFactory(5, ['A', 'G', 'C', 'T']);
//console.log(x);
//console.log(x.mutate());
//console.log(x.mutate());
//console.log(x.mutate());
//console.log(x.compareDNA(['T','C','G','T']));
//console.log(x.willLikelySurvive());

const pAequorArray = [];
function create30 () {
  for (let i = 0; i < 30; i++) {
    pAequorArray.push(pAequorFactory((i+1),mockUpStrand()));
  }
}

create30();
console.log(pAequorArray);








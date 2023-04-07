// Grafşk adında bir class oluşturdum.
class Grafik {
    constructor() {
      this.kenarlar = [];
    }
  
    addEdge(kenar) {
      this.kenarlar.push(kenar);
    }
    // fonksiyonu ile bir kenar ekleniyor. Eklenen kenar, kenarlar dizisine push ediliyor.
  
    kruskal() {
      let mst = []; // boş bir mst dizisi oluşturdum.
      let sets = {}; // boş bir sets nesnesi oluşturdum.
  
      for (let kenar of this.kenarlar) {
        let root1 = this.find(sets, kenar[0]);
        let root2 = this.find(sets, kenar[1]);
        // rootlar kenarların kök dügümleridir. 
  
        if (root1 !== root2) {
          mst.push(kenar);
          sets[root1] = root2;
        }
      }
      return mst;
    }
    // Eğer root1 ve root2 farklıysa, bu durumda kenar mst dizisine ekleniyor ve sets nesnesindeki root1 düğümü root2 düğümüne eşitleniyor. Ve root1 ve root2 düğümleri birbirleriyle bağlanmış oluyor.Sonra mst dizisi döndürülüyor.
  
    find(sets, köşe) {
      if (sets[köşe] === undefined) {
        return köşe;
      }
      return this.find(sets, sets[köşe]);
    }
  }
  // Yukarıda ki işlem sets nesnesi içinde köşe adında bir anahtar varsa, bu anahtarın değeri bir sonraki düğümün anahtarına atanarak, kök düğüm bulunana kadar devam ediliyor.
  
  let g = new Grafik();
  // Grafik classından g adında bir nesne oluşturduk.
  g.addEdge([0, 1, 2]);
  g.addEdge([1, 2, 3]);
  g.addEdge([0, 3, 6]);
  g.addEdge([1, 3, 8]);
  g.addEdge([1, 4, 5]);
  g.addEdge([2, 4, 7]);
  g.addEdge([3, 4, 9]);
  // Oluşturdugum g nesnesine addEdge fonksiyonu kullanılarak kenarlar ekledim.
  console.log(g.kruskal()); 
  // g.kruskal() yazarak bu grafa ait mst (Minimum Spanning Tree) hesapladım.
  